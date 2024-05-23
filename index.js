const si = require('systeminformation');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');
const path = require('path');

const csvWriter = createCsvWriter({
    path: 'temperatures_log.csv',
    header: [
        {id: 'timestamp', title: 'Timestamp'},
        {id: 'cpuTemp', title: 'CPU Temp (°C)'},
        {id: 'gpuTemp', title: 'GPU Temp (°C)'}
    ]
});

async function getTemperatures() {
    try {
        const cpuTempData = await si.cpuTemperature();
        const gpuTempData = await si.graphics();
        const cpuTemp = cpuTempData.main;
        const gpuTemp = gpuTempData.controllers[0].temperatureGpu;

        return { cpuTemp, gpuTemp };
    } catch (error) {
        console.error('Error getting temperatures:', error);
        return { cpuTemp: null, gpuTemp: null };
    }
}

async function logTemperatures(interval = 5000) {
    if (!fs.existsSync('temperatures_log.csv')) {
        await csvWriter.writeRecords([]);
    }

    setInterval(async () => {
        const { cpuTemp, gpuTemp } = await getTemperatures();
        const timestamp = new Date().toISOString();

        const record = {
            timestamp: timestamp,
            cpuTemp: cpuTemp,
            gpuTemp: gpuTemp
        };

        await csvWriter.writeRecords([record]);

        console.log(`${timestamp} - CPU Temp: ${cpuTemp} °C, GPU Temp: ${gpuTemp} °C`);
    }, interval);
}

logTemperatures();
