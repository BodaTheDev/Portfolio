export const CyberGlitchText = ({ children }: { children: string }) => {
    return (
        <span
            className="fck glitch-layer"
            data-text={children}
        >
            {children}
        </span>
    );
};
