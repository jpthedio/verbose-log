# verbose-log

**Verbose Log** is a lightweight JavaScript utility for enhanced logging in Webflow projects, offering environment-based log levels (`critical`, `error`, `warn`, `info`, `debug`), custom staging domain support, and toggling options. Optimized for Webflow but versatile enough for any web project.

## Features

- **Environment-Based Logging**: Automatically adjust log verbosity based on whether the current domain is staging or production.
- **Custom Staging Domains**: Easily configure which domains should be treated as staging environments.
- **Logging Levels**: Support for `critical`, `error`, `warn`, `info`, and `debug` levels.
- **Toggle Logging**: Globally enable or disable logging as needed.

## Installation

### For Webflow Projects

To integrate `verboseLog` in a Webflow project, add the following script to the **Site Settings > Custom Code > Header** section and make sure to load it asynchronously:

```html
<script async src="https://cdn.jsdelivr.net/gh/jpthedio/verbose-log@main/verbose-log.js"></script>
```

# For Other Projects

You can also use this script in other web projects by including the same script tag in your HTML file:

```html
<script async src="https://cdn.jsdelivr.net/gh/jpthedio/verbose-log@main/verbose-log.js"></script>
```

# Usage

## Basic Setup

To use verboseLog, simply include the script in your HTML file or Webflow Site Settings. The function will be available globally.

## Example Usage

```html
// Set custom staging domains globally
verboseLog.stagingDomains = ['staging.yourdomain.com', 'preview.yourdomain.com'];

// Turn off logging
verboseLog.isEnabled = false;
verboseLog('This message will not appear.', 'info');

// Turn on logging
verboseLog.isEnabled = true;
verboseLog('This message will appear.', 'info');

// Log messages with different levels
verboseLog('A critical error occurred!', 'critical');
verboseLog('An error was encountered while processing your request.', 'error');
verboseLog('This action is deprecated.', 'warn');
verboseLog('Application initialized successfully.', 'info', '✅');
verboseLog('Debugging data: user ID = 12345.', 'debug');
```

## Log Levels

•	critical: Always visible, even in production.
•	error: Visible in both staging and production environments.
•	warn: Visible in staging, suppressed in production.
•	info: General information, visible in staging, typically suppressed in production.
•	debug: Detailed technical information, visible only in staging environments.

## Configuration

•	Custom Staging Domains: Add domains to verboseLog.stagingDomains to treat them as staging environments.
•	Enable/Disable Logging: Use verboseLog.isEnabled to toggle logging on or off.

```html
// Example: Adding a custom domain and enabling logging
verboseLog.stagingDomains.push('beta.yourdomain.com');
verboseLog.isEnabled = true;
```

# Versioning
You can link to specific versions of the script using tags:
```html
<script async src="https://cdn.jsdelivr.net/gh/jpthedio/verbose-log@v1.0.0/verbose-log.js"></script>
```

# License

This project is licensed under the MIT License. See the LICENSE file for details.

# Contributing

Feel free to open issues or submit pull requests to improve the functionality of verboseLog.

# Author

Created by JP Dionisio.
