
# Temperature Monitoring Script

This Node.js script monitors the temperatures of the CPU and GPU and logs the data into a CSV file. It uses the `systeminformation` package to retrieve hardware information and `csv-writer` to write the data to a CSV file.

## Prerequisites

- Node.js installed on your system.
- NPM (Node Package Manager) installed.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/temperature-monitoring.git
    cd temperature-monitoring
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

## Usage

To start monitoring the temperatures, run the script:

```bash
node monitor_temperatures.js
```

The script will create a `temperatures_log.csv` file in the root directory of the project and append the temperature data at regular intervals (every 5 seconds by default).

## Customization

You can customize the logging interval by modifying the `interval` parameter in the `logTemperatures` function. The interval is set in milliseconds.

Example:
```javascript
logTemperatures(10000); // Logs every 10 seconds
```

## Dependencies

- [systeminformation](https://www.npmjs.com/package/systeminformation): A collection of functions to retrieve detailed hardware, system, and OS information.
- [csv-writer](https://www.npmjs.com/package/csv-writer): A simple CSV writer for Node.js.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to the developers of the `systeminformation` and `csv-writer` packages for their excellent tools.
