const fs = require('fs');
const path = require('path');

// 文件夹路径
const folderPaths = ['avatar', 'image-icon', 'public', 'wallpaper'];

// 创建一个空的 JSON 对象
const json = {};

// 遍历每个文件夹路径
folderPaths.forEach(folder => {
	const folderPath = path.join(__dirname, `images/${folder}`); // 获取文件夹的绝对路径
	try {
		// 读取文件夹中的所有文件
		const files = fs.readdirSync(folderPath);
		// 将文件列表存入 JSON 对象中对应的键下
		json[folder] = files.map(file => `${folder}/${file}`);
	} catch (err) {
		console.error(`Error reading folder ${folder}: ${err}`);
	}
});

// 将 JSON 对象转换为字符串
const jsonData = JSON.stringify(json, null, 2);

// 写入 JSON 数据到文件
const filePath = './data.json';
fs.writeFile(filePath, jsonData, 'utf8', (err) => {
	if (err) {
		console.error('Error writing JSON to file:', err);
	} else {
		console.log('JSON data has been written to data.json');
	}
});
