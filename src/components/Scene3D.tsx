'use client';

import { Suspense, useRef, RefObject } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'; // Added useThree
import { useGLTF, Float, PerspectiveCamera, ContactShadows, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
    const { scene } = useGLTF('/models/abelrahman_avatar.glb', true);
    const { viewport } = useThree(); // Get the responsive viewport dimensions

    // Calculate a scale that is always a percentage of the container width
    // On large screens, we cap it at 2.5. On smaller ones, it shrinks with the width.
    const responsiveScale = Math.min(viewport.width * 0.55, 2.6);

    scene.traverse((node) => {
        if ((node as THREE.Mesh).isMesh) {
            const mesh = node as THREE.Mesh;
            mesh.material = new THREE.MeshStandardMaterial({
                color: 0x7e7e7e,
                roughness: 0.7,
                metalness: 0.4,
                flatShading: true,
            });
        }
    });

    return <primitive object={scene} scale={responsiveScale} position={[0, -2.2, 0]} />;
};

const Signature = () => {
    const texture = useTexture('/models/signature.svg');
    const { viewport } = useThree();

    // Scale the signature proportionally with the viewport
    const sigScale = Math.min(viewport.width * 0.4, 2.5);
    // Adjust position to stay at the bottom-left of the head regardless of scale
    const sigPosX = -viewport.width * 0.15;

    return (
        <Float speed={0} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh position={[sigPosX, -3.6, 0.8]} rotation={[0, 0, 0]}>
                <planeGeometry args={[sigScale, sigScale * 0.4]} />
                <meshStandardMaterial
                    map={texture}
                    transparent={true}
                    opacity={0.8}
                    side={THREE.DoubleSide}
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
            <directionalLight ref={lightRef} intensity={8} color="#E95420" castShadow />
            <spotLight position={[10, 10, -10]} angle={0.15} penumbra={1} intensity={150} color="#00ccff" />
            <pointLight position={[-10, 5, 5]} intensity={60} color="#ffffff" />
            <rectAreaLight width={10} height={10} intensity={0.5} position={[0, -5, 2]} color="#ffffff" />
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
                    <Float speed={0}><Model /></Float>
                    <Signature />
                    <ContactShadows opacity={0.6} scale={10} blur={2.5} far={4} resolution={256} color="#000000" />
                    <Rig mouse={mouse as RefObject<[number, number]>} />
                </Suspense>
            </Canvas>
        </div>
    );
}

useGLTF.preload('/models/abelrahman_avatar.glb');
