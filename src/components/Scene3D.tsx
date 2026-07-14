'use client';

import { Suspense, useRef, RefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, PerspectiveCamera, ContactShadows, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
    const { scene } = useGLTF('/models/abelrahman_avatar.glb', true);

    scene.traverse((node) => {
        if ((node as THREE.Mesh).isMesh) {
            const mesh = node as THREE.Mesh;
            mesh.material = new THREE.MeshStandardMaterial({
                color: 0x7e7e7e,
                roughness: 0.7, // Lowered slightly to catch specular highlights from our new lights
                metalness: 0.4, // Increased to interact with the rim lights
                flatShading: true,
            });
        }
    });

    return <primitive object={scene} scale={2.5} position={[0, -2.2, 0]} />;
};

const Signature = () => {
    // Loading your SVG as a texture
    const texture = useTexture('/models/signature.svg');

    return (
        <Float speed={0} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh position={[-1.1, -3.6, 0.8]} rotation={[0, 0, 0]}>
                <planeGeometry args={[2.5, 1]} />
                <meshStandardMaterial
                    map={texture}
                    transparent={true}
                    opacity={0.8}
                    side={THREE.DoubleSide}
                    // This allows the Arancio Xanto light to illuminate your signature
                    emissive="#E95420"
                    emissiveIntensity={0.5}
                />
            </mesh>
        </Float>
    );
};

const Rig = ({ mouse }: { mouse: RefObject<[number, number]> }) => {
    const lightRef = useRef<THREE.DirectionalLight>(null);

    useFrame(() => {
        if (lightRef.current && mouse.current) {
            const tx = mouse.current[0] * 25;
            const ty = mouse.current[1] * 15;
            const tz = 10 - Math.abs(mouse.current[0] * 4);

            lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, tx, 0.01);
            lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, ty, 0.01);
            lightRef.current.position.z = THREE.MathUtils.lerp(lightRef.current.position.z, tz, 0.01);
            lightRef.current.lookAt(0, 0, 0);
        }
    });

    return (
        <>
            {/* 1. THE REACTIVE PROBE (Orange - Follows Mouse) */}
            <directionalLight
                ref={lightRef}
                intensity={8}
                color="#E95420"
                castShadow
            />

            {/* 2. THE RIM LIGHT (Cool Cyan/White - Back Right) */}
            {/* This creates the "halo" effect on the edges of the head */}
            <spotLight
                position={[10, 10, -10]}
                angle={0.15}
                penumbra={1}
                intensity={150}
                color="#00ccff"
            />

            {/* 3. THE KEY LIGHT (Warm White - Front Left) */}
            {/* Provides the main structural volume */}
            <pointLight
                position={[-10, 5, 5]}
                intensity={60}
                color="#ffffff"
            />

            {/* 4. THE FILL LIGHT (Bottom Up) */}
            {/* Softens the shadows under the chin/nose */}
            <rectAreaLight
                width={10}
                height={10}
                intensity={0.5}
                position={[0, -5, 2]}
                color="#ffffff"
            />

            <ambientLight intensity={0.2} />
        </>
    );
};

export default function Scene3D() {
    const mouse = useRef<[number, number]>([0, 0]);

    return (
        <div className="w-full h-full">
            <Canvas
                shadows={{ type: THREE.PCFShadowMap }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.2
                }}
                onPointerMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
                    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
                    mouse.current = [x, y];
                }}
            >
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, -1.9, 8]} fov={45} />

                    <Float speed={0}>
                        <Model />
                    </Float>
                    <Signature />
                    <ContactShadows
                        opacity={0.6}
                        scale={10}
                        blur={2.5}
                        far={4}
                        resolution={256}
                        color="#000000"
                    />

                    <Rig mouse={mouse as RefObject<[number, number]>} />
                </Suspense>
            </Canvas>
        </div>
    );
}

useGLTF.preload('/models/abelrahman_avatar.glb');
