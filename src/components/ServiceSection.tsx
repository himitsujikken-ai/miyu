import Link from "next/link";
import Image from "next/image";

const services = [
    {
        title: "マヤ暦セッション",
        subtitle: "恋愛・人生のガイド",
        target: "モヤモヤを解消したい方へ",
        description: "あなたの生まれた日のエネルギーを読み解き、本来の役割や才能をお伝えします。",
        imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop",
        link: "/session"
    },
    {
        title: "マヤ暦講座",
        subtitle: "初級〜アドバイザー養成",
        target: "深く学び、仕事にしたい方へ",
        description: "マヤ暦を基礎から学び、自分だけでなく大切な人の人生も紐解けるようになります。",
        imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop",
        link: "/course"
    },
    {
        title: "旅・リトリート企画",
        subtitle: "ハワイ・国内",
        target: "非日常でリセットしたい方へ",
        description: "美しい景色とエネルギーに触れる旅。心と体を解放し、新しい自分に出会う時間を。",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop",
        link: "/retreat"
    }
];

export default function ServiceSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-turquoise text-sm tracking-widest uppercase font-bold mb-2 block">
                        Menu
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold">
                        提供メニュー
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute top-0 left-0 bg-turquoise text-white text-xs font-bold px-4 py-2 z-10 z-10">
                                    {service.target}
                                </div>
                                <Image
                                    src={service.imageUrl}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow text-center">
                                <h3 className="font-serif text-2xl mb-2 text-gray-900">{service.title}</h3>
                                <p className="text-sm text-turquoise font-medium mb-4">{service.subtitle}</p>
                                <div className="w-8 h-px bg-gray-300 mx-auto mb-4"></div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                                    {service.description}
                                </p>
                                <Link
                                    href={service.link}
                                    className="inline-block border border-gray-900 px-6 py-3 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300"
                                >
                                    MORE
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
