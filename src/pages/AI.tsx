import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mic, 
  Image as ImageIcon, 
  Languages, 
  Sparkles,
  Baby,
  Activity,
  Stethoscope,
  ChevronLeft
} from 'lucide-react';
import { 
  GlassCard, 
  PremiumButton, 
  TopBar, 
  PremiumInput 
} from '@/components/ui-premium';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

export const AIPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      text: "Bonjour ! Je suis Yaye AI, votre assistante maternelle. Comment puis-je vous aider aujourd'hui ?", 
      sender: 'ai', 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [lang, setLang] = useState<'FR' | 'WO' | 'EN'>('FR');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(input, lang),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  const getAIResponse = (query: string, language: string) => {
    if (language === 'WO') {
      return "Na nga def ! Ma ngi lay dimbali ci sa wér-gi-yaram ak bu sa bébé.";
    }
    if (query.toLowerCase().includes('manger') || query.toLowerCase().includes('eat')) {
      return "Pendant le deuxième trimestre, privilégiez les aliments riches en fer, magnésium et oméga-3. Évitez les produits non pasteurisés.";
    }
    return "C'est une excellente question. Je vous conseille de consulter votre sage-femme pour un avis médical précis, mais voici quelques pistes générales...";
  };

  const suggestions = [
    { text: "Alimentation", icon: Activity },
    { text: "Symptômes", icon: Stethoscope },
    { text: "Bébé", icon: Baby },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <TopBar 
        title="Yaye AI" 
        rightElement={
          <div className="bg-muted/50 rounded-xl p-1 flex gap-1">
            {(['FR', 'WO', 'EN'] as const).map(l => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-2 py-1 text-[10px] font-bold rounded-lg transition-all",
                  lang === l ? "bg-white text-primary shadow-sm" : "text-muted-foreground"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        }
      />
      
      <div 
        ref={scrollRef}
        className="flex-1 px-6 pt-32 pb-4 overflow-y-auto space-y-6"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex",
                msg.sender === 'user' ? "justify-end" : "justify-start"
              )}
            >
              <div className={cn(
                "max-w-[80%] p-4 rounded-3xl",
                msg.sender === 'user' 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
                  : "glass text-foreground rounded-tl-none border-white/20"
              )}>
                {msg.sender === 'ai' && (
                  <div className="flex items-center gap-1.5 mb-2 text-[10px] font-bold uppercase tracking-wider opacity-60">
                    <Sparkles size={12} /> Assistant IA
                  </div>
                )}
                <p className="text-[15px] leading-relaxed font-medium">{msg.text}</p>
                <div className="text-[9px] mt-2 opacity-40 text-right">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-6 pt-0 space-y-4">
        {messages.length < 3 && (
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 no-scrollbar">
            {suggestions.map((s) => (
              <button 
                key={s.text}
                onClick={() => setInput(s.text)}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full glass border-white/30 text-xs font-bold whitespace-nowrap"
              >
                <s.icon size={14} className="text-primary" />
                {s.text}
              </button>
            ))}
          </div>
        )}

        <GlassCard className="p-2 border-white/40 bg-white/60 flex items-center gap-2">
          <button className="p-3 text-muted-foreground hover:text-primary transition-colors">
            <Mic size={22} />
          </button>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez votre question ici..."
            className="flex-1 bg-transparent border-none outline-none py-3 px-2 text-foreground placeholder:text-muted-foreground font-medium"
          />
          <PremiumButton 
            size="icon" 
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <Send size={20} />
          </PremiumButton>
        </GlassCard>
      </div>
      <div className="h-24 md:h-0" />
    </div>
  );
};

const cn = (...args: any[]) => args.filter(Boolean).join(' ');
