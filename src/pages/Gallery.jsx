import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Sports', 'Social', 'Events'];

  const images = [
    { title: 'Cricket Finals', cat: 'Sports', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80', size: 'large' },
    { title: 'Blood Donation', cat: 'Social', img: 'https://images.unsplash.com/photo-1615461066841-6116ecaabb04?auto=format&fit=crop&q=80', size: 'small' },
    { title: 'Annual Meet', cat: 'Events', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80', size: 'medium' },
    { title: 'Football Practice', cat: 'Sports', img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80', size: 'small' },
    { title: 'Tree Planting', cat: 'Social', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80', size: 'medium' },
    { title: 'Trophy Ceremony', cat: 'Events', img: 'https://images.unsplash.com/photo-1578267131143-2a784620ca12?auto=format&fit=crop&q=80', size: 'large' },
    { title: 'Volleyball Match', cat: 'Sports', img: 'https://images.unsplash.com/photo-1592656670411-dc91a9dec36b?auto=format&fit=crop&q=80', size: 'small' },
    { title: 'School Mentorship', cat: 'Social', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80', size: 'medium' }
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.cat === filter);

  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-dark">
      <main className="max-w-7xl mx-auto px-8 relative">
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center mb-20">
          <span className="text-blue font-sub font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Visual History</span>
          <h1 className="text-6xl md:text-8xl font-bebas text-white leading-none mb-6">
            OUR <span className="text-gold">GALLERY</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-transparent rounded-full mb-8 mx-auto" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full font-sub font-bold text-[10px] tracking-widest uppercase transition-all duration-300 ${
                filter === cat 
                  ? 'bg-blue text-white shadow-[0_10px_20px_rgba(14,165,233,0.3)]' 
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          <AnimatePresence>
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl break-inside-avoid cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark2 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-all duration-500 z-10" />
                <img 
                  src={img.img} 
                  alt={img.title} 
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <span className="text-gold font-sub font-bold text-[8px] tracking-[0.3em] uppercase mb-2 block">{img.cat}</span>
                  <h3 className="text-xl font-bebas text-white tracking-widest leading-none">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}

