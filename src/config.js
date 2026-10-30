<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SUPA TECH V3</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./src/styles.css" />
  </head>
  <body>
    <div class="app-shell" id="appShell">
      <aside class="sidebar" id="sidebar">
        <div class="brand-wrap">
          <div class="brand-mark">S</div>
          <div>
            <div class="brand-title">SUPA TECH</div>
            <div class="brand-subtitle">V3</div>
          </div>
        </div>

        <nav id="nav" class="nav" aria-label="Main navigation"></nav>

        <div class="sidebar-footer">
          <div class="mini-label">Session</div>
          <div class="mini-value" id="sessionValue">Modular Focus</div>
        </div>
      </aside>

      <main class="main-panel">
        <header class="topbar drag-handle">
          <div class="window-glyphs">
            <span class="glyph red"></span>
            <span class="glyph yellow"></span>
            <span class="glyph green"></span>
          </div>

          <div class="topbar-text">
            <span class="topbar-tag">Strongest Battlegrounds</span>
            <strong>Training Companion</strong>
          </div>

          <button id="collapseSidebarBtn" class="ghost-button" type="button">Collapse</button>
        </header>

        <section id="moduleContent" class="module-content" aria-live="polite"></section>
      </main>
    </div>

    <script type="module" src="./src/main.js"></script>
  </body>
</html>
