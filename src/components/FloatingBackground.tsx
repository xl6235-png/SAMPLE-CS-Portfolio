import { motion } from 'motion/react';

export default function FloatingBackground() {
  const shapes = [...Array(6)];

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {shapes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [Math.random() * 100 - 50 + '%', Math.random() * 100 - 50 + '%'],
            y: [Math.random() * 100 - 50 + '%', Math.random() * 100 - 50 + '%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 400 + 200 + 'px',
            height: Math.random() * 400 + 200 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: i % 2 === 0 ? '#3b82f6' : i % 3 === 0 ? '#8b5cf6' : '#ec4899',
          }}
        />
      ))}
    </div>
  );
}
