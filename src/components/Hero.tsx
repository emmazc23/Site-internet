import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex flex-col justify-center px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0 scale-105">
        <img 
          src="https://images.unsplash.com/photo-1512418490979-92798ccc13b0?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury travel essentials" 
          className="w-full h-full object-cover filter brightness-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-beige/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block font-ui text-[12px] uppercase tracking-[0.3em] text-brand-charcoal mb-6 font-bold"
        >
          Volume 04 — Essentialism
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-8xl text-brand-charcoal leading-[1.05] mb-10"
        >
          Refined Utility for the <br />
          <span className="italic font-normal">Modern Nomad.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-4"
        >
          <button className="bg-brand-charcoal text-white px-10 py-5 font-ui text-[12px] uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
            Explore The Edit
          </button>
        </motion.div>
      </div>

      {/* Vertical Side Text */}
      <div className="absolute right-6 bottom-0 hidden lg:block origin-bottom-right -rotate-90 translate-y-[-100%]">
        <p className="font-ui text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/40 whitespace-nowrap">
          Archival Journal & Shop • Since 2021
        </p>
      </div>

      {/* Featured Overlay */}
      <div className="absolute bottom-12 right-6 md:right-16 z-20 hidden md:block max-w-xs border-l border-brand-charcoal/20 pl-6 py-4">
        <p className="font-ui text-[11px] text-brand-charcoal/50 uppercase tracking-widest mb-2 font-bold">Now Featured</p>
        <p className="font-body text-xl italic text-brand-charcoal/80 leading-snug">
          The artisanal canvas collection, reimagined for seasonal transitions.
        </p>
      </div>
    </section>
  );
}
