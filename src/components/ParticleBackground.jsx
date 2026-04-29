import { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = ''; // Clear existing
    
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const isGold = Math.random() > 0.6;
      
      p.style.position = 'absolute';
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.borderRadius = '50%';
      p.style.left = `${Math.random() * 100}%`;
      p.style.background = isGold ? 'rgba(234, 179, 8, 0.6)' : 'rgba(14, 165, 233, 0.6)';
      p.style.top = '100%';
      
      const duration = Math.random() * 15 + 10;
      const delay = -Math.random() * 20;
      
      p.animate([
        { transform: `translateY(0) rotate(0deg)`, opacity: 0, top: '100%' },
        { opacity: 1, offset: 0.1 },
        { opacity: 0.6, offset: 0.9 },
        { transform: `translateY(-110vh) rotate(720deg)`, opacity: 0, top: '100%' }
      ], {
        duration: duration * 1000,
        delay: delay * 1000,
        iterations: Infinity,
        easing: 'linear'
      });
      
      container.appendChild(p);
    }
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" />;
}
