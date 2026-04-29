import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export function GlassCard({ children, className = '', tiltEnable = true, ...props }) {
  const content = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );

  if (!tiltEnable) return content;

  return (
    <Tilt
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#ffffff"
      glarePosition="all"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      transitionSpeed={1500}
      className="h-full"
    >
      {content}
    </Tilt>
  );
}
