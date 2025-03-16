import { COSettings } from "./settings.js"

// One time registration steps for settings
Hooks.once("init", () => {
    // Init the settings
    COSettings.init();
});

// Configure powerful criticals as needed
Hooks.on('dnd5e.preRollDamageV2', (config, dialog, message) => {
    if (config.isCritical) {
        config.critical.powerfulCritical = COSettings.powerfulCriticalsEnabled;
    };

    return true;
});