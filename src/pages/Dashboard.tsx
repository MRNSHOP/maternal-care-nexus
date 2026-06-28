import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  Plus, 
  Baby, 
  Activity, 
  Utensils, 
  Wind,
  Video
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  GlassCard, 
  PremiumButton, 
  TopBar, 
  SectionTitle 
} from '@/components/ui-premium';

export const DashboardPage = () => {
  const navigate = useNavigate();

  const dailyTips = [
    { title: "Sommeil", description: "Dormez sur le côté gauche pour une meilleure circulation.", icon: Wind, color: "text-blue-500 bg-blue-50" },
    { title: "Nutrition", description: "Consommez des aliments riches en fer comme les épinards.", icon: Utensils, color: "text-orange-500 bg-orange-50" },
  ];

  const appointments = [
    { title: "Échographie T2", doctor: "Dr. Diop", time: "10:30", date: "Demain", type: "Clinique" },
    { title: "Suivi mensuel", doctor: "Sage-femme Amy", time: "14:15", date: "15 Oct", type: "Téléconsultation" },
  ];

  return (
    <div className="bg-background min-h-screen pb-20">
      <TopBar title="Bonjour, Mariama" />
      
      <main className="px-6 pt-32 space-y-8">
        {/* Pregnancy Progress Card */}
        <section>
          <GlassCard 
            className="bg-gradient-to-br from-primary/10 to-accent/10 border-white/40 overflow-hidden relative cursor-pointer"
            onClick={() => navigate('/tracking')}
          >
            <div className="flex justify-between items-start relative z-10">
              <div>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">Semaine 24</span>
                <h2 className="text-3xl font-black mt-1">6ème mois</h2>
                <p className="text-muted-foreground mt-2">Votre bébé a la taille d'un épi de maïs 🌽</p>
                <PremiumButton variant="primary" size="sm" className="mt-4">
                  Voir l'évolution
                </PremiumButton>
              </div>
              <div className="w-24 h-24 rounded-full bg-white/50 backdrop-blur shadow-inner flex items-center justify-center relative">
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1] }}
                   transition={{ repeat: Infinity, duration: 4 }}
                   className="absolute inset-0 rounded-full bg-primary/10"
                 />
                 <Baby size={48} className="text-primary" />
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>PROGRESSION</span>
                <span>60%</span>
              </div>
              <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <PremiumButton 
            variant="glass" 
            className="flex-col items-start p-6 h-auto"
            onClick={() => navigate('/teleconsult')}
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
              <Video size={24} />
            </div>
            <span className="font-bold">Téléconsulter</span>
          </PremiumButton>
          <PremiumButton 
            variant="glass" 
            className="flex-col items-start p-6 h-auto"
            onClick={() => navigate('/medical')}
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Activity size={24} />
            </div>
            <span className="font-bold">Carnet Santé</span>
          </PremiumButton>
        </div>

        {/* Daily Tips */}
        <section>
          <SectionTitle>Conseils du jour</SectionTitle>
          <div className="space-y-3">
            {dailyTips.map((tip, i) => (
              <GlassCard key={i} className="p-4 flex gap-4 items-center bg-white/40">
                <div className={tip.color + " p-3 rounded-2xl"}>
                  <tip.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-snug">{tip.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Appointments */}
        <section>
          <div className="flex justify-between items-end mb-4 px-2">
            <h2 className="text-2xl font-bold tracking-tight">Rendez-vous</h2>
            <button className="text-primary font-bold text-sm flex items-center gap-1">
              Voir tout <ChevronRight size={16} />
            </button>
          </div>
          <div className="space-y-3 pb-8">
            {appointments.map((apt, i) => (
              <GlassCard key={i} className="p-5 border-white/20">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{apt.title}</h3>
                    <p className="text-muted-foreground text-sm">{apt.doctor}</p>
                  </div>
                  <div className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                    {apt.type}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <Calendar size={16} className="text-primary" />
                    {apt.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <Clock size={16} className="text-primary" />
                    {apt.time}
                  </div>
                </div>
              </GlassCard>
            ))}
            
            <PremiumButton variant="outline" className="w-full border-dashed border-2 py-6">
              <Plus size={20} /> Programmer un rendez-vous
            </PremiumButton>
          </div>
        </section>
      </main>
    </div>
  );
};
