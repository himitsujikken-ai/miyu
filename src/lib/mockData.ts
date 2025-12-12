export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    imageUrl: string;
    publishedAt: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "ハワイで一泊20万する5スターホテルが無料で行ける“秘密”",
        excerpt: "憧れのあのホテルに、実はこんな方法で泊まれるなんて。私が実践している旅の裏技をこっそり教えます。",
        category: "旅",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop", // Luxury Hotel / Hawaii vibe
        publishedAt: "2023.10.12",
    },
    {
        id: "2",
        title: "マヤ暦でわかる！恋愛でうまくいかない理由と解決のヒント～青いタイプ編～",
        excerpt: "「なぜかいつも同じパターンで失敗する…」それはあなたの紋章が持つ性質かもしれません。青い紋章を持つ人の恋愛傾向と対策。",
        category: "マヤ暦",
        imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2670&auto=format&fit=crop", // Abstract / Stars / Mystery
        publishedAt: "2023.09.28",
    },
    {
        id: "3",
        title: "高尾山で感じた、“自然体でいることが一番の導き”",
        excerpt: "都心から一番近い大自然。木漏れ日の中で深呼吸した瞬間、迷っていた心がふっと軽くなりました。",
        category: "マインド",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop", // Nature / Forest / Sunbeam
        publishedAt: "2023.09.15",
    },
];
