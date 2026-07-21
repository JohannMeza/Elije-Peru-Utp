-- Seeds completos para ElijePeru

-- Partidos Políticos
INSERT INTO partidos (id, name, abbreviation, description) VALUES
(1, 'Fuerza Popular', 'FP', 'Partido político inscrito para EG 2026. Realizó elecciones primarias confirmadas por ONPE.'),
(2, 'Perú Libre', 'PL', 'Partido Político Nacional Perú Libre inscrito para EG 2026. Elecciones primarias confirmadas.'),
(3, 'Acción Popular', 'AP', 'Partido inscrito para EG 2026. Elecciones primarias confirmadas por ONPE.'),
(4, 'Partido Morado', 'PM', 'Partido inscrito para EG 2026. Elecciones primarias confirmadas por ONPE.'),
(5, 'Podemos Perú', 'PP', 'Partido inscrito para EG 2026. Elecciones primarias confirmadas por ONPE.'),
(6, 'Partido Aprista Peruano', 'PAP', 'Partido Aprista Peruano inscrito para EG 2026.'),
(7, 'Alianza Unidad Nacional', 'AUN', 'Alianza electoral inscrita para EG 2026.'),
(8, 'Ciudadanos por el Perú', 'CPP', 'Partido Ciudadanos por el Perú inscrito para EG 2026.')
ON CONFLICT (id) DO NOTHING;

-- Candidatos
INSERT INTO candidatos (id, name, party, role, bio, photo_url, cv_url, source_url) VALUES
(1, 'Ana Lucía Vargas', 'Fuerza Popular', 'Presidente', 'Abogada especialista en derecho constitucional. Ex Congresista 2021-2026. Candidata Presidencial.', '/assets/logos/Keiko-Fujimori.jpg', '/docs/ana_vargas_cv.pdf', 'https://portal.jne.gob.pe/candidatos/ana_vargas'),
(2, 'Carlos Mendoza', 'Perú Libre', 'Presidente', 'Economista, ex Ministro de Economía. Especialista en políticas sociales. Candidato Presidencial.', '/assets/logos/Guido-Bellido.jfif', '/docs/carlos_mendoza_cv.pdf', 'https://portal.jne.gob.pe/candidatos/carlos_mendoza'),
(3, 'Roberto Silva', 'Acción Popular', 'Presidente', 'Ingeniero civil, ex Alcalde de Lima Metropolitana. Experiencia en gestión pública. Candidato Presidencial.', '/assets/logos/Alfredo-Barnechea.jfif', '/docs/roberto_silva_cv.pdf', 'https://portal.jne.gob.pe/candidatos/roberto_silva'),
(4, 'Elena Morales', 'Renovación Popular', 'Presidente', 'Empresaria y economista. Ex presidenta de CONFIEP. Defensora del libre mercado. Candidata Presidencial.', '/assets/logos/rosario-fernandez.jpg', '/docs/elena_morales_cv.pdf', 'https://portal.jne.gob.pe/candidatos/elena_morales'),
(5, 'Patricia Ramos', 'Renovación Popular', 'Senador', 'Abogada constitucionalista, ex presidenta del Colegio de Abogados de Lima. Candidata al Senado.', '/assets/logos/Patricia-Ramos.jpg', '/docs/patricia_ramos_cv.pdf', 'https://portal.jne.gob.pe/candidatos/patricia_ramos'),
(6, 'Jorge Huamán', 'Perú Libre', 'Senador', 'Profesor universitario, especialista en desarrollo rural y políticas agrarias. Candidato al Senado.', '/assets/logos/Jorge-Huamán.jpeg', '/docs/jorge_huaman_cv.pdf', 'https://portal.jne.gob.pe/candidatos/jorge_huaman'),
(7, 'Miguel Torres', 'Alianza para el Progreso', 'Diputado', 'Médico cirujano, especialista en salud pública. Candidato a Diputado.', '/assets/logos/Miguel-Torres.jfif', '/docs/miguel_torres_cv.pdf', 'https://portal.jne.gob.pe/candidatos/miguel_torres'),
(8, 'Carmen Solís', 'Fuerza Popular', 'Diputado', 'Ingeniera industrial, especialista en gestión empresarial. Candidata a Diputada.', '/assets/logos/logo_elije_peru.jpg', '/docs/carmen_solis_cv.pdf', 'https://portal.jne.gob.pe/candidatos/carmen_solis')
ON CONFLICT (id) DO NOTHING;

