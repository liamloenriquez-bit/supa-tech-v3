import { createCard } from '../utils.js';

export function renderPlayerInfo(appState) {
  const cards = [
    createCard('Level', `${appState.profile.level}`, 'primary'),
    createCard('Player', appState.profile.playerName, 'accent'),
    createCard('Focus', appState.profile.focusMode, 'success'),
    createCard('Training Score', `${appState.profile.trainingScore}`, 'info')
  ].join('');

  return `
    <div class="module-header">
      <div>
        <p class="eyebrow">Profile</p>
        <h1>Player Information</h1>
      </div>
      <button class="primary-button" type="button" data-action="refresh-profile">Refresh Data</button>
    </div>

    <div class="stats-grid">${cards}</div>

    <div class="panel-grid two-up">
      <div class="panel">
        <div class="panel-head">
          <h2>Profile Snapshot</h2>
        </div>
        <ul class="info-list">
          <li><span>Player Name</span><strong>${appState.profile.playerName}</strong></li>
          <li><span>Level</span><strong>${appState.profile.level}</strong></li>
          <li><span>Win Rate</span><strong>${appState.profile.winRate}%</strong></li>
          <li><span>Matches Today</span><strong>${appState.profile.matchesToday}</strong></li>
        </ul>
      </div>

      <div class="panel">
        <div class="panel-head">
          <h2>Performance Notes</h2>
        </div>
        <div class="note-box">
          <p>Strongest phases are aggressive spacing and fast guard pressure. Recommended actions: keep burst windows tight and preserve stamina for the final exchange.</p>
          <button class="option-button" type="button" data-action="apply-vitality-buff">Apply Vitality Buff</button>
        </div>
      </div>
    </div>
  `;
}
