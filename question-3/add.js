const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
    console.log("Creating Logs directory.");
    fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const fileContent = `This is log file ${i}.`;
    fs.writeFileSync(fileName, fileContent);
    console.log(`Created file: ${fileName}`);
}
