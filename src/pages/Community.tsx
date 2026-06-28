import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Users, 
  Heart, 
  Share2, 
  MoreHorizontal, 
  Image as ImageIcon,
  MessageSquare,
  Plus,
  Send
} from 'lucide-react';
import { 
  GlassCard, 
  PremiumButton, 
  TopBar, 
  SectionTitle 
} from '@/components/ui-premium';

const posts = [
  {
    id: '1',
    user: "Aminata S.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100",
    content: "Avez-vous des conseils pour les nausées matinales au deuxième trimestre ? Je commence à désespérer... 😅",
    image: null,
    likes: 24,
    comments: 12,
    time: "il y a 2h",
    group: "Futures Mamans 2024"
  },
  {
    id: '2',
    user: "Moussa Diouf",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
    content: "La chambre du petit est enfin prête ! Merci à tous pour les conseils déco.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400",
    likes: 156,
    comments: 45,
    time: "il y a 5h",
    group: "Papas poules"
  }
];

const groups = [
  { name: "Nutrition Grossesse", members: "1.2k", image: "https://images.unsplash.com/photo-1490818384919-62274632f574?auto=format&fit=crop&q=80&w=100" },
  { name: "Sport Doux", members: "850", image: "https://images.unsplash.com/photo-1518611012118-29a8d93c002f?auto=format&fit=crop&q=80&w=100" },
  { name: "Allaitement", members: "2.5k", image: "https://images.unsplash.com/photo-1555252333-978fe3c788c1?auto=format&fit=crop&q=80&w=100" },
];

export const CommunityPage = () => {
  const [activeSegment, setActiveSegment] = useState<'feed' | 'groups' | 'chats'>('feed');

  return (
    <div className="bg-background min-h-screen pb-20">
      <TopBar 
        title="Communauté" 
        rightElement={
          <button className="p-3 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/20">
            <Plus size={20} />
          </button>
        }
      />
      
      <main className="px-6 pt-32 space-y-8">
        {/* Navigation Segments */}
        <div className="flex gap-4 border-b border-muted mb-4 overflow-x-auto no-scrollbar">
           {(['feed', 'groups', 'chats'] as const).map(s => (
             <button 
               key={s}
               onClick={() => setActiveSegment(s)}
               className={cn(
                 "pb-3 font-bold text-sm transition-all relative",
                 activeSegment === s ? "text-primary" : "text-muted-foreground"
               )}
             >
               {s === 'feed' ? 'Actualités' : s === 'groups' ? 'Groupes' : 'Messages'}
               {activeSegment === s && (
                 <motion.div layoutId="seg-line" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
               )}
             </button>
           ))}
        </div>

        {activeSegment === 'feed' && (
          <div className="space-y-6">
            {/* Create Post */}
            <GlassCard className="p-4 bg-white/50 flex gap-4 items-center">
               <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                 <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100" alt="Avatar" />
               </div>
               <div className="flex-1 bg-muted/30 rounded-2xl px-4 py-2.5 text-sm text-muted-foreground">
                 Exprimez-vous...
               </div>
               <button className="text-primary p-2">
                 <ImageIcon size={20} />
               </button>
            </GlassCard>

            {/* Posts */}
            {posts.map(post => (
              <GlassCard key={post.id} className="p-0 overflow-hidden bg-white/70 border-white/30">
                 <div className="p-4 flex justify-between items-start">
                    <div className="flex gap-3">
                       <div className="w-10 h-10 rounded-full overflow-hidden border border-black/5">
                          <img src={post.avatar} alt={post.user} className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <h4 className="font-bold text-sm">{post.user}</h4>
                          <span className="text-[10px] text-primary font-bold">{post.group} • {post.time}</span>
                       </div>
                    </div>
                    <button className="text-muted-foreground"><MoreHorizontal size={20} /></button>
                 </div>
                 
                 <div className="px-4 pb-4">
                    <p className="text-sm leading-relaxed text-foreground/90">{post.content}</p>
                 </div>

                 {post.image && (
                   <div className="w-full h-64 overflow-hidden border-y border-white/20">
                      <img src={post.image} alt="Post" className="w-full h-full object-cover" />
                   </div>
                 )}

                 <div className="p-4 flex justify-between border-t border-white/10">
                    <div className="flex gap-6">
                       <button className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-red-500 transition-colors">
                          <Heart size={18} /> {post.likes}
                       </button>
                       <button className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                          <MessageSquare size={18} /> {post.comments}
                       </button>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                       <Share2 size={18} />
                    </button>
                 </div>
              </GlassCard>
            ))}
          </div>
        )}

        {activeSegment === 'groups' && (
          <div className="space-y-4">
             <SectionTitle subtitle="Rejoignez la discussion">Groupes suggérés</SectionTitle>
             <div className="grid grid-cols-1 gap-4">
                {groups.map((group, i) => (
                  <GlassCard key={i} className="p-4 flex gap-4 items-center bg-white/60">
                     <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm">
                        <img src={group.image} alt={group.name} className="w-full h-full object-cover" />
                     </div>
                     <div className="flex-1">
                        <h4 className="font-bold text-base">{group.name}</h4>
                        <span className="text-xs text-muted-foreground font-medium">{group.members} membres</span>
                     </div>
                     <PremiumButton size="sm" variant="glass" className="border border-primary/20 text-primary">
                        Rejoindre
                     </PremiumButton>
                  </GlassCard>
                ))}
             </div>
          </div>
        )}

        {activeSegment === 'chats' && (
          <div className="space-y-2">
             <SectionTitle>Messages privés</SectionTitle>
             {[1, 2, 3].map(i => (
               <button key={i} className="w-full p-4 rounded-3xl hover:bg-white/40 transition-all flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-muted relative flex-shrink-0">
                     <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" />
                     <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1 text-left">
                     <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold">Maman Sophie</h4>
                        <span className="text-[10px] text-muted-foreground">14:20</span>
                     </div>
                     <p className="text-sm text-muted-foreground truncate">On se voit demain pour le yoga ? 🧘‍♀️</p>
                  </div>
               </button>
             ))}
          </div>
        )}
      </main>
      <div className="h-24 md:h-0" />
    </div>
  );
};

const cn = (...args: any[]) => args.filter(Boolean).join(' ');
