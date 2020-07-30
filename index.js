/**
 * sends out a reminder if no pictures have been sent for a certain period of time
 * @param  {AddonBase inherited} interface   object to register and send events
 */


const functionSendImageReminder = (interface) => {
    
    const REMINDER_WAIT_DAYS = 14;
    const REMINDER_MESSAGE = "hey hey, please feed me with new photos 🤖";

    var config;
    var telegram = null;
    var friendlyReminder = 0;

    interface.registerListener('teleFrame-ready', teleFrameObjects => {
        telegram = teleFrameObjects.bot.telegram;
        config = teleFrameObjects.config;
        resetTimer();
    });

    /**
     * function that resets the reminder timer
     */
    const resetTimer = () => {
        // remove running reminder
        clearTimeout(friendlyReminder);
        // trigger new reminder
        const remindTime = REMINDER_WAIT_DAYS * 1000 * 60 * 60 * 24;
        friendlyReminder = setTimeout(() => {
            interface.logger.info("sending out a friendly reminder");
            for (i in config.whitelistChats) {
                telegram.sendMessage(config.whitelistChats[i], REMINDER_MESSAGE)
                .catch(error => {
                      interface.logger.error(error.message);
                  });
            }
            // keep on reminding
            resetTimer();
        }, remindTime);
    };

    /**
     * triger a timer reset on new picture
     */
    interface.registerListener(['newImage'],
        () => {
            resetTimer();
        });
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = functionSendImageReminder;
}
