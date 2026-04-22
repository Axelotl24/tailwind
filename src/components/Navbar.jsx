const navLink = "hover:scale-125 hover:text-blue-600 transition-transform duration-400 ease-in-out";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
            <h1 className="text-xl font-bold text-blue-600 hover:cursor-pointer">MiApp</h1>
            <div className="space-x-6 hidden md:flex">
                <a href="#" className={navLink}>Features</a>
                <a href="#" className={navLink}>Pricing</a>
                <a href="#" className={navLink}>Contacto</a>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 hover:scale-110 transition-transform duration-400 ease-in-out">
                Empezar
            </button>
        </nav>
    );
}