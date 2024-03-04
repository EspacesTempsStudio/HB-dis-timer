/**
 * @name HBTimer
 * @author ETStudio
 * @description Countdown timer for Human Booster courses.
 * @version 0.0.1
 */

module.exports = class YourPlugin {
    start() {
      // Called when the plugin is activated (including after reloads)
      BdApi.alert("Kawabunga!", "Le cri des NINJAS!");
    } 

    stop() {
      // Called when the plugin is deactivated
    }
}