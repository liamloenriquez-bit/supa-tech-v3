import { defaultSettings } from './config.js';

const STORAGE_KEY = 'supa-tech-v3-settings';

export function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...defaultSettings };
    }
    const parsed = JSON.parse(raw);
    return { ...defaultSettings, ...parsed };
  } catch (error) {
    console.warn('Unable to load settings:', error);
    return { ...defaultSettings };
  }
}

export function saveSettings(settings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    return true;
  } catch (error) {
    console.warn('Unable to save settings:', error);
    return false;
  }
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function percentFromRemaining(value, total) {
  return clamp((value / total) * 100, 0, 100);
}

export function formatCooldownLabel(name, remaining) {
  return `${name} • ${remaining}s remaining`;
}

export function createCard(title, value, tone = 'primary') {
  return `
    <div class="stat-card ${tone}">
      <span>${title}</span>
      <strong>${value}</strong>
    </div>
  `;
}
