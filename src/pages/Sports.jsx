import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function Sports() {
  const sports = [
    { title: 'CRICKET', icon: '🏏', desc: 'District champions multiple times. 25 active players with dedicated coaching staff.', tag: '🏆 District Champions' },
    { title: 'FOOTBALL', icon: '⚽', desc: 'Active league participation with a strong youth development program across all age groups.', tag: '⚽ League Active' },
    { title: 'VOLLEYBALL', icon: '🏐', desc: 'Regional semi-finalists. Mixed and men\'s teams competing at inter-district level.', tag: '🥈 Regional SF' },
    { title: 'KABADDI', icon: '🤼', desc: 'Traditional sport with a powerhouse team. Known for aggressive raids and strong defense.', tag: '💪 Top Ranked' },
    { title: 'ATHLETICS', icon: '🏃', desc: 'Sprint, relay and field events. Members hold provincial records in track and field.', tag: '⚡ Record Holders' },
    { title: 'CARROM', icon: '🎯', desc: 'Indoor precision sport with a competitive team winning multiple zonal championships.', tag: '🎯 Zonal Winners' }
  ];

  const trophies = [
    { emoji: '🥇', label: 'District Cricket Cup', year: '2023' },
    { emoji: '🏆', label: 'Inter-Club Football', year: '2022' },
    { emoji: '🥇', label: 'Zonal Kabaddi', year: '2023' },
    { emoji: '🥈', label: 'Regional Volleyball', year: '2021' },
    { emoji: '🏅', label: 'Athletics Relay', year: '2022' },
    { emoji: '🥇', label: 'Carrom Zonal', year: '2023' },
    { emoji: '🏆', label: 'Best Club Award', year: '2022' }
  ];

  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-dark3">
      <main className="max-w-7xl mx-auto px-8 relative">
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="mb-20">
          <span className="text-blue font-sub font-bold text-xs tracking-[0.4em] uppercase mb-4 block">What We Play</span>
          <h1 className="text-6xl md:text-8xl font-bebas text-white leading-none mb-6">
            OUR <span className="text-gold">SPORTS</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-transparent rounded-full mb-8" />
          <p className="text-slate-400 text-lg font-sub font-medium max-w-xl">
            Hover over each card to explore our sports and team details.
          </p>
        </motion.div>

        {/* Sports Grid with Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {sports.map((sport, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-[300px] [perspective:1000px] cursor-pointer"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 bg-dark2 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-6 [backface-visibility:hidden]">
                  <span className="text-6xl drop-shadow-[0_0_20px_rgba(14,165,233,0.4)]">{sport.icon}</span>
                  <h3 className="text-3xl font-bebas text-white tracking-widest">{sport.title}</h3>
                  <span className="text-[10px] font-sub font-bold text-slate-500 tracking-widest uppercase">Hover to explore</span>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue/20 to-gold/10 border border-blue/40 rounded-2xl flex flex-col items-center justify-center p-8 text-center gap-4 [backface-visibility:hidden] [transform:rotateY(180deg)] backdrop-blur-xl">
                  <h3 className="text-2xl font-bebas text-gold tracking-wider">{sport.title}</h3>
                  <p className="text-sm font-sub text-slate-300 leading-relaxed">{sport.desc}</p>
                  <span className="px-4 py-1.5 bg-blue/20 text-blue font-sub font-bold text-[10px] rounded-full tracking-wider uppercase">
                    {sport.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trophy Cabinet with Perspective Tilt */}
        <motion.div 
          variants={fadeInUp} 
          initial="initial" 
          whileInView="whileInView"
          className="relative mb-40"
        >
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} className="w-full">
            <div className="bg-dark2 border border-white/10 rounded-[32px] p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <h2 className="text-xs font-sub font-bold text-gold tracking-[0.4em] uppercase text-center mb-12">🏆 Trophy Cabinet</h2>
                <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                  {trophies.map((trophy, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -8, backgroundColor: 'rgba(234, 179, 8, 0.1)', borderColor: 'rgba(234, 179, 8, 0.4)' }}
                      className="flex-shrink-0 flex flex-col items-center gap-3 p-6 min-w-[140px] bg-white/5 border border-white/10 rounded-2xl transition-all duration-300"
                    >
                      <span className="text-4xl">{trophy.emoji}</span>
                      <span className="text-[10px] font-sub font-bold text-slate-400 text-center leading-tight">
                        {trophy.label}
                      </span>
                      <span className="text-lg font-bebas text-gold tracking-widest">{trophy.year}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Hall of Fame */}
        <section className="relative">
          <div className="text-center mb-16">
            <span className="text-blue font-sub font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Our Icons</span>
            <h2 className="text-5xl font-bebas text-white tracking-widest">HALL OF <span className="text-gold">FAME</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'K. Sivanathan', role: 'Cricket Legend', year: '1996' },
              { name: 'M. Ramesh', role: 'Football Captain', year: '2005' },
              { name: 'S. Arul', role: 'All-Rounder', year: '2012' },
              { name: 'T. Vimal', role: 'Star Raider', year: '2018' }
            ].map((legend, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:border-gold/30 transition-all group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue/20 to-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center border border-white/10 text-3xl">👤</div>
                <h3 className="text-2xl font-bebas text-white tracking-widest mb-1 leading-none">{legend.name}</h3>
                <p className="text-[10px] font-sub font-bold text-blue uppercase tracking-widest mb-4">{legend.role}</p>
                <div className="text-gold font-bebas text-lg tracking-widest">EST. {legend.year}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

