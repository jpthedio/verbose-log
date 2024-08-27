// Check if verboseLog already exists on the window object
if (!window.verboseLog) {

    /**
     * Checks if the current URL contains any of the staging domains.
     * This function is used to determine if the environment is staging or production.
     *
     * @returns {boolean} Returns true if the URL contains any of the staging domains, otherwise false.
     */
    function isStagingDomain() {
        const currentURL = window.location.href;
        const defaultDomains = ['webflow.io'];
        const stagingDomains = [...defaultDomains, ...(window.verboseLog.stagingDomains || [])];
        return stagingDomains.some(domain => currentURL.includes(domain));
    }

    /**
     * Common logging function to handle both console.log and console.table.
     *
     * @param {Function} logFn - The logging function to use (console.log or console.table).
     * @param {*} data - The data to be logged (string for console.log, array/object for console.table).
     * @param {string} [level='info'] - The log level ('critical', 'error', 'warn', 'info', 'debug').
     * @param {string} [customEmoji=''] - An optional custom emoji to prefix the log message.
     */
    function logOutput(logFn, data, level = 'info', customEmoji = '') {
        if (!window.verboseLog.isEnabled) return;

        const logLevels = {
            'critical': { emoji: '🔴', showInProd: true },
            'error': { emoji: '🟠', showInProd: true },
            'warn': { emoji: '🟡', showInProd: false },
            'debug': { emoji: '🟢', showInProd: false },
            'info': { emoji: '🔵', showInProd: false },
        };

        const isProduction = !isStagingDomain();
        const logConfig = logLevels[level];
        const emoji = customEmoji || logConfig.emoji;

        if (!isProduction || logConfig.showInProd) {
            console.log(`${emoji} [${level.toUpperCase()}]: ${logFn === console.table ? 'Table data logged below:' : data}`);
            logFn(data);
        }
    }

    /**
     * Logs messages to the console based on the environment and log level.
     *
     * @param {string} message - The message to log.
     * @param {string} [level='info'] - The log level ('critical', 'error', 'warn', 'info', 'debug').
     * @param {string} [customEmoji=''] - An optional custom emoji to prefix the log message.
     */
    function verboseLog(message, level = 'info', customEmoji = '') {
        logOutput(console.log, message, level, customEmoji);
    }

    /**
     * Logs data using console.table() based on the environment and log level.
     *
     * @param {Array|Object} data - The data to be logged using console.table().
     * @param {string} [level='info'] - The log level ('critical', 'error', 'warn', 'info', 'debug').
     * @param {string} [customEmoji=''] - An optional custom emoji to prefix the log message.
     */
    verboseLog.table = function(data, level = 'info', customEmoji = '') {
        logOutput(console.table, data, level, customEmoji);
    };

    // Attach the function and properties to the window object to make it globally accessible
    window.verboseLog = verboseLog;
    window.verboseLog.stagingDomains = []; // Initialize an empty array for custom staging domains
    window.verboseLog.isEnabled = true; // Logging is enabled by default
}
