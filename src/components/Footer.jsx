import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SocialIcon = ({ children, href }) => (
  <a 
    href={href} 
    className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:border-blue hover:text-blue hover:bg-blue/5 hover:-translate-y-1.5 transition-all duration-500 group shadow-lg"
  >
    {children}
  </a>
);

export function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[40%] h-[300px] bg-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30%] h-[200px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Top Divider Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue/20 to-gold/20 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl">
                <span className="text-3xl">🕉️</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bebas text-white tracking-widest leading-none">
                  VIVEKANANDA <span className="text-gold">SC</span>
                </span>
                <span className="text-[10px] font-sub font-bold text-blue tracking-[0.5em] uppercase mt-2">Elite Digital Hub</span>
              </div>
            </div>
            
            <div className="space-y-8 pr-4">
              <div className="relative pl-6 border-l-2 border-gold/30">
                <p className="text-slate-300 font-sub text-xl leading-relaxed italic">
                  "Arise, awake, and stop not until the goal is reached."
                </p>
              </div>
              
              <p className="text-slate-400 font-sub text-base leading-relaxed">
                Since 1994, Vivekananda Sports Club has been the heartbeat of Natpiddimunai's athletic and social progress, fostering a legacy of strength and service.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <SocialIcon href="#"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="font-bebas text-white text-xl tracking-widest uppercase border-b border-gold/20 pb-2 inline-block">
              Explore <span className="text-gold">Site</span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Sports Hub', path: '/sports' },
                { name: 'Social Impact', path: '/social-service' },
                { name: 'Memory Gallery', path: '/gallery' },
                { name: 'Latest Events', path: '/events' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 font-sub text-sm flex items-center gap-4 group"
                  >
                    <span className="w-2 h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-10">
            <h4 className="font-bebas text-white text-xl tracking-widest uppercase border-b border-blue/20 pb-2 inline-block">
              Connect <span className="text-blue">With Us</span>
            </h4>
            <div className="space-y-6">
              <p className="text-slate-400 font-sub text-sm leading-relaxed">
                Stay tuned for tournament announcements and club activities. Join our digital circle today.
              </p>
              <div className="relative group">
                <input 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white font-sub text-sm outline-none focus:border-blue/50 focus:bg-blue/5 transition-all duration-500"
                  placeholder="Enter your email..."
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue to-blue-600 text-white rounded-xl font-sub font-bold text-[10px] tracking-widest uppercase hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-slate-500 font-sub text-[10px] tracking-widest uppercase">
              © 2024 VIVEKANANDA SPORTS CLUB. SINCE 1994.
            </p>
            <p className="text-slate-600 font-sub text-[9px] tracking-wider uppercase">
              Natpiddimunai, Sri Lanka · Reg No: DS/ST/SS/C/04
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-6 text-slate-500 font-sub text-[10px] tracking-widest uppercase">
              <a href="#" className="hover:text-blue transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Governance</a>
            </div>
            
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            
            <span className="text-slate-500 font-sub text-[10px] tracking-widest uppercase">
              Design & Develop By{" "}
              <a
                href="https://sris-portfolio-six.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors underline underline-offset-4 decoration-gold/30 hover:decoration-gold"
              >
                Sri
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}



