:root {
  --bg: #070810;
  --bg-strong: #120d1d;
  --panel: rgba(17, 16, 28, 0.9);
  --panel-alt: rgba(22, 18, 36, 0.92);
  --muted: #a9afc8;
  --text: #eff3ff;
  --line: rgba(151, 167, 255, 0.18);
  --accent: #48d9ff;
  --accent-strong: #8a7dff;
  --success: #63f0d2;
  --warning: #ffcd70;
  --danger: #ff7fe5;
  --panel-radius: 18px;
  --density-scale: 1;
  --motion-speed: 220ms;
  --panel-shadow: 0 18px 42px rgba(18, 12, 40, 0.35);
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  min-height: 100%;
  background:
    radial-gradient(circle at top left, rgba(90, 75, 185, 0.4), transparent 28%),
    radial-gradient(circle at bottom right, rgba(17, 205, 255, 0.2), transparent 28%),
    #070810;
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  position: relative;
  left: 28px;
  top: 28px;
  width: min(1400px, calc(100vw - 72px));
  min-height: 820px;
  display: flex;
  border: 1px solid var(--line);
  border-radius: calc(var(--panel-radius) + 8px);
  background: rgba(10, 10, 18, 0.9);
  backdrop-filter: blur(18px);
  box-shadow: var(--panel-shadow);
  transition: width var(--motion-speed) ease, left var(--motion-speed) ease, top var(--motion-speed) ease;
}

.app-shell.collapsed-sidebar .sidebar { width: 92px; }
.app-shell.collapsed-sidebar .nav-label { display: none; }

.sidebar {
  width: 290px;
  background: linear-gradient(180deg, rgba(20, 17, 29, 0.96), rgba(11, 11, 18, 0.88));
  border-right: 1px solid var(--line);
  padding: 20px 16px 18px;
  display: flex;
  flex-direction: column;
  transition: width var(--motion-speed) ease;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px 16px;
  border-bottom: 1px solid var(--line);
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(72, 217, 255, 0.22), rgba(154, 123, 255, 0.3));
  border: 1px solid rgba(72, 217, 255, 0.35);
  color: var(--accent);
  font-weight: 800;
}

