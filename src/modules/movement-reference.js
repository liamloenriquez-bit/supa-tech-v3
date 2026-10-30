import { cooldowns } from '../config.js';
import { percentFromRemaining } from '../utils.js';

export function renderCooldownTracker() {
  const items = cooldowns
    .map((skill) => {
      const remaining = Math.max(skill.remaining, 0);
      const percentage = percentFromRemaining(remaining, skill.duration);
      return `
        <div class="cooldown-item">
          <div class="cooldown-head">
            <strong>${skill.name}</strong>
            <span>${remaining}s</span>
          </div>
          <div class="progress-track"><span style="width:${100 - percentage}%"></span></div>
          <button class="option-button" type="button" data-action="trigger-cooldown" data-name="${skill.name}">Use Skill</button>
        </div>
      `;
    })
    .join('');

  return `
    <div class="module-header">
      <div>
        <p class="eyebrow">Timing</p>
        <h1>Cooldown Tracker</h1>
      </div>
      <button class="primary-button" type="button" data-action="reset-cooldowns">Reset Timers</button>
    </div>

    <div class="panel">
      <div class="panel-head">
        <h2>Ability windows</h2>
      </div>
      <div class="cooldown-stack">${items}</div>
    </div>
  `;
}
