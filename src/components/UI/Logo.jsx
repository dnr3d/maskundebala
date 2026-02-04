export default function Logo({ className = "", width = 100, height = "auto" }) {
    return (
        <img
            src="/logo.png"
            alt="Logo"
            width={width}
            height={height}
            className={className}
            style={{ objectFit: 'contain', maxWidth: '100%' }}
        />
    );
}
