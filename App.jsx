import React from 'react'; import { motion } from 'framer-motion'; import { Menu, MessageCircle, CheckCircle } from 'lucide-react';

const plans = [ { title: 'Hipertrofia', benefits: ['Ganho muscular', 'Treino progressivo', 'Estratégia de evolução'], image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48' }, { title: 'Emagrecimento', benefits: ['Redução de gordura corporal', 'Treinos intensos', 'Acompanhamento contínuo'], image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438' }, { title: 'Condicionamento Físico', benefits: ['Mais resistência', 'Mais disposição', 'Mais performance'], image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a' } ];

const testimonials = [ '"Treinos personalizados e resultados reais."', '"Perdi 12kg com acompanhamento do Victor."', '"Melhorei minha performance e autoestima."' ];

export default function VictorOliveiraSite() { return ( <div className="bg-black text-white min-h-screen font-sans"> {/* Header */} <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-red-600/20"> <div className="max-w-7xl mx-auto flex justify-between items-center p-4"> <h1 className="text-2xl font-bold text-red-500">Victor Oliveira</h1> <nav className="hidden md:flex gap-6 text-sm"> <a href="#treinos">Treinos</a> <a href="#sobre">Sobre</a> <a href="#resultados">Resultados</a> <a href="#faq">FAQ</a> </nav> <Menu className="md:hidden text-red-500" /> </div> </header>

{/* Hero */}
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-red-950 to-black pt-20">
    <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl px-6">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold uppercase"
        >
          Plano <span className="text-red-500">Individual</span>
        </motion.h2>
        <p className="mt-4 text-gray-300 text-lg">
          Transforme seu corpo com treinos personalizados e acompanhamento profissional.
        </p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold">
          Começar Agora
        </button>
      </div>
      <img
        src="https://i.postimg.cc/Wb7q9MXQ/Screenshot-20260503-121621-Instagram.jpg"
        alt="Personal Trainer"
        className="rounded-3xl shadow-2xl"
      />
    </div>
  </section>

  {/* Treinos */}
  <section id="treinos" className="py-20 max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12 text-red-500">Programas de Treino</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan, i) => (
        <div key={i} className="bg-zinc-900 rounded-3xl overflow-hidden border border-red-500/20">
          <img src={plan.image} alt={plan.title} className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            {plan.benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-2 mb-2 text-gray-300">
                <CheckCircle className="text-red-500 w-5 h-5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Sobre */}
  <section id="sobre" className="py-20 bg-zinc-950 px-6 text-center">
    <h2 className="text-4xl font-bold text-red-500 mb-6">Sobre Victor Oliveira</h2>
    <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
      Minha missão é ajudar pessoas a conquistarem saúde, autoestima e performance.
      Cada treino é adaptado ao seu objetivo, respeitando seu ritmo e potencial.
    </p>
  </section>

  {/* Feedbacks */}
  <section className="py-20 px-6 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10">
      Feedbacks <span className="text-red-500">de Alunos</span>
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((item, i) => (
        <div key={i} className="bg-zinc-900 p-6 rounded-2xl border border-red-500/20">
          {item}
        </div>
      ))}
    </div>
  </section>

  {/* Resultados */}
  <section id="resultados" className="py-20 bg-black px-6">
    <h2 className="text-4xl font-bold text-center mb-10 text-red-500">Resultados Reais</h2>
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <img 
        src="https://i.postimg.cc/85hz7SYh/Screenshot-20260503-121642-Instagram.jpg" 
        alt="Resultado aluno 1"
        className="rounded-2xl w-full object-cover"
      />
      <img 
        src="https://i.postimg.cc/m2ZggKy1/Screenshot-20260503-121701-Instagram.jpg" 
        alt="Resultado aluno 2"
        className="rounded-2xl w-full object-cover"
      />
    </div>
  </section>

  {/* FAQ */}
  <section id="faq" className="py-20 px-6 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10 text-red-500">FAQ</h2>
    <div className="space-y-4">
      <div className="bg-zinc-900 p-5 rounded-2xl">Como funciona o acompanhamento online?</div>
      <div className="bg-zinc-900 p-5 rounded-2xl">Os treinos são personalizados?</div>
      <div className="bg-zinc-900 p-5 rounded-2xl">Quanto tempo para ver resultados?</div>
    </div>
  </section>

  {/* WhatsApp Floating Button */}
  <a
    href="https://wa.me/5511942295298?text=Olá%20Victor,%20quero%20saber%20mais%20sobre%20sua%20consultoria"
    className="fixed bottom-6 right-6 bg-red-600 p-4 rounded-full shadow-lg"
  >
    <MessageCircle />
  </a>
</div>

); }
