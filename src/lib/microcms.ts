import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSListResponse } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
    apiKey: process.env.MICROCMS_API_KEY || "",
});

export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    body: string; // HTML content
    iCatch?: MicroCMSImage; // Custom field name
    categoly?: string[]; // Custom field name (Typo in CMS)
    excerpt?: string; // Optional excerpt
};

export type BlogResponse = MicroCMSListResponse<Blog>;

export const getBlogPosts = async (queries?: MicroCMSQueries) => {
    const detail = await client.getList<Blog>({
        endpoint: "blog", // Correct endpoint
        queries,
    });
    return detail;
};
