import { useState } from 'react'
import { site, waLink } from '../data/site'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#calculadora', label: 'Calculadora' },
  { href: '#preguntas', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="logo">
          <span className="logo__sol" aria-hidden="true">☀</span>
          {site.nombre}
        </a>

        <button
          className="menu-btn"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? '✕' : '☰'}
        </button>

        <nav className={`nav ${abierto ? 'nav--abierto' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setAbierto(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--chico" href={waLink()} target="_blank" rel="noreferrer">
            Pedir presupuesto
          </a>
        </nav>
      </div>
    </header>
  )
}
