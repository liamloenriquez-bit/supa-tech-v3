export function renderSettings(appState) {
  return `
    <div class="module-header">
      <div>
        <p class="eyebrow">System</p>
        <h1>Settings</h1>
      </div>
      <button class="primary-button" type="button" data-action="save-settings">Save Preferences</button>
    </div>

    <div class="panel-grid two-up">
      <div class="panel">
        <div class="panel-head">
          <h2>General</h2>
        </div>
        <div class="toggle-list">
          <label class="toggle-row">
            <span>Notifications</span>
            <input type="checkbox" data-setting="notifications" ${appState.settings.notifications ? 'checked' : ''} />
          </label>
          <label class="toggle-row">
            <span>Sound Cues</span>
            <input type="checkbox" data-setting="soundCues" ${appState.settings.soundCues ? 'checked' : ''} />
          </label>
          <label class="toggle-row">
            <span>Compact Mode</span>
            <input type="checkbox" data-setting="compactMode" ${appState.settings.compactMode ? 'checked' : ''} />
          </label>
          <label class="toggle-row">
            <span>Glass Panels</span>
            <input type="checkbox" data-setting="glass" ${appState.settings.glass ? 'checked' : ''} />
          </label>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head">
          <h2>Behavior</h2>
        </div>
        <div class="toggle-list">
          <label class="toggle-row">
            <span>Motion Effects</span>
            <input type="checkbox" data-setting="motion" ${appState.settings.motion ? 'checked' : ''} />
          </label>
          <label class="toggle-row">
            <span>Dark Mode</span>
            <input type="checkbox" data-setting="darkMode" ${appState.settings.darkMode ? 'checked' : ''} />
          </label>
          <label class="toggle-row">
            <span>Sidebar Auto Collapse</span>
            <input type="checkbox" data-setting="sidebarCollapsed" ${appState.settings.sidebarCollapsed ? 'checked' : ''} />
          </label>
        </div>
      </div>
    </div>
  `;
}
