import Link from "next/link";



export default function Header() {
    return (
        <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-sand-dark/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-gray-900 z-50 relative">
                            旅するマヤ暦アドバイザー
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        {["Home", "About", "Blog", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="text-gray-600 hover:text-turquoise transition-colors text-sm tracking-wide uppercase font-medium"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                    {/* Mobile menu button placeholder - can be implemented with state later */}
                    <div className="md:hidden">
                        <button className="text-gray-600 hover:text-gray-900 focus:outline-none p-2">
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
