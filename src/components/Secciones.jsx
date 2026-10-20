import { useState } from 'react'
import { beneficios, servicios, pasos, preguntas, site, waLink } from '../data/site'

export function Beneficios() {
  return (
    <section className="seccion">
      <div className="container">
        <h2>¿Por qué pasarte a la energía solar?</h2>
        <div className="grilla grilla--4">
          {beneficios.map((b) => (
            <article key={b.titulo} className="tarjeta">
              <span className="tarjeta__icono" aria-hidden="true">{b.icono}</span>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Servicios() {
  return (
    <section id="servicios" className="seccion seccion--alt">
      <div className="container">
        <h2>Servicios</h2>
        <p className="subtitulo">Cada instalación se diseña según tu consumo, tu techo y tu presupuesto.</p>
        <div className="grilla grilla--2">
          {servicios.map((s) => (
            <article key={s.titulo} className="tarjeta tarjeta--servicio">
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
              <p className="ideal">Ideal para: {s.ideal}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="seccion seccion--alt">
      <div className="container">
        <h2>Cómo trabajamos</h2>
        <ol className="pasos">
          {pasos.map((p, i) => (
            <li key={p.titulo} className="paso">
              <span className="paso__num">{i + 1}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Calculadora() {
  return (
    <section id="calculadora" className="seccion">
      <div className="container">
        <div className="banner">
          <div>
            <h2>¿Cuánto ahorrarías con paneles solares?</h2>
            <p>Cargá tu consumo en nuestra calculadora y obtené una estimación en un minuto.</p>
          </div>
          <a className="btn btn--claro" href={site.calculadora} target="_blank" rel="noreferrer">
            Abrir calculadora solar
          </a>
        </div>
      </div>
    </section>
  )
}

export function Preguntas() {
  const [abierta, setAbierta] = useState(0)
  return (
    <section id="preguntas" className="seccion seccion--alt">
      <div className="container container--angosto">
        <h2>Preguntas frecuentes</h2>
        {preguntas.map((q, i) => (
          <div key={q.p} className={`faq ${abierta === i ? 'faq--abierta' : ''}`}>
            <button className="faq__p" aria-expanded={abierta === i} onClick={() => setAbierta(abierta === i ? -1 : i)}>
              {q.p}
              <span aria-hidden="true">{abierta === i ? '−' : '+'}</span>
            </button>
            {abierta === i && <p className="faq__r">{q.r}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export function Contacto() {
  const [form, setForm] = useState({ nombre: '', localidad: '', consumo: '' })
  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // El formulario no usa servidor: arma un mensaje y abre WhatsApp
  const enviar = (e) => {
    e.preventDefault()
    const msg = `Hola Ecoenergy! Soy ${form.nombre} de ${form.localidad}.` +
      (form.consumo ? ` Mi factura de luz es de aprox. $${form.consumo} por mes.` : '') +
      ' Quiero pedir un presupuesto.'
    window.open(waLink(msg), '_blank')
  }

  return (
    <section id="contacto" className="seccion">
      <div className="container contacto">
        <div>
          <h2>Pedí tu presupuesto sin cargo</h2>
          <p>Completá tus datos y te respondemos por WhatsApp.</p>
          <ul className="datos">
            <li>📱 <a href={waLink()} target="_blank" rel="noreferrer">{site.telefono}</a></li>
            <li>📷 <a href={`https://www.instagram.com/${site.instagram}/`} target="_blank" rel="noreferrer">@{site.instagram}</a></li>
            <li>📍 {site.zona}</li>
          </ul>
        </div>
        <form className="form" onSubmit={enviar}>
          <label>
            Nombre
            <input name="nombre" value={form.nombre} onChange={cambiar} required />
          </label>
          <label>
            Localidad
            <input name="localidad" value={form.localidad} onChange={cambiar} required />
          </label>
          <label>
            Factura de luz mensual (opcional)
            <input name="consumo" type="number" min="0" value={form.consumo} onChange={cambiar} placeholder="Ej: 80000" />
          </label>
          <button className="btn" type="submit">Enviar por WhatsApp</button>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>☀ {site.nombre} · {site.slogan}</p>
        <p>© {new Date().getFullYear()} · {site.zona}</p>
      </div>
    </footer>
  )
}

export function WhatsAppFlotante() {
  return (
    <a className="wa-flotante" href={waLink()} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.4-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
      </svg>
    </a>
  )
}
