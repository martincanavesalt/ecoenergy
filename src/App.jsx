import Header from './components/Header'
import Hero from './components/Hero'
import {
  Beneficios,
  Servicios,
  ComoTrabajamos,
  Calculadora,
  Preguntas,
  Contacto,
  Footer,
  WhatsAppFlotante,
} from './components/Secciones'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <Servicios />
        <ComoTrabajamos />
        <Calculadora />
        <Preguntas />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFlotante />
    </>
  )
}
