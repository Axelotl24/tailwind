export default function Features() {
    const features = [
        { title: "Rápido", desc: "Optimizado con Vite" },
        { title: "Moderno", desc: "Diseño limpio con Tailwind" },
        { title: "Escalable", desc: "Componentes reutilizables" },
    ];

    return (
        <section className="py-16 px-8">
            <h3 className="text-3xl font-bold text-center mb-12">
                Características
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((f, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-50">
                        <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                        <p className="text-gray-600">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}