import React from 'react';
import { 
  FileText, 
  Search, 
  Upload, 
  Share2, 
  Download, 
  MoreVertical,
  Calendar,
  ShieldCheck,
  Filter,
  Trash2,
  ChevronRight
} from 'lucide-react';
import { 
  GlassCard, 
  PremiumButton, 
  TopBar, 
  SectionTitle 
} from '@/components/ui-premium';

const documents = [
  { id: '1', name: "Analyse de sang - T2", date: "12 Oct 2023", size: "2.4 MB", type: "PDF" },
  { id: '2', name: "Ordonnance Vitamines", date: "05 Oct 2023", size: "1.1 MB", type: "JPG" },
  { id: '3', name: "Compte rendu Écho", date: "20 Sep 2023", size: "5.8 MB", type: "PDF" },
  { id: '4', name: "Carnet de vaccination", date: "01 Sep 2023", size: "3.2 MB", type: "PDF" },
];

export const MedicalPage = () => {
  return (
    <div className="bg-background min-h-screen pb-20">
      <TopBar 
        title="Carnet Médical" 
        rightElement={
          <button className="p-3 bg-primary text-primary-foreground rounded-2xl">
            <Upload size={20} />
          </button>
        }
      />
      
      <main className="px-6 pt-32 space-y-8">
        {/* Security Banner */}
        <GlassCard className="bg-emerald-500/10 border-emerald-500/20 p-4 flex gap-4 items-center">
           <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-600">
             <ShieldCheck size={24} />
           </div>
           <div>
             <h4 className="font-bold text-emerald-700 text-sm">Espace Sécurisé</h4>
             <p className="text-emerald-600/70 text-xs">Vos données sont cryptées de bout en bout.</p>
           </div>
        </GlassCard>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4">
           <GlassCard className="p-5 flex flex-col items-center bg-blue-50/50 border-blue-100">
              <div className="p-3 rounded-2xl bg-blue-100 text-blue-600 mb-3">
                 <FileText size={24} />
              </div>
              <span className="font-bold text-sm">Examens</span>
              <span className="text-[10px] text-muted-foreground uppercase mt-1">12 fichiers</span>
           </GlassCard>
           <GlassCard className="p-5 flex flex-col items-center bg-violet-50/50 border-violet-100">
              <div className="p-3 rounded-2xl bg-violet-100 text-violet-600 mb-3">
                 <Calendar size={24} />
              </div>
              <span className="font-bold text-sm">Historique</span>
              <span className="text-[10px] text-muted-foreground uppercase mt-1">45 entrées</span>
           </GlassCard>
        </div>

        {/* Documents List */}
        <section>
          <div className="flex justify-between items-end mb-4 px-2">
            <SectionTitle subtitle="Gérez vos documents">Documents récents</SectionTitle>
            <button className="p-2 mb-6 text-muted-foreground"><Filter size={20} /></button>
          </div>

          <div className="space-y-3 pb-8">
             {documents.map(doc => (
               <GlassCard key={doc.id} className="p-4 flex gap-4 items-center bg-white/60 group">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xs",
                    doc.type === 'PDF' ? "bg-red-50 text-red-500" : "bg-blue-50 text-blue-500"
                  )}>
                    {doc.type}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm truncate">{doc.name}</h4>
                    <p className="text-[10px] text-muted-foreground">{doc.date} • {doc.size}</p>
                  </div>
                  <div className="flex gap-2">
                     <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <Share2 size={18} />
                     </button>
                     <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <Download size={18} />
                     </button>
                  </div>
               </GlassCard>
             ))}
             
             <PremiumButton variant="outline" className="w-full border-dashed border-2 py-6 mt-4">
                <Upload size={20} /> Ajouter un document
             </PremiumButton>
          </div>
        </section>
      </main>
      <div className="h-24 md:h-0" />
    </div>
  );
};

const cn = (...args: any[]) => args.filter(Boolean).join(' ');
