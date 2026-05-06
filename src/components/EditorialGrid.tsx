import { motion } from 'motion/react';

export default function EditorialGrid() {
  return (
    <section className="px-6 md:px-16 py-32 grid grid-cols-12 gap-8 items-center max-w-screen-2xl mx-auto">
      <div className="col-span-12 lg:col-span-5 mb-16 lg:mb-0">
        <span className="block font-ui text-[11px] uppercase tracking-[0.25em] text-brand-charcoal/50 mb-6 font-bold">
          The Philosophy
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-brand-charcoal mb-8 leading-tight">
          Objects that mirror the quietude of intentional living.
        </h2>
        <p className="font-body text-xl text-brand-charcoal/70 leading-relaxed max-w-lg mb-10">
          We believe in the resonance of the tangible. In a world increasingly ephemeral, our collection prioritizes the physical weight of quality craftsmanship and the enduring beauty of natural materials. Every piece in Archive Volume 04 is selected for its ability to age with grace and purpose.
        </p>
        <a 
          href="#" 
          className="inline-block font-ui text-[12px] uppercase tracking-[0.2em] text-brand-charcoal border-b border-brand-charcoal pb-1 hover:border-transparent transition-all"
        >
          Read the full manifesto
        </a>
      </div>

      <div className="col-span-12 lg:col-span-6 lg:col-start-7 relative">
        <div className="aspect-[3/4] bg-brand-sand overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
            alt="Craftsmanship detail" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating Quote Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute -bottom-10 -left-6 md:-left-12 bg-white p-8 md:p-12 max-w-xs border border-brand-charcoal/5 shadow-2xl hidden md:block"
        >
          <p className="font-body italic text-lg md:text-xl text-brand-charcoal leading-relaxed">
            "Design is not just what it looks like; it's the tactile resonance of a life well-lived."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
