import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../components/ParticleBackground';
import clubLogo from '../assets/Club Logo.jpeg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Landing() {
  return (
    <div className="relative">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-dark">
        <ParticleBackground />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-gold blur-[150px] rounded-full" 
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-50">
        <div className="max-w-7xl mx-auto px-8 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            {/* Logo with Spinning Rings */}
            <div className="relative mb-16 mx-auto w-40 h-40">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-blue/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border-2 border-dashed border-gold/20 rounded-full"
              />
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(14,165,233,0.3)] bg-dark relative z-10"
              >
                <img 
                  src={clubLogo} 
                  alt="VSC Logo" 
                  className="w-full h-full object-cover transform scale-110"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, tracking: "0.2em" }}
                animate={{ opacity: 1, tracking: "0.5em" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-blue font-sub font-bold text-xs uppercase block"
              >
                Established 1994 • Natpiddimunai
              </motion.span>
              <h1 className="text-7xl md:text-[120px] font-bebas text-white leading-[0.85] tracking-tighter">
                VIVEKANANDA <br/>
                <span className="text-gold filter drop-shadow-[0_0_30px_rgba(234,179,8,0.2)]">SPORTS CLUB</span>
              </h1>
              <p className="text-slate-400 font-sub text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
                "Strength is Life, Weakness is Death." — Swami Vivekananda
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/sports">
                <button className="px-12 py-5 bg-gradient-to-r from-blue to-blue-700 rounded-xl font-sub font-bold text-white tracking-widest text-xs uppercase hover:shadow-[0_20px_40px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all">
                  Explore Hub
                </button>
              </Link>
              <Link to="/events">
                <button className="px-12 py-5 border border-white/10 backdrop-blur-xl rounded-xl font-sub font-bold text-white tracking-widest text-xs uppercase hover:bg-white/5 hover:border-gold/30 transition-all">
                  Join Us
                </button>
              </Link>
            </div>

            {/* Scroll Indicator Moved Here */}
            <div className="flex flex-col items-center gap-3 mt-16 opacity-50">
              <span className="text-[10px] font-sub text-slate-500 uppercase tracking-[0.4em]">Scroll</span>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-px h-12 bg-gradient-to-b from-blue to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-blue font-sub font-bold uppercase tracking-[0.4em] text-xs">Our Legacy</span>
                <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-widest leading-none">Heritage <br/>& <span className="text-gold">Mission</span></h2>
              </div>
              
              <div className="h-1 w-24 bg-gradient-to-r from-gold to-transparent rounded-full" />
              
              <div className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed font-sub">
                  Founded on the principles of Swami Vivekananda, our club has been a cornerstone of local excellence since 1994. We believe that a strong body is the temple for a strong mind.
                </p>
                <p className="text-slate-400 text-base leading-relaxed font-sub">
                  Whether it's training international-level cricketers or organizing disaster relief, our members carry the torch of discipline and empathy across every field of play.
                </p>
              </div>

              <Link to="/social-service">
                <button className="group flex items-center gap-4 text-gold font-sub font-bold tracking-widest text-xs hover:text-white transition-colors uppercase pt-4">
                  Explore Our Impact
                  <span className="w-8 h-px bg-gold group-hover:w-12 transition-all" />
                </button>
              </Link>
            </motion.div>
            
            <div className="lg:col-span-7 grid grid-cols-2 gap-6 md:gap-8">
              {[
                { label: 'Years of Legacy', value: '30+', color: 'gold' },
                { label: 'Active Athletes', value: '500+', color: 'blue' },
                { label: 'Lives Impacted', value: '15k', color: 'blue' },
                { label: 'Major Titles', value: '42', color: 'gold' }
              ].map((stat, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                   className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:border-blue/30 transition-all duration-500 group relative overflow-hidden backdrop-blur-xl"
                >
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue/5 blur-3xl group-hover:bg-blue/10 transition-colors" />
                  <h3 className="text-5xl md:text-6xl font-bebas text-white mb-3 tracking-widest group-hover:scale-110 transition-transform duration-500">{stat.value}</h3>
                  <p className={`text-[10px] font-sub font-black uppercase tracking-[0.3em] ${stat.color === 'gold' ? 'text-gold' : 'text-blue'}`}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Sports Access */}
      <section className="py-40 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-blue font-sub font-bold uppercase tracking-[0.4em] text-xs">Athletic Excellence</span>
              <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-widest">Elite <span className="text-gold">Sports</span></h2>
            </motion.div>
            
            <Link to="/sports">
              <motion.button 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="px-10 py-4 border border-white/10 rounded-full text-white font-sub font-bold text-xs tracking-widest flex items-center gap-4 hover:bg-white/5 hover:border-blue/50 transition-all duration-500 uppercase"
              >
                View Hub <span className="w-8 h-[1px] bg-blue" />
              </motion.button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Cricket Academy', 
                desc: 'Professional turf wickets and modern training facilities since 1994.',
                icon: '🏏'
              },
              { 
                title: 'United Football', 
                desc: 'Elite local division participation and youth development programs.',
                icon: '⚽'
              },
              { 
                title: 'Indoor Sports', 
                desc: 'Dedicated facilities for Table Tennis, Chess and martial arts.',
                icon: '🏸'
              }
            ].map((sport, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 bg-white/5 border border-white/10 rounded-[32px] hover:border-gold/30 transition-all duration-500 relative"
              >
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform">{sport.icon}</div>
                <h4 className="font-bebas text-3xl text-white tracking-widest mb-4">{sport.title}</h4>
                <p className="text-slate-400 font-sub text-sm leading-relaxed mb-8">
                  {sport.desc}
                </p>
                <Link to="/sports" className="inline-flex items-center gap-3 text-gold font-sub font-bold text-[10px] tracking-widest uppercase hover:text-white transition-colors">
                  Details <span className="w-6 h-px bg-gold group-hover:w-10 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-20 bg-gradient-to-br from-blue/10 to-gold/10 border border-white/10 rounded-[60px] relative overflow-hidden backdrop-blur-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
            <span className="text-gold font-sub font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Be a Part of History</span>
            <h2 className="font-bebas text-6xl md:text-8xl text-white tracking-widest mb-10 leading-none">Ready to <span className="text-blue">Join</span> Us?</h2>
            <p className="text-slate-300 font-sub text-lg max-w-2xl mx-auto mb-12">
              Join Natpiddimunai's most prestigious sports club and contribute to a legacy of excellence and social service.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/events">
                <button className="px-12 py-5 bg-gradient-to-r from-blue to-blue-700 text-white rounded-xl font-sub font-bold tracking-widest text-xs uppercase hover:shadow-[0_20px_40px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all">
                  Get Membership
                </button>
              </Link>
              <Link to="/social-service">
                <button className="px-12 py-5 border border-white/20 text-white rounded-xl font-sub font-bold tracking-widest text-xs uppercase hover:bg-white/5 transition-all">
                  Volunteer
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
