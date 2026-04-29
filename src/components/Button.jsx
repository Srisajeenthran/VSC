import { motion } from 'framer-motion';

export function Button({ children, className = '', variant = 'primary', ...props }) {
  const baseStyles = "px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-sky text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]",
    secondary: "glass text-white border-white/20 hover:bg-white/20",
    outline: "border-2 border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white",
    gold: "bg-brand-gold text-background shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, translateZ: 20 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
      />
    </motion.button>
  );
}
