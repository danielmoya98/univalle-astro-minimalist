import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, KeyRound, Monitor, UserCheck, Maximize2, CheckCircle2 } from 'lucide-react';

const faqData = [
  {
    id: 'siu-pass',
    category: 'Recuperación de Accesos',
    icon: KeyRound,
    title: '¿Cómo recupero mi contraseña o PIN del SIU?',
    summary: 'Proceso automatizado para restablecer tu PIN de acceso al SIU Guaraní / Portal Estudiantil.',
    badge: 'Frecuente',
    steps: [
      'Ingresa a la plataforma oficial del SIU.',
      'Haz clic en el enlace "¿Olvidaste tu contraseña o PIN?".',
      'Ingresa tu código estudiante o correo institucional.',
      'Revisa tu bandeja de entrada o SPAM para validar el código.'
    ],
    linkText: 'Ir al Portal SIU',
    linkUrl: 'https://siu.univalle.edu',
    // Captura de pantalla de ejemplo desde Unsplash
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Interfaz de recuperación de contraseña'
  },
  {
    id: 'teams-access',
    category: 'Plataformas Educativas',
    icon: Monitor,
    title: 'Acceso a Microsoft Teams y Aulas Virtuales',
    summary: 'Configuración de cuenta institucional @univalle.edu para clases en vivo y entregas.',
    badge: 'TICS',
    steps: [
      'Descarga la aplicación oficial de Microsoft Teams.',
      'Inicia sesión con tu correo asignado (@univalle.edu).',
      'Tu clave inicial coincide con tu documento de identidad.',
      'Verifica tus materias asignadas en el panel principal.'
    ],
    linkText: 'Descargar Teams',
    linkUrl: 'https://teams.microsoft.com',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Plataforma de clases virtuales'
  },
  {
    id: 'student-card',
    category: 'Trámites Académicos',
    icon: UserCheck,
    title: 'Validación de Carnet Estudiantil Digital',
    summary: 'Pasos para generar tu credencial universitaria desde la aplicación móvil.',
    badge: 'Nuevo',
    steps: [
      'Asegúrate de tener la foto de perfil actualizada en el SIU.',
      'Abre la app móvil de Univalle e inicia sesión.',
      'Dirígete al apartado "Perfil" -> "Carnet Digital".',
      'Muestra el código QR habilitado en el ingreso al campus.'
    ],
    linkText: 'Ver Requisitos',
    linkUrl: '#',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Visualización de Carnet Digital'
  }
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState('siu-pass');
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {faqData.map((item) => {
        const isOpen = openId === item.id;
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-slate-50/90 border-rose-200/80 shadow-md ring-1 ring-rose-500/10'
                : 'bg-white/80 hover:bg-white border-slate-200/70 hover:border-slate-300'
            }`}
          >
            {/* Encabezado de la Tarjeta */}
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 transition-colors focus:outline-none"
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                    isOpen
                      ? 'bg-rose-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-800 bg-rose-100/80 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div
                className={`p-1.5 rounded-full border border-slate-200 text-slate-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-rose-50 text-rose-700 border-rose-200' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Contenido Desplegable (2 Columnas: Pasos + Captura Unsplash) */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-4 pb-5 pt-1 sm:px-5 border-t border-slate-200/60">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center pt-3">

                      {/* Columna Izquierda: Pasos Guiados */}
                      <div className="md:col-span-7 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-rose-700" />
                          Pasos a seguir:
                        </h4>

                        <ol className="space-y-2 text-xs text-slate-600 font-medium">
                          {item.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-100 text-rose-900 font-bold text-[10px] shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>

                        {item.linkUrl && (
                          <div className="pt-2">
                            <a
                              href={item.linkUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:text-rose-800 underline underline-offset-4 transition-colors"
                            >
                              <span>{item.linkText}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Columna Derecha: Captura / Mockup de Unsplash */}
                      <div className="md:col-span-5">
                        <div className="relative group rounded-xl overflow-hidden border border-slate-300/80 shadow-sm bg-slate-900">
                          {/* Barra estilo ventana de navegador/app */}
                          <div className="bg-slate-800 px-3 py-1.5 flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            <span className="text-[9px] font-mono text-slate-400 ml-2 truncate">
                              ejemplo_pantalla.png
                            </span>
                          </div>

                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.imageAlt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            <button
                              onClick={() => setSelectedImage(item.image)}
                              className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-bold backdrop-blur-xs"
                            >
                              <Maximize2 className="w-4 h-4" />
                              <span>Ampliar captura</span>
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[120] bg-slate-950/80 backdrop-blur-md p-4 flex items-center justify-center cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Captura ampliada"
              className="max-w-4xl max-h-[85vh] rounded-xl border border-white/20 shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
