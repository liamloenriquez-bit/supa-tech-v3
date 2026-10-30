import { movementReferences } from '../config.js';

export function renderMovementReference() {
  const rows = movementReferences
    .map(
      (move) => `
        <div class="movement-row">
          <div>
            <strong>${move.name}</strong>
            <span>${move.role}</span>
          </div>
          <span class="timing-pill">${move.timing}</span>
        </div>
      `
    )
    .join('');

  return `
    <div class="module-header">
      <div>
        <p class="eyebrow">Reference</p>
        <h1>Movement Reference</h1>
      </div>
      <button class="primary-button" type="button" data-action="cycle-movement">Cycle Pattern</button>
    </div>

    <div class="panel-grid two-up">
      <div class="panel">
        <div class="panel-head">
          <h2>Movement Library</h2>
        </div>
        <div class="movement-list">${rows}</div>
      </div>

      <div class="panel">
        <div class="panel-head">
          <h2>Recommended Pattern</h2>
        </div>
        <div class="note-box">
          <p>Use a quick side-step to reset spacing, then burst forward with a drift to maintain pressure. Recover with a short roll when the guard breaks.</p>
        </div>
      </div>
    </div>
  `;
}
