/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialGrid from './components/EditorialGrid';
import ProductHighlight from './components/ProductHighlight';
import SecondaryContent from './components/SecondaryContent';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-0">
        <Hero />
        <EditorialGrid />
        <ProductHighlight />
        <SecondaryContent />
      </main>
      <Footer />
    </div>
  );
}

