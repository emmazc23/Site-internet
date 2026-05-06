import { Instagram, Twitter, Mail } from 'lucide-react';

const footerLinks = [
  {
    title: "Journal",
    links: ["Curation", "Essays", "Interviews", "Manifesto"]
  },
  {
    title: "Shop",
    links: ["Objects", "Archive", "Limited", "Gifts"]
  },
  {
    title: "Connect",
    links: ["Instagram", "Pinterest", "Twitter", "Newsletter"]
  }
];

export default function Footer() {
  return (
    <footer className="bg-brand-sand/30 border-t border-brand-charcoal/5 px-6 md:px-16 pt-32 pb-16">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between gap-24 mb-32">
        <div className="max-w-sm space-y-8">
          <h2 className="font-display text-4xl uppercase tracking-tighter font-bold">Archive</h2>
          <p className="font-body text-xl italic text-brand-charcoal/60 leading-relaxed">
            A digital journal and curated shop dedicated to the art of intentional living and high-end design.
          </p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 text-brand-charcoal/40 hover:text-brand-charcoal cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-brand-charcoal/40 hover:text-brand-charcoal cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-brand-charcoal/40 hover:text-brand-charcoal cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <h4 className="font-ui text-[12px] uppercase tracking-[0.3em] text-brand-charcoal font-bold">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="font-ui text-[13px] text-brand-charcoal/50 hover:text-brand-charcoal transition-colors border-b border-transparent hover:border-brand-charcoal/20 pb-0.5">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto pt-16 border-t border-brand-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-brand-charcoal/30 font-bold">
          © 2024 Archive Journal. All Rights Reserved.
        </span>
        <div className="flex gap-8">
          <a href="#" className="font-ui text-[10px] uppercase tracking-[0.2em] text-brand-charcoal/30 hover:text-brand-charcoal font-bold">Privacy</a>
          <a href="#" className="font-ui text-[10px] uppercase tracking-[0.2em] text-brand-charcoal/30 hover:text-brand-charcoal font-bold">Terms</a>
        </div>
      </div>
    </footer>
  );
}
