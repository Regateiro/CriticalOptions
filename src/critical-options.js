Hooks.on('dnd5e.preRollDamageV2', (config, dialog, message) => {
    if (config.isCritical) {
        config.critical.powerfulCritical = true;
    };

    return true;
});