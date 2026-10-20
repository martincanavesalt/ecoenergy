import { useRef, useState } from 'react'
import { reels, site } from '../data/site'

// Carrusel de reels de Instagram usando el embed oficial (iframe /embed/).
// Para agregar o sacar videos, editá la lista "reels" en src/data/site.js
export default function Carrusel() {
  const pista = useRef(null)
  const [actual, setActual] = useState(0)

  const irA = (i) => {
    const total = reels.length
    const destino = (i + total) % total // vuelve al principio al llegar al final
    const tarjeta = pista.current.children[destino]
    pista.current.scrollTo({ left: tarjeta.offsetLeft - pista.current.offsetLeft, behavior: 'smooth' })
    setActual(destino)
  }

  // Actualiza el punto activo cuando el usuario desliza con el dedo
  const alDeslizar = () => {
    const { scrollLeft, children } = pista.current
    const ancho = children[0].offsetWidth
    setActual(Math.round(scrollLeft / ancho))
  }

  return (
    <section id="trabajos" className="seccion">
      <div className="container">
        <h2>Nuestros trabajos</h2>
        <p className="subtitulo">
          Instalaciones reales. Seguinos en{' '}
          <a href={`https://www.instagram.com/${site.instagram}/`} target="_blank" rel="noreferrer">
            @{site.instagram}
          </a>
        </p>

        <div className="carrusel">
          <button className="carrusel__flecha carrusel__flecha--izq" onClick={() => irA(actual - 1)} aria-label="Anterior">
            ‹
          </button>

          <div className="carrusel__pista" ref={pista} onScroll={alDeslizar}>
            {reels.map((id) => (
              <div className="carrusel__item" key={id}>
                <iframe
                  src={`https://www.instagram.com/reel/${id}/embed/`}
                  title={`Reel de Instagram ${id}`}
                  loading="lazy"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
            ))}
          </div>

          <button className="carrusel__flecha carrusel__flecha--der" onClick={() => irA(actual + 1)} aria-label="Siguiente">
            ›
          </button>
        </div>

        <div className="carrusel__puntos">
          {reels.map((id, i) => (
            <button
              key={id}
              className={i === actual ? 'activo' : ''}
              onClick={() => irA(i)}
              aria-label={`Ir al video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
