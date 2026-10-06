/* ========== PROFILE: naam, hero text, about, contact, footer ==========
   Text me HTML chal sakta hai (<b>, <i>). "&" ki jagah "&amp;" likho. */
window.DATA = window.DATA || {};
DATA.profile = {
  name: "Rajat Singhariya",
  email: "rajatsinghariya99@gmail.com",
  phone: "+917791940654",            // links ke liye (bina space)
  phoneShow: "+91 77919 40654",      // page par dikhane ke liye
  location: "Jodhpur, Rajasthan, India",
  resume: "Rajat_Singhariya_Resume.pdf",   // PDF ko index.html ke saath rakho

  // Hero me type hone wale roles
  typed: ["Software Engineer", "Full-Stack Developer", "PHP &amp; Node.js Developer", "AI Chatbot Builder"],

  heroText: "I love building web apps from an empty folder to a live link. My work combines <b>PHP &amp; MySQL</b>, <i>Node.js &amp; REST APIs</i> and <b>AI chatbots</b> to create reliable, user-friendly products people actually use.",

  // About ("Who I Am") ke paragraphs - har item ek paragraph
  about: [
    "I'm <b style=\"color:var(--lav)\">Rajat Singhariya</b>, a final-year B.Tech Computer Science student at JIET Jodhpur with a passion for building digital products end to end. My interests sit at the intersection of <b>Full-Stack Development</b>, <i>Backend APIs</i> and <b>Artificial Intelligence</b>.",
    "I study how real users work first, then design the database, the API and the interface around that. LexBot, my legal chatbot, has been used by 100+ people with a 4.5-star average rating, and my grocery system was designed after studying 10+ real shops.",
    "I completed a 3-month PHP internship at Lucid Outsourcing Solutions (May to August 2026), where I built e-commerce apps in object-oriented PHP and an LLM-powered assistant. I'm looking for a software engineering role where I can take on more responsibility over time."
  ],

  // Footer
  footerAbout: "Passionate about full-stack development, clean APIs and building AI-powered solutions that create real-world impact.",
  availableFor: ["Software Engineer roles", "Full-Stack Development", "PHP / Node.js Development", "AI Chatbot Integration", "Internships &amp; Freelance"],

  // Hero photo ke aas-paas tairte gol icons (icon = Font Awesome class)
  heroIcons: [
    { icon: "fa-brands fa-js",       color: "#f7c948", pos: "left:2%;top:8%",       dur: "5s",   delay: "0s" },
    { icon: "fa-brands fa-php",      color: "#8892bf", pos: "left:-2%;top:42%",     dur: "6s",   delay: "-2s" },
    { icon: "fa-solid fa-database",  color: "#2f9bff", pos: "left:6%;bottom:12%",   dur: "5.5s", delay: "-1s" },
    { icon: "fa-brands fa-react",    color: "#38bdf8", pos: "right:3%;top:12%",     dur: "6.5s", delay: "-3s" },
    { icon: "fa-brands fa-node-js",  color: "#5fa04e", pos: "right:-2%;top:48%",    dur: "5s",   delay: "-1.5s" },
    { icon: "fa-brands fa-git-alt",  color: "#f05032", pos: "right:7%;bottom:10%",  dur: "6s",   delay: "-4s" }
  ]
};
