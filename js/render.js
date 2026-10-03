/* Data files se saare sections page me banata hai. Normally ise edit karne ki zaroorat nahi. */
(function () {
  var D = window.DATA, P = D.profile;
  var $ = function (id) { return document.getElementById(id); };
  var ic = function (c) { return '<i class="' + c + '"></i>'; };
  var map = function (a, f) { return (a || []).map(f).join(''); };
  var btns = function (o, a, b) {
    var s = (o.live ? '<a class="btn ' + a + '" href="' + o.live + '" target="_blank" rel="noopener">Live Demo</a>' : '') +
            (o.code ? '<a class="btn' + (o.live ? '' : ' ' + a) + '" href="' + o.code + '" target="_blank" rel="noopener">' + (b || 'Code') + '</a>' : '');
    return s ? '<div class="bt">' + s + '</div>' : '';
  };
  var link = function (s) { return '<a href="' + s.url + '" target="_blank" rel="noopener" aria-label="' + s.name + '" title="' + s.name + '">' + ic(s.icon) + '</a>'; };

  $('hero-p').innerHTML = P.heroText;
  $('about-text').innerHTML = map(P.about, function (t) { return '<p>' + t + '</p>'; });
  $('hero-soc').innerHTML = map(D.social, link);
  $('hero-fi').insertAdjacentHTML('beforeend', map(P.heroIcons, function (i) {
    return '<span class="fi" style="' + i.pos + ';color:' + i.color + ';animation-duration:' + i.dur + ';animation-delay:' + i.delay + '">' + ic(i.icon) + '</span>';
  }));
  document.querySelectorAll('.js-cv').forEach(function (a) { a.href = P.resume; });

  $('mq').innerHTML = map(D.marquee, function (n) { return ic('fa-brands fa-' + n); });

  $('exp-list').innerHTML = map(D.experience, function (e) {
    return '<div class="job"><div class="ic">' + ic('fa-solid fa-briefcase') + '</div><div><h3>' + e.role + ' – ' + e.company + '</h3><small>' + e.period + '</small><ul>' + map(e.points, function (p) { return '<li>' + p + '</li>'; }) + '</ul></div></div>';
  });

  $('skills-grid').innerHTML = map(D.skills, function (g) {
    return '<div class="card"><h3>' + ic(g.icon) + ' ' + g.title + '</h3><div class="pills">' + map(g.items, function (i) { return '<span>' + i + '</span>'; }) + '</div></div>';
  });

  $('ach-grid').innerHTML = map(D.achievements, function (a) {
    return '<div class="ach">' + ic('fa-solid fa-' + (a.icon || 'certificate')) + '<span>' + a.text + '</span></div>';
  });

  function vis(v) {
    var s = '<b>' + ic(v.icon) + ' ' + v.title + '</b>';
    if (v.chat) s += '<div class="chat"><div class="bub">' + v.chat[0] + '</div><div class="bub r">' + v.chat[1] + '</div><div class="bub dots"><span></span><span></span><span></span></div></div>';
    if (v.bars) s += '<div class="bars">' + map(v.bars, function (h) { return '<span style="height:' + h + '%"></span>'; }) + '</div>';
    if (v.code) s += '<div class="code"><span style="color:#ffd479">' + v.code[0] + '</span> ' + v.code[1] + '<br><span style="opacity:.75">' + v.code[2] + '</span></div>';
    return s + map(v.lines, function (l) { return '<em>' + l + '</em>'; });
  }
  $('works-grid').innerHTML = map(D.works, function (w) {
    var shot = w.image
      ? '<div class="shot img" role="img" aria-label="' + w.title + '" style="background-image:url(\'' + w.image + '\')"></div>'
      : '<div class="shot" style="background:' + w.visual.gradient + '">' + vis(w.visual) + '</div>';
    return '<article class="card pc">' + shot + '<div class="b"><h3>' + w.title + '</h3><p>' + w.desc + '</p>' + btns(w, 's') + '</div></article>';
  });

  $('hl-grid').innerHTML = map(D.highlights, function (h) {
    var body = h.stats
      ? '<div class="stats">' + map(h.stats, function (s) { return '<div><b>' + s.value + '</b><span>' + s.label + '</span></div>'; }) + '</div>'
      : '<p style="color:var(--mut);margin:14px 0 4px">' + (h.desc || '') + '</p>';
    return '<div class="sc"><h3>' + h.title + '</h3><small>' + h.tech + '</small>' + body + btns(h, 'p', 'GitHub') + '</div>';
  });

  $('svc-grid').innerHTML = map(D.services, function (s) {
    return '<div class="sv"><header>' + ic(s.icon) + ' ' + s.title + '</header><div><p>' + s.desc + '</p><h4>Services Include</h4><ul>' + map(s.items, function (i) { return '<li>' + i + '</li>'; }) + '</ul></div></div>';
  });

  $('soc-row').innerHTML = map(D.social, function (s) {
    return '<a class="sb" href="' + s.url + '" target="_blank" rel="noopener" aria-label="' + s.name + '" style="--c:' + s.color + '"><span class="ci">' + ic(s.icon) + '</span>' + s.name + '</a>';
  });

  $('ft-about').innerHTML = P.footerAbout;
  $('ft-avail').innerHTML = map(P.availableFor, function (a) { return '<li>• ' + a + '</li>'; });
  $('ft-contact').innerHTML =
    '<li>' + ic('fa-solid fa-envelope') + ' <a href="mailto:' + P.email + '">' + P.email + '</a></li>' +
    '<li>' + ic('fa-solid fa-phone') + ' <a href="tel:' + P.phone + '">' + P.phoneShow + '</a></li>' +
    '<li>' + ic('fa-solid fa-location-dot') + ' ' + P.location + '</li>';
})();
