import { Helmet } from "react-helmet-async";
import { SITE, DEFAULT_META } from "../../lib/siteConfig";

export default function SEO({ title, description, image, keywords, canonical, children }) {
  const siteTitle = title || DEFAULT_META.title;
  const siteDescription = description || DEFAULT_META.description;
  const siteImage = image || DEFAULT_META.image;
  const fullURL = canonical ? `${SITE.url}${canonical}` : SITE.url;
  const fullImage = siteImage.startsWith("http") ? siteImage : `${SITE.url}${siteImage}`;

  return (
    <Helmet>
      <html lang="es" />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#040718" />
      <meta name="author" content={SITE.name} />
      <link rel="canonical" href={fullURL} />
      {fullURL !== SITE.url && <link rel="alternate" href={SITE.url} hrefLang="es-CO" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullURL} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:site_name" content={SITE.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={fullImage} />
      {SITE.social.twitter && <meta name="twitter:site" content={SITE.social.twitter} />}

      {children}
    </Helmet>
  );
}
