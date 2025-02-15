const fs = require('fs');

// Reading Files
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// Writing Files
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File written successfully');
});

// Appending to Files
// fs.appendFile('example.txt', '\nNew line added!', (err) => {
//     if (err) throw err;
//     console.log('Content appended');
// });

//rename Files
// fs.rename('example.txt', 'newname.txt', (err) => {
//     if (err) throw err;
//     console.log('File Renamed');
// });

// Deleting Files
// fs.unlink('example.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted');
// });


//Creating a Directory
// fs.mkdir('newDir', (err) => {
//     if (err) throw err;
//     console.log('Directory created');
// });


// Removing a Directory
// fs.rmdir('newDir', (err) => {
//     if (err) throw err;
//     console.log('Directory removed');
// });

// Checking If a File or Directory Exists
// fs.access('example.txt', fs.constants.F_OK, (err) => {
//     console.log(err ? 'File does not exist' : 'File exists');
// });

// Watching File Changes
// fs.watch('example.txt', (eventType, filename) => {
//     console.log(`File ${filename} was modified: ${eventType}`);
// });
