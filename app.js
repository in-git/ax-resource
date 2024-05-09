const fs = require('fs');
const path = require('path');

// 定义文件夹路径
const folderPaths = ['avatar', 'image-icon', 'public', 'wallpaper'];

// 读取每个文件夹中的文件
folderPaths.forEach(folder => {
	const folderPath = path.join(__dirname, `images/${folder}`);

	fs.readdir(folderPath, (err, files) => {
		if (err) {
			console.error(`Error reading files from ${folder}: ${err}`);
			return;
		}

		// 构建文件路径列表
		const filePaths = files.map(file => path.join(folder, file));

		// 将文件路径列表写入JSON文件
		const jsonFilePath = path.join(__dirname, `json/${folder}.json`);
		fs.writeFile(jsonFilePath, JSON.stringify(filePaths), err => {
			if (err) {
				console.error(`Error writing JSON file for ${folder}: ${err}`);
				return;
			}
			console.log(`JSON file created for ${folder}`);
		});
	});
});
