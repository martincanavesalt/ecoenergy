import { site, waLink } from '../data/site'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div>
          <p className="etiqueta">{site.zona}</p>
          <h1>
            El sol ya está en tu techo.
            <br />
            <span className="resaltado">Empezá a aprovecharlo.</span>
          </h1>
          <p className="hero__texto">
            Diseñamos e instalamos sistemas de energía solar a medida. Presupuesto y proyecto{' '}
            <strong>sin cargo</strong>.
          </p>
          <div className="hero__acciones">
            <a className="btn" href={waLink()} target="_blank" rel="noreferrer">
              Escribinos por WhatsApp
            </a>
            <a className="btn btn--borde" href="#calculadora">
              Calculá tu ahorro
            </a>
          </div>
        </div>

        <PanelIlustracion />
      </div>
    </section>
  )
}

// Ilustración en SVG: un sol y una grilla de paneles (sin imágenes externas)
function PanelIlustracion() {
  const celdas = []
  for (let fila = 0; fila < 3; fila++) {
    for (let col = 0; col < 4; col++) {
      celdas.push(
        <rect key={`${fila}-${col}`} x={40 + col * 62} y={150 + fila * 42} width="56" height="36" rx="3" className="celda" />,
      )
    }
  }
  return (
    <svg className="hero__ilustracion" viewBox="0 0 330 320" role="img" aria-label="Sol sobre paneles solares">
      <circle cx="250" cy="70" r="38" className="sol" />
      {[...Array(12)].map((_, i) => {
        const a = (i * Math.PI) / 6
        return (
          <line key={i} x1={250 + Math.cos(a) * 50} y1={70 + Math.sin(a) * 50}
            x2={250 + Math.cos(a) * 64} y2={70 + Math.sin(a) * 64} className="rayo" />
        )
      })}
      <g transform="skewX(-12) translate(40 0)">{celdas}</g>
      <rect x="120" y="278" width="10" height="30" className="soporte" />
      <rect x="230" y="278" width="10" height="30" className="soporte" />
    </svg>
  )
}