.brand-title {
  font-weight: 800;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

.brand-subtitle {
  font-size: 0.8rem;
  color: var(--muted);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 18px;
}

.nav-item {
  width: 100%;
  border: 1px solid transparent;
  background: transparent;
  color: var(--text);
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 12px;
  transition: transform var(--motion-speed) ease, border-color var(--motion-speed) ease, background var(--motion-speed) ease;
}

.nav-item:hover, .nav-item.active {
  background: rgba(72, 217, 255, 0.08);
  border-color: rgba(72, 217, 255, 0.22);
  transform: translateX(2px);
}

.nav-icon {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: rgba(14, 17, 28, 0.9);
  color: var(--accent);
}

.nav-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-footer {
  margin-top: auto;
  border-top: 1px solid var(--line);
  padding-top: 16px;
}

.mini-label {
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mini-value {
  margin-top: 6px;
  font-weight: 700;
}

.main-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
  background: rgba(14, 12, 19, 0.7);
  cursor: grab;
  user-select: none;
}

.topbar:active { cursor: grabbing; }

.window-glyphs {
  display: flex;
  align-items: center;
  gap: 8px;
}

.glyph {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
}

.glyph.red { background: #ff6f7d; }
.glyph.yellow { background: #ffcc70; }
.glyph.green { background: #54dc79; }

.topbar-text {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  justify-content: center;
  color: var(--muted);
}

.topbar-tag {
  color: var(--accent);
  border: 1px solid rgba(72, 217, 255, 0.22);
  background: rgba(72, 217, 255, 0.08);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ghost-button, .primary-button, .option-button {
  border-radius: 10px;
  border: 1px solid rgba(72, 217, 255, 0.26);
  transition: transform var(--motion-speed) ease, opacity var(--motion-speed) ease;
}

.ghost-button {
  background: transparent;
  color: var(--text);
  padding: 8px 12px;
}

.primary-button {
  background: linear-gradient(135deg, rgba(72, 217, 255, 0.2), rgba(154, 123, 255, 0.32));
  color: var(--text);
  padding: 10px 14px;
  font-weight: 600;
}

.option-button {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 10px 12px;
}

.ghost-button:hover, .primary-button:hover, .option-button:hover { transform: translateY(-1px); }

.module-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.module-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.eyebrow {
  margin: 0 0 6px;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

h1 { margin: 0; font-size: clamp(1.8rem, 2.5vw, 2.8rem); letter-spacing: -0.04em; }
h2 { margin: 0; font-size: 1.1rem; }
h3 { margin: 0; }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 18px;
}

.stat-card {
  padding: 18px 16px;
  background: linear-gradient(180deg, rgba(24, 19, 36, 0.9), rgba(10, 12, 18, 0.8));
  border: 1px solid var(--line);
  border-radius: var(--panel-radius);
  min-height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.stat-card span {
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stat-card strong {
  font-size: clamp(1.8rem, 2vw, 2.4rem);
  letter-spacing: -0.04em;
}

.stat-card.primary strong { color: var(--accent); }
.stat-card.success strong { color: var(--success); }
.stat-card.info strong { color: var(--warning); }
.stat-card.accent strong { color: var(--danger); }

.panel-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.panel {
  background: linear-gradient(180deg, rgba(18, 17, 28, 0.96), rgba(11, 11, 18, 0.8));
  border: 1px solid var(--line);
  border-radius: var(--panel-radius);
  padding: 18px;
  min-height: 220px;
}

.panel-head {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.action-list, .summary-stack, .info-list, .toggle-list, .cooldown-stack, .combo-stack, .movement-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.summary-row, .info-list li, .toggle-row, .cooldown-head, .movement-row, .drill-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.summary-row {
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}

.summary-row:last-child { border-bottom: none; }

.info-list {
  padding: 0;
  list-style: none;
  margin: 0;
}

.info-list li {
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}

.info-list li:last-child { border-bottom: none; }

.note-box {
  background: rgba(72, 217, 255, 0.04);
  border: 1px solid rgba(72, 217, 255, 0.14);
  border-radius: 12px;
  padding: 16px;
  line-height: 1.6;
}

.action-row {
  display: flex;
  gap: 10px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.drill-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--line);
  padding: 16px;
  border-radius: 12px;
}

.combo-item {
  display: grid;
  grid-template-columns: 1.5fr 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px 12px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
}

.combo-item.active { border-color: rgba(72, 217, 255, 0.35); }

.combo-item p {
  margin: 6px 0 0;
  color: var(--muted);
  line-height: 1.5;
}

.combo-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tag {
  align-self: flex-start;
  font-size: 0.72rem;
  padding: 4px 8px;
  border: 1px solid rgba(154, 123, 255, 0.24);
  border-radius: 999px;
  color: var(--accent);
}

.progress-line {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.progress-line span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent), var(--accent-strong));
}

.cooldown-item {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 14px 12px;
}

.progress-track {
  height: 10px;
  width: 100%;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  overflow: hidden;
  margin: 10px 0 12px;
}

.progress-track span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent), var(--success));
}

.movement-row {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.movement-row:last-child { border-bottom: none; }

.movement-row span, .movement-row strong { display: block; }
.movement-row span { color: var(--muted); margin-top: 6px; }

.timing-pill {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(99, 240, 210, 0.08);
  color: var(--success);
  border: 1px solid rgba(99, 240, 210, 0.14);
}

.toggle-row {
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  color: var(--text);
}

.toggle-row:last-child { border-bottom: none; }
.toggle-row input { accent-color: var(--accent); width: 18px; height: 18px; }

.swatch-grid {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.swatch {
  width: 42px;
  height: 42px;
  border: 2px solid transparent;
  border-radius: 12px;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.18);
}

.swatch.selected { border-color: var(--text); }

.slider-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 18px;
}

input[type='range'] {
  width: 100%;
  accent-color: var(--accent);
}

body.compact-mode .module-content { padding: 18px; }
body.compact-mode .panel, body.compact-mode .stat-card, body.compact-mode .combo-item, body.compact-mode .cooldown-item {
  padding-top: 14px;
  padding-bottom: 14px;
}

body.no-motion * {
  transition-duration: 0ms !important;
  animation-duration: 0ms !important;
}

@media (max-width: 980px) {
  body { padding: 12px; }

  .app-shell {
    width: calc(100vw - 24px);
    min-height: 0;
    left: 0;
    top: 0;
  }

  .panel-grid { grid-template-columns: 1fr; }
  .sidebar { width: 220px; }
}

@media (max-width: 680px) {
  .app-shell { flex-direction: column; }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--line);
  }

  .module-header { flex-direction: column; align-items: flex-start; }
  .combo-item { grid-template-columns: 1fr; }
}
