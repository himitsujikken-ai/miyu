import Image from "next/image";

export default function Profile() {
    return (
        <section className="py-24 bg-sand-beige/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Image */}
                    <div className="w-full md:w-1/2 relative aspect-[3/4] max-w-sm mx-auto md:max-w-none">
                        <div className="absolute inset-0 bg-white translate-x-4 translate-y-4 border border-sand-dark" />
                        <Image
                            src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?q=80&w=2574&auto=format&fit=crop" // Placeholder for Miyu's portrait
                            alt="Miyu Sawa"
                            fill
                            className="object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-turquoise text-sm tracking-widest uppercase font-bold mb-4">
                            Profile
                        </h2>
                        <div className="mb-8">
                            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mb-2">
                                美優
                            </h3>
                            <p className="text-gray-500 font-serif italic text-lg">Miyu</p>
                        </div>

                        <p className="text-sm font-bold tracking-wider uppercase text-gray-600 mb-8 border-b border-gray-300 pb-2 inline-block">
                            旅するマヤ暦アドバイザー
                        </p>

                        <div className="space-y-6 text-gray-700 leading-loose">
                            <p>
                                かつては自信がなく、周りの目ばかり気にしていた私。<br />
                                しかしマヤ暦に出会い「自分を知る」ことで人生が激変しました。
                            </p>
                            <p>
                                ハワイへの旅や自然との触れ合いの中で、<br />
                                「自分を愛すること（セルフラブ）」の大切さに気づきました。<br />
                                誰かになる必要はない。あなたは、あなたのままで素晴らしい。
                            </p>
                            <p>
                                現在は旅をしながら、マヤ暦を通して<br />
                                一人でも多くの人が自分らしく生きられるようサポートしています。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
