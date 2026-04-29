import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/sports' },
    { name: 'Social Service', path: '/social-service' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] bg-dark/80 backdrop-blur-[20px] border-b border-white/10 shadow-[0_20px_50px_rgba(10,15,30,0.4)] ">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 md:px-8">
        <Link to="/" className="flex items-center gap-3 group relative z-[110]">
          <div className="w-10 h-10 bg-gradient-to-br from-blue to-gold rounded-full flex items-center justify-center font-bebas text-dark text-sm">
            VSC
          </div>
          <span className="text-lg md:text-xl font-bebas tracking-widest bg-gradient-to-r from-blue to-gold bg-clip-text text-transparent">VIVEKANANDA SC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`font-sub text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group py-2 ${
                location.pathname === link.path ? 'text-gold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/events" className="hidden sm:block">
            <button className="bg-gradient-to-br from-blue to-blue-700 text-white px-6 md:px-8 py-3 rounded-md font-sub text-xs font-bold tracking-widest hover:shadow-[0_10px_30px_rgba(14,165,233,0.4)] transition-all">
              JOIN US
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-[110] bg-white/5 rounded-lg border border-white/10"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full block transition-transform"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-white rounded-full block transition-opacity"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full block transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-dark/98 backdrop-blur-[50px] z-[100] lg:hidden flex flex-col items-center justify-between p-8 py-24"
          >
            {/* Background Decorative elements */}
            <div className="absolute top-[20%] -left-20 w-80 h-80 bg-blue/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] -right-20 w-80 h-80 bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

            <nav className="flex flex-col items-center justify-center gap-6 w-full relative z-10 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link 
                    to={link.path}
                    className={`text-3xl font-bebas tracking-[0.3em] uppercase transition-all duration-300 block py-3 ${
                      location.pathname === link.path ? 'text-gold' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="w-full max-w-[240px] relative z-10 pb-8"
            >
              <Link to="/events" className="w-full">
                <button className="w-full bg-gradient-to-br from-blue to-blue-700 text-white py-4 rounded-xl font-sub text-xs font-bold tracking-widest shadow-2xl shadow-blue/20 uppercase">
                  Join the Club
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
