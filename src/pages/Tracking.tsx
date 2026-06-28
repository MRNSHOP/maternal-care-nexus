import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Info,
  ChevronDown,
  LineChart,
  ClipboardList,
  Flame,
  Droplets,
  Scale
} from 'lucide-react';
import { 
  GlassCard, 
  PremiumButton, 
  TopBar, 
  SectionTitle 
} from '@/components/ui-premium';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Line,
  LineChart as ReLineChart
} from 'recharts';

const weightData = [
  { week: 'Sem 20', weight: 65 },
  { week: 'Sem 21', weight: 65.5 },
  { week: 'Sem 22', weight: 66.2 },
  { week: 'Sem 23', weight: 66.8 },
  { week: 'Sem 24', weight: 67.5 },
];

export const TrackingPage = () => {
  const [activeTab, setActiveTab] = useState<'pregnancy' | 'baby'>('pregnancy');
  const [week, setWeek] = useState(24);

  return (
    <div className="bg-background min-h-screen pb-20">
      <TopBar title="Mon Suivi" />
      
      <main className="px-6 pt-32 space-y-8">
        {/* Toggle Pregnancy/Baby */}
        <div className="bg-muted/50 p-1.5 rounded-[1.5rem] flex gap-1">
          <button 
            onClick={() => setActiveTab('pregnancy')}
            className={cn(
              "flex-1 py-3 rounded-[1.2rem] font-bold transition-all",
              activeTab === 'pregnancy' ? "bg-white shadow-sm text-primary" : "text-muted-foreground"
            )}
          >
            Grossesse
          </button>
          <button 
            onClick={() => setActiveTab('baby')}
            className={cn(
              "flex-1 py-3 rounded-[1.2rem] font-bold transition-all",
              activeTab === 'baby' ? "bg-white shadow-sm text-primary" : "text-muted-foreground"
            )}
          >
            Bébé
          </button>
        </div>

        {/* Week Selector */}
        <div className="flex items-center justify-between px-2">
          <button onClick={() => setWeek(w => Math.max(1, w - 1))} className="p-2 rounded-xl bg-muted/50 text-foreground">
            <ChevronLeft size={20} />
          </button>
          <div className="text-center">
            <span className="block text-xs font-bold text-muted-foreground uppercase">Semaine</span>
            <span className="text-4xl font-black text-primary">{week}</span>
          </div>
          <button onClick={() => setWeek(w => Math.min(42, w + 1))} className="p-2 rounded-xl bg-muted/50 text-foreground">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* 3D Visualizer */}
        <section>
          <GlassCard className="p-0 overflow-hidden relative aspect-square border-white/40">
             <img 
               src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a08d2113-1e80-4e39-a261-7d9e285ae594/pregnancy-3d-20weeks-717eb1a6-1782607072624.webp" 
               alt="3D Fetus" 
               className="w-full h-full object-cover"
             />
             <div className="absolute top-4 right-4 flex flex-col gap-2">
               <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground">
                 <Info size={20} />
               </button>
             </div>
             <div className="absolute bottom-6 left-6 right-6">
                <GlassCard className="p-4 py-3 bg-white/60 backdrop-blur-md">
                   <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">Taille</span>
                        <p className="font-bold">~30 cm</p>
                      </div>
                      <div className="w-px h-8 bg-black/5" />
                      <div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">Poids</span>
                        <p className="font-bold">~600 g</p>
                      </div>
                      <div className="w-px h-8 bg-black/5" />
                      <div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">Organes</span>
                        <p className="font-bold">Poumons</p>
                      </div>
                   </div>
                </GlassCard>
             </div>
          </GlassCard>
        </section>

        {/* Health Metrics Charts */}
        <section>
          <div className="flex justify-between items-end mb-4 px-2">
            <SectionTitle subtitle="Derniers 30 jours">Santé & Bio</SectionTitle>
            <button className="text-primary font-bold text-sm mb-6 flex items-center gap-1">
              Tout voir <ChevronDown size={14} />
            </button>
          </div>
          
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 rounded-xl bg-primary/10 text-primary">
                 <Scale size={20} />
               </div>
               <div>
                 <span className="block text-xs font-bold text-muted-foreground uppercase">Poids (kg)</span>
                 <span className="text-xl font-bold">67.5 kg <span className="text-xs text-green-500 font-medium">+0.7 kg</span></span>
               </div>
            </div>
            
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weightData}>
                  <defs>
                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '1rem', 
                      border: 'none', 
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(8px)'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="var(--primary)" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorWeight)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4 mt-4">
             <GlassCard className="p-4 bg-emerald-50/50">
                <span className="text-[10px] font-bold text-emerald-600 uppercase">Tension</span>
                <p className="text-xl font-bold">12/8</p>
                <div className="text-[10px] text-emerald-500 font-medium">Normal</div>
             </GlassCard>
             <GlassCard className="p-4 bg-blue-50/50">
                <span className="text-[10px] font-bold text-blue-600 uppercase">Glycémie</span>
                <p className="text-xl font-bold">0.85</p>
                <div className="text-[10px] text-blue-500 font-medium">Stable</div>
             </GlassCard>
          </div>
        </section>

        {/* Daily Journal */}
        <section>
          <SectionTitle>Journal de grossesse</SectionTitle>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 snap-x">
             <button className="flex-shrink-0 w-24 h-32 rounded-3xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-2 text-primary hover:bg-primary/5 transition-all snap-start">
                <div className="p-2 rounded-full bg-primary/10">
                  <Camera size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase">Ajouter</span>
             </button>
             
             {[1, 2, 3].map(i => (
               <div key={i} className="flex-shrink-0 w-24 h-32 rounded-3xl overflow-hidden relative snap-start shadow-md">
                 <img 
                   src={`https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=150`} 
                   alt="Journal Entry" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                    <span className="text-[8px] text-white font-bold">Semaine {24-i}</span>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="pb-8">
           <GlassCard className="bg-primary text-primary-foreground p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-xl bg-white/20">
                  <ClipboardList size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Checklist Semaine 24</h3>
                  <p className="text-primary-foreground/70 text-sm">3 tâches restantes</p>
                </div>
              </div>
              <div className="space-y-3">
                 <button className="w-full p-3 rounded-xl bg-white/10 flex items-center gap-3 text-left">
                    <div className="w-5 h-5 rounded-md border-2 border-white/40 flex-shrink-0" />
                    <span className="text-sm font-medium">Préparer la valise de maternité</span>
                 </button>
                 <button className="w-full p-3 rounded-xl bg-white/10 flex items-center gap-3 text-left">
                    <div className="w-5 h-5 rounded-md border-2 border-white/40 flex-shrink-0" />
                    <span className="text-sm font-medium">Acheter des vitamines prénatales</span>
                 </button>
              </div>
           </GlassCard>
        </section>
      </main>
    </div>
  );
};

const cn = (...args: any[]) => args.filter(Boolean).join(' ');
