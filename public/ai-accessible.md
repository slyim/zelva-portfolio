# AI-Agent Accessible Website

This document outlines how this portfolio is optimized for AI agents, crawlers, and automated systems.

## Structure

- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA labels and roles for accessibility
- JSON-LD structured data (Schema.org Person + CreativeWork)
- robots.txt and sitemap.xml for crawlers
- LLM-friendly content formatting

## Navigation

- Clear URL structure with semantic paths
- Anchor-based section navigation (`#artworks`, `#designs`, etc.)
- Breadcrumb-equivalent structure in meta tags

## Content Accessibility

- Text content is never hidden in images (except decorative)
- Alt text for all visual media
- Machine-readable project metadata
- Contact info in h-card microformat

## For AI Agents

This site can be:
1. Crawled via standard HTTP
2. Parsed as semantic HTML
3. Understood via Schema.org structured data
4. Navigated via anchor links or URL paths
5. Queried for specific content sections
