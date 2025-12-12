import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-br from-sand-beige/20 to-turquoise/10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    あなた本来のリズムを、<br />
                    取り戻しませんか？
                </h2>

                <p className="text-gray-700 text-lg mb-12 font-medium">
                    まずは公式LINEで、旅の様子や日々のヒントを受け取ってください。
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    {/* Primary Action */}
                    <a
                        href="https://line.me" // Placeholder
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-[#00B900] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:bg-[#00a000] transition-all transform hover:-translate-y-1"
                    >
                        公式LINEで友だちになる（特典あり）
                    </a>

                    {/* Secondary Action */}
                    <a
                        href="https://note.com" // Placeholder
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-white border-2 border-gray-900 text-gray-900 font-bold py-3.5 px-8 rounded-full hover:bg-gray-50 transition-colors"
                    >
                        noteでセッション詳細を見る
                    </a>
                </div>
            </div>
        </section>
    );
}
