"use client";

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEOHead({ title, description, keywords, canonical, ogImage, ogType = "website" }: SEOProps) {
  useEffect(() => {
    document.title = title ? `${title} | Vesco Science` : "Vesco Science";

    const setMeta = (name: string, content: string, attr?: string) => {
      let el = attr
        ? document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
        : document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        if (attr) el.setAttribute(attr, name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:site_name", "Vesco Science", "property");
    setMeta("og:image", ogImage || "/assets/vesco_logo-KfffcaeC.png", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    if (canonical) {
      let linkEl = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
      if (!linkEl) {
        linkEl = document.createElement("link");
        linkEl.setAttribute("rel", "canonical");
        document.head.appendChild(linkEl);
      }
      linkEl.setAttribute("href", canonical);
    }
  }, [title, description, keywords, canonical, ogImage, ogType]);

  return null;
}
