import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-3 mt-4">
      {[
        { label: 'Days', val: timeLeft.d },
        { label: 'Hrs', val: timeLeft.h },
        { label: 'Min', val: timeLeft.m },
        { label: 'Sec', val: timeLeft.s }
      ].map((unit, i) => (
        <div key={i} className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2 text-center">
          <div className="text-xl font-bebas text-blue leading-none">{unit.val}</div>
          <div className="text-[8px] font-sub font-bold text-slate-500 uppercase tracking-widest">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}

export function Events() {
  const events = [
    { name: 'District Cricket Cup', sport: 'Cricket', day: '15', mon: 'JUN', date: '2025-06-15', location: 'Natpiddimunai Ground' },
    { name: 'Inter-Club Football', sport: 'Football', day: '22', mon: 'JUN', date: '2025-06-22', location: 'VSC Sports Complex' },
    { name: 'Blood Donation Camp', sport: 'Social', day: '05', mon: 'JUL', date: '2025-07-05', location: 'Community Hall' },
    { name: 'Volleyball Open', sport: 'Volleyball', day: '18', mon: 'JUL', date: '2025-07-18', location: 'Indoor Stadium' }
  ];

  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-dark3">
      <main className="max-w-7xl mx-auto px-8 relative">
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="mb-20">
          <span className="text-blue font-sub font-bold text-xs tracking-[0.4em] uppercase mb-4 block">What's Coming</span>
          <h1 className="text-6xl md:text-8xl font-bebas text-white leading-none mb-6">
            UPCOMING <span className="text-gold">EVENTS</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-transparent rounded-full mb-8" />
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {events.map((ev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark2 border border-white/10 rounded-3xl overflow-hidden group hover:border-blue/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-start">
                <div className="bg-gradient-to-br from-blue to-blue-700 rounded-xl p-3 text-center min-w-[60px]">
                  <div className="text-2xl font-bebas text-white leading-none">{ev.day}</div>
                  <div className="text-[10px] font-sub font-bold text-white/80 uppercase tracking-widest">{ev.mon}</div>
                </div>
                <span className="px-3 py-1 bg-gold/15 text-gold font-sub font-bold text-[10px] rounded-full tracking-widest uppercase border border-gold/20">
                  {ev.sport}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bebas text-white tracking-wider mb-2">{ev.name}</h3>
                <p className="text-xs font-sub text-slate-500 mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span> {ev.location}
                </p>
                <Countdown targetDate={ev.date} />
                <button className="w-full mt-6 py-3 bg-gradient-to-br from-blue to-blue-700 text-white font-sub font-bold text-xs tracking-widest rounded-xl hover:shadow-[0_10px_20px_rgba(14,165,233,0.4)] transition-all uppercase">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact/Join Form section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue/5 blur-3xl" />
            <h2 className="text-5xl font-bebas text-white tracking-widest mb-8">JOIN THE <span className="text-gold">CLUB</span></h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-sub outline-none focus:border-blue transition-all" placeholder="Full Name" />
                <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-sub outline-none focus:border-blue transition-all" placeholder="Email Address" />
              </div>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-sub outline-none focus:border-blue transition-all">
                <option value="" className="bg-dark2">Select Sport Interest</option>
                <option className="bg-dark2">Cricket</option>
                <option className="bg-dark2">Football</option>
                <option className="bg-dark2">Social Service</option>
              </select>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-sub outline-none focus:border-blue transition-all min-h-[150px]" placeholder="Tell us about yourself..." />
              <button className="w-full py-5 bg-gold text-dark font-sub font-bold tracking-[0.2em] rounded-2xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.4)] hover:-translate-y-1 transition-all uppercase">
                Submit Application
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue/10 to-transparent border border-blue/20 rounded-[40px] p-12 backdrop-blur-xl">
              <h3 className="text-3xl font-bebas text-white tracking-widest mb-8">MEMBERSHIP <span className="text-blue">PERKS</span></h3>
              <div className="space-y-6">
                {[
                  { icon: '🛡️', title: 'Professional Coaching', desc: 'Access to district-level certified coaches.' },
                  { icon: '🏟️', title: 'Elite Facilities', desc: 'Priority access to turf wickets and equipment.' },
                  { icon: '👕', title: 'Official Kit', desc: 'Custom club jerseys and athletic gear.' },
                  { icon: '🎖️', title: 'Legacy Access', desc: 'Invitations to all state-level tournaments.' }
                ].map((perk, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">{perk.icon}</div>
                    <div>
                      <h4 className="text-white font-bebas text-xl tracking-widest leading-none mb-2">{perk.title}</h4>
                      <p className="text-slate-400 font-sub text-xs">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl hover:border-blue/40 transition-all duration-500">
               <h3 className="text-2xl font-bebas text-white tracking-widest mb-8">FIND <span className="text-gold">US</span></h3>
               <div className="space-y-8">
                 {[
                   { icon: '📍', label: 'Address', val: 'Vivekananda Sports Club, Natpiddimunai, Sri Lanka' },
                   { icon: '📞', label: 'Phone', val: '+94 XX XXX XXXX' },
                   { icon: '📧', label: 'Email', val: 'vsc@natpiddimunai.lk' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-6">
                     <div className="w-12 h-12 bg-blue/10 border border-blue/20 rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
                     <div>
                       <div className="text-[10px] font-sub font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                       <div className="text-white font-sub text-sm">{item.val}</div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

