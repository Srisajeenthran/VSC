import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function SocialService() {
  const stats = [
    { label: 'Trees Planted', value: '2,000+', icon: '🌱' },
    { label: 'Lives Impacted', value: '15,000+', icon: '🤝' },
    { label: 'Active Volunteers', value: '120+', icon: '🧡' },
    { label: 'Annual Projects', value: '15+', icon: '📋' }
  ];

  const timelineData = [
    { 
      year: '2023 — ONGOING', 
      title: 'Blood Donation Drive', 
      desc: 'Annual blood donation camps organized in partnership with local hospitals. 200+ units collected each year.',
      icon: '🩸'
    },
    { 
      year: '2021', 
      title: 'Flood Relief Operation', 
      desc: 'Mobilized 80+ volunteers for relief operations. Distributed essential supplies to 500+ affected families.',
      icon: '🌊'
    },
    { 
      year: '2020 — ONGOING', 
      title: 'Student Scholarship Program', 
      desc: 'Annual scholarships awarded to deserving students from underprivileged families in the Natpiddimunai area.',
      icon: '📚'
    },
    { 
      year: '2022', 
      title: 'Free Medical Camp', 
      desc: 'Partnered with medical professionals to provide free health check-ups, consultations, and medicines to 300+ residents.',
      icon: '🏥'
    },
    { 
      year: '2023', 
      title: 'Green Natpiddimunai', 
      desc: 'Community clean-up and tree-planting initiative. Planted 500+ trees across the village and coastal areas.',
      icon: '🌱'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-dark">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <main className="max-w-7xl mx-auto px-8 relative">
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center mb-32">
          <span className="text-blue font-sub font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Community First</span>
          <h1 className="text-7xl md:text-9xl font-bebas text-white leading-none mb-6">
            SOCIAL <span className="text-gold">SERVICE</span>
          </h1>
          <p className="text-slate-400 text-lg font-sub font-medium max-w-2xl mx-auto leading-relaxed">
            Beyond the field, VSC is a heartbeat of the community. We carry the torch of service in every neighborhood we touch.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-white/5 border border-white/10 rounded-[40px] text-center hover:border-blue/30 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-4xl font-bebas text-white mb-2 tracking-widest">{stat.value}</div>
              <div className="text-[10px] font-sub font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue via-gold to-transparent hidden md:block" />
          
          <div className="space-y-24">
            {timelineData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <div className={`p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-xl hover:border-gold/40 transition-all duration-500 group relative overflow-hidden ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 bg-gold/5 blur-3xl`} />
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <span className="text-gold font-bebas text-xl tracking-widest mb-4 block">{item.year}</span>
                    <h3 className="text-3xl font-bebas text-white tracking-widest mb-4">{item.title}</h3>
                    <p className="text-slate-400 font-sub text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 w-12 h-12 flex items-center justify-center hidden md:flex">
                  <div className="w-4 h-4 bg-gold rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)] border-4 border-dark" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

