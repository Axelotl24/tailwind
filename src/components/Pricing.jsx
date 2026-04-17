export default function Pricing() {
    return (
        <section className="py-20 bg-gray-100 text-center">
            <h3 className="text-3xl font-bold mb-10">Precios</h3>

            <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="bg-white p-8 rounded-2xl shadow w-72">
                    <h4 className="text-xl font-bold">Basic</h4>
                    <p className="text-3xl my-4">$0</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
                        Elegir
                    </button>
                </div>

                <div className="bg-blue-600 text-white p-8 rounded-2xl shadow w-72">
                    <h4 className="text-xl font-bold">Pro</h4>
                    <p className="text-3xl my-4">$10</p>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-xl">
                        Elegir
                    </button>
                </div>
            </div>
        </section>
    );
}