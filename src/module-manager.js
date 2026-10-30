export function applySettings(settings) {
  const root = document.documentElement;
  if (!root || !root.style) {
    return;
  }

  root.style.setProperty('--accent', settings.accent || '#48d9ff');
  root.style.setProperty('--panel-radius', `${settings.radius || 18}px`);
  root.style.setProperty(
    '--panel-shadow',
    settings.glass ? '0 18px 42px rgba(18, 12, 40, 0.35)' : '0 10px 28px rgba(0, 0, 0, 0.25)'
  );
  root.style.setProperty('--density-scale', settings.compactMode ? '0.94' : '1');
  root.style.setProperty('--motion-speed', settings.motion ? '220ms' : '0ms');

  const body = document.body;
  body?.classList.toggle('compact-mode', Boolean(settings.compactMode));
  body?.classList.toggle('no-motion', !settings.motion);

  const appShell = document.getElementById('appShell');
  appShell?.classList.toggle('collapsed-sidebar', Boolean(settings.sidebarCollapsed));
}

export function bindDragHandle() {
  const dragHandle = document.querySelector('.drag-handle');
  const appShell = document.getElementById('appShell');

  if (!dragHandle || !appShell) {
    return;
  }

  let dragStartX = 0;
  let dragStartY = 0;
  let originLeft = 0;
  let originTop = 0;
  let dragging = false;

  dragHandle.addEventListener('pointerdown', (event) => {
    if (event.target.closest('button')) {
      return;
    }

    dragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    originLeft = Number.parseFloat(appShell.style.left || '28px') || 28;
    originTop = Number.parseFloat(appShell.style.top || '28px') || 28;
    dragHandle.setPointerCapture(event.pointerId);
  });

  dragHandle.addEventListener('pointermove', (event) => {
    if (!dragging) {
      return;
    }

    const dx = event.clientX - dragStartX;
    const dy = event.clientY - dragStartY;
    appShell.style.left = `${originLeft + dx}px`;
    appShell.style.top = `${originTop + dy}px`;
  });

  dragHandle.addEventListener('pointerup', () => {
    dragging = false;
  });

  dragHandle.addEventListener('pointerleave', () => {
    dragging = false;
  });
}

export function updateSessionLabel(label) {
  const node = document.getElementById('sessionValue');
  if (node) {
    node.textContent = label;
  }
}
