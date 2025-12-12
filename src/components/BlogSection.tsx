import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/mockData";

export default function BlogSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-turquoise text-sm tracking-widest uppercase font-medium block mb-2">
                        Journal
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
                        日々の気づきと旅の記憶
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group cursor-pointer flex flex-col h-full bg-transparent">
                            <Link href={`#blog-${post.id}`} className="block h-full">
                                {/* Image Wrapper with Overflow Hidden for Zoom Effect */}
                                <div className="relative aspect-[3/2] overflow-hidden rounded-sm mb-4">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                    {/* Overlay Category Chip */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-wider text-gray-800 uppercase shadow-sm">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow">
                                    <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-3 group-hover:text-turquoise transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    {/* Optional: Excerpt - user didn't explicitly ask to remove, but standard magazine might keeps it short or remove. 
                       I'll keep it but lighter text to not compete with bold title. */}
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="text-xs text-gray-400 text-right mt-auto">
                                        {post.publishedAt}
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/blog"
                        className="inline-block border-b border-gray-900 pb-1 text-gray-900 hover:text-turquoise hover:border-turquoise transition-colors text-sm tracking-widest uppercase"
                    >
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
}
