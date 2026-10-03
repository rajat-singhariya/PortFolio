/* ========== PROJECTS ==========
   DATA.works      -> "My Recent Works" (image wale bade cards)
   DATA.highlights -> "Development Highlights" (stats wale cards)
   Naya project add karne ke liye block copy karke paste karo. Links optional hain
   (live / code na ho to button nahi dikhega).

   Real screenshot lagana ho: image ko assets/projects/ me rakho aur works me
   visual ki jagah  image: "assets/projects/naam.png"  likh do.
   visual.type: "chat" | "bars" | "code" | "tags"  (mock preview ke liye) */
window.DATA = window.DATA || {};

DATA.works = [
  {
    title: "Ordo",
    desc: "AI-assisted tasks, geo-spatial routing and role-based access control, built with Laravel 12.",
    live: "https://ordo-production-8254.up.railway.app",
    code: "https://github.com/rajat-singhariya/ordo",
    visual: { type: "tags", gradient: "linear-gradient(135deg,#0f3d6e,#14b8c6)", icon: "fa-solid fa-route", title: "Ordo",
              lines: ["AI-assisted tasks", "Geo-spatial routing", "RBAC · Laravel 12"] }
  },
  {
    title: "LexBot – AI Legal Chatbot",
    desc: "Legal Q&amp;A chatbot using the Claude and Gemini APIs, with session history and 3 REST endpoints. 100+ users, 4.5★.",
    live: "https://lexbot-hj2h.onrender.com/",
    code: "https://github.com/rajat-singhariya/LexBot",
    visual: { type: "chat", gradient: "linear-gradient(135deg,#4b2fd0,#1f8fff)", icon: "fa-solid fa-comments", title: "LexBot",
              chat: ["What are my rights as a tenant?", "Here is some general information…"] }
  },
  {
    title: "Grocery Finance System",
    desc: "Order, stock and payment management with role-based pricing, plus demand prediction and anomaly detection.",
    live: "https://grocery-finance-system.onrender.com",
    code: "https://github.com/rajat-singhariya/grocery-finance-system",
    visual: { type: "bars", gradient: "linear-gradient(135deg,#1c1a3d,#7c5cf0)", icon: "fa-solid fa-cart-shopping", title: "Grocery Finance",
              bars: [40, 62, 50, 80, 68, 94, 75], lines: ["Demand prediction · Anomaly detection"] }
  },
  {
    title: "EduInsight – School API",
    desc: "Node.js backend with 15+ endpoints and analytics that summarise performance per student and class.",
    live: "https://eduinsight-taupe.vercel.app",
    code: "https://github.com/rajat-singhariya/eduinsight",
    visual: { type: "code", gradient: "linear-gradient(135deg,#0a4fa8,#9b7bff)", icon: "fa-solid fa-graduation-cap", title: "EduInsight",
              code: ["GET", "/api/students/:id/analytics", "// sample endpoint"], lines: ["Admin · Teacher · Student"] }
  },
  {
    title: "Vehicle For You",
    desc: "OOP vehicle rental system with factory pattern, booking flow and an admin panel.",
    code: "https://github.com/rajat-singhariya/vehicle-for-you",
    visual: { type: "tags", gradient: "linear-gradient(135deg,#2b1a5e,#c26bff)", icon: "fa-solid fa-car", title: "Vehicle For You",
              lines: ["OOP · Factory pattern", "Booking flow", "Admin panel"] }
  }
];

DATA.highlights = [
  {
    title: "Ordo", tech: "Laravel 12 · RBAC · Geo-spatial",
    desc: "AI-assisted tasks, geo-spatial routing and role-based access control.",
    live: "https://ordo-production-8254.up.railway.app", code: "https://github.com/rajat-singhariya/ordo"
  },
  {
    title: "LexBot", tech: "Node.js · Express · MongoDB",
    stats: [{ value: "100+", label: "Users" }, { value: "4.5★", label: "Rating" }, { value: "3", label: "Endpoints" }],
    live: "https://lexbot-hj2h.onrender.com/", code: "https://github.com/rajat-singhariya/LexBot"
  },
  {
    title: "Grocery Finance System", tech: "Full-Stack · AI Analytics",
    stats: [{ value: "10+", label: "Shops studied" }, { value: "3", label: "User roles" }, { value: "2", label: "AI features" }],
    live: "https://grocery-finance-system.onrender.com", code: "https://github.com/rajat-singhariya/grocery-finance-system"
  },
  {
    title: "EduInsight API", tech: "Node.js · REST API",
    stats: [{ value: "15+", label: "Endpoints" }, { value: "3", label: "User roles" }],
    live: "https://eduinsight-taupe.vercel.app", code: "https://github.com/rajat-singhariya/eduinsight"
  },
  {
    title: "Vehicle For You", tech: "OOP · Factory pattern",
    desc: "OOP vehicle rental system with factory pattern, booking flow and an admin panel.",
    code: "https://github.com/rajat-singhariya/vehicle-for-you"
  },
  {
    title: "Avengers Card Game", tech: "HTML · CSS · JavaScript",
    desc: "Pick hero cards to fight villains like Thanos and Doctor Doom. Built for a company skills assessment."
  }
];
