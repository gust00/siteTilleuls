import { defineCollection, z } from 'astro:content';

const documentsCollection = defineCollection({
    type: 'content', // v2.5+ way, or 'data' for JSON/YAML. Content (markdown) is fine for CMS.
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        file: z.string(), // Path to the file
        date: z.date(),
    })
});

const pagesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        carouselImages: z.array(z.string()).optional(),
        heroTitle: z.string().optional(),
        heroSubtitle: z.string().optional(),
        ctaText1: z.string().optional(),
        ctaLink1: z.string().optional(),
        ctaText2: z.string().optional(),
        ctaLink2: z.string().optional(),
        sectionTitle: z.string().optional(),
        sectionText: z.string().optional(),
        // Presentation fields
        title: z.string().optional(),
        historyTitle: z.string().optional(),
        historyText: z.string().optional(),
        valuesTitle: z.string().optional(),
        value1Title: z.string().optional(),
        value1Text: z.string().optional(),
        value2Title: z.string().optional(),
        value2Text: z.string().optional(),
        value3Title: z.string().optional(),
        value3Text: z.string().optional(),
    })
});

export const collections = {
    'documents': documentsCollection,
    'pages': pagesCollection,
};
