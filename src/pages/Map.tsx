import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Navigation, 
  Phone, 
  Clock, 
  Star,
  Hospital,
  Pill,
  ShieldAlert,
  ChevronRight,
  MapPin
} from 'lucide-react';
import { 
  GlassCard, 
  PremiumButton, 
  TopBar, 
  PremiumInput 
} from '@/components/ui-premium';

const providers = [
  { 
    id: '1', 
    name: "Clinique de la Paix", 
    type: "Hôpital", 
    address: "Plateau, Dakar", 
    rating: 4.8, 
    distance: "1.2 km",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200",
    open: true
  },
  { 
    id: '2', 
    name: "Pharmacie du Parc", 
    type: "Pharmacie", 
    address: "Mermoz, Dakar", 
    rating: 4.5, 
    distance: "0.8 km",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=200",
    open: true
  },
  { 
    id: '3', 
    name: "Laboratoire BioPlus", 
    type: "Laboratoire", 
    address: "Amitié, Dakar", 
    rating: 4.2, 
    distance: "2.5 km",
    image: "https://images.unsplash.com/photo-1579152276502-7b1f2e727e61?auto=format&fit=crop&q=80&w=200",
    open: false
  },
];

export const MapPage = () => {
  const [showSOS, setShowSOS] = useState(false);

  return (
    <div className="bg-background min-h-screen relative flex flex-col">
      <TopBar title="Santé de proximité" />
      
      {/* Map Mockup */}
      <div className="absolute inset-0 z-0">
         <img 
           src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a08d2113-1e80-4e39-a261-7d9e285ae594/onboarding-4-5aae4b2d-1782607072332.webp" 
           alt="Map" 
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col pt-32 px-6">
        <div className="mb-4">
          <GlassCard className="p-2 border-white/40 bg-white/80 backdrop-blur-lg flex items-center gap-3">
             <div className="p-3 text-primary">
               <Search size={22} />
             </div>
             <input 
               placeholder="Chercher un hôpital, pharmacie..." 
               className="flex-1 bg-transparent border-none outline-none font-medium py-3"
             />
             <button className="p-3 bg-muted/50 rounded-2xl text-foreground">
               <Navigation size={20} />
             </button>
          </GlassCard>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar -mx-2 px-2">
           <PremiumButton variant="glass" size="sm" className="bg-white/90 whitespace-nowrap">Hôpitaux</PremiumButton>
           <PremiumButton variant="glass" size="sm" className="bg-white/90 whitespace-nowrap">Pharmacies</PremiumButton>
           <PremiumButton variant="glass" size="sm" className="bg-white/90 whitespace-nowrap">Urgences</PremiumButton>
        </div>

        <div className="mt-auto pb-8 space-y-4">
           {/* SOS Button */}
           <button 
             onClick={() => setShowSOS(true)}
             className="w-full py-5 rounded-[2.5rem] bg-destructive text-white font-black text-xl shadow-2xl shadow-destructive/40 flex items-center justify-center gap-3 active:scale-95 transition-all"
           >
             <ShieldAlert size={28} />
             BOUTON SOS
           </button>

           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6 snap-x">
             {providers.map(p => (
               <GlassCard key={p.id} className="flex-shrink-0 w-80 p-4 bg-white/90 backdrop-blur-xl snap-center flex gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-black/5">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm leading-tight">{p.name}</h3>
                      <div className="flex items-center gap-0.5 text-xs text-amber-500 font-bold">
                        <Star size={12} fill="currentColor" /> {p.rating}
                      </div>
                    </div>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1 mb-2">
                      <MapPin size={10} /> {p.address} • {p.distance}
                    </p>
                    <div className="flex gap-2">
                       <PremiumButton size="sm" variant="primary" className="py-2 text-[10px] flex-1">
                          Appeler
                       </PremiumButton>
                       <PremiumButton size="sm" variant="glass" className="p-2 border border-black/5">
                          <Navigation size={14} />
                       </PremiumButton>
                    </div>
                  </div>
               </GlassCard>
             ))}
           </div>
        </div>
      </div>

      {/* SOS Overlay */}
      {showSOS && (
        <div className="fixed inset-0 z-[100] bg-destructive flex flex-col items-center justify-center p-8 text-white">
           <motion.div 
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="w-48 h-48 rounded-full bg-white/20 flex items-center justify-center mb-12 relative"
           >
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-full border-4 border-white"
              />
              <ShieldAlert size={80} />
           </motion.div>
           <h2 className="text-4xl font-black mb-4">Urgence activée</h2>
           <p className="text-center text-white/80 text-lg mb-12">
             Votre position est partagée avec les secours et vos contacts d'urgence.
           </p>
           <div className="grid grid-cols-1 w-full gap-4">
              <button className="bg-white text-destructive py-5 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3">
                 <Phone size={24} /> APPELER SAMU (15)
              </button>
              <button 
                onClick={() => setShowSOS(false)}
                className="bg-transparent border-2 border-white/40 text-white py-5 rounded-[2rem] font-bold"
              >
                ANNULER
              </button>
           </div>
        </div>
      )}
      <div className="h-24 md:h-0" />
    </div>
  );
};
