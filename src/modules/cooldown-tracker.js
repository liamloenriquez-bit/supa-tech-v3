import { comboLibrary } from '../config.js';

export function renderComboTraining(appState) {
  const comboItems = comboLibrary
    .map(
      (combo) => `
        <div class="combo-item ${appState.training.comboFocus === combo.name ? 'active' : ''}">
          <div>
            <h3>${combo.name}</h3>
            <p>${combo.notes}</p>
          </div>
          <div class="combo-meta">
            <span class="tag">${combo.difficulty}</span>
            <div class="progress-line"><span style="width:${combo.progress}%"></span></div>
            <small>${combo.progress}% learned</small>
          </div>
          <button class="option-button" type="button" data-action="select-combo" data-name="${combo.name}">Practice</button>
        </div>
      `
    )
    .join('');

  return `
    <div class="module-header">
      <div>
        <p class="eyebrow">Practice</p>
        <h1>Combo Training</h1>
      </div>
      <button class="primary-button" type="button" data-action="start-drill">Queue Drill</button>
    </div>

    <div class="panel">
      <div class="panel-head">
        <h2>Combo Library</h2>
      </div>
      <div class="combo-stack">${comboItems}</div>
    </div>
  `;
}
