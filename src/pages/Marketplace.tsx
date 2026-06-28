import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  Star, 
  Plus, 
  Filter,
  ArrowRight,
  ChevronLeft,
  ShoppingCart,
  Tag
} from 'lucide-react';
import { 
  GlassCard, 
  PremiumButton, 
  TopBar, 
  SectionTitle 
} from '@/components/ui-premium';

const products = [
  {
    id: '1',
    name: "Coussin de maternité Premium",
    price: "45.000 FCFA",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    category: "Confort"
  },
  {
    id: '2',
    name: "Set de soins bébé Bio",
    price: "22.500 FCFA",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    category: "Soins"
  },
  {
    id: '3',
    name: "Poussette tout-terrain Lite",
    price: "185.000 FCFA",
    image: "https://images.unsplash.com/photo-1591954840041-0682739e80a7?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    category: "Transport"
  },
  {
    id: '4',
    name: "Lot de bodies en coton bio",
    price: "15.000 FCFA",
    image: "https://images.unsplash.com/photo-1522771917714-d71a85e1b238?auto=format&fit=crop&q=80&w=400",
    rating: 4.6,
    category: "Vêtements"
  }
];

export const MarketplacePage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const categories = ['Tous', 'Confort', 'Soins', 'Transport', 'Vêtements'];

  return (
    <div className="bg-background min-h-screen pb-20">
      <TopBar 
        title="Boutique" 
        rightElement={
          <button className="p-3 bg-white/50 rounded-2xl relative shadow-sm">
             <ShoppingCart size={22} />
             <span className="absolute top-2 right-2 w-4 h-4 bg-primary text-white text-[8px] flex items-center justify-center rounded-full font-bold">2</span>
          </button>
        }
      />
      
      <main className="px-6 pt-32 space-y-8">
        {/* Search */}
        <div className="flex gap-3">
          <GlassCard className="p-2 flex-1 flex items-center gap-3 bg-white/60">
             <Search size={18} className="text-muted-foreground ml-2" />
             <input placeholder="Rechercher un produit..." className="bg-transparent border-none outline-none py-2 text-sm w-full" />
          </GlassCard>
          <button className="p-4 bg-muted/50 rounded-3xl text-foreground">
             <Filter size={20} />
          </button>
        </div>

        {/* Hero Promo */}
        <section>
          <div className="relative h-48 rounded-[2.5rem] overflow-hidden group">
             <img 
               src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a08d2113-1e80-4e39-a261-7d9e285ae594/marketplace-hero-905223e6-1782607076939.webp" 
               alt="Promotion" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8">
                <span className="bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full w-fit uppercase mb-3">Offre Spéciale</span>
                <h3 className="text-2xl font-black text-white leading-tight">Pack naissance<br />-20% ce weekend</h3>
                <PremiumButton variant="accent" size="sm" className="mt-4 w-fit py-2">
                   En profiter
                </PremiumButton>
             </div>
          </div>
        </section>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-2 px-2">
           {categories.map(cat => (
             <button 
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={cn(
                 "px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all",
                 activeCategory === cat ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-muted/50 text-muted-foreground"
               )}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Products Grid */}
        <section>
          <SectionTitle subtitle="Les plus populaires">Pour vous et bébé</SectionTitle>
          <div className="grid grid-cols-2 gap-4 pb-8">
             {products.map(product => (
               <GlassCard key={product.id} className="p-0 overflow-hidden bg-white/70 flex flex-col h-full border-white/40 group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                     <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                     />
                     <button className="absolute top-3 right-3 p-2 rounded-full glass hover:bg-red-50 hover:text-red-500 transition-colors">
                        <Heart size={16} />
                     </button>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                     <div>
                        <span className="text-[10px] text-muted-foreground font-bold uppercase">{product.category}</span>
                        <h4 className="font-bold text-sm mt-1 leading-snug line-clamp-2">{product.name}</h4>
                        <div className="flex items-center gap-1 mt-2 text-amber-500">
                           <Star size={12} fill="currentColor" />
                           <span className="text-xs font-bold">{product.rating}</span>
                        </div>
                     </div>
                     <div className="flex items-center justify-between mt-4">
                        <span className="font-black text-sm text-primary">{product.price}</span>
                        <button className="p-2 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 active:scale-90 transition-transform">
                           <Plus size={18} />
                        </button>
                     </div>
                  </div>
               </GlassCard>
             ))}
          </div>
        </section>
      </main>
      <div className="h-24 md:h-0" />
    </div>
  );
};

const cn = (...args: any[]) => args.filter(Boolean).join(' ');
