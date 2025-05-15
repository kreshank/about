import { projects, MAX_TAGS, MAX_DESC } from './project_info.js';
import { experiences } from './exp_info.js';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked@4.3.0/lib/marked.esm.js';
// Setup marked
marked.setOptions({ gfm: true, breaks: false });

// Utility: truncate plain/text or markdown-converted text
function truncateDesc(mdText) {
  // strip markdown to plain text for character count
  const plain = mdText.replace(/[#_*~`>\[\]()-]/g, '');
  if (plain.length <= MAX_DESC_LENGTH) return mdText;
  // find cutoff position in original mdText
  const truncated = plain.slice(0, MAX_DESC_LENGTH - 1).trim() + '…';
  return truncated;
}
function dedent(md) {
  const lines = md.replace(/^\n+|\n+$/g, '').split('\n');
  const indents = lines.filter(l => l.trim()).map(l => l.match(/^ */)[0].length);
  const minIndent = Math.min(...indents, 0);
  return lines.map(l => l.slice(minIndent)).join('\n');
}
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

    const viewHtml = p.link.length
      ? `<a href="${p.link}" class="view-button" target="_blank">
           <img src="images/github.png" alt="GitHub">
         </a>`
      : '';

    // expand button (always present)
    const expandHtml = `<button class="expand-button"><img src="images/expand.webp"/></button>`;

    card.innerHTML = `
      <img src="${p.img}" hidden alt="${p.title} screenshot"/>
      <h3>${p.title}</h3>
      <p>${blurb}</p>
      ${tagsHtml}
      ${viewHtml}
      ${expandHtml}
    `;
    const btn = card.querySelector('.expand-button');
    btn.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
  });
}

function renderExp() {
  const grid = document.getElementById('experienceTable');
  experiences.forEach(p => {
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

    const date = false
      ? `<p class="view-button" target="_blank">
           3
         </p>`
      : '';

    // expand button (always present)
    const expandHtml = false ? `<button class="expand-button"><img src="images/expand.webp"/></button>` : '';

    card.innerHTML = `
      <img src="${p.img}" hidden alt="${p.title} screenshot"/>
      <h3>${p.title}</h3>
      <p>${blurb}</p>
      ${tagsHtml}
      ${date}
      ${expandHtml}
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderProjects);
document.addEventListener('DOMContentLoaded', renderExp);

// grab overlay + pieces
const overlay = document.getElementById('modalOverlay');
const modalBody = overlay.querySelector('.modal-body');
const closeBtn = overlay.querySelector('.modal-close');


function openModal(project) {
  const contentMd = project.longform_desc || project.desc;
  modalBody.innerHTML = `
    <h3>${project.title}</h3>
    <img src="${project.img}" style="width:100%;margin:1em 0;" alt="${project.title}" />
    ${marked(contentMd)}
    <div class="project-tags">
      ${(project.tags || []).map(t => `<span class="project-tag">${t}</span>`).join('')}
    </div>
  `;
  overlay.classList.add('active');
}

// close handler
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', e => {
  // only close if the click was directly on the overlay, not inside the modal
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});

overlay.querySelector('.modal').addEventListener('click', e => {
  e.stopPropagation();
});