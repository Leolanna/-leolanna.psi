import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-[420px] z-[100]"
        >
          <div className="bg-carvao-dark border border-ambar/30 p-6 md:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-ambar/5 to-transparent pointer-events-none" />
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-serif text-lg text-dourado tracking-wide">Privacidade e Cookies</h3>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-texto-muted hover:text-branco transition-colors p-1 bg-transparent border-none cursor-pointer"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>
            
            <p className="text-[0.85rem] text-texto-muted leading-relaxed mb-6">
              Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. Ao continuar navegando, você concorda com nossa política de privacidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-ambar text-carvao text-[0.65rem] tracking-[0.14em] uppercase py-3 px-6 hover:bg-dourado transition-colors cursor-pointer border-none font-medium"
              >
                Aceitar todos
              </button>
              <button 
                onClick={handleDecline}
                className="flex-1 border border-ambar/20 text-texto-muted text-[0.65rem] tracking-[0.14em] uppercase py-3 px-6 hover:text-branco hover:border-ambar/40 transition-all cursor-pointer bg-transparent"
              >
                Apenas essenciais
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
