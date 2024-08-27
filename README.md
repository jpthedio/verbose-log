# verboseLog

**Is Your Debugging Process Holding Back Your Webflow Enterprise Projects?**

Managing large codebases can be daunting, especially when you’re stuck using basic console logs. 
Without advanced logging tools, critical details can slip through the cracks, leading to inefficient debugging and cluttered code.

**verboseLog** is built to solve this.

**Verbose Log** is a lightweight, yet powerful, JavaScript utility tailored for enhanced logging in Webflow projects. 
It offers environment-based log levels (🔴 critical, 🟠 error, 🟡 warn, 🟢 debug, 🔵 info), custom staging domain support, 
and flexible toggling options. While optimized for Webflow, it’s versatile enough to be integrated into any web project.

## Features

- **Environment-Based Logging**: Automatically adjust log verbosity based on whether the current domain is staging or production.
- **Custom Staging Domains**: Easily define which domains should be treated as staging environments.
- **Logging Levels**: Support for `🔴 critical`, `🟠 error`, `🟡 warn`, `🟢 debug`, and `🔵 info` levels.
- **Toggle Logging**: Enable or disable logging globally, giving you full control.

## Installation

### For Webflow Projects

To integrate `verboseLog` in a Webflow project: 
- Go to the Webflow project's **Settings > Custom code > Head code**
- Copy the code block bellow and paste it in the **Head code** 

```html
<!-- Verbose Log by JP Dionisio -->
<script async src="https://cdn.jsdelivr.net/gh/jpthedio/verbose-log@main/verbose-log.min.js"></script>
```

#### Important Note for Async or Defer Loading

If you choose to load the script asynchronously `async` or defer its execution `defer`:
- ensure that all verboseLog calls are wrapped inside a DOMContentLoaded event listener.

This guarantees that the script is fully loaded and ready to use before any logging takes place.

```html
<!-- Verbose Log by JP Dionisio -->
<script async src="https://cdn.jsdelivr.net/gh/jpthedio/verbose-log@main/verbose-log.js"></script>

<!-- Custom code by you -->
<script>
document.addEventListener("DOMContentLoaded", function() {
// Your verboseLog calls here
verboseLog('This is a log message with async script loading.', 'info');
});
</script>
```

## Usage in custom code

### Basic Setup

To use verboseLog, simply include the script in your Webflow Site Settings Head code or HTML file. 
The function will be available globally.

### Log Levels

| Level       | Description                                                         | Visibility                 | Default Emoji  |
|-------------|---------------------------------------------------------------------|----------------------------|----------------|
| `critical`  | Used for critical issues that need immediate attention.             | Staging and production.    | 🔴 (Red circle) |
| `error`     | Indicates errors that have occurred but do not stop the website.    | Staging and production.    | 🟠 (Orange circle) |
| `warn`      | Warnings about potential issues that should be monitored.           | Staging only.              | 🟡 (Yellow circle) |
| `debug`     | Detailed debugging information for development and troubleshooting. | Staging only.              | 🟢 (Green circle) |
| `info`      | General information about website state or operations.              | Staging only.              | 🔵 (Blue circle) |

### Example Usage

```html
<script>
document.addEventListener("DOMContentLoaded", function() {
// Set custom staging domains globally
verboseLog.stagingDomains = ['staging.yourdomain.com', 'preview.yourdomain.com'];

// Turn off logging
verboseLog.isEnabled = false;
verboseLog('This message will not appear.', 'info'); 
// No output, logging is disabled

// Turn on logging
verboseLog.isEnabled = true;
verboseLog('This message will appear.', 'info'); 
// 🔵 [INFO]: This message will appear.

// Log messages with different levels
verboseLog('A critical error occurred!', 'critical'); 
// 🔴 [CRITICAL]: A critical error occurred!

verboseLog('An error was encountered while processing your request.', 'error'); 
// 🟠 [ERROR]: An error was encountered while processing your request.

verboseLog('This action is deprecated.', 'warn'); 
// 🟡 [WARN]: This action is deprecated.

verboseLog('Application initialized successfully.', 'info', '✅'); 
// ✅ [INFO]: Application initialized successfully.

verboseLog('Debugging data: user ID = 12345.', 'debug'); 
// 🟢 [DEBUG]: Debugging data: user ID = 12345.

// Usage with only the first parameter given
verboseLog('This is a simple message'); 
// 🔵 [INFO]: This is a simple message
});
</script>
```

### Configuration

- Custom Staging Domains: Add domains to verboseLog.stagingDomains to treat them as staging environments.
  - Default staging domain is 'webflow.io'
- Enable/Disable Logging: Use verboseLog.isEnabled to toggle logging on or off.
  - Logging is enabled true by default.

```html
<!-- Verbose Log by JP Dionisio -->
<script async src="https://cdn.jsdelivr.net/gh/jpthedio/verbose-log@main/verbose-log.js"></script>
<!-- Verbose Log custom options -->
<script>
document.addEventListener("DOMContentLoaded", function() {
    // Example: Adding a custom domain and enabling logging
    verboseLog.stagingDomains.push('beta.yourdomain.com');
    verboseLog.isEnabled = true;
});
</script>
```

## Use with ChatGPT

**Easily Integrate `verboseLog` into Your JavaScript Code**

To quickly incorporate `verboseLog` into your projects, visit the following link:

[Incorporate `verboseLog` into Your JavaScript Code](https://chatgpt.com/g/g-Kr3C1a5ZW-verbose-log-dev)

All instructions are provided within the GPT. Just follow the prompts, and you'll be set up in no time!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Feel free to open issues or submit pull requests to improve the functionality of verboseLog.

## Author

Created by JP Dionisio.
