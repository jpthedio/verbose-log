// Check if verboseLog already exists on the window object
if (!window.verboseLog) {

    /**
     * Function to check if the current URL contains any of the staging domains.
     * This function is used to determine if the environment is staging or production.
     *
     * @returns {boolean} Returns true if the URL contains any of the staging domains, otherwise false.
     */
    function isStagingDomain() {
        const currentURL = window.location.href;

        // Default staging domains
        const defaultDomains = ['webflow.io'];

        // Combine default domains with custom domains set globally on the window.verboseLog object
        const stagingDomains = [...defaultDomains, ...(window.verboseLog.stagingDomains || [])];

        // Check if the current URL contains any of the staging domains
        return stagingDomains.some(domain => currentURL.includes(domain));
    }

    /**
     * Function to log messages to the console based on the environment and log level.
     * In a staging environment (URLs containing any of the specified staging domains), logs can be verbose.
     * In a production environment, only critical and error logs are shown.
     *
     * @param {string} message - The message to log.
     * @param {string} [level='info'] - The log level ('critical', 'error', 'warn', 'info', 'debug').
     * @param {string} [customEmoji] - An optional custom emoji to prefix the log message.
     */
    function verboseLog(message, level = 'info', customEmoji = '') {
        // Check if logging is turned off
        if (!window.verboseLog.isEnabled) return;

        // Define log levels with corresponding default emoji and production visibility
        const logLevels = {
            'critical': { emoji: '🔴', showInProd: true },  // Red circle
            'error': { emoji: '🟠', showInProd: true },     // Orange circle
            'warn': { emoji: '🟡', showInProd: false },     // Yellow circle
            'debug': { emoji: '🟢', showInProd: false },    // Green circle
            'info': { emoji: '🔵', showInProd: false },     // Blue circle
        };

        // Determine if the current environment is production
        const isProduction = !isStagingDomain();

        // Get the log level configuration
        const logConfig = logLevels[level];

        // Determine the emoji to use: custom emoji if provided, otherwise default emoji
        const emoji = customEmoji || logConfig.emoji;

        // Log the message based on the environment and log level
        if (!isProduction || logConfig.showInProd) {
            console.log(`${emoji} [${level.toUpperCase()}]: ${message}`);
        }
    }

    // Attach the function and properties to the window object to make it globally accessible
    window.verboseLog = verboseLog;
    window.verboseLog.stagingDomains = []; // Initialize an empty array for custom staging domains
    window.verboseLog.isEnabled = true; // Logging is enabled by default
}
