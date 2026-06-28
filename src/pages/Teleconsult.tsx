import React, { useState } from 'react';
import { 
  Video, 
  Mic, 
  MessageSquare, 
  X, 
  ChevronRight, 
  Star, 
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  GlassCard, 
  PremiumButton, 
  TopBar, 
  SectionTitle 
} from '@/components/ui-premium';

const doctors = [
  { 
    id: '1', 
    name: "Dr. Aïcha Fall", 
    specialty: "Gynécologue-Obstétricienne", 
    rating: 4.9, 
    reviews: 128,
    price: "15.000 FCFA",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71f15367ef?auto=format&fit=crop&q=80&w=150",
    available: "Aujourd'hui"
  },
  { 
    id: '2', 
    name: "Dr. Omar Sy", 
    specialty: "Pédiatre", 
    rating: 4.8, 
    reviews: 95,
    price: "12.000 FCFA",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150",
    available: "Demain"
  }
];

export const TeleconsultPage = () => {
  const [step, setStep] = useState<'selection' | 'booking' | 'payment' | 'call'>('selection');
  const [selectedDoc, setSelectedDoc] = useState(doctors[0]);

  return (
    <div className="bg-background min-h-screen pb-20">
      <TopBar 
        title="Téléconsultation" 
        showBack={step !== 'selection'} 
        onBack={() => setStep('selection')} 
      />
      
      <main className="px-6 pt-32 space-y-8">
        {step === 'selection' && (
          <>
            <section>
              <SectionTitle subtitle="Disponibles 24/7">Nos Spécialistes</SectionTitle>
              <div className="space-y-4">
                 {doctors.map(doc => (
                   <GlassCard key={doc.id} className="p-5 bg-white/70 border-white/40">
                      <div className="flex gap-4 mb-4">
                         <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md">
                            <img src={doc.avatar} alt={doc.name} className="w-full h-full object-cover" />
                         </div>
                         <div className="flex-1">
                            <h4 className="font-bold text-lg leading-tight">{doc.name}</h4>
                            <p className="text-xs text-primary font-bold">{doc.specialty}</p>
                            <div className="flex items-center gap-1 mt-1">
                               <Star size={12} fill="#F59E0B" className="text-amber-500" />
                               <span className="text-xs font-bold text-amber-500">{doc.rating}</span>
                               <span className="text-[10px] text-muted-foreground font-medium">({doc.reviews} avis)</span>
                            </div>
                         </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-black/5">
                         <div className="text-sm font-black text-foreground">
                            {doc.price} <span className="text-[10px] font-normal text-muted-foreground">/ session</span>
                         </div>
                         <PremiumButton 
                           size="sm" 
                           onClick={() => {
                             setSelectedDoc(doc);
                             setStep('booking');
                           }}
                         >
                           Réserver
                         </PremiumButton>
                      </div>
                   </GlassCard>
                 ))}
              </div>
            </section>

            <section className="pb-8">
               <GlassCard className="bg-primary text-primary-foreground p-6 overflow-hidden relative">
                  <div className="relative z-10">
                     <h3 className="text-xl font-bold mb-2">Urgence Médicale ?</h3>
                     <p className="text-primary-foreground/70 text-sm mb-6">Un médecin de garde vous répond en moins de 5 minutes.</p>
                     <PremiumButton variant="accent" className="w-full">
                        Appeler un médecin de garde
                     </PremiumButton>
                  </div>
                  <AlertCircle size={100} className="absolute -right-6 -bottom-6 opacity-10 text-white" />
               </GlassCard>
            </section>
          </>
        )}

        {step === 'booking' && (
          <div className="space-y-6">
             <SectionTitle subtitle="Choisissez un créneau">Prise de rendez-vous</SectionTitle>
             <GlassCard className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <img src={selectedDoc.avatar} alt={selectedDoc.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{selectedDoc.name}</h4>
                    <p className="text-xs text-muted-foreground">{selectedDoc.specialty}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                   <h5 className="font-bold text-sm">Date de consultation</h5>
                   <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                      {['Lundi 12', 'Mardi 13', 'Mercredi 14'].map(d => (
                        <button key={d} className="flex-shrink-0 px-4 py-3 rounded-2xl bg-muted/50 text-sm font-bold hover:bg-primary hover:text-white transition-all">
                           {d}
                        </button>
                      ))}
                   </div>
                   
                   <h5 className="font-bold text-sm mt-6">Horaire</h5>
                   <div className="grid grid-cols-3 gap-2">
                      {['09:00', '10:30', '14:15', '16:00', '17:30'].map(t => (
                        <button key={t} className="px-3 py-2.5 rounded-xl border border-muted text-xs font-bold hover:border-primary hover:text-primary transition-all">
                           {t}
                        </button>
                      ))}
                   </div>
                </div>
             </GlassCard>
             <PremiumButton className="w-full py-5 text-lg" onClick={() => setStep('payment')}>
                Continuer au paiement
             </PremiumButton>
          </div>
        )}

        {step === 'payment' && (
          <div className="space-y-6">
             <SectionTitle subtitle="Paiement sécurisé">Finalisez votre réservation</SectionTitle>
             <GlassCard className="p-6 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-black/5">
                   <span className="text-muted-foreground text-sm">Consultation Vidéo</span>
                   <span className="font-black">{selectedDoc.price}</span>
                </div>
                
                <div className="space-y-3">
                   <h5 className="font-bold text-sm">Mode de paiement</h5>
                   <button className="w-full p-4 rounded-2xl border-2 border-primary bg-primary/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-6 bg-orange-500 rounded flex items-center justify-center text-[8px] text-white font-black">ORANGE</div>
                         <span className="font-bold text-sm">Orange Money</span>
                      </div>
                      <CheckCircle2 size={20} className="text-primary" />
                   </button>
                   <button className="w-full p-4 rounded-2xl border border-muted flex items-center gap-3">
                      <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center text-[8px] text-white font-black">WAVE</div>
                      <span className="font-bold text-sm text-muted-foreground">Wave</span>
                   </button>
                   <button className="w-full p-4 rounded-2xl border border-muted flex items-center gap-3">
                      <div className="w-10 h-6 bg-black rounded flex items-center justify-center text-[8px] text-white font-black">VISA</div>
                      <span className="font-bold text-sm text-muted-foreground">Carte Bancaire</span>
                   </button>
                </div>
             </GlassCard>
             <PremiumButton className="w-full py-5 text-lg" onClick={() => setStep('call')}>
                Payer et Confirmer
             </PremiumButton>
          </div>
        )}

        {step === 'call' && (
          <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
             <div className="absolute inset-0 z-0">
                <img 
                  src={selectedDoc.avatar} 
                  alt="Doctor" 
                  className="w-full h-full object-cover blur-sm opacity-50"
                />
             </div>
             
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-6 shadow-2xl">
                   <img src={selectedDoc.avatar} alt="Doctor" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-white text-2xl font-black mb-2">{selectedDoc.name}</h2>
                <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Appel Vidéo en cours...</p>
                
                <div className="mt-20 flex gap-8">
                   <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center">
                      <Mic size={24} />
                   </button>
                   <button 
                     onClick={() => setStep('selection')}
                     className="w-16 h-16 rounded-full bg-destructive text-white flex items-center justify-center shadow-xl shadow-destructive/40"
                   >
                      <X size={28} />
                   </button>
                   <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center">
                      <Video size={24} />
                   </button>
                </div>
             </div>

             <div className="absolute top-12 right-6 w-24 h-40 rounded-2xl bg-muted overflow-hidden border-2 border-white/20 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150" 
                  alt="User" 
                  className="w-full h-full object-cover" 
                />
             </div>

             <div className="absolute bottom-12 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-3xl flex items-center gap-3 border border-white/10">
                   <input 
                     placeholder="Envoyer un message..." 
                     className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-white/40 text-sm"
                   />
                   <button className="p-2 text-white">
                      <MessageSquare size={20} />
                   </button>
                </div>
             </div>
          </div>
        )}
      </main>
      <div className="h-24 md:h-0" />
    </div>
  );
};

const cn = (...args: any[]) => args.filter(Boolean).join(' ');
