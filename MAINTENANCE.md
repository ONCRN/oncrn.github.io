# Website maintenance

This repository publishes the official website of the Optic Neuritis Collaborative Research Network (ONCRN), 视神经炎研究协作网络, at https://oncrn.org/.

## Structure

- `index.html`: bilingual Home, About, Research, GX-ICON, Members, and Leadership sections, with all substantive content available without JavaScript.
- `assets/site.css`: responsive layout and print styles; system fonts only.
- `assets/oncrn-bilingual-domain-wordmark.png`: approved A-style header wordmark, with the simplified Chinese name in Song type and `oncrn.org` to its right; white-background PNG.
- `assets/oncrn-e1-wordmark.png`: original E1 serif wordmark, retained as a source asset; transparent PNG.
- `assets/oncrn-e1-symbol.png`: companion O symbol for the browser icon and touch icon.
- `assets/member-map.js`: progressively enhanced member-location map, initialized when the Members section approaches the viewport.
- `assets/vendor/`: locally hosted Leaflet 1.9.4 (BSD-2-Clause) and Leaflet.markercluster 1.5.3 (MIT), with their licenses.
- `.nojekyll`: publishes the static files without a Jekyll transformation.
- `sitemap.xml`: lists the canonical homepage for search engines.
- `robots.txt`: allows crawling and provides the sitemap URL.
- `README.md`: concise public repository introduction.

Preserve the organization handle, repository name, and existing Git history. The original https://oncrn.github.io/ address redirects to the custom domain. No framework, package installation, or build step is required. The existing GitHub Pages branch deployment should continue to publish the repository root.

## Custom domain

`CNAME` contains `oncrn.org`, configured in the repository's GitHub Pages settings. Keep this file when publishing. Spaceship DNS points the apex (`@`) to GitHub Pages with four A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. The `www` CNAME points to `oncrn.github.io`; GitHub Pages redirects it to the apex domain.

Keep the `_github-pages-challenge-ONCRN` TXT record in Spaceship DNS to retain organization-level domain verification. Certificate issuance and HTTPS enforcement are managed in GitHub Pages settings. No paid hosting or URL-forwarding service is required.

## Search discovery

The site is a single HTML page. Its sitemap lists only `https://oncrn.org/`; section fragments such as `#about` and `#members` are not separate pages. Add canonical HTTPS URLs to `sitemap.xml` only when new standalone public pages are published. Optional `lastmod` values are omitted to avoid publishing inaccurate modification dates.

Submit `https://oncrn.org/sitemap.xml` in the `oncrn.org` Domain property in Google Search Console. DNS verification uses a separate `google-site-verification` TXT record at the apex; retain that record after verification and do not replace the GitHub verification record. Verification and sitemap submission help Google discover the site but do not guarantee indexing or ranking. No analytics or visitor-tracking script is required.

## Content and source verification

Network positioning, leadership, research priorities, and the current member-institution list follow the information supplied and approved by the Network Lead. Membership is maintained separately from the GX-ICON study registry. The E1 logo was selected by the Network Lead from the wordmark concepts and prepared as website assets with the built-in image generation tool. The bilingual A-style variant with the domain beside the Chinese name was approved on 2026-11-09; the browser icon remains the original O symbol.

GX-ICON was checked against the [ClinicalTrials.gov public record](https://clinicaltrials.gov/study/NCT07623252) and its [structured record](https://clinicaltrials.gov/api/v2/studies/NCT07623252) on 2026-09-23. The latest update posted was 2026-06-15. Nine location names were verified; English names are reproduced as registered. The shorter website study heading is descriptive; the exact registered official title is available in its expandable detail.

Chinese center names follow the user-confirmed list and were cross-checked where accessible against hospital or university sources:

- [Guangxi Medical University affiliated hospitals](https://www.gxmu.edu.cn/jgsz/fsyy/)
- [Guangxi Minzu Hospital](https://www.gxmzyy.cn/)
- [Guangxi Jingliang Eye Hospital](https://www.jleye.com/index.html)
- [The First People's Hospital of Yulin](https://www.ylsdyrmyy.cn/web/news/view.aspx?id=6237)
- [Wuzhou Gongren Hospital recruitment notice hosted by Yulin](https://www.ylsdyrmyy.cn/m/news/view.aspx?newsid=109)
- [Lixiang Eye Hospital of Soochow University](https://www.lxeye.org.cn/)
- [The Second People's Hospital of Qinzhou institutional entry, National Population Health Science Data Center](https://csp.ncmi.cn/UsersInfo/UserUnit/UserUnitDetailWeb?uid=01409)

The Qinzhou and Wuzhou hospital homepages did not respond during verification. Their Chinese names are consistent with the supplied list and the institutional sources above.

## Member-location map

The five city coordinates come from `contactsLocationsModule.locations[].geoPoint` in the public GX-ICON registry, checked on 2026-09-23. They are city-level locations, not hospital geocodes. Nanning includes the Wuming institution. Do not reposition city markers to imply campus precision without verifying an actual campus location.

| City | Latitude | Longitude | Institutions |
| --- | --- | --- | --- |
| Nanning | 22.81667 | 108.31667 | 5 |
| Qinzhou | 21.98247 | 108.65061 | 1 |
| Wuzhou | 23.48054 | 111.28848 | 1 |
| Yulin | 22.6305 | 110.14686 | 1 |
| Suzhou | 31.30408 | 120.59538 | 1 |

Institution names and map-query links live in `index.html`; map popups read that list to avoid maintaining duplicate names. The map uses normal on-demand [OpenStreetMap tiles](https://operations.osmfoundation.org/policies/tiles/) with visible attribution, no bulk downloads, and no API keys or analytics. Tiles require a third-party connection and may be unavailable in some networks. Hospital names, cities, and [Amap URI search links](https://developer.amap.com/api/uri-api/guide/search/search) remain usable without JavaScript or a basemap. Amap links search by institution name and city; they are not hard-coded campus destinations. No visitor geolocation is requested.

## Before publishing

Review English and Chinese together. Check registry dates and center names against the live registry. Test navigation anchors, external registry links, mobile layouts, UTF-8 text, and absence of personal contact details. Append a normal Git commit, then confirm the existing Pages build succeeds and the published HTML matches the new commit.

Increment the `v` query parameter on the local site stylesheet and map script in `index.html` when changing their layout or behavior, so returning visitors do not combine fresh HTML with stale cached assets.
