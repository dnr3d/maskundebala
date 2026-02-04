import { motion } from 'framer-motion';

export default function FloatingShapes() {
    const shapes = [
        // Top Left - Circle
        {
            id: 1,
            type: 'circle',
            style: { top: '10%', left: '5%', width: 100, height: 100 },
            animate: { y: [0, 20, 0], x: [0, 10, 0], rotate: [0, 10, 0] }
        },
        // Bottom Left - Rectangle
        {
            id: 2,
            type: 'rect',
            style: { bottom: '20%', left: '10%', width: 150, height: 80, borderRadius: 20 },
            animate: { y: [0, -30, 0], x: [0, 20, 0], rotate: [0, -5, 0] }
        },
        // Top Right (Far corner) - Blob
        {
            id: 3,
            type: 'blob',
            style: { top: '15%', right: '5%', width: 120, height: 120, borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' },
            animate: { y: [0, 20, 0], x: [0, -10, 0], rotate: [0, 45, 0] }
        },
        // Bottom Right - Pill
        {
            id: 4,
            type: 'pill',
            style: { bottom: '15%', right: '10%', width: 80, height: 140, borderRadius: 40 },
            animate: { y: [0, -25, 0], x: [0, -15, 0], rotate: [0, 5, 0] }
        }
    ];

    return (
        <div className="floating-shapes-container">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className="glass-shape"
                    style={shape.style}
                    animate={shape.animate}
                    transition={{
                        duration: 8 + Math.random() * 5, // Random duration 8-13s
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: "easeInOut"
                    }}
                />
            ))}

            <style jsx="true">{`
        .floating-shapes-container {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 5; /* Behind Hero Content (10) but above BG */
          overflow: hidden;
        }

        .glass-shape {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
        }
      `}</style>
        </div>
    );
}
