import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  ChevronRight, 
  Apple, 
  Facebook, 
  Chrome,
  Fingerprint,
  ScanFace,
  ArrowLeft
} from 'lucide-react';
import { PremiumButton, PremiumInput, GlassCard } from '@/components/ui-premium';

export const AuthPage = () => {
  const [method, setMethod] = useState<'selection' | 'email' | 'phone' | 'otp' | 'biometric'>('selection');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (method === 'biometric') {
      const timer = setTimeout(handleAuth, 2000);
      return () => clearTimeout(timer);
    }
  }, [method]);

  const handleAuth = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const socialLogins = [
    { icon: Chrome, label: 'Google', color: 'bg-[#4285F4]/10 text-[#4285F4]' },
    { icon: Apple, label: 'Apple', color: 'bg-black/5 text-black' },
    { icon: Facebook, label: 'Facebook', color: 'bg-[#1877F2]/10 text-[#1877F2]' },
  ];

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[30%] bg-primary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[60%] h-[30%] bg-accent/10 rounded-full blur-[80px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto w-full relative z-10"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-xl mx-auto mb-6 flex items-center justify-center p-1 overflow-hidden border border-white/50">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/attachments/72b6309b-6027-4868-ba4c-c7ed63162d77/1782607579874_ChatGPT_Image_27_juin_2026__22_28_33.png" alt="Yaye Connect" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-black tracking-tight">Bienvenue</h1>
          <p className="text-muted-foreground mt-2">Connectez-vous pour continuer</p>
        </div>

        <AnimatePresence mode="wait">
          {method === 'selection' && (
            <motion.div 
              key="selection"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              <GlassCard className="p-4 border-white/40">
                <div className="flex flex-col gap-3">
                  {socialLogins.map((social) => (
                    <button 
                      key={social.label}
                      onClick={handleAuth}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all border border-white/20 shadow-sm group"
                    >
                      <div className={`p-2 rounded-xl ${social.color}`}>
                        <social.icon size={20} />
                      </div>
                      <span className="font-semibold flex-1 text-left">Continuer avec {social.label}</span>
                      <ChevronRight size={18} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-muted"></span></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-muted-foreground font-medium">Ou avec vos identifiants</span></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <PremiumButton variant="glass" className="py-4" onClick={() => setMethod('email')}>
                    <Mail size={20} />
                    Email
                  </PremiumButton>
                  <PremiumButton variant="glass" className="py-4" onClick={() => setMethod('phone')}>
                    <Phone size={20} />
                    Mobile
                  </PremiumButton>
                </div>
              </GlassCard>

              <div className="text-center mt-8">
                <button 
                  onClick={() => setMethod('biometric')}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:bg-primary/5 px-4 py-2 rounded-full transition-all"
                >
                  <Fingerprint size={24} />
                  Biométrie (Face ID / Touch ID)
                </button>
              </div>
            </motion.div>
          )}

          {method === 'email' && (
            <motion.div 
              key="email"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <button onClick={() => setMethod('selection')} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft size={20} /> Retour
              </button>
              <h2 className="text-2xl font-bold">Via Email</h2>
              <div className="space-y-4">
                <PremiumInput placeholder="votre@email.com" type="email" />
                <PremiumInput placeholder="Mot de passe" type="password" />
                <PremiumButton className="w-full" onClick={handleAuth} disabled={isLoading}>
                  {isLoading ? "Chargement..." : "Se connecter"}
                </PremiumButton>
              </div>
            </motion.div>
          )}

          {method === 'phone' && (
            <motion.div 
              key="phone"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <button onClick={() => setMethod('selection')} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft size={20} /> Retour
              </button>
              <h2 className="text-2xl font-bold">Numéro de téléphone</h2>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-20 bg-muted/50 rounded-2xl flex items-center justify-center font-bold text-sm">+221</div>
                  <PremiumInput placeholder="77 000 00 00" type="tel" className="flex-1" />
                </div>
                <PremiumButton className="w-full" onClick={() => setMethod('otp')}>
                  Envoyer le code OTP
                </PremiumButton>
              </div>
            </motion.div>
          )}

          {method === 'otp' && (
            <motion.div 
              key="otp"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Vérification OTP</h2>
              <p className="text-muted-foreground">Nous avons envoyé un code au +221 77 *** ** 00</p>
              <div className="flex gap-3 justify-center">
                {[1, 2, 3, 4].map((i) => (
                  <input 
                    key={i} 
                    type="text" 
                    maxLength={1} 
                    className="w-14 h-14 bg-muted/50 rounded-2xl text-center text-2xl font-bold focus:ring-2 focus:ring-primary/20 outline-none"
                    autoFocus={i === 1}
                  />
                ))}
              </div>
              <PremiumButton className="w-full mt-4" onClick={handleAuth}>
                Vérifier
              </PremiumButton>
              <p className="text-center text-sm text-muted-foreground">
                Pas reçu ? <button className="text-primary font-bold">Renvoyer</button>
              </p>
            </motion.div>
          )}

          {method === 'biometric' && (
            <motion.div 
              key="biometric"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center py-10"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 relative">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 rounded-full bg-primary/5"
                />
                <ScanFace size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-2">Authentification face</h2>
              <p className="text-muted-foreground text-center mb-10">Veuillez regarder votre écran pour vous identifier</p>
              <PremiumButton variant="glass" onClick={() => setMethod('selection')}>
                Utiliser une autre méthode
              </PremiumButton>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          En continuant, vous acceptez nos <br />
          <button className="text-foreground font-semibold">Conditions d'utilisation</button> et <button className="text-foreground font-semibold">Politique de confidentialité</button>
        </p>
      </motion.div>
    </div>
  );
};
