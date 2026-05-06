import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const relatedProducts = [
  {
    name: "The Lucid Frame",
    material: "Hand-finished acetate",
    price: "$275",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "The Vessel No. 04",
    material: "Full-grain calfskin",
    price: "$850",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "The Monograph Set",
    material: "Recycled fiber paper",
    price: "$125",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "The Linen Carry",
    material: "Organic raw flax",
    price: "$240",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=600"
  }
];

export default function SecondaryContent() {
  return (
    <>
      {/* Testimonial */}
      <section className="py-40 px-6 border-y border-brand-charcoal/5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-10 h-10 text-brand-charcoal/10 mx-auto mb-12" />
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-3xl md:text-5xl italic text-brand-charcoal leading-snug mb-16"
          >
            "Archive doesn't just sell products; they curate a mood. Every item feels like a piece of history that I'm only just discovering."
          </motion.blockquote>
          <div className="space-y-2">
            <span className="block font-ui text-[12px] uppercase tracking-[0.2em] text-brand-charcoal font-bold">Elena Moretti</span>
            <span className="block font-ui text-[10px] uppercase tracking-[0.3em] text-brand-charcoal/40 font-bold">Editor-in-Chief, Solstice</span>
          </div>
        </div>
      </section>

      {/* Recommended Gallery */}
      <section className="py-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-display text-4xl text-brand-charcoal">Also Love</h2>
            <a href="#" className="font-ui text-[12px] uppercase tracking-[0.2em] text-brand-sage border-b border-brand-sage pb-1 hover:text-brand-charcoal hover:border-brand-charcoal transition-colors font-bold">
              View Collection
            </a>
          </div>

          <div className="flex gap-8 overflow-x-auto no-scrollbar pb-12 snap-x">
            {relatedProducts.map((product, idx) => (
              <motion.div 
                key={idx}
                className="min-w-[300px] md:min-w-[420px] snap-start group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="aspect-[4/5] bg-brand-sand overflow-hidden mb-8 relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/5 transition-colors" />
                </div>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="font-ui text-[13px] uppercase tracking-[0.15em] text-brand-charcoal font-bold">{product.name}</h4>
                    <p className="font-body italic text-brand-charcoal/60">{product.material}</p>
                  </div>
                  <span className="font-ui text-[13px] text-brand-charcoal/40 font-bold">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
