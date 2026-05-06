import { motion } from 'motion/react';
import { ShoppingBag, Menu, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-beige/80 backdrop-blur-md border-b border-brand-charcoal/5 px-6 md:px-12 py-6 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <button className="md:hidden">
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden md:flex gap-8 font-ui text-[13px] uppercase tracking-[0.15em] font-medium">
          <a href="#" className="border-b border-brand-charcoal">Curation</a>
          <a href="#" className="text-brand-charcoal/60 hover:text-brand-charcoal transition-colors">Essays</a>
          <a href="#" className="text-brand-charcoal/60 hover:text-brand-charcoal transition-colors">Objects</a>
        </div>
      </div>

      <a href="/" className="absolute left-1/2 -translate-x-1/2 font-display text-2xl md:text-3xl tracking-tighter uppercase font-bold">
        Archive
      </a>

      <div className="flex items-center gap-6 font-ui text-[13px] uppercase tracking-[0.15em] font-medium">
        <button className="hidden md:block text-brand-charcoal/60 hover:text-brand-charcoal">
          <Search className="w-5 h-5" />
        </button>
        <button className="relative">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-sage rounded-full" />
        </button>
        <button className="hidden md:block px-6 py-2 border border-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all duration-300">
          Subscribe
        </button>
      </div>
    </nav>
  );
}
