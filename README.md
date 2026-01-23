# Photo by Bine - First Page with Contentful

This project is **my first website built with Contentful** as a headless CMS.  
The main goal was to learn how to **separate content from the frontend** and load it dynamically from a CMS.

## 🚀 Tech Stack
- Angular
- Contentful (Content Delivery API)
- RxJS
- HTML / CSS / TypeScript

## 🧩 Content Model
The website is structured using a **Page-based content model** in Contentful:

- **1 Content Type = 1 page**
- Each Page entry contains:
  - a slug
  - SEO data
  - a list of sections

Sections (Hero, Gallery, Text, CTA, etc.) are implemented as separate Content Types  
and are linked to the Page via reference fields.  
The order of the references defines the render order on the page.

## 🔄 Data Fetching
- Each page is loaded using **a single API request**
- Content is fetched via Angular services
- `shareReplay` is used to cache responses and prevent unnecessary requests during route navigation

## 🎯 What I Learned
- Designing content models in Contentful
- Building pages with reusable section components
- Optimizing API requests
- Caching data in Angular using RxJS
- Understanding the headless CMS approach

## 📌 Notes
This is a learning project.  

---

Feedback and suggestions are always welcome 🙂