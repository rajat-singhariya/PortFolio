# Portfolio ko edit kaise kare

Poora content `data/` folder ki files me hai. HTML/CSS ko touch karne ki zaroorat nahi.
Save karo aur `index.html` refresh karo (ya GitHub/Vercel par push karo).

| Kya badalna hai | File |
|---|---|
| Naam, email, phone, hero text, About paragraphs, footer, hero ke tairte icons | `data/profile.js` |
| Experience / Professional Journey | `data/experience.js` |
| Skills & Expertise + tech logo strip | `data/skills.js` |
| Achievements / certificates | `data/achievements.js` |
| Recent Works + Development Highlights (projects) | `data/projects.js` |
| Professional Services | `data/services.js` |
| Social links (X, WhatsApp, Instagram...) | `data/social.js` |

## Naya project add karna (`data/projects.js`)
`DATA.works` aur/ya `DATA.highlights` ki list me ek block copy-paste karo:

```js
{
  title: "Mera Naya Project",
  desc: "Do line ka description.",
  live: "https://live-link.com",          // optional
  code: "https://github.com/rajat-singhariya/repo",   // optional
  visual: { type: "tags", gradient: "linear-gradient(135deg,#0f3d6e,#14b8c6)",
            icon: "fa-solid fa-rocket", title: "Naam", lines: ["Point 1", "Point 2"] }
}
```
Real screenshot lagana ho to image `assets/projects/` me rakho aur `visual` ki jagah `image: "assets/projects/naam.png"` likho.

Highlights card me numbers: `stats: [{ value: "100+", label: "Users" }]` ya sirf `desc: "..."`.

## Naya experience / achievement / skill
- Experience: `data/experience.js` ke top par naya `{ role, company, period, points: [...] }` block.
- Achievement: `data/achievements.js` me `{ icon: "trophy", text: "..." }` line.
- Skill: `data/skills.js` me kisi group ke `items` me naam likh do.

## Dhyan rakho
- Text me `&` ki jagah `&amp;` likho.
- Har item ke baad comma `,` lagana na bhoolo.
- Resume PDF ko `Rajat_Singhariya_Resume.pdf` naam se `index.html` ke saath rakho.
- Icons Font Awesome ke hain: https://fontawesome.com/search?o=r&m=free
