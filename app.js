const fs = require('fs');
const path = require('path');

const folderPaths = ['avatar', 'image-icon', 'public', 'wallpaper'];
const json = {};

folderPaths.forEach(folder => {
	const folderPath = path.join(__dirname, `images/${folder}`);
	try {
		const files = fs.readdirSync(folderPath);
		json[folder] = files.filter(file => fs.statSync(path.join(folderPath, file)).isFile());
	} catch (err) {
		console.error(`Error reading folder ${folder}: ${err}`);
	}
});

const jsonData = JSON.stringify(json, null, 2);
const filePath = './data.json';

fs.access(filePath, fs.constants.F_OK, (err) => {
	if (err) {
		fs.writeFile(filePath, jsonData, 'utf8', (err) => {
			if (err) {
				console.error('Error writing JSON to file:', err);
			} else {
				console.log('JSON data has been written to data.json');
			}
		});
	} else {
		fs.writeFile(filePath, jsonData, 'utf8', (err) => {
			if (err) {
				console.error('Error writing JSON to file:', err);
			} else {
				console.log('JSON data has been updated in data.json');
			}
		});
	}
});
