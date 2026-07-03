import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ElectorInfo() {
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)

  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert('La geolocalización no está disponible en este navegador')
      return
    }
    
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
        setLoading(false)
      },
      (error) => {
        alert('No se pudo obtener la ubicación: ' + error.message)
        setLoading(false)
      }
    )
  }

  return (
    <>
      <main className="max-w-[1280px] mx-auto px-6 py-12 space-y-16">
        {/* Header */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#003770] border border-blue-100">
              <span className="material-symbols-outlined text-[18px]">how_to_vote</span>
              <span className="text-xs font-bold uppercase tracking-wider">GUÍA OFICIAL 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#003770] tracking-tight leading-tight">
              Información Clave para Electores
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Encuentra tu centro de votación, mesa asignada y mantente informado sobre todos los detalles de las Elecciones Generales del <strong className="text-[#003770]">Domingo, 12 de abril de 2026</strong>.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                alt="Electores votando"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9CI4QTYfqTOmyqbjX0BizDQvT8frqiWrKug6thkw8AZdyfnauNjHMcR4rXe8Rdoie1_nA1SE0xDEy_P0T3NoxPnA6lbczgXLFEjsp6oZU5bIm_OKlD9Fo07DZMxaQoTHaVXvCSL4CeHTKYKI2FILI_gh_-Ce7HE24yi2ZrHojM9Ijl8ynkt3AT2MVrBKIlYJ6a_TEvlqbs6-Xm4SLmCk7wnpJTUly2iGYBH83Rt5MxMfxccYfbPGDYNlOPs_pIWSrt639bYqz9VI"
              />
            </div>
          </div>
        </section>

        {/* 1. Consulta tu mesa y geolocalización */}
        <section className="space-y-8">
          <div className="border-l-4 border-[#003770] pl-6">
            <h2 className="text-3xl font-bold text-[#003770]">
              Consulta tu local y mesa de votación
            </h2>
            <p className="text-slate-600 mt-2 text-lg">
              Servicios oficiales de la ONPE para las Elecciones Generales 2026
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-[#003770] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <h3 className="text-xl font-bold text-[#003770] mb-2">Público General</h3>
              <p className="text-slate-500 mb-8 flex-1">
                Consulta tu lugar de votación exacto utilizando tu número de DNI.
              </p>
              <a 
                href="https://consultaelectoral.onpe.gob.pe/inicio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#003770] text-white text-center px-6 py-3.5 rounded-xl font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-blue-900/10"
              >
                Consultar Ubicación
              </a>
            </div>
            <div className="flex flex-col p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 text-green-700 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">map</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Miembros de Mesa</h3>
              <p className="text-slate-500 mb-8 flex-1">
                Geolocalización precisa de votaciones y herramientas exclusivas.
              </p>
              <a 
                href="https://eg2026.onpe.gob.pe/para-electores/elige-tu-local-de-votacion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white text-center px-6 py-3.5 rounded-xl font-semibold hover:bg-green-700 active:scale-95 transition-all shadow-lg shadow-green-900/10"
              >
                Acceder al Servicio
              </a>
            </div>
          </div>
        </section>

        {/* 2. Elige tu local */}
        <section className="bg-yellow-50/50 rounded-3xl p-8 md:p-12 border border-yellow-100 flex flex-col md:flex-row items-center gap-10">
          <div className="w-24 h-24 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-700 shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-5xl">edit_location_alt</span>
          </div>
          <div className="space-y-4 flex-1">
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-200 text-yellow-800 text-xs font-bold tracking-wide uppercase">
              Lanzamiento Inminente
            </div>
            <h3 className="text-3xl font-bold text-[#003770]">
              ¡Pronto Podrás Elegir Dónde Votar!
            </h3>
            <p className="text-slate-600 text-lg">
              A finales de noviembre de 2025, la ONPE habilitará la plataforma <strong>"Elige Tu Local de Votación" (ETLV)</strong>. Podrás seleccionar hasta 3 locales cercanos a tu domicilio o trabajo utilizando un mapa interactivo.
            </p>
          </div>
        </section>

        <section className="grid sm:grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Cargos */}
            <div>
              <h3 className="text-2xl font-bold text-[#003770] mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined">account_balance</span>
                Los Cargos que Elegirás
              </h3>
              <div className="space-y-4">
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-[#003770] text-lg mb-2">Sistema Bicameral</h4>
                  <p className="text-slate-600">Se restablece el sistema bicameral. Votarás por Presidente, Vicepresidentes, 60 Senadores, 130 Diputados y Representantes al Parlamento Andino.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-[#003770] text-lg mb-2">Voto Digital</h4>
                  <p className="text-slate-600">Se amplía la aplicación del Voto Digital para grupos específicos (militares, policiales, salud, peruanos en el extranjero) modernizando el proceso y asegurando un conteo rápido.</p>
                </div>
              </div>
            </div>

            {/* Video Informativo */}
            <div>
              <h3 className="text-2xl font-bold text-[#003770] mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined">play_circle</span>
                Video Informativo: Guía Electoral
              </h3>
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
                <video controls width="100%" height="auto" preload="metadata" className="w-full aspect-video">
                  <source src="/videos/Cedula_votacion.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video HTML5.
                </video>
              </div>
            </div>

            {/* Documentos */}
            <div>
              <h3 className="text-2xl font-bold text-[#003770] mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined">folder</span>
                Documentos Oficiales
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Guía Presidencial', desc: 'Proceso electoral', file: 'guia-del-elector-2026.pdf', icon: 'how_to_vote' },
                  { name: 'Guía Congresal', desc: 'Senadores y Diputados', file: 'cronograma-electoral-2026.pdf', icon: 'groups' },
                  { name: 'Parlamento Andino', desc: 'Representación', file: 'sistema-bicameral-2026.pdf', icon: 'account_balance' },
                  { name: 'Voto Digital', desc: 'Información técnica', file: 'voto-digital-2026.pdf', icon: 'devices' }
                ].map((doc, idx) => (
                  <a key={idx} href={`/documentos/pdfs/${doc.file}`} download={doc.file} className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-[#003770] hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#003770] rounded-lg flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined">{doc.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 group-hover:text-[#003770] transition-colors">{doc.name}</p>
                      <p className="text-sm text-slate-500">{doc.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            
            {/* Próximos Eventos */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#003770] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">event</span>
                Eventos Clave
              </h3>
              <div className="relative border-l-2 border-slate-100 ml-3 space-y-8">
                <div className="relative pl-6">
                  <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
                  <p className="font-bold text-slate-800">Inscripción Final</p>
                  <p className="text-sm text-slate-500 mt-1">23 de diciembre de 2025</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
                  <p className="font-bold text-slate-800">Sorteo de Miembros</p>
                  <p className="text-sm text-slate-500 mt-1">29 de enero de 2026</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
                  <p className="font-bold text-slate-800">Día de las Elecciones</p>
                  <p className="text-sm text-slate-500 mt-1">12 de abril de 2026</p>
                </div>
              </div>
            </div>

            {/* Noticias El Comercio */}
            <div className="bg-[#003770] text-white p-8 rounded-2xl shadow-xl shadow-blue-900/10">
              <h3 className="font-bold text-xl mb-4">Contexto Político</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Mantente informado sobre el avance de las candidaturas y el análisis político de los comicios.
              </p>
              <a href="https://elcomercio.pe/politica/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">newspaper</span>
                  <span className="font-semibold text-sm">El Comercio (Política)</span>
                </div>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>

            {/* Recomendacion */}
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-green-700">lightbulb</span>
                <span className="font-bold text-green-800">Tip Electoral</span>
              </div>
              <p className="text-sm text-green-700 leading-relaxed">
                Visita <a href="https://eg2026.onpe.gob.pe" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-green-900">eg2026.onpe.gob.pe</a> a finales de noviembre para ser de los primeros en usar ETLV.
              </p>
            </div>

          </aside>
        </section>
      </main>
    </>
  )
}