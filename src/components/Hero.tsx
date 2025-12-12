import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1540206395-688085723adb?q=80&w=2574&auto=format&fit=crop" // Nature + Person vibe (hiking/mountains or sea) - Placeholder
                    alt="Nature landscape with traveler"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for text readability and sophisticated look */}
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
                <p className="text-sm md:text-base tracking-[0.2em] font-medium mb-6 uppercase drop-shadow-sm">
                    旅するマヤ暦アドバイザー 美優
                </p>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-8 leading-relaxed font-bold tracking-wide drop-shadow-md">
                    自然体でいることが、<br className="md:hidden" />
                    一番の導き。
                </h1>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
}
