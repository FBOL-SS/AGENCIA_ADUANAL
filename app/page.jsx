import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Container,
  Factory,
  FileCheck2,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Plane,
  Ship,
  ShieldCheck,
  Truck,
  Users2
} from 'lucide-react'

const contact = {
  whatsapp: '50370000000',
  email: 'info@alphalogistics.com.sv'
}

const services = [
  {
    title: 'Trámites aduanales DUCA',
    description: 'Gestión documental y acompañamiento para declaraciones únicas centroamericanas, importación, exportación y regularización de mercancías.',
    price: 'Según operación',
    icon: FileCheck2
  },
  {
    title: 'Operaciones en Puerto de Acajutla',
    description: 'Apoyo aduanal y logístico para carga marítima, coordinación de documentación, liberación y seguimiento operativo.',
    price: '$125 por trámite',
    icon: Ship
  },
  {
    title: 'Logística aérea SAL',
    description: 'Gestión de trámites en el Aeropuerto Internacional de El Salvador para operaciones de carga aérea y paquetería.',
    price: '$90 por trámite',
    icon: Plane
  },
  {
    title: 'Courier internacional DHL / FedEx',
    description: 'Manejo de paquetería internacional para personas naturales y empresas, con apoyo en DHL Santa Elena y FedEx Quezaltepeque.',
    price: 'Desde $75',
    icon: PackageCheck
  },
  {
    title: 'Zonas francas',
    description: 'Cobertura operativa en zonas francas de El Salvador, incluyendo coordinación con empresas, tramitadores y procesos internos.',
    price: 'Plan corporativo',
    icon: Factory
  },
  {
    title: 'Soluciones corporativas mensuales',
    description: 'Planes por volumen, atención prioritaria y asignación de tramitador dedicado con carné oficial para empresas.',
    price: 'Personalizado',
    icon: Building2
  }
]

const rates = [
  ['Aeropuerto Internacional SAL', '$90 USD', 'Incluye gestión y envío'],
  ['DHL Santa Elena', '$75 USD', 'Trámite courier'],
  ['FedEx Quezaltepeque', '$75 USD', 'Trámite courier'],
  ['Puerto de Acajutla', '$125 USD', 'Gestión portuaria'],
  ['Paquetes mensuales corporativos', 'Personalizado', 'Según volumen operativo']
]

