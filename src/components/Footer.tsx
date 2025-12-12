import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-sand-beige text-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-serif text-2xl tracking-widest block mb-6">
                            旅するマヤ暦アドバイザー
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-600 max-w-sm mx-auto md:mx-0">
                            旅とマヤ暦を通じて、<br />
                            本当の自分に出会うためのライフスタイルマガジン。<br />
                            あなたの魂が求める場所へ。
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-serif text-lg mb-4">Content</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-turquoise transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-turquoise transition-colors">About</Link></li>
                            <li><Link href="/blog" className="hover:text-turquoise transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-turquoise transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-serif text-lg mb-4">Follow Me</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-turquoise transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-turquoise transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-turquoise transition-colors">Note</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-300 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Miyu - Traveling Maya Advisor</p>
                </div>
            </div>
        </footer>
    );
}
