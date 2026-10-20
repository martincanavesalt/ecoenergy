import { useState } from 'react'
import { site, waLink } from '../data/site'
import logoIcono from '../assets/logo-icono.png'
import logoTexto from '../assets/logo-texto.png'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
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
        <a href="#inicio" className="logo" aria-label={`${site.nombre} - inicio`}>
          <img src={logoIcono} alt="" className="logo__icono" />
          <img src={logoTexto} alt={`${site.nombre} - Energías Renovables`} className="logo__texto" />
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
