var fs = require('fs');
var _path = require('path');


var GetLevelTag = (level) => {
    var str = '-';
    for (let index = 1; index < level; index++) {
        str = str + '-';
    }
    return str;
}

var level = 0;

var ReadDir = (path) => {
    console.log(path);
    fs.readdir(path, (err, items) => {
/*         for (let index = 0; index < items.length; index++) {
            const item = items[index];
            let stat = fs.statSync(path + '\\' + item);
            if (stat.isDirectory() == true) {
                ReadDir(path + '\\' + item);
            } else {

            }
        } */

        items.forEach((item) => {
            let stat = fs.statSync(path + '\\' + item);
            if (stat.isDirectory() == true) {
                ReadDir(path + '\\' + item);
            } else {

            }
        })
    })
}

ReadDir(_path.resolve('./'));
