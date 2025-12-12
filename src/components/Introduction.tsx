export default function Introduction() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-turquoise text-sm tracking-widest uppercase font-bold mb-3">
                    About Maya & Nature
                </h2>
                <p className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mb-12 leading-relaxed">
                    マヤ暦は、あなたの心が迷子にならないための<br className="hidden md:block" />
                    「人生の地図」です。
                </p>

                <div className="text-gray-600 leading-loose text-lg mb-16 max-w-2xl mx-auto font-medium">
                    <p>
                        環境が変わるとき、頑張りすぎていませんか？<br />
                        そんな時こそ、自然の中で“何もしない時間”を持つことが、<br className="hidden md:block" />
                        いちばんのリセットになります。
                    </p>
                    <p className="mt-8">
                        マヤ暦と旅を通して、<br />
                        あなたがあなたらしく輝くためのヒントをお届けします。
                    </p>
                </div>

                {/* 3 Step Cycle Visualization */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 rounded-full bg-sand-beige flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            {/* Icon: Knowing - Book/Star */}
                            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-2">Knowing</h3>
                        <p className="text-sm text-gray-500">自分の本質を知る</p>
                    </div>

                    <div className="flex flex-col items-center group">
                        {/* Arrow for desktop */}
                        <div className="hidden md:block absolute -right-6 top-10 text-sand-dark">→</div>

                        <div className="w-20 h-20 rounded-full bg-sand-beige flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            {/* Icon: Healing - Leaf/Nature */}
                            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-2">Healing</h3>
                        <p className="text-sm text-gray-500">自然の中で癒やす</p>
                    </div>

                    <div className="flex flex-col items-center group">
                        <div className="hidden md:block absolute -right-6 top-10 text-sand-dark">→</div>

                        <div className="w-20 h-20 rounded-full bg-sand-beige flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            {/* Icon: Action - Footprints/Walk */}
                            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-2">Action</h3>
                        <p className="text-sm text-gray-500">新たな一歩へ</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
