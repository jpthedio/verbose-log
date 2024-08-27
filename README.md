# verbose-log

**Is Your Debugging Process Holding Back Your Webflow Enterprise Projects?**

Managing large codebases in professional projects can be overwhelming, especially when debugging with standard console logs.

Without advanced logging tools, it’s easy to miss critical details, leading to inefficient debugging and messy code management.

verboseLog is built to solve this.

**Verbose Log** is a lightweight JavaScript utility for enhanced logging in Webflow projects, offering environment-based log levels (`critical`, `error`, `warn`, `debug`, `info`), custom staging domain support, and toggling options. Optimized for Webflow but versatile enough for any web project.

## Features

- **Environment-Based Logging**: Automatically adjust log verbosity based on whether the current domain is staging or production.
- **Custom Staging Domains**: Easily configure which domains should be treated as staging environments.
- **Logging Levels**: Support for `critical`, `error`, `warn`, `debug`, and `info` levels.
- **Toggle Logging**: Globally enable or disable logging as needed.

## Installation

### For Webflow Projects

To integrate `verboseLog` in a Webflow project, add the following script to the **Site Settings > Custom Code > Header** section and make sure to load it asynchronously:

#### Using the Full Version

```html
<!-- Verbose Log by JP Dionisio -->
<script async src="https://cdn.jsdelivr.net/gh/jpthedio/verbose-log@main/verbose-log.js"></script>
```

#### Using the Minified Version

```html
<!-- Verbose Log by JP Dionisio -->
<script async src="https://cdn.jsdelivr.net/gh/jpthedio/verbose-log@main/verbose-log.min.js"></script>
```

## Usage

### Basic Setup

To use verboseLog, simply include the script in your HTML file or Webflow Site Settings. The function will be available globally.

### Example Usage

```html
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
```

### Log Levels

| Level       | Description                                                         | Visibility                 | Default Emoji  |
|-------------|---------------------------------------------------------------------|----------------------------|----------------|
| `critical`  | Used for critical issues that need immediate attention.             | Staging and production.    | 🔴 (Red circle) |
| `error`     | Indicates errors that have occurred but do not stop the website.    | Staging and production.    | 🟠 (Orange circle) |
| `warn`      | Warnings about potential issues that should be monitored.           | Staging only.              | 🟡 (Yellow circle) |
| `debug`     | Detailed debugging information for development and troubleshooting. | Staging only.              | 🟢 (Green circle) |
| `info`      | General information about website state or operations.              | Staging only.              | 🔵 (Blue circle) |

### Configuration

•	Custom Staging Domains: Add domains to verboseLog.stagingDomains to treat them as staging environments. 
  •	Default staging domain is 'webflow.io'
•	Enable/Disable Logging: Use verboseLog.isEnabled to toggle logging on or off. 
  •	Logging is enabled true by default.

```html
// Example: Adding a custom domain and enabling logging
verboseLog.stagingDomains.push('beta.yourdomain.com');
verboseLog.isEnabled = true;
```

## Versioning
You can link to specific versions of the script using tags:

### Using the Full Version
```html
<!-- Verbose Log by JP Dionisio -->
<script async src="https://cdn.jsdelivr.net/gh/jpthedio/verbose-log@v1.0.0/verbose-log.js"></script>
```
### Using the Minified Version
```html
<!-- Verbose Log by JP Dionisio -->
<script async src="https://cdn.jsdelivr.net/gh/jpthedio/verbose-log@v1.0.0/verbose-log.min.js"></script>
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Feel free to open issues or submit pull requests to improve the functionality of verboseLog.

## Author

Created by JP Dionisio.
