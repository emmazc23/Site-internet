import { CheckCircle2 } from 'lucide-react';

const checklistItems = [
  {
    title: "Sustainable Materials",
    description: "Ethically sourced, vegetable-tanned leathers and organic cotton canvas."
  },
  {
    title: "Modular Utility",
    description: "Interchangeable components designed for seamless transitions from air to city."
  },
  {
    title: "Lifetime Warranty",
    description: "Crafted to endure a lifetime of journeys, backed by our archival repair studio."
  }
];

export default function ProductHighlight() {
  return (
    <section className="bg-brand-sand/50 py-32 px-6 md:px-16">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-16">
          <h2 className="font-display text-4xl md:text-5xl text-brand-charcoal leading-tight">
            The Nomad's Essentials <br />
            <span className="italic">Checklist</span>
          </h2>

          <div className="space-y-12">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start border-b border-brand-charcoal/10 pb-10">
                <CheckCircle2 className="w-6 h-6 text-brand-sage flex-shrink-0" />
                <div>
                  <h4 className="font-ui text-[13px] uppercase tracking-[0.2em] font-bold text-brand-charcoal mb-3">
                    {item.title}
                  </h4>
                  <p className="font-body text-lg text-brand-charcoal/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 border border-brand-charcoal/5 shadow-sm sticky top-32">
          <span className="block font-ui text-[11px] uppercase tracking-[0.3em] text-brand-sage mb-2 font-bold">
            Curated Set
          </span>
          <h3 className="font-display text-3xl text-brand-charcoal mb-6 font-bold">
            The Complete Archive 04 Suite
          </h3>
          <p className="font-body text-xl text-brand-charcoal/60 mb-12 italic">
            Includes the Weekender Bag, Tech Folio, and Signature Shades. A total value of $1,450.
          </p>

          <div className="space-y-4 mb-16">
            <div className="flex justify-between font-ui text-[12px] uppercase tracking-[0.1em] text-brand-charcoal/50 border-b border-brand-charcoal/5 pb-2">
              <span>The Weekender</span>
              <span>$850</span>
            </div>
            <div className="flex justify-between font-ui text-[12px] uppercase tracking-[0.1em] text-brand-charcoal/50 border-b border-brand-charcoal/5 pb-2">
              <span>The Tech Folio</span>
              <span>$325</span>
            </div>
            <div className="flex justify-between font-ui text-[12px] uppercase tracking-[0.1em] border-brand-charcoal/5 pb-2">
              <span>The Shades</span>
              <span>$275</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-4xl text-brand-charcoal font-bold">$1,200</span>
              <span className="text-brand-charcoal/30 line-through text-lg">$1,450</span>
            </div>
            <button className="w-full bg-brand-charcoal text-white py-6 font-ui text-[12px] uppercase tracking-[0.3em] hover:bg-brand-sage transition-colors duration-500 font-bold">
              Acquire The Set
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
