const getCOSetting = (setting) => game.settings.get("critical-options", setting);

/**
 * Class type used to initialize and retrieve settings.
 */
class Settings {
    /**
     * Register settings.
     * This should only be called once, at initialization.
     */
    init() {
        game.settings.register("critical-options", "powerfulCriticalsEnabled", {
            name: "Enable Powerful Criticals",
            hint: "Maximize critical die.",
            scope: "world",
            config: true,
            default: false,
            type: Boolean
        });
    };

    get powerfulCriticalsEnabled() {
        return getCOSetting("powerfulCriticalsEnabled");
    };
};

/**
 * Class instance that can be used to both initialize and retrieve config
 */
export const COSettings = new Settings();
