import { defaultSettings, moduleDefinitions, systemStats, trainingState } from './config.js';
import { renderNavigation } from './navigation.js';
import { renderModule } from './module-manager.js';
import { applySettings, bindDragHandle, updateSessionLabel } from './ui.js';
import { loadSettings, saveSettings } from './utils.js';

const appState = {
  currentModule: 'dashboard',
  settings: loadSettings(),
  profile: { ...systemStats },
  training: { ...trainingState }
};

function safeRender() {
  const contentElement = document.getElementById('moduleContent');
  if (!contentElement) return;

  try {
    contentElement.innerHTML = renderModule(appState.currentModule, appState);
    bindActionHandlers();
  } catch (error) {
    console.error('Failed to render module:', error);
    contentElement.innerHTML = '<div class="panel"><h2>Render Error</h2><p>Unable to load this module.</p></div>';
  }
}

function renderNavigationUI() {
  renderNavigation(appState.currentModule, appState.settings.sidebarCollapsed);
  const collapseButton = document.getElementById('collapseSidebarBtn');
  if (collapseButton) {
    collapseButton.textContent = appState.settings.sidebarCollapsed ? 'Expand' : 'Collapse';
  }
}

function setCurrentModule(moduleId) {
  if (!moduleDefinitions.some((module) => module.id === moduleId)) {
    return;
  }

  appState.currentModule = moduleId;
  renderNavigationUI();
  safeRender();
  const label = `${moduleDefinitions.find((module) => module.id === moduleId)?.label || 'Module'} active`;
  updateSessionLabel(label);
}

function persistSettings() {
  const saved = saveSettings(appState.settings);
  if (saved) {
    updateSessionLabel('Preferences saved');
  }
}

function readSettingInputs() {
  const settings = { ...appState.settings };
  document.querySelectorAll('[data-setting]').forEach((element) => {
    const key = element.dataset.setting;
    if (!key || !(key in settings)) {
      return;
    }

    if (element.type === 'checkbox') {
      settings[key] = element.checked;
      return;
    }

    const numericValue = Number(element.value);
    if (!Number.isNaN(numericValue)) {
      settings[key] = numericValue;
    }
  });

  appState.settings = settings;
}

function applyThemeSettings() {
  readSettingInputs();
  applySettings(appState.settings);
  persistSettings();
  renderNavigationUI();
  safeRender();
}

function bindActionHandlers() {
  const buttons = document.querySelectorAll('[data-action]');

  buttons.forEach((button) => {
    button.onclick = null;
    button.addEventListener('click', (event) => {
      const action = event.currentTarget.dataset.action;
      const target = event.currentTarget.dataset.target;
      const name = event.currentTarget.dataset.name;
      const color = event.currentTarget.dataset.color;

      switch (action) {
        case 'navigate':
          setCurrentModule(target);
          break;
        case 'refresh-profile':
          appState.profile.trainingScore += 1;
          appState.profile.matchesToday += 1;
          appState.training.lastSession = 'Today • refreshed';
          appState.training.drillStatus = 'Updated';
          updateSessionLabel('Profile refreshed');
          safeRender();
          break;
        case 'start-drill':
          appState.training.drillStatus = 'Focused';
          appState.training.combatRepCount += 1;
          updateSessionLabel('Drill started');
          safeRender();
          break;
        case 'complete-drill':
          appState.training.combatRepCount += 1;
          appState.training.drillStatus = 'Completed';
          updateSessionLabel('Rep complete');
          safeRender();
          break;
        case 'reset-drill':
          appState.training.combatRepCount = trainingState.combatRepCount;
          appState.training.drillStatus = 'Ready';
          updateSessionLabel('Drill reset');
          safeRender();
          break;
        case 'select-combo':
          appState.training.comboFocus = name || appState.training.comboFocus;
          appState.training.drillStatus = 'Combo focus';
          updateSessionLabel(`Practice: ${appState.training.comboFocus}`);
          safeRender();
          break;
        case 'trigger-cooldown':
          updateSessionLabel(`${name || 'Skill'} queued`);
          break;
        case 'reset-cooldowns':
          updateSessionLabel('Cooldown timers reset');
          break;
        case 'cycle-movement':
          updateSessionLabel('Movement pattern rotated');
          break;
        case 'apply-vitality-buff':
          appState.profile.focusMode = 'Vitality';
          updateSessionLabel('Vitality buff applied');
          safeRender();
          break;
        case 'save-settings':
          applyThemeSettings();
          break;
        case 'set-accent':
          appState.settings.accent = color || appState.settings.accent;
          applySettings(appState.settings);
          persistSettings();
          safeRender();
          break;
        case 'apply-theme':
          applyThemeSettings();
          break;
        default:
          break;
      }
    });
  });

  const navButtons = document.querySelectorAll('[data-nav]');
  navButtons.forEach((button) => {
    button.onclick = null;
    button.addEventListener('click', (event) => {
      const moduleId = event.currentTarget.dataset.nav;
      if (moduleId) {
        setCurrentModule(moduleId);
      }
    });
  });

  const sidebarToggleButton = document.getElementById('collapseSidebarBtn');
  if (sidebarToggleButton) {
    sidebarToggleButton.onclick = null;
    sidebarToggleButton.addEventListener('click', () => {
      appState.settings.sidebarCollapsed = !appState.settings.sidebarCollapsed;
      applySettings(appState.settings);
      saveSettings(appState.settings);
      renderNavigationUI();
      safeRender();
    });
  }
}

function initializeApp() {
  applySettings(appState.settings);
  renderNavigationUI();
  safeRender();
  bindDragHandle();
  updateSessionLabel(`${moduleDefinitions[0].label} active`);
}

document.addEventListener('DOMContentLoaded', initializeApp);
