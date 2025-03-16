import { COSettings } from "./settings.js"

Hooks.on('dnd5e.preRollDamageV2', (config, dialog, message) => {
    if (config.isCritical) {
        config.critical.powerfulCritical = COSettings.powerfulCriticalsEnabled;
    };

    return true;
});