const operationPoints = [
  'Puerto de Acajutla',
  'Aeropuerto Internacional de El Salvador (SAL)',
  'DHL Santa Elena',
  'FedEx Quezaltepeque',
  'Todas las zonas francas de El Salvador'
]

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
      <div className="container-alpha flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="ALPHA LOGISTICS inicio">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-navy shadow-lg">
            <Container size={24} />
          </div>
          <div>
            <p className="text-lg font-black tracking-[0.18em] text-white">ALPHA</p>
            <p className="-mt-1 text-xs font-semibold tracking-[0.28em] text-steel/80">LOGISTICS</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/80 lg:flex">
          <a className="transition hover:text-white" href="#servicios">Servicios</a>
          <a className="transition hover:text-white" href="#tarifas">Tarifas</a>
          <a className="transition hover:text-white" href="#corporativo">Corporativo</a>
          <a className="transition hover:text-white" href="#nosotros">Nosotros</a>
          <a className="transition hover:text-white" href="#contacto">Contacto</a>
        </nav>
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-navy shadow-lg transition hover:-translate-y-0.5 hover:bg-steel md:inline-flex"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy pt-32 text-white">
      <div className="absolute inset-0 grid-pattern opacity-70" />
      <div className="absolute -right-28 top-24 h-96 w-96 rounded-full bg-alpha/30 blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
      <div className="container-alpha relative grid min-h-[760px] items-center gap-14 py-16 lg:grid-cols-[1.08fr_.92fr]">
        <div className="fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-steel">
            <ShieldCheck size={17} /> Agencia de aduanas y logística en El Salvador
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            Gestión aduanal rápida y confiable en El Salvador
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-steel/90 md:text-xl">
            ALPHA LOGISTICS simplifica el comercio internacional, aduanas y logística de carga para empresas y personas naturales.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-navy shadow-soft transition hover:-translate-y-1 hover:bg-steel">
              Contáctanos <ArrowRight size={18} />
            </a>
            <a href="#tarifas" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
              Solicitar cotización
            </a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-3">
            {['DUCA', 'Courier', 'Zonas francas'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <CheckCircle2 className="mb-2 text-gold" size={21} />
                <p className="text-sm font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative fade-in">
          <div className="glass-card rounded-[2rem] p-6 text-navy shadow-soft">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-navy to-navy2 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-steel/70">Cobertura operativa</p>
              <h2 className="mt-3 text-3xl font-black">Aduanas, puerto, aeropuerto y zonas francas.</h2>
              <div className="mt-8 space-y-4">
                {operationPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                    <MapPin className="shrink-0 text-gold" size={20} />
                    <span className="font-semibold text-steel">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-steel p-5">
                <p className="text-3xl font-black text-navy">$75</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">Courier desde</p>
              </div>
              <div className="rounded-2xl bg-steel p-5">
                <p className="text-3xl font-black text-navy">$125</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">Puerto Acajutla</p>
              </div>
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.22em] text-alpha">Servicios</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-navy md:text-5xl">Operación aduanal clara, rápida y ordenada.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Atendemos trámites puntuales, operaciones recurrentes y necesidades corporativas con enfoque en cumplimiento, tiempos y trazabilidad.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="group rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-steel text-alpha transition group-hover:bg-navy group-hover:text-white">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-black text-navy">{service.title}</h3>
                <p className="mt-3 min-h-[96px] leading-7 text-slate-600">{service.description}</p>
                <div className="mt-6 inline-flex rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">{service.price}</div>
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
    <section id="tarifas" className="section-padding bg-steel/60">
      <div className="container-alpha">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-alpha">Tarifario</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-navy md:text-5xl">Precios claros para operaciones frecuentes.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Las tarifas aplican para trámites estándar. Operaciones especiales, carga con inspección o alto volumen pueden cotizarse de forma personalizada.</p>
            <a href="#contacto" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-navy2">
              Cotizar operación <ArrowRight size={18} />
            </a>
          </div>
          <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-soft">
            <div className="grid grid-cols-3 bg-navy px-5 py-4 text-sm font-black uppercase tracking-wider text-white">
              <span>Operación</span>
              <span>Tarifa</span>
              <span>Detalle</span>
            </div>
            {rates.map(([operation, price, detail], index) => (
              <div key={operation} className={`grid grid-cols-3 gap-3 px-5 py-5 text-sm md:text-base ${index !== rates.length - 1 ? 'border-b border-slate-100' : ''}`}>
                <span className="font-bold text-navy">{operation}</span>
                <span className="font-black text-alpha">{price}</span>
                <span className="text-slate-600">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Corporate() {
  const benefits = [
    ['Planes mensuales para empresas', 'Modelo de atención para operaciones recurrentes y empresas con volumen.'],
    ['Tramitador con carné oficial', 'Asignación de personal para apoyar gestiones en zonas francas o puntos operativos.'],
    ['Atención prioritaria', 'Seguimiento directo, comunicación rápida y trazabilidad por operación.'],
    ['Tarifas por volumen', 'Estructura personalizada según frecuencia, punto operativo y complejidad.']
  ]
  return (
    <section id="corporativo" className="section-padding bg-navy text-white">
      <div className="container-alpha grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-gold">Soluciones corporativas</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Un aliado operativo para empresas que importan y exportan.</h2>
          <p className="mt-5 text-lg leading-8 text-steel/85">Diseñamos paquetes mensuales para empresas que necesitan velocidad, orden y soporte constante en aduanas, courier, zonas francas, puerto y aeropuerto.</p>
        </div>
        <div className="grid gap-5">
          {benefits.map(([title, text]) => (
            <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
              <div className="flex gap-4">
                <BadgeCheck className="mt-1 shrink-0 text-gold" size={24} />
                <div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-steel/80">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-alpha grid gap-10 lg:grid-cols-[1fr_.95fr] lg:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-alpha">Nosotros</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-navy md:text-5xl">Nuestra misión es hacer que la logística aduanal sea más simple, segura y eficiente.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">ALPHA LOGISTICS nace para apoyar a empresas y personas naturales que necesitan resolver trámites aduanales, carga courier, tránsitos y operaciones logísticas en El Salvador con rapidez y cumplimiento.</p>
          <p className="mt-4 text-lg leading-8 text-slate-600">Trabajamos con enfoque en tiempos, documentación correcta, comunicación clara y acompañamiento operativo en los principales puntos de entrada, salida y operación del país.</p>
        </div>
        <div className="rounded-[2rem] bg-steel p-7 shadow-soft">
          <div className="rounded-[1.5rem] bg-white p-6">
            <ClipboardCheck className="text-alpha" size={34} />
            <h3 className="mt-5 text-2xl font-black text-navy">Compromiso operativo</h3>
            <div className="mt-6 space-y-4">
              {['Rapidez en la gestión', 'Cumplimiento documental', 'Comunicación directa', 'Eficiencia para empresas y personas'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-4">
                  <CheckCircle2 className="text-alpha" size={21} />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="section-padding bg-steel/70">
      <div className="container-alpha grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-start">
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-alpha">Contacto</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-navy md:text-5xl">Solicita tu cotización.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Cuéntanos qué tipo de operación necesitas: DUCA, courier, puerto, aeropuerto, tránsito o plan mensual corporativo.</p>
          <div className="mt-8 space-y-4">
            <a href={`https://wa.me/${contact.whatsapp}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 font-bold text-navy shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <MessageCircle className="text-alpha" /> WhatsApp: +503 7000 0000
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 font-bold text-navy shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <Mail className="text-alpha" /> {contact.email}
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 font-bold text-navy shadow-sm">
              <MapPin className="text-alpha" /> El Salvador
            </div>
          </div>
        </div>
        <form className="rounded-[1.7rem] bg-white p-6 shadow-soft md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-navy">Nombre</span>
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-alpha focus:bg-white" placeholder="Tu nombre" />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-navy">Correo</span>
              <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-alpha focus:bg-white" placeholder="correo@empresa.com" />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-bold text-navy">Empresa</span>
            <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-alpha focus:bg-white" placeholder="Nombre de empresa o persona natural" />
          </label>
          <label className="mt-5 block">
            <span className="text-sm font-bold text-navy">Mensaje</span>
            <textarea className="mt-2 min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-alpha focus:bg-white" placeholder="Describe tu operación, punto de ingreso y volumen estimado." />
          </label>
          <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-navy2">
            Enviar solicitud <ArrowRight size={18} />
          </button>
          <p className="mt-4 text-center text-sm text-slate-500">Este formulario está listo para conectar con Formspree, Resend, EmailJS o una API route de Next.js.</p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-navy py-10 text-white">
      <div className="container-alpha flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-black tracking-[0.18em]">ALPHA LOGISTICS</p>
          <p className="mt-1 text-sm text-steel/70">Agencia de aduanas y logística en El Salvador.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-steel/80">
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#tarifas" className="hover:text-white">Tarifas</a>
          <a href="#corporativo" className="hover:text-white">Corporativo</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </div>
      </div>
    </footer>
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
      <Footer />
    </main>
  )
}
