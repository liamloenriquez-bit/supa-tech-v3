export const appName = 'SUPA TECH V3';

export const moduleDefinitions = [
  { id: 'dashboard', label: 'Dashboard', icon: '◈' },
  { id: 'player-info', label: 'Player Information', icon: '◉' },
  { id: 'combat-training', label: 'Combat Training', icon: '⚔' },
  { id: 'combo-training', label: 'Combo Training', icon: '✦' },
  { id: 'cooldown-tracker', label: 'Cooldown Tracker', icon: '⏱' },
  { id: 'movement-reference', label: 'Movement Reference', icon: '⇄' },
  { id: 'settings', label: 'Settings', icon: '⚙' },
  { id: 'interface-customization', label: 'Interface Customization', icon: '▣' }
];

export const defaultSettings = {
  accent: '#48d9ff',
  radius: 18,
  density: 1,
  motion: true,
  compactMode: false,
  notifications: true,
  soundCues: false,
  glass: true,
  sidebarCollapsed: false,
  darkMode: true
};

export const systemStats = {
  playerName: 'Liam K',
  level: 225,
  winRate: 68,
  streak: 11,
  trainingScore: 91,
  matchesToday: 12,
  focusMode: 'Neutral'
};

export const cooldowns = [
  { name: 'Burst Dash', duration: 8, remaining: 3, color: '#4bd9ff' },
  { name: 'Guard Break', duration: 12, remaining: 7, color: '#9a7bff' },
  { name: 'Air Burst', duration: 14, remaining: 10, color: '#63f0d2' },
  { name: 'Finisher', duration: 18, remaining: 6, color: '#ff7fe5' }
];

export const comboLibrary = [
  { name: 'Crescent Press', difficulty: 'Medium', notes: 'M1 > M2 > dash cancel > heavy', progress: 74 },
  { name: 'Aerial Chain', difficulty: 'Hard', notes: 'Jump > air light > uppercut > slash', progress: 58 },
  { name: 'Wall Breaker', difficulty: 'Easy', notes: 'Dash > guard knock > burst strike', progress: 89 },
  { name: 'Trap Reset', difficulty: 'Medium', notes: 'Break stance > step back > finisher', progress: 63 }
];

export const movementReferences = [
  { name: 'Side Step', timing: '0.18s', role: 'Evasion' },
  { name: 'Burst Drift', timing: '0.42s', role: 'Approach' },
  { name: 'Timing Roll', timing: '0.66s', role: 'Recovery' },
  { name: 'Counter Step', timing: '0.55s', role: 'Guard break' }
];

export const trainingState = {
  combatRepCount: 14,
  comboFocus: 'Crescent Press',
  lastSession: 'Today • 12:45',
  drillStatus: 'Ready'
};
