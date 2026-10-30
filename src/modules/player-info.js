import { createCard } from '../utils.js';

export function renderDashboard(appState) {
  const cards = [
    createCard('Win Rate', `${appState.profile.winRate}%`, 'primary'),
    createCard('Current Streak', `${appState.profile.streak}`, 'success'),
    createCard('Matches', `${appState.profile.matchesToday}`, 'info'),
    createCard('Training Score', `${appState.profile.trainingScore}`, 'accent')
  ].join('');

  return `
    <div class="module-header">
      <div>
        <p class="eyebrow">Overview</p>
        <h1>Dashboard</h1>
      </div>
      <button class="primary-button" type="button" data-action="refresh-profile">Refresh Profile</button>
    </div>

    <div class="stats-grid">${cards}</div>

    <div class="panel-grid">
      <div class="panel">
        <div class="panel-head">
          <h2>Quick Actions</h2>
        </div>
        <div class="action-list">
          <button class="option-button" type="button" data-action="navigate" data-target="combat-training">Open Combat Drill</button>
          <button class="option-button" type="button" data-action="navigate" data-target="combo-training">Practice Combo</button>
          <button class="option-button" type="button" data-action="navigate" data-target="cooldown-tracker">Review Cooldowns</button>
          <button class="option-button" type="button" data-action="navigate" data-target="movement-reference">Movement Notes</button>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head">
          <h2>Session Summary</h2>
        </div>
        <div class="summary-stack">
          <div class="summary-row">
            <span>Focus Mode</span>
            <strong>${appState.profile.focusMode}</strong>
          </div>
          <div class="summary-row">
            <span>Last Drill</span>
            <strong>${appState.training.lastSession}</strong>
          </div>
          <div class="summary-row">
            <span>Combat Reps</span>
            <strong>${appState.training.combatRepCount}</strong>
          </div>
          <div class="summary-row">
            <span>Module Status</span>
            <strong>${appState.training.drillStatus}</strong>
          </div>
        </div>
      </div>
    </div>
  `;
}
