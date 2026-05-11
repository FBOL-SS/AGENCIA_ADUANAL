import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Container,
  Factory,
  FileCheck2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Plane,
  ShieldCheck,
  Ship,
  Truck,
  Users2,
  WalletCards
} from 'lucide-react'

const contact = {
  whatsapp: '50370000000',
  email: 'info@alphalogistics.com.sv'
}

const services = [
  { title: 'Trámites aduanales DUCA', description: 'Gestión documental para importaciones, exportaciones, tránsitos y regularización de mercancías con seguimiento claro.', price: 'Según operación', icon: FileCheck2 },
  { title: 'Puerto de Acajutla', description: 'Apoyo en liberación, coordinación documental y seguimiento operativo para carga marítima.', price: '$125 por trámite', icon: Ship },
  { title: 'Aeropuerto SAL', description: 'Trámites para carga aérea y paquetería internacional en el Aeropuerto Internacional de El Salvador.', price: '$90 por trámite', icon: Plane },
  { title: 'Courier DHL / FedEx', description: 'Gestión para paquetes internacionales de personas naturales y empresas en DHL Santa Elena y FedEx Quezaltepeque.', price: 'Desde $75', icon: PackageCheck },
  { title: 'Zonas francas', description: 'Cobertura en zonas francas salvadoreñas con coordinación de tramitadores, documentos y procesos internos.', price: 'Plan corporativo', icon: Factory },
  { title: 'Planes corporativos', description: 'Atención mensual, prioridad operativa, tarifas por volumen y tramitador dedicado con carné oficial.', price: 'Personalizado', icon: Building2 }
]

const rates = [
  ['Aeropuerto SAL', '$90 USD', 'Incluye gestión y envío'],
  ['DHL Santa Elena', '$75 USD', 'Trámite courier'],
  ['FedEx Quezaltepeque', '$75 USD', 'Trámite courier'],
  ['Puerto de Acajutla', '$125 USD', 'Gestión portuaria'],
  ['Paquetes corporativos', 'Personalizado', 'Según volumen mensual']
]

