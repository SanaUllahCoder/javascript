
const progressBar = document.getElementById('progressBar');
const statusText = document.getElementById('statusText');

const durationMs = 3000;
const updateIntervalMs = 50;
const totalSteps = durationMs / updateIntervalMs;
let currentStep = 0;

const interval = setInterval(() => {
    currentStep += 1;
    const progressPercent = Math.min((currentStep / totalSteps) * 100, 100);

    progressBar.style.width = `${progressPercent}%`;
    statusText.textContent = `Loading... ${Math.round(progressPercent)}%`;

    if (currentStep >= totalSteps) {
        clearInterval(interval);
        statusText.textContent = 'Load complete!';
    }
}, updateIntervalMs);