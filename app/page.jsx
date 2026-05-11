export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#071B2F]">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-bold text-2xl tracking-tight text-[#0A84FF]">ALPHA LOGISTICS</h1>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#servicios">Servicios</a>
            <a href="#tarifas">Tarifas</a>
            <a href="#corporativo">Corporativo</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a
            href="https://wa.me/50376048817"
            className="bg-[#0A84FF] text-white px-5 py-3 rounded-2xl text-sm font-semibold hover:opacity-90 transition"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex bg-[#EAF4FF] text-[#0A84FF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Aduanas • Courier • Logística Internacional
            </span>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Gestión Aduanal Rápida y Confiable en El Salvador
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Simplificamos aduanas, logística internacional y trámites de carga con cobertura en
              aeropuerto, puerto, courier y zonas francas.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="bg-[#0A84FF] text-white px-7 py-4 rounded-2xl font-semibold shadow-lg"
              >
                Solicitar Cotización
              </a>

              <a
                href="https://wa.me/50376048817"
                className="border border-slate-300 px-7 py-4 rounded-2xl font-semibold"
              >
                Contactarnos
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {["DUCAS", "Courier", "Acajutla", "SAL", "Zonas Francas"].map((item) => (
                <span
                  key={item}
                  className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#0A84FF]/10 blur-3xl rounded-full"></div>

            <div className="relative bg-white rounded-[32px] shadow-2xl p-4 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1400&auto=format&fit=crop"
                alt="Jet"
                className="rounded-[24px] h-[520px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h3 className="text-4xl font-black mb-4">Nuestros Servicios</h3>
            <p className="text-slate-600 max-w-2xl">
              Soluciones modernas para empresas y personas naturales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Trámites DUCA", "Gestión documental rápida y eficiente."],
              ["Puerto Acajutla", "Operaciones marítimas y liberación de carga."],
              ["Aeropuerto SAL", "Logística aérea y courier internacional."],
              ["DHL Santa Elena", "Gestión courier desde $75 USD."],
              ["FedEx Quezaltepeque", "Trámites rápidos y confiables."],
              ["Zonas Francas", "Atención especializada para industria."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white p-8 rounded-[28px] shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EAF4FF] mb-6"></div>
                <h4 className="text-2xl font-bold mb-3">{title}</h4>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tarifas" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-4xl font-black mb-10 text-center">Tarifas</h3>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-lg">
            <table className="w-full">
              <thead className="bg-[#071B2F] text-white">
                <tr>
                  <th className="text-left px-6 py-5">Servicio</th>
                  <th className="text-left px-6 py-5">Ubicación</th>
                  <th className="text-left px-6 py-5">Precio</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Aeropuerto SAL", "El Salvador", "$90 USD"],
                  ["DHL Santa Elena", "Santa Elena", "$75 USD"],
                  ["FedEx Quezaltepeque", "Quezaltepeque", "$75 USD"],
                  ["Puerto Acajutla", "Acajutla", "$125 USD"],
                  ["Corporativo", "Personalizado", "Cotización"],
                ].map((row, idx) => (
                  <tr key={idx} className="border-t border-slate-100">
                    {row.map((cell) => (
                      <td key={cell} className="px-6 py-5 text-slate-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="corporativo" className="py-24 bg-[#071B2F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-4xl font-black mb-6">
                Soluciones Corporativas
              </h3>

              <p className="text-slate-300 leading-relaxed text-lg mb-8">
                Atención prioritaria, asignación de tramitador con carné y paquetes mensuales
                personalizados para empresas.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {["Atención Prioritaria", "Tarifas por Volumen", "Soporte Continuo", "Cobertura Nacional"].map((item) => (
                  <div key={item} className="bg-white/10 rounded-2xl p-5">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 rounded-[32px] p-10 backdrop-blur">
              <h4 className="text-3xl font-bold mb-4">Cobertura Total</h4>
              <p className="text-slate-300">
                Operamos en aeropuerto, courier, puerto y zonas francas de El Salvador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl font-black mb-6">Contacto</h3>

            <div className="space-y-4 text-slate-700 text-lg">
              <p><strong>WhatsApp:</strong> +503 7604-8817</p>
              <p><strong>Correo:</strong> ventas@alphalogisticsv.net</p>
              <p>
                <strong>Dirección:</strong><br />
                Calle 5, Vistas de San Francisco.<br />
                Antiguo Cuscatlán, La Libertad.<br />
                El Salvador.
              </p>
            </div>
          </div>

          <form className="bg-[#F4F7FA] p-8 rounded-[28px] space-y-5">
            <input className="w-full p-4 rounded-2xl" placeholder="Nombre" />
            <input className="w-full p-4 rounded-2xl" placeholder="Correo" />
            <input className="w-full p-4 rounded-2xl" placeholder="Empresa" />
            <textarea className="w-full p-4 rounded-2xl h-32" placeholder="Mensaje"></textarea>

            <button className="bg-[#0A84FF] text-white px-7 py-4 rounded-2xl font-semibold w-full">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
