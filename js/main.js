// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

const projects = [
    {
        title: 'bitinfonepal.com – An educational website for BIT students in Nepal',
        img:    'images/bitinfonepal.png',
        blurb:   `bitinfonepal.com is a dedicated educational platform for BIT students in Nepal,
              offering resources such as study materials, file uploads, and pagination features,
              all designed with an intuitive interface using Next.js, React, and Tailwind CSS.
              The platform also integrates MathJax for rendering complex mathematical formulas,
              enhancing the academic experience for students.`,
        longform_desc: `bitinfonepal.com is a dedicated educational platform for BIT students in Nepal,
              offering resources such as study materials, file uploads, and pagination features,
              all designed with an intuitive interface using Next.js, React, and Tailwind CSS.
              The platform also integrates MathJax for rendering complex mathematical formulas,
              enhancing the academic experience for students.`,
        link:   'https://bitinfonepal.com',
        tags: [
            'Next.js',
            'React',
            'Tailwind CSS',
            'AppsScript',
            'Cheerio',
            'SheetAPI',
            'TypeScript',
            'NodeMailer',
            'File Upload',
            'MathJax',
            'Web Application'
        ]
    },
    {
        title: 'BistroPOS',
        img:    'images/bitinfonepal.png',
        blurb:   `POS system for ... more details here blah`,
        longform_desc: `Longer description, possibly MD formatted`,
        link:   'https://bitinfonepal.com',
        tags: [
            'React Native',
            '.NET',
            'Kotlin',
            'RESTful API'
        ]
    },
    {
        title: 'StockHome',
        img:    'images/bitinfonepal.png',
        blurb:   `Stock portfolio analysis app.`,
        longform_desc: `Can make *portfolios*, track your stuff real time, etc....`,
        link:   'https://bitinfonepal.com',
        tags: [
            'OCaml',
            'Python',
            'YFinance',
        ]
    },
    {
        title: 'Image Compression',
        img:    'images/bitinfonepal.png',
        blurb:   `Image compression using numerical methods; Householder QR factorization to decrease file size by 70%.`,
        longform_desc: `BENCHMARK, MATH STUFF, etc`,
        link:   'https://bitinfonepal.com',
        tags: [
            'OCaml',
            'Python',
            'YFinance',
        ]
    },
];
const MAX_TAGS = 10;     // how many pills to show before “[…]”
const MAX_DESC = 250;   // max chars in card view

function renderProjects() {
  const grid = document.getElementById('projectGrid');
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';

    // 1) truncate description at MAX_DESC
    let blurb = p.blurb;
    if (blurb.length > MAX_DESC) {
      blurb = blurb.slice(0, MAX_DESC - 3).trim() + '…';
    }

    // 2) pick up to MAX_TAGS tags, then add a “…” pill
    let tags = p.tags || [];
    let extraTag = null;
    if (tags.length > MAX_TAGS) {
      extraTag = tags.slice(MAX_TAGS);
      tags = tags.slice(0, MAX_TAGS);
    }
    const tagsHtml = tags.length
      ? `<div class="project-tags">
           ${tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
           ${extraTag ? `<span class="project-tag more-tag">…</span>` : ''}
         </div>`
      : '';

    card.innerHTML = `
      <img src="${p.img}" hidden alt="${p.title} screenshot"/>
      <h3>${p.title}</h3>
      <p>${blurb}</p>
      ${tagsHtml}
      <a href="${p.link}" class="button" target="_blank">View</a>
      <button class="expand-button">Details</button>
    `;
    const btn = card.querySelector('.expand-button');
    btn.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
  });
}


document.addEventListener('DOMContentLoaded', renderProjects);

// grab overlay + pieces
const overlay = document.getElementById('modalOverlay');
const modalBody = overlay.querySelector('.modal-body');
const closeBtn  = overlay.querySelector('.modal-close');


function openModal(project) {
    // project.title, project.desc, project.img, project.tags, project.link…
    modalBody.innerHTML = `
      <h3>${project.title}</h3>
      <img src="${project.img}" style="width:100%; margin:1em 0;">
      <p>${project.longform_desc}</p>
      <div class="project-tags">
        ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
    `;
    overlay.classList.add('active');
}

// close handler
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});