import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10">
      {/* Navigation */}
      <header>
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-5 transition-all duration-400 border-b ${scrolled ? 'bg-carvao/90 border-ambar/20 backdrop-blur-xl' : 'bg-transparent border-transparent'}`}>
          <button onClick={() => scrollTo('hero')} className="font-serif text-lg tracking-wider text-dourado cursor-pointer bg-transparent border-none">
            @leolanna.psi
          </button>
          <ul className="hidden md:flex gap-10 list-none">
            {['metodologia', 'depoimentos', 'sobre', 'ecossistema'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollTo(item)} 
                  className="text-[0.72rem] tracking-[0.12em] uppercase text-texto-muted hover:text-dourado transition-colors cursor-pointer bg-transparent border-none"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => scrollTo('contato')} 
            className="text-[0.7rem] tracking-[0.12em] uppercase text-ambar border border-ambar/20 px-5 py-2 hover:bg-ambar hover:text-carvao transition-all cursor-pointer bg-transparent"
          >
            Iniciar conversa
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen grid place-items-center px-[6vw] pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[min(600px,90vw)] h-[min(600px,90vw)] bg-radial from-ambar/10 to-transparent pointer-events-none" />
          
          <div className="max-w-[860px] text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-10 flex justify-center"
            >
              <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <circle cx="32" cy="32" r="28" stroke="#b5752a" strokeWidth="1"/>
                <line x1="32" y1="4" x2="32" y2="60" stroke="#b5752a" strokeWidth="1.2"/>
              </svg>
            </motion.div>

            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[0.7rem] tracking-[0.2em] uppercase text-ambar mb-6 block"
            >
              Mentoria de Liderança · Autogestão Psicossocial
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-serif text-[clamp(2.1rem,8vw,5.2rem)] font-light leading-[1.12] mb-8"
            >
              O líder que não gerencia seus próprios riscos internos <em className="text-dourado italic not-italic">compromete tudo ao redor.</em>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-[1.05rem] text-texto-muted max-w-[520px] mx-auto mb-14 leading-relaxed"
            >
              Desenvolvimento individual do indivíduo que lidera, com rigor, estrutura interna e equilíbrio entre vida pessoal e profissional como eixo central.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button onClick={() => scrollTo('contato')} className="bg-ambar text-carvao text-[0.72rem] tracking-[0.14em] uppercase px-9 py-4 hover:bg-dourado transition-colors cursor-pointer border-none">
                Iniciar conversa
              </button>
              <button onClick={() => scrollTo('metodologia')} className="border border-ambar/20 text-texto-muted text-[0.72rem] tracking-[0.14em] uppercase px-9 py-4 hover:text-branco hover:border-dourado/40 transition-all cursor-pointer bg-transparent">
                Conhecer a metodologia
              </button>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-texto-muted text-[0.6rem] tracking-[0.18em] uppercase">
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-9 bg-linear-to-b from-ambar to-transparent"
            />
            <span>Rolar</span>
          </div>
        </section>

        {/* Declaration */}
        <section id="declaracao" className="px-[6vw] py-16 md:py-28 border-t border-ambar/20">
          <div className="max-w-[900px] mx-auto grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <Reveal>
              <div className="text-[0.68rem] tracking-[0.2em] uppercase text-ambar leading-loose">
                Ponto de partida<br/>da mentoria
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <blockquote className="font-serif text-[clamp(1.35rem,4.5vw,2.6rem)] font-light italic leading-relaxed border-l border-ambar pl-7 md:pl-10">
                "O líder que não gerencia seus próprios <span className="text-dourado not-italic">riscos psicossociais internos</span> se torna, ele mesmo, um fator de risco em seu ambiente de trabalho."
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* For Whom */}
        <section id="para-quem" className="px-[6vw] py-16 md:py-28 bg-carvao-dark border-y border-ambar/20">
          <div className="text-center mb-14 md:mb-20">
            <Reveal>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ambar mb-4 block">Para quem é esta mentoria</span>
              <h2 className="font-serif text-[clamp(1.7rem,5.5vw,3.4rem)] font-light">Desenvolvida para o indivíduo <em className="text-dourado italic not-italic">que lidera</em></h2>
            </Reveal>
          </div>
          <div className="max-w-[960px] mx-auto grid md:grid-cols-3">
            {[
              { num: '01', title: 'O líder sob pressão constante', desc: 'Que sente o custo pessoal das decisões, mas não encontra espaço para processar o que carrega além das responsabilidades do cargo.' },
              { num: '02', title: 'O executivo em transição', desc: 'Que avançou na carreira, mas percebe que o desequilíbrio entre vida pessoal e profissional está se tornando insustentável.' },
              { num: '03', title: 'O líder que quer maturar', desc: 'Que busca desenvolver estrutura interna, não apenas ferramentas de gestão, para liderar com mais consistência e menos desgaste.' }
            ].map((item, i) => (
              <article key={i} className={`py-8 md:p-12 border-b md:border-b-0 border-ambar/20 ${i < 2 ? 'md:border-r' : ''}`}>
                <Reveal delay={i * 0.1}>
                  <div className="font-serif text-4xl font-light text-ambar/25 mb-6">{item.num}</div>
                  <h3 className="font-serif text-xl font-normal mb-3">{item.title}</h3>
                  <p className="text-[0.9rem] text-texto-muted leading-relaxed">{item.desc}</p>
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section id="metodologia" className="px-[6vw] py-16 md:py-28">
          <div className="text-center mb-14 md:mb-20">
            <Reveal>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ambar mb-4 block">Metodologia</span>
              <h2 className="font-serif text-[clamp(1.7rem,5.5vw,3.4rem)] font-light">Seis domínios de <em className="text-dourado italic not-italic">maturação</em></h2>
            </Reveal>
          </div>
          <div className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-px bg-ambar/20">
            {[
              { id: '01', name: 'Siu Nim Tau', sub: 'Autoconhecimento e presença interior', desc: 'O ponto de partida é sempre o centro. Antes de qualquer relação ou decisão, o líder precisa reconhecer o que opera internamente (padrões, reações habituais) e desenvolver a capacidade de estar presente para si mesmo.' },
              { id: '02', name: 'Cham Kiu', sub: 'Relação e comunicação sob tensão', desc: 'A maturidade de um líder se revela nas condições adversas. Este domínio trabalha a qualidade das relações quando os recursos internos estão reduzidos, e a comunicação precisa acontecer sem perda de estrutura.' },
              { id: '03', name: 'Biu Ji', sub: 'Gestão de crises e resiliência', desc: 'Crises revelam o que a rotina oculta. O trabalho é desenvolver a capacidade de manter eixo interior mesmo quando o ambiente perde estabilidade, recuperando o equilíbrio com mais velocidade e clareza.' },
              { id: '04', name: 'Mui Fa Jong', sub: 'Obstáculos e sistemas rígidos', desc: 'Nenhum líder opera no vácuo. Estruturas organizacionais, culturas estabelecidas e hierarquias criam fricção. Este domínio desenvolve a capacidade de navegar obstáculos sem perder movimento, sem comprometer a integridade.' },
              { id: '05', name: 'Luk Dim Bun Gwan', sub: 'Visão estratégica e antecipação', desc: 'A liderança madura não apenas responde: antecipa. Desenvolver o olhar que alcança além do imediato, reconhece padrões e organiza decisões com horizonte mais largo sem perder atenção ao que está próximo.' },
              { id: '06', name: 'Baat Jaam Do', sub: 'Decisão, cortes necessários e legado', desc: 'O domínio final é sobre o que se sustenta no tempo. Decidir com clareza, inclusive o que precisa ser cortado, e construir uma liderança que deixa algo consistente depois que o líder não está mais presente.' }
            ].map((item, i) => (
              <article key={i} className="bg-carvao p-8 md:p-12 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-0.5 h-0 bg-ambar group-hover:h-full transition-all duration-500" />
                <Reveal delay={i * 0.1}>
                  <div className="font-serif text-[0.85rem] text-ambar tracking-wider mb-2">{item.id}</div>
                  <h3 className="font-serif text-2xl font-normal mb-2">{item.name}</h3>
                  <div className="text-[0.78rem] tracking-wider uppercase text-dourado mb-4">{item.sub}</div>
                  <p className="text-[0.97rem] text-texto-muted leading-relaxed">{item.desc}</p>
                  <div className="absolute -bottom-6 -right-4 font-serif text-8xl md:text-9xl font-light text-ambar/5 pointer-events-none select-none">
                    {item.id}
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="px-[6vw] py-16 md:py-28 bg-carvao-dark border-y border-ambar/20">
          <div className="text-center mb-14 md:mb-20">
            <Reveal>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ambar mb-4 block">Depoimentos</span>
              <h2 className="font-serif text-[clamp(1.7rem,5.5vw,3.4rem)] font-light">O que dizem os que <em className="text-dourado italic not-italic">desenvolveram.</em></h2>
            </Reveal>
          </div>

          <div className="max-w-[960px] mx-auto space-y-px bg-ambar/20">
            {/* Featured Top */}
            <div className="grid md:grid-cols-[1fr_2fr] bg-carvao">
              <div className="hidden md:flex items-center justify-center p-12 border-r border-ambar/20">
                <span className="text-[0.67rem] tracking-[0.2em] uppercase text-ambar vertical-rl rotate-180">Em processo</span>
              </div>
              <div className="p-8 md:p-12 relative">
                <span className="absolute top-6 left-8 font-serif text-6xl text-ambar/30">“</span>
                <p className="font-serif text-xl md:text-2xl font-light italic leading-relaxed pt-6">
                  A cada sessão, sinto o quão importantes são as conversas e tudo o que desenvolvo com o Léo. O processo tem feito muita diferença para mim e, de fato, <span className="text-dourado not-italic">mudado minha vida.</span>
                </p>
                <div className="mt-8 pt-4 border-t border-ambar/20">
                  <span className="text-[0.7rem] tracking-widest uppercase text-dourado">Thiago</span>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-px">
              {[
                { name: 'Camila', text: 'Me ajudou muito e continua abrindo minha mente em vários processos da minha vida, <em class="text-dourado not-italic">tanto pessoal como profissional.</em> Evolui muito a partir já da minha primeira sessão.' },
                { name: 'Silas', text: 'Não ficou só me perguntando coisas aleatórias — ele realmente <em class="text-dourado not-italic">agiu como um ser humano,</em> prestando atenção e ponderando coisas que faziam sentido para aquela conversa.' },
                { name: 'Pauline', text: 'O Léo te deixa à vontade para falar o que pensa e depois comenta tudo de forma calma, <em class="text-dourado not-italic">ajudando a pensar mais profundamente</em> sobre o assunto.' }
              ].map((item, i) => (
                <div key={i} className="bg-carvao p-8 md:p-12 flex flex-col relative">
                  <span className="absolute top-6 left-8 font-serif text-5xl text-ambar/30">“</span>
                  <p className="font-serif text-lg font-light italic leading-relaxed pt-6 mb-8 flex-grow" dangerouslySetInnerHTML={{ __html: item.text }} />
                  <div className="pt-4 border-t border-ambar/20">
                    <span className="text-[0.7rem] tracking-widest uppercase text-dourado">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Bottom */}
            <div className="grid md:grid-cols-[2fr_1fr] bg-carvao">
              <div className="p-8 md:p-12 relative order-2 md:order-1">
                <span className="absolute top-6 left-8 font-serif text-6xl text-ambar/30">“</span>
                <p className="font-serif text-xl md:text-2xl font-light italic leading-relaxed pt-6">
                  Imaginei que seria uma consulta em que eu me apresentaria ao Léo e, na verdade, <span className="text-dourado not-italic">ele que acabou me apresentando para mim mesmo.</span>
                </p>
                <div className="mt-8 pt-4 border-t border-ambar/20">
                  <span className="text-[0.7rem] tracking-widest uppercase text-dourado">Lucas</span>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center p-12 border-l border-ambar/20 order-1 md:order-2">
                <span className="text-[0.67rem] tracking-[0.2em] uppercase text-ambar vertical-rl">Autoconhecimento</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="px-[6vw] py-16 md:py-28 bg-carvao-dark">
          <div className="max-w-[960px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-24 items-start">
            <Reveal>
              <div className="relative group">
                <img
                  src="/leo-lanna.jpg"
                  alt="Léo Lanna — Psicólogo do Trabalho e Mentor de Líderes"
                  className="w-full grayscale contrast-110 brightness-100 border border-ambar/15 shadow-2xl"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800";
                    target.onerror = null;
                  }}
                />
                <span className="block mt-4 text-[0.65rem] tracking-widest uppercase text-ambar">Léo Lanna</span>
              </div>
            </Reveal>
            <article>
              <Reveal>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ambar mb-5 block">Sobre Léo Lanna</span>
                <h2 className="font-serif text-[clamp(1.65rem,5vw,2.8rem)] font-light leading-tight mb-7">Psicólogo do Trabalho.<br/><em className="text-dourado italic not-italic">Mentor de líderes.</em></h2>
                <div className="space-y-6 text-texto-muted leading-relaxed">
                  <p>A mentoria parte de uma premissa simples: o desenvolvimento do líder não acontece em paralelo à sua vida. Acontece dentro dela. O desequilíbrio entre vida pessoal e profissional não desaparece quando a reunião começa.</p>
                  <p>Minha formação combina Psicologia do Trabalho, Direito e Gestão de Empresas. Cada área contribui para uma visão do indivíduo que lidera como um sistema inteiro, não apenas uma função ou um cargo. A prática encorporada do Ving Tsun oferece um mapa filosófico para organizar esse desenvolvimento.</p>
                </div>
                <div className="mt-10 space-y-3">
                  {[
                    'Psicólogo do Trabalho — CRP 04/60663',
                    'Especialização em Gestão de Empresas',
                    'Formação em Direito',
                    'Praticante de Ving Tsun',
                    'Sócio-Fundador · Instituto Entrementes®'
                  ].map((cred, i) => (
                    <div key={i} className="flex items-baseline gap-4 text-[0.92rem] text-texto-muted">
                      <div className="w-1 h-1 bg-ambar rounded-full shrink-0 mt-1.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </article>
          </div>
        </section>

        {/* Ecosystem */}
        <section id="ecossistema" className="px-[6vw] py-16 md:py-28 border-t border-ambar/20">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-14 md:mb-20">
              <Reveal>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ambar mb-4 block">Ecossistema de marcas</span>
                <h2 className="font-serif text-[clamp(1.7rem,5.5vw,3.4rem)] font-light">Duas frentes. <em className="text-dourado italic not-italic">Um propósito.</em></h2>
              </Reveal>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-ambar/20 mb-14">
              {[
                { label: 'Instituto Entrementes®', title: 'A organização', items: ['Gestão de riscos psicossociais organizacionais', 'NR-01, GRO, PGR, QRP', 'Linguagem técnica e regulatória', 'Público: RH estratégico, jurídico, C-suite'] },
                { label: '@leolanna.psi', title: 'O indivíduo que lidera', items: ['Desenvolvimento individual do líder', 'Autogestão emocional e psicossocial', 'Equilíbrio vida pessoal / vida profissional', 'Público: líderes e executivos em desenvolvimento'] }
              ].map((card, i) => (
                <article key={i} className="bg-carvao p-8 md:p-12">
                  <Reveal delay={i * 0.1}>
                    <div className="text-[0.65rem] tracking-[0.18em] uppercase text-ambar mb-5">{card.label}</div>
                    <h3 className="font-serif text-2xl font-normal mb-4">{card.title}</h3>
                    <ul className="space-y-2">
                      {card.items.map((item, j) => (
                        <li key={j} className="text-[0.95rem] text-texto-muted pl-4 relative">
                          <span className="absolute left-0 text-ambar">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </article>
              ))}
            </div>
            <Reveal>
              <p className="font-serif text-lg md:text-xl italic font-light text-texto-muted text-center leading-relaxed px-4 md:px-8">
                "O Instituto Entrementes® estrutura a gestão de riscos psicossociais da organização. @leolanna.psi acompanha o desenvolvimento do indivíduo que lidera. Porque <span className="text-dourado not-italic">o equilíbrio que o líder constrói em si mesmo se reflete em tudo ao redor.</span>"
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="px-[6vw] py-20 md:py-32 bg-carvao-dark border-t border-ambar/20 text-center">
          <div className="max-w-[620px] mx-auto">
            <Reveal>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ambar mb-7 block">Próximo passo</span>
              <h2 className="font-serif text-[clamp(1.7rem,5.5vw,3.4rem)] font-light leading-tight mb-6">O desenvolvimento começa<br/>com uma <em className="text-dourado italic not-italic">conversa direta.</em></h2>
              <p className="text-lg text-texto-muted mb-10 leading-relaxed">Sem formulários genéricos. Uma conversa para entender onde você está e o que faz sentido construir a partir dali.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://wa.me/5531998900757?text=Ol%C3%A1%2C%20L%C3%A9o!%20Gostaria%20de%20saber%20mais%20sobre%20a%20mentoria." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-ambar text-carvao text-[0.72rem] tracking-[0.14em] uppercase px-9 py-4 hover:bg-dourado transition-colors inline-flex items-center gap-2 no-underline"
                >
                  <MessageCircle size={16} />
                  Entrar em contato
                </a>
                <a 
                  href="https://instagram.com/leolanna.psi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-ambar/20 text-texto-muted text-[0.72rem] tracking-[0.14em] uppercase px-9 py-4 hover:text-branco hover:border-dourado/40 transition-all inline-flex items-center gap-2 no-underline"
                >
                  <Instagram size={16} />
                  @leolanna.psi
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-[6vw] py-10 border-t border-ambar/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="text-dourado font-serif text-sm mb-2">@leolanna.psi</div>
          <div className="text-texto-muted text-[0.68rem] tracking-wider">© 2026 Léo Lanna · Mentor de Líderes em Autogestão Psicossocial · Belo Horizonte, MG</div>
        </div>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/leolannapsi/" target="_blank" rel="noopener noreferrer" className="text-texto-muted hover:text-dourado transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://www.instagram.com/leolanna.psi/" target="_blank" rel="noopener noreferrer" className="text-texto-muted hover:text-dourado transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}
