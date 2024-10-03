const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    fs.readdir(logsDir, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(filePath);
        });

        console.log("Removing Logs directory.");
        fs.rmdirSync(logsDir);
    });
} else {
    console.log("Logs directory does not exist.");
}
