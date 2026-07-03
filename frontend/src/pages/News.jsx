import React, { useEffect, useState } from 'react'
import { NEWS_DATA, OFFICIAL_PLATFORMS_DATA, VOTER_GUIDES_DATA } from '../data/newsData'

export default function News(){
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(()=>{
		setLoading(true)
		// Simular tiempo de carga
		setTimeout(() => {
			setItems(NEWS_DATA)
			setLoading(false)
		}, 300)
	},[])

	if(loading) return (<div><h3 className='font-semibold'>Noticias verificadas</h3><p>Cargando...</p></div>)
	if(error) return (<div><h3 className='font-semibold'>Noticias verificadas</h3><p className='text-red-600'>{error}</p></div>)

	return (
		<div className="container-mobile min-h-screen" style={{ padding: '0' }}>
			<div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
				
				<div className='max-w-5xl mx-auto'>
					{/* Header Section */}
					<div className='bg-white/80 backdrop-blur-md shadow-xl border border-white/20 p-6 sm:p-8 md:p-10 mb-8' style={{borderRadius: '24px'}}>
						<div className='flex flex-col md:flex-row items-center gap-6'>
							<div className='text-5xl md:text-6xl bg-gradient-to-tr from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg'>
								📰
							</div>
							<div className='text-center md:text-left'>
								<h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-3 tracking-tight'>
									Noticias Electorales 2026
								</h1>
								<p className='text-gray-500 text-sm sm:text-base md:text-lg font-medium max-w-2xl'>
									Información verificada y actualizada sobre las Elecciones Generales 2026. Mantente informado con fuentes oficiales.
								</p>
							</div>
						</div>
					</div>

					{/* Destacado */}
					<section className='bg-gradient-to-r from-red-500 to-red-700 shadow-xl p-1 mb-10' style={{borderRadius: '24px'}}>
						<div className='bg-white/95 backdrop-blur p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6' style={{borderRadius: '22px'}}>
							<div className="text-5xl md:text-6xl animate-pulse">🔥</div>
							<div className="text-center md:text-left flex-1">
								<h3 className="font-bold text-red-700 mb-2 text-xl md:text-2xl tracking-tight">
									Cobertura Completa Especial
								</h3>
								<p className="text-gray-600 mb-5 text-sm md:text-base font-medium">
									Sigue el análisis minuto a minuto de las Elecciones Generales 2026 por El Comercio.
								</p>
								<a 
									href="https://elcomercio.pe/politica/" 
									target="_blank" 
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-bold px-6 py-3"
									style={{borderRadius: '12px'}}
								>
									<span>Leer en El Comercio</span>
									<span className="text-xl">➔</span>
								</a>
							</div>
						</div>
					</section>

					{/* Grid de Noticias */}
					<section>
						<div className='flex items-center gap-3 mb-8'>
							<span className='text-3xl'>🔍</span>
							<h2 className='text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight'>
								Últimas Actualizaciones
							</h2>
						</div>
				
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
							{items.map(n => {
								const getCategoryColor = (categoria) => {
									switch(categoria) {
										case 'presupuesto': return 'bg-blue-50/80 border-blue-100 hover:border-blue-300'
										case 'tecnologia': return 'bg-purple-50/80 border-purple-100 hover:border-purple-300'
										case 'organizacion': return 'bg-green-50/80 border-green-100 hover:border-green-300'
										case 'logistica': return 'bg-yellow-50/80 border-yellow-100 hover:border-yellow-300'
										case 'educacion': return 'bg-indigo-50/80 border-indigo-100 hover:border-indigo-300'
										default: return 'bg-white border-gray-100 hover:border-gray-300'
									}
								}

								const getImportanceBadge = (importancia) => {
									switch(importancia) {
										case 'alta': return 'bg-red-100 text-red-700 font-bold'
										case 'media': return 'bg-amber-100 text-amber-700 font-bold'
										default: return 'bg-gray-100 text-gray-600 font-semibold'
									}
								}

								return (
									<article 
										key={n.id} 
										className={`group flex flex-col justify-between border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${getCategoryColor(n.categoria)}`} 
										style={{padding: '24px', borderRadius: '20px'}}
									>
										<div>
											<div className="flex items-center justify-between mb-4">
												<span className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full ${getImportanceBadge(n.importancia)}`}>
													{n.importancia === 'alta' ? 'Urgente' : n.importancia === 'media' ? 'Importante' : 'Normal'}
												</span>
												<time className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
													{new Date(n.publicado_en).toLocaleDateString('es-PE', { day: '2-digit', month: 'short' })}
												</time>
											</div>
											
											<h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800 leading-snug group-hover:text-blue-600 transition-colors">
												<a href={n.url} target="_blank" rel="noopener noreferrer">
													{n.titulo || n.title}
												</a>
											</h3>
											
											{n.cuerpo && (
												<p className="text-gray-500 mb-6 text-sm leading-relaxed line-clamp-3">
													{n.cuerpo}
												</p>
											)}
										</div>
										
										<div className="pt-4 border-t border-gray-900/5 flex items-center justify-between mt-auto">
											<span className="text-xs font-bold text-gray-400 flex items-center gap-1">
												<span className="text-lg">🏢</span> {n.fuente}
											</span>
											<a 
												href={n.url}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1 text-blue-600 font-bold hover:text-blue-800 transition-colors text-sm"
											>
												Leer más <span className="group-hover:translate-x-1 transition-transform">→</span>
											</a>
										</div>
									</article>
								)
							})}
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}