// Todos los datos del negocio en un solo lugar: editá acá y se actualiza el sitio entero.
export const site = {
  nombre: 'Ecoenergy',
  slogan: 'Energía solar para tu casa, comercio o campo',
  zona: 'Funes, Roldán, Rosario y alrededores',
  telefono: '341 585-8527',
  whatsapp: '543415858527',
  instagram: 'ecoenergy.arg',
  calculadora: 'https://martincanavesalt.github.io/calculosolar/',
}

// IDs de los reels de Instagram (la parte después de /reel/ en el link)
export const reels = ['Dem1I4gq_1E', 'Dc7B_d9Rz7G', 'Db80ULTqAAD']

export const waLink = (mensaje = 'Hola Ecoenergy! Quiero pedir un presupuesto.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`

export const beneficios = [
  { icono: '💡', titulo: 'Bajá tu factura', texto: 'Generás tu propia energía durante el día y consumís menos de la red.' },
  { icono: '🔋', titulo: 'Respaldo ante cortes', texto: 'Con baterías, tu casa sigue funcionando cuando se corta la luz.' },
  { icono: '🌱', titulo: 'Energía limpia', texto: 'Cada kWh que generás es uno menos producido con combustibles fósiles.' },
  { icono: '🏡', titulo: 'Valorizás tu propiedad', texto: 'Una instalación solar es una mejora permanente para tu inmueble.' },
]

export const servicios = [
  {
    titulo: 'On-grid (conectado a red)',
    texto: 'Paneles e inversor conectados a la red eléctrica. La opción más directa para ahorrar en la factura.',
    ideal: 'Casas y comercios con buena conexión',
  },
  {
    titulo: 'Off-grid (aislado)',
    texto: 'Sistema autónomo con baterías para lugares sin red o donde la red no llega bien.',
    ideal: 'Campos, quintas y casas de fin de semana',
  },
  {
    titulo: 'Híbrido con baterías',
    texto: 'Lo mejor de los dos: ahorro todos los días y respaldo cuando hay cortes.',
    ideal: 'Quien no quiere quedarse sin luz',
  },
  {
    titulo: 'Termotanques solares',
    texto: 'Agua caliente calentada por el sol para reducir el consumo de gas o electricidad.',
    ideal: 'Familias y complejos',
  },
]

export const pasos = [
  { titulo: 'Contacto', texto: 'Nos escribís por WhatsApp y nos contás tu consumo y tu idea.' },
  { titulo: 'Visita y proyecto', texto: 'Relevamos el lugar y diseñamos el sistema a medida. Sin cargo.' },
  { titulo: 'Presupuesto', texto: 'Te pasamos el presupuesto detallado y la proyección de ahorro.' },
  { titulo: 'Instalación', texto: 'Instalamos, probamos y te explicamos cómo funciona todo.' },
]

export const preguntas = [
  {
    p: '¿Cuánto cuesta el presupuesto?',
    r: 'Nada. El presupuesto y el proyecto son gratuitos y sin compromiso.',
  },
  {
    p: '¿Cuánto puedo ahorrar?',
    r: 'Depende de tu consumo y del tamaño del sistema. Podés hacer una estimación rápida con nuestra calculadora solar online.',
  },
  {
    p: '¿Funciona en días nublados?',
    r: 'Sí, genera menos que en un día soleado, pero sigue produciendo. El cálculo anual ya contempla esa variación.',
  },
  {
    p: '¿Qué mantenimiento necesita?',
    r: 'Muy poco: limpiar los paneles cada tanto y una revisión periódica del sistema.',
  },
  {
    p: '¿En qué zonas trabajan?',
    r: 'Funes, Roldán, Rosario y localidades cercanas. Consultanos por otras zonas.',
  },
]
