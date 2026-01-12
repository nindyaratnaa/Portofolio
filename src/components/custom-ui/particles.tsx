import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
    Cpu, 
    Zap, 
    Database, 
    Wifi, 
    Shield, 
    Binary,
    Hexagon,
    Triangle
} from "lucide-react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    icon: JSX.Element;
    rotation: number;
    type: 'icon' | 'shape';
}

export default function Particles() {
    const [particles, setParticles] = useState<Particle[]>([]);

    const icons = [
        <Cpu className="w-6 h-6" />,
        <Zap className="w-6 h-6" />,
        <Database className="w-6 h-6" />,
        <Wifi className="w-6 h-6" />,
        <Shield className="w-6 h-6" />,
        <Binary className="w-6 h-6" />,
        <Hexagon className="w-6 h-6" />,
        <Triangle className="w-6 h-6" />
    ];

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 12 + 8,
            duration: Math.random() * 25 + 20,
            delay: Math.random() * 8,
            icon: icons[Math.floor(Math.random() * icons.length)],
            rotation: Math.random() * 360,
            type: Math.random() > 0.3 ? 'icon' : 'shape' as 'icon' | 'shape'
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute flex items-center justify-center"
                    style={{
                        width: particle.size * 2,
                        height: particle.size * 2,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -60, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0.2, 0.6, 0.2],
                        rotate: [particle.rotation, particle.rotation + 360],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {particle.type === 'icon' ? (
                        <div className="text-primary/30 dark:text-primary/50 sci-fi-glow">
                            {particle.icon}
                        </div>
                    ) : (
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary/40 to-accent/40 dark:from-primary/60 dark:to-accent/60 dark:neon" />
                    )}
                </motion.div>
            ))}
        </div>
    );
} 