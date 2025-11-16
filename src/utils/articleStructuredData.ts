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
  publishDate = "2024-01-01",
  modifiedDate,
  image = "https://bomqi.com.br/favicon-brain-icon.png",
}: ArticleStructuredDataProps) => {
  const finalModifiedDate = modifiedDate || publishDate;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": image,
      "datePublished": publishDate,
      "dateModified": finalModifiedDate,
      "author": {
        "@type": "Organization",
        "name": "BomQI"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BomQI",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bomqi.com.br/favicon-brain-icon.png"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bomqi.com.br"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://bomqi.com.br/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": title,
          "item": url
        }
      ]
    }
  ];
};

