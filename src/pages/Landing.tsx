import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { PremiumButton, GlassCard } from '@/components/ui-premium';

const steps = [
  {
    title: "Bienvenue sur Yaye Connect",
    description: "Votre compagnon premium pour une maternité sereine et connectée.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/72b6309b-6027-4868-ba4c-c7ed63162d77/1782607579874_ChatGPT_Image_27_juin_2026__22_28_33.png",
    color: "from-rose-100 to-rose-200"
  },
  {
    title: "Suivi Personnalisé",
    description: "Suivez l'évolution de votre grossesse et de votre bébé avec des images 3D et des graphiques interactifs.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a08d2113-1e80-4e39-a261-7d9e285ae594/pregnancy-3d-20weeks-717eb1a6-1782607072624.webp",
    color: "from-violet-100 to-violet-200"
  },
  {
    title: "Santé & Bien-être",
    description: "Accédez à des téléconsultations sécurisées et trouvez les meilleurs prestataires de santé autour de vous.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a08d2113-1e80-4e39-a261-7d9e285ae594/onboarding-3-677528ff-1782607072627.webp",
    color: "from-emerald-100 to-emerald-200"
  },
  {
    title: "Intelligence Artificielle",
    description: "Un assistant IA multilingue (Français, Wolof, Anglais) disponible 24/7 pour répondre à vos questions.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a08d2113-1e80-4e39-a261-7d9e285ae594/onboarding-5-185d2e28-1782607072994.webp",
    color: "from-blue-100 to-blue-200"
  },
  {
    title: "Communauté & Boutique",
    description: "Rejoignez une communauté bienveillante et accédez à une sélection premium de produits pour bébé.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a08d2113-1e80-4e39-a261-7d9e285ae594/marketplace-hero-905223e6-1782607076939.webp",
    color: "from-amber-100 to-amber-200"
  }
];

export const LandingPage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/auth');
    }
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[100]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-tr from-primary to-accent p-0.5 shadow-2xl">
            <div className="w-full h-full bg-white rounded-[2.4rem] flex items-center justify-center overflow-hidden">
              <img src="https://storage.googleapis.com/dala-prod-public-storage/attachments/72b6309b-6027-4868-ba4c-c7ed63162d77/1782607579874_ChatGPT_Image_27_juin_2026__22_28_33.png" alt="Yaye Connect" className="w-full h-full object-cover" />
            </div>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1 }}
            className="h-1 bg-primary rounded-full mt-8 absolute -bottom-12"
          />
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-4xl font-black tracking-tighter text-primary"
        >
          YAYE CONNECT
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-20%] w-[80%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-20%] w-[80%] h-[40%] bg-accent/5 rounded-full blur-[100px]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
          className="flex-1 flex flex-col items-center justify-center p-8 pt-20"
        >
          <div className="w-full max-w-sm aspect-square relative mb-12 group">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
            <GlassCard className="w-full h-full p-2 relative z-10 overflow-hidden border-white/40">
              <img 
                src={steps[currentStep].image} 
                alt={steps[currentStep].title}
                className="w-full h-full object-cover rounded-[2.5rem]" 
              />
            </GlassCard>
          </div>

          <div className="text-center max-w-sm mb-12">
            <h2 className="text-3xl font-black mb-4 leading-tight text-foreground">
              {steps[currentStep].title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {steps[currentStep].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="p-8 pb-12 flex flex-col items-center gap-8 relative z-20">
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <div 
              key={i}
              className={cn(
                "h-1.5 transition-all duration-500 rounded-full",
                i === currentStep ? "w-8 bg-primary" : "w-1.5 bg-muted"
              )}
            />
          ))}
        </div>

        <PremiumButton 
          onClick={handleNext}
          className="w-full max-w-xs group"
          variant={currentStep === steps.length - 1 ? 'accent' : 'primary'}
        >
          {currentStep === steps.length - 1 ? "Commencer" : "Suivant"}
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </PremiumButton>

        <button 
          onClick={() => navigate('/auth')}
          className="text-muted-foreground font-medium hover:text-primary transition-colors"
        >
          Passer l'onboarding
        </button>
      </div>
    </div>
  );
};

const cn = (...args: any[]) => args.filter(Boolean).join(' ');
