export function renderCombatTraining(appState) {
  return `
    <div class="module-header">
      <div>
        <p class="eyebrow">Training</p>
        <h1>Combat Training</h1>
      </div>
      <button class="primary-button" type="button" data-action="start-drill">Start Drill</button>
    </div>

    <div class="panel-grid two-up">
      <div class="panel">
        <div class="panel-head">
          <h2>Active Drill</h2>
        </div>
        <div class="drill-card">
          <div class="drill-line">
            <span>Current</span>
            <strong>${appState.training.comboFocus}</strong>
          </div>
          <div class="drill-line">
            <span>Status</span>
            <strong>${appState.training.drillStatus}</strong>
          </div>
          <div class="drill-line">
            <span>Reps</span>
            <strong>${appState.training.combatRepCount}</strong>
          </div>
        </div>

        <div class="action-row">
          <button class="option-button" type="button" data-action="complete-drill">Complete Rep</button>
          <button class="option-button" type="button" data-action="reset-drill">Reset</button>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head">
          <h2>Drill Breakdown</h2>
        </div>
        <ul class="info-list">
          <li><span>1</span><strong>Opening pressure</strong></li>
          <li><span>2</span><strong>Counterstep timing</strong></li>
          <li><span>3</span><strong>Guard break burst</strong></li>
          <li><span>4</span><strong>Finisher clean-up</strong></li>
        </ul>
      </div>
    </div>
  `;
}
