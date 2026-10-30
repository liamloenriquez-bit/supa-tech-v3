# SUPA TECH V3

SUPA TECH V3 is a premium, dark-themed training companion for Strongest Battlegrounds. It is built as a legitimate local utility for performance tracking, combo practice, cooldown planning, and movement reference. It does not include any game manipulation, exploit injection, or unauthorized automation.

## Features

- Premium dark black and purple interface with cyan neon accents
- Draggable floating app shell
- Collapsible sidebar navigation
- Modules for dashboard, player info, combat training, combo training, cooldown tracker, movement reference, settings, and interface customization
- Persistent settings using browser local storage
- Working navigation, toggles, sliders, and UI actions
- Responsive layout with smooth transitions

## Project Structure

```text
.
├── index.html
├── package.json
├── README.md
├── src/
│   ├── config.js
│   ├── main.js
│   ├── module-manager.js
│   ├── navigation.js
│   ├── ui.js
│   ├── utils.js
│   ├── modules/
│   │   ├── dashboard.js
│   │   ├── player-info.js
│   │   ├── combat-training.js
│   │   ├── combo-training.js
│   │   ├── cooldown-tracker.js
│   │   ├── movement-reference.js
│   │   ├── settings.js
│   │   └── interface-customization.js
│   └── styles.css
└── tests/
    └── app.test.js
```

## Installation

1. Open a terminal in the project directory.
2. Start a local web server:

```bash
python3 -m http.server 8000
```

3. Open your browser at:

```text
http://localhost:8000
```

## Testing

Run:

```bash
npm test
```

This validates the app modules, navigation, and settings behavior through Node's built-in test runner.

## Known Limitations

- This is a front-end companion tool, not a live in-game client or automation layer.
- Persistence is stored locally in the browser and not synced across devices.
- No live Roblox game integrations are included by design.
