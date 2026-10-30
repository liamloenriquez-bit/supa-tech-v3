import { moduleDefinitions } from './config.js';

export function renderNavigation(activeId, collapsed = false) {
  const navElement = document.getElementById('nav');
  if (!navElement) {
    return '';
  }

  navElement.classList.toggle('collapsed', collapsed);
  navElement.innerHTML = moduleDefinitions
    .map(
      (module) => `
        <button
          type="button"
          class="nav-item ${activeId === module.id ? 'active' : ''}"
          data-nav="${module.id}"
          aria-label="Open ${module.label}"
        >
          <span class="nav-icon">${module.icon}</span>
          <span class="nav-label">${module.label}</span>
        </button>
      `
    )
    .join('');

  return navElement.innerHTML;
}
