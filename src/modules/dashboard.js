import { renderDashboard } from './modules/dashboard.js';
import { renderPlayerInfo } from './modules/player-info.js';
import { renderCombatTraining } from './modules/combat-training.js';
import { renderComboTraining } from './modules/combo-training.js';
import { renderCooldownTracker } from './modules/cooldown-tracker.js';
import { renderMovementReference } from './modules/movement-reference.js';
import { renderSettings } from './modules/settings.js';
import { renderInterfaceCustomization } from './modules/interface-customization.js';

export const modules = {
  dashboard: renderDashboard,
  'player-info': renderPlayerInfo,
  'combat-training': renderCombatTraining,
  'combo-training': renderComboTraining,
  'cooldown-tracker': renderCooldownTracker,
  'movement-reference': renderMovementReference,
  settings: renderSettings,
  'interface-customization': renderInterfaceCustomization
};

export function renderModule(moduleId, appState) {
  const renderer = modules[moduleId] || modules.dashboard;
  return renderer(appState);
}
