export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
            <h1 className="text-xl font-bold text-blue-600">MiApp</h1>
            <div className="space-x-6 hidden md:flex">
                <a href="#" className="hover:text-blue-500">Features</a>
                <a href="#" className="hover:text-blue-500">Pricing</a>
                <a href="#" className="hover:text-blue-500">Contacto</a>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
                Empezar
            </button>
            <button className="btn btn-primary">Click me!</button>
        </nav>
    );
}