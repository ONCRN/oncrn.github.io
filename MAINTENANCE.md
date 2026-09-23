# Website maintenance

This repository publishes the official website of the Optic Neuritis Collaborative Research Network (ONCRN), 视神经炎研究协作网络, at https://oncrn.github.io/.

## Structure

- `index.html`: bilingual Home, About, Research, GX-ICON, Members, and Leadership sections, with all substantive content available without JavaScript.
- `assets/site.css`: responsive layout and print styles; system fonts only.
- `assets/oncrn-e1-wordmark.png`: approved E1 serif wordmark, with a forest-green crescent in the O and charcoal lettering; transparent PNG.
- `assets/oncrn-e1-symbol.png`: companion O symbol for the browser icon and touch icon.
- `.nojekyll`: publishes the static files without a Jekyll transformation.
- `README.md`: concise public repository introduction.

Preserve the organization handle, repository name, existing Git history, and Pages address. No framework, package installation, or build step is required. The existing GitHub Pages branch deployment should continue to publish the repository root.

## Content and source verification

Network positioning, leadership, research priorities, and the current member-institution list follow the information supplied and approved by the Network Lead. Membership is maintained separately from the GX-ICON study registry. The E1 logo was selected by the Network Lead from the wordmark concepts and prepared as website assets with the built-in image generation tool.

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

## Before publishing

Review English and Chinese together. Check registry dates and center names against the live registry. Test navigation anchors, external registry links, mobile layouts, UTF-8 text, and absence of personal contact details. Append a normal Git commit, then confirm the existing Pages build succeeds and the published HTML matches the new commit.