-- Calendario Electoral
INSERT INTO calendario (id, title, date, description) VALUES
(1, 'Convocatoria a Elecciones Generales 2026', '2025-03-26', 'Convocatoria oficial confirmada por JNE - Resolución publicada.'),
(2, 'Elecciones Generales 2026', '2026-04-12', 'Jornada electoral de votación para Presidente, Senadores, Diputados y Parlamento Andino.'),
(3, 'Elecciones Primarias - Partidos Políticos', '2025-12-01', 'Proceso de elecciones primarias de organizaciones políticas inscritas.'),
(4, 'Conformación de 14 ODPE', '2025-09-09', 'ONPE confirma conformación de 14 Oficinas Descentralizadas de Procesos Electorales.'),
(5, 'Implementación Voto Digital', '2025-04-30', 'ONPE establece grupos prioritarios para voto digital según Ley N° 32270.'),
(6, 'Aprobación Catálogo Materiales Electorales', '2025-09-01', 'ONPE aprueba Catálogo de Materiales Electorales Voto Convencional.'),
(7, 'Conformación Comité de Gerencia EG 2026', '2025-03-31', 'ONPE conforma Comité de Gerencia para las Elecciones Generales 2026.'),
(8, 'JNE: Conformación de Jurados Electorales Especiales', '2025-09-28', 'JNE declara conformación de Jurados Electorales Especiales.')
ON CONFLICT (id) DO NOTHING;

-- Estaciones de Votación
INSERT INTO estaciones_votacion (id, name, address, latitude, longitude) VALUES
(1, 'I.E. Ricardo Palma', 'Jr. Huancavelica 485, Cercado de Lima', -12.0464, -77.0428),
(2, 'Universidad Mayor de San Marcos', 'Av. Venezuela s/n, Lima', -12.0580, -77.0814),
(3, 'I.E. Mercedes Cabello de Carbonera', 'Jr. Ica 336, Lima', -12.0490, -77.0350),
(4, 'Colegio Salesiano San Juan Bosco', 'Jr. Nazca 852, Breña', -12.0580, -77.0510),
(5, 'I.E. José Carlos Mariátegui', 'Av. Colonial 1520, Callao', -12.0640, -77.1280),
(6, 'Universidad Nacional de Ingeniería', 'Av. Túpac Amaru 210, Rímac', -12.0210, -77.0490),
(7, 'I.E. Bartolomé Herrera', 'Jr. Camaná 459, Lima', -12.0440, -77.0380),
(8, 'Universidad Nacional Federico Villarreal', 'Jr. Carlos Gonzáles 285, Lima', -12.0520, -77.0410)
ON CONFLICT (id) DO NOTHING;

-- Noticias Electorales
INSERT INTO noticias (id, titulo, cuerpo, fuente, url, publicado_en) VALUES
(1, 'JNE demanda partida adicional de S/ 372 millones para procesos electorales 2026', 'El Jurado Nacional de Elecciones (JNE) solicita presupuesto adicional de 372 millones de soles.', 'JNE', 'https://portal.jne.gob.pe/Portal/Pagina/Nota/18917', '2025-10-01 00:00:00'),
(2, 'JNE auditará solución tecnológica de ONPE para implementación del voto digital', 'El Jurado Nacional de Elecciones realizará auditoría a la solución tecnológica de ONPE.', 'JNE', 'https://portal.jne.gob.pe/Portal/Pagina/Nota/118895', '2025-09-29 00:00:00'),
(3, 'ONPE conforma 14 ODPE para organizar Elecciones Primarias de las EG 2026', 'La ONPE oficializa la conformación de catorce Oficinas Descentralizadas de Procesos Electorales.', 'ONPE', 'https://www.gob.pe/institucion/onpe/normas-legales/7141561-rj-141-2025-jn', '2025-09-09 00:00:00'),
(4, 'JNE declara conformación de Jurados Electorales Especiales para EG 2026', 'El Jurado Nacional de Elecciones oficializa la conformación de los JEE.', 'JNE', 'https://portal.jne.gob.pe/Portal/Pagina/Nota/18878', '2025-09-28 00:00:00'),
(5, 'ONPE aprueba catálogo de materiales electorales para voto convencional EG 2026', 'La ONPE aprueba el catálogo de materiales electorales oficiales.', 'ONPE', 'https://www.gob.pe/institucion/onpe/normas-legales/7103916-rj-140-2025-jn', '2025-09-01 00:00:00'),
(6, 'JNE lanza plataforma Voto Informado para Elecciones Generales 2026', 'El JNE presenta oficialmente la plataforma Voto Informado.', 'JNE', 'https://votoinformado.jne.gob.pe/voto', '2025-11-15 00:00:00')
ON CONFLICT (id) DO NOTHING;

-- Ajustar secuencias de ID
SELECT setval('partidos_id_seq', (SELECT MAX(id) FROM partidos));
SELECT setval('candidatos_id_seq', (SELECT MAX(id) FROM candidatos));
SELECT setval('calendario_id_seq', (SELECT MAX(id) FROM calendario));
SELECT setval('estaciones_votacion_id_seq', (SELECT MAX(id) FROM estaciones_votacion));
SELECT setval('noticias_id_seq', (SELECT MAX(id) FROM noticias));
