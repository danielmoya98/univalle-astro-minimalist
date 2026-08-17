import React from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from './FAQAccordion.jsx';
import { ShieldCheck, HelpCircle, Phone, ArrowUpRight, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22 }
  }
};

export default function BentoFAQ() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -2 }}
        className="md:col-span-8 bg-gradient-to-br from-rose-950/90 via-rose-900/90 to-slate-950/95 backdrop-blur-md text-white p-6 sm:p-7 rounded-xl border border-rose-800/40 shadow-xl flex flex-col justify-between relative overflow-hidden group"
      >
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-rose-600/20 rounded-full blur-2xl group-hover:bg-rose-500/30 transition-all duration-500"></div>

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-rose-500/20 border border-rose-500/30 text-rose-300 text-[11px] font-bold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
            <span>Portal Informativo</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none">
            SEDE <span className="text-rose-500">SUCRE</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-md font-medium leading-relaxed">
            Resolvemos tus dudas sobre accesos al SIU, Microsoft Teams, restablecimiento de contraseñas y trámites universitarios.
          </p>
        </div>

        <div className="relative z-10 pt-4 flex items-center justify-between text-[11px] text-rose-200 font-semibold border-t border-rose-800/50 mt-4">
          <span>Universidad Privada del Valle</span>
          <span className="flex items-center gap-1 text-white font-bold">
            Atención Estudiantil <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
          </span>
        </div>
      </motion.div>

      {/* Tarjeta 2: Resumen Centro de Ayuda TICS */}
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.01 }}
        className="md:col-span-4 bg-white/95 backdrop-blur-xl p-6 rounded-xl border border-white/80 shadow-xl flex flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-lg bg-rose-50 text-rose-700 border border-rose-200/80">
            <HelpCircle className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Soporte TICS</span>
        </div>

        <div className="my-3 space-y-1">
          <span className="text-2xl font-black text-rose-950 tracking-tight">Centro de Ayuda</span>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">Guías paso a paso para recuperación de cuentas, PINES y SIU.</p>
        </div>

        <div className="w-full bg-rose-100 h-1.5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-rose-700 h-full rounded-full"
          />
        </div>
      </motion.div>

      {/* Tarjeta 3: FAQ Acordeón */}
      <motion.div
        variants={cardVariants}
        className="md:col-span-8 bg-white/95 backdrop-blur-xl p-5 sm:p-6 rounded-xl border border-white/80 shadow-2xl"
      >
        <div className="mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
            Preguntas Frecuentes & Guías
          </h2>
        </div>

        <FAQAccordion />
      </motion.div>

      {/* Tarjeta 4: Soporte Directo por WhatsApp */}
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -2 }}
        className="md:col-span-4 bg-slate-900/95 backdrop-blur-xl text-white p-6 rounded-xl border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group"
      >
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>

        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 w-fit border border-emerald-500/30">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">En línea</span>
          </div>

          <h3 className="text-base font-bold text-white leading-snug">¿Requieres asistencia personalizada?</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            Contacta directamente con la mesa de ayuda TICS de Univalle Sede Sucre por WhatsApp.
          </p>
        </div>

        <motion.a
          href="https://wa.me/5916441664"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-10 mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-950/50"
        >
          <span>Chatear por WhatsApp</span>
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </motion.div>

    </motion.div>
  );
}
