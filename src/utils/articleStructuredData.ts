import { DEFAULT_OG_IMAGE, SITE_BRAND, SITE_LOGO, SITE_URL } from "@/constants/site";

/**
 * Helper para gerar structured data (Schema.org) para artigos do blog
 */
export interface ArticleStructuredDataProps {
  title: string;
  description: string;
  url: string;
  slug: string;
  publishDate?: string;
  modifiedDate?: string;
  image?: string;
}

export const generateArticleStructuredData = ({
  title,
  description,
  url,
  slug,
  publishDate = "2025-06-15",
  modifiedDate,
  image = DEFAULT_OG_IMAGE,
}: ArticleStructuredDataProps) => {
  const finalModifiedDate = modifiedDate || publishDate;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": [image],
      "datePublished": publishDate,
      "dateModified": finalModifiedDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url,
      },
      "author": {
        "@type": "Organization",
        "name": SITE_BRAND,
      },
      "publisher": {
        "@type": "Organization",
        "name": SITE_BRAND,
        "logo": {
          "@type": "ImageObject",
          "url": SITE_LOGO,
          "width": 1200,
          "height": 630,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${SITE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": title,
          "item": url,
        },
      ],
    },
  ];
};