const stats = [
  ['SAL', 'Carga aérea'],
  ['Acajutla', 'Puerto'],
  ['DHL / FedEx', 'Courier'],
  ['Zonas francas', 'Empresas']
]

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061a34]/95 backdrop-blur-xl">
      <div className="container-alpha flex h-20 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="ALPHA LOGISTICS inicio">
          <div className="brand-mark"><Container size={25} /></div>
          <div className="leading-none">
            <p className="text-lg font-black tracking-[0.18em] text-white">ALPHA</p>
            <p className="mt-1 text-[11px] font-bold tracking-[0.32em] text-sky-200">LOGISTICS</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-bold text-white/75 lg:flex">
          <a href="#servicios">Servicios</a>
          <a href="#tarifas">Tarifas</a>
          <a href="#corporativo">Empresas</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a href={`https://wa.me/${contact.whatsapp}`} className="header-cta">
          <MessageCircle size={17} /> <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero-shell">
      <div className="hero-bg" />
      <div className="container-alpha relative grid min-h-[790px] items-center gap-12 pt-24 lg:grid-cols-[1.08fr_.92fr]">
        <div className="fade-up text-white">
          <div className="eyebrow bg-white/10 text-sky-100 ring-white/15"><ShieldCheck size={17} /> Agencia de aduanas en El Salvador</div>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.98] tracking-tight md:text-7xl">
            Gestión aduanal rápida, seria y accesible.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            ALPHA LOGISTICS simplifica DUCA, courier, tránsitos, puerto, aeropuerto y zonas francas con atención clara para empresas y personas naturales.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="btn-primary light">Contáctanos <ArrowRight size={18} /></a>
            <a href="#tarifas" className="btn-secondary light">Solicitar cotización</a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(([title, label]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-lg font-black text-white">{title}</p>
                <p className="mt-1 text-xs font-semibold text-sky-100/80">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up rounded-[2rem] border border-white/15 bg-white p-4 shadow-2xl">
          <div className="rounded-[1.5rem] bg-slate-50 p-6 text-slate-900">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[.22em] text-sky-700">Operación activa</p>
                <h2 className="mt-2 text-2xl font-black text-[#061a34]">Cobertura nacional clave</h2>
              </div>
              <Globe2 className="text-sky-700" size={36} />
            </div>
            <div className="mt-6 space-y-3">
              {['Puerto de Acajutla', 'Aeropuerto Internacional SAL', 'DHL Santa Elena', 'FedEx Quezaltepeque', 'Todas las zonas francas'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <MapPin className="shrink-0 text-sky-700" size={20} />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="metric-card"><span>$75</span><small>Courier desde</small></div>
              <div className="metric-card"><span>$90</span><small>Aeropuerto SAL</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-alpha">
        <div className="section-head">
          <div className="eyebrow"><Truck size={17} /> Servicios</div>
          <h2>Logística aduanal con proceso claro de inicio a fin.</h2>
          <p>Un sitio serio no tiene que sentirse inaccesible. Por eso mostramos servicios, puntos operativos y precios base de forma directa.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="service-card">
                <div className="service-icon"><Icon size={26} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>{service.price}</span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Rates() {
  return (
    <section id="tarifas" className="section-padding bg-slate-100">
      <div className="container-alpha grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <div>
          <div className="eyebrow"><WalletCards size={17} /> Tarifas</div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#061a34] md:text-5xl">Precios visibles. Cotización sin vueltas.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Tarifas base para operaciones frecuentes. Si tu empresa mueve volumen mensual, armamos un paquete a la medida.</p>
          <a href="#contacto" className="btn-primary mt-8">Cotizar ahora <ArrowRight size={18} /></a>
        </div>
        <div className="rate-table">
          <div className="rate-row rate-head"><span>Servicio</span><span>Precio</span><span>Detalle</span></div>
          {rates.map(([service, price, detail]) => (
            <div key={service} className="rate-row"><span>{service}</span><strong>{price}</strong><span>{detail}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Corporate() {
  const items = ['Planes mensuales para empresas', 'Tramitador dedicado con carné oficial', 'Atención prioritaria', 'Tarifas negociadas por volumen']
  return (
    <section id="corporativo" className="section-padding bg-[#061a34] text-white">
      <div className="container-alpha grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow bg-white/10 text-sky-100 ring-white/15"><Users2 size={17} /> Soluciones corporativas</div>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Para empresas que necesitan continuidad, control y respuesta rápida.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">Creamos paquetes mensuales para operaciones recurrentes en zonas francas, courier, puerto y aeropuerto. La idea es que tu equipo tenga un punto de contacto confiable y tiempos más predecibles.</p>
        </div>
        <div className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl">
          <div className="rounded-[1.5rem] bg-slate-50 p-6">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-4 border-b border-slate-200 py-5 last:border-0">
                <BadgeCheck className="text-sky-700" size={24} />
                <p className="font-black text-[#061a34]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-alpha grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div className="rounded-[2rem] bg-slate-100 p-6">
          <div className="rounded-[1.5rem] bg-white p-7 shadow-sm">
            <ClipboardCheck className="text-sky-700" size={42} />
            <h3 className="mt-5 text-2xl font-black text-[#061a34]">Nuestra misión</h3>
            <p className="mt-3 leading-8 text-slate-600">Hacer que los procesos aduanales sean más simples, rápidos y transparentes para quienes importan, exportan o reciben paquetería internacional en El Salvador.</p>
          </div>
        </div>
        <div>
          <div className="eyebrow"><CheckCircle2 size={17} /> Nosotros</div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#061a34] md:text-5xl">Seriedad corporativa, trato humano.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">ALPHA LOGISTICS trabaja con enfoque en rapidez, cumplimiento y eficiencia. Atendemos desde una persona natural que necesita liberar un paquete hasta empresas que requieren operación mensual con procesos definidos.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {['Rapidez', 'Cumplimiento', 'Eficiencia'].map((x) => <div key={x} className="pill">{x}</div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="section-padding bg-slate-100">
      <div className="container-alpha grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <div className="eyebrow"><Mail size={17} /> Contacto</div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#061a34] md:text-5xl">Cuéntanos qué necesitas mover o liberar.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Responderemos con una ruta clara: trámite, requisitos, costo base y siguiente paso.</p>
          <div className="mt-8 space-y-3">
            <a className="contact-line" href={`https://wa.me/${contact.whatsapp}`}><MessageCircle size={20} /> WhatsApp</a>
            <a className="contact-line" href={`mailto:${contact.email}`}><Mail size={20} /> {contact.email}</a>
            <div className="contact-line"><MapPin size={20} /> El Salvador</div>
          </div>
        </div>
        <form className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <div className="grid gap-4 sm:grid-cols-2">
            <input aria-label="Nombre" placeholder="Nombre" />
            <input aria-label="Correo" placeholder="Correo" type="email" />
          </div>
          <input aria-label="Empresa" placeholder="Empresa / persona natural" />
          <textarea aria-label="Mensaje" placeholder="Cuéntanos si es DUCA, courier, puerto, aeropuerto, zona franca o tránsito..." rows="6" />
          <button type="submit" className="btn-primary w-full justify-center">Solicitar cotización <ArrowRight size={18} /></button>
          <p className="mt-4 text-center text-xs font-semibold text-slate-500">Formulario visual listo. Para producción se puede conectar a Formspree, Resend, HubSpot o API propia.</p>
        </form>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Rates />
      <Corporate />
      <About />
      <Contact />
      <footer className="bg-[#061a34] py-8 text-center text-sm font-semibold text-slate-300">
        © 2026 ALPHA LOGISTICS. Agencia de aduanas y logística en El Salvador.
      </footer>
    </main>
  )
}
