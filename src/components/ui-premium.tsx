import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Baby, 
  Heart, 
  MessageCircle, 
  MapPin, 
  ShoppingBag, 
  User, 
  Settings, 
  Bell,
  Search,
  ChevronLeft,
  MoreVertical,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Premium UI Components ---

export const GlassCard = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn(
      "glass rounded-[2rem] p-6 transition-all duration-300",
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

export const PremiumButton = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}) => {
  const variants = {
    primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    accent: "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:scale-[1.02]",
    ghost: "bg-transparent hover:bg-muted text-foreground",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    glass: "glass text-foreground hover:bg-white/20"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-semibold",
    lg: "px-8 py-4 text-lg font-bold",
    icon: "p-3 rounded-full"
  };

  return (
    <button 
      className={cn(
        "rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const PremiumInput = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    className={cn(
      "w-full bg-muted/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground placeholder:text-muted-foreground",
      className
    )}
    {...props}
  />
);

// --- Layout & Navigation ---

export const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const tabs = [
    { id: 'dashboard', icon: Home, label: 'Accueil' },
    { id: 'tracking', icon: Baby, label: 'Suivi' },
    { id: 'ai', icon: MessageCircle, label: 'Assistant' },
    { id: 'map', icon: MapPin, label: 'Carte' },
    { id: 'community', icon: Heart, label: 'Communauté' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass border-t border-white/10 px-4 py-3 pb-8 z-50 flex justify-around items-center rounded-t-[2.5rem]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "flex flex-col items-center gap-1 transition-all duration-300",
            activeTab === tab.id ? "text-primary scale-110" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <tab.icon size={24} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
          <span className="text-[10px] font-medium">{tab.label}</span>
          {activeTab === tab.id && (
            <motion.div 
              layoutId="nav-dot"
              className="w-1 h-1 bg-primary rounded-full mt-1"
            />
          )}
        </button>
      ))}
    </nav>
  );
};

export const TopBar = ({ title, showBack = false, onBack = () => {}, rightElement }: { title: string, showBack?: boolean, onBack?: () => void, rightElement?: React.ReactNode }) => (
  <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-12 pb-4 flex items-center justify-between glass border-b border-white/5 backdrop-blur-md">
    <div className="flex items-center gap-4">
      {showBack ? (
        <button onClick={onBack} className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors">
          <ChevronLeft size={24} />
        </button>
      ) : (
        <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm">
           <img src="https://storage.googleapis.com/dala-prod-public-storage/attachments/72b6309b-6027-4868-ba4c-c7ed63162d77/1782607579874_ChatGPT_Image_27_juin_2026__22_28_33.png" alt="Yaye Connect" className="w-full h-full object-cover" />
        </div>
      )}
      <h1 className="text-xl font-bold tracking-tight">{title}</h1>
    </div>
    <div className="flex items-center gap-2">
      {rightElement || (
        <>
          <button className="p-2 rounded-xl hover:bg-muted transition-colors relative">
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-background"></span>
          </button>
          <button className="p-2 rounded-xl hover:bg-muted transition-colors">
            <User size={22} />
          </button>
        </>
      )}
    </div>
  </header>
);

export const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-6 px-2">
    <h2 className="text-2xl font-bold tracking-tight text-foreground">{children}</h2>
    {subtitle && <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>}
  </div>
);
