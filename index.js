var fs = require("fs");
var text = fs.readFileSync("./UD_RawData.txt").toString('utf-8');
text = text.replace(/\r\n/gi, '\r\n');
var textByLine = text.split("\r\n");
var finalArray = [];
for (i in textByLine) {
  var tempString = textByLine[i].toString('utf-8').slice(2);
  var buffA = tempString.split(" ");
  buffA = buffA.filter(word => word.length > 1);
  for(j in buffA){
    buffA[j] = buffA[j].toString('utf-8').replace(' ', '');
  }

  finalArray = finalArray.concat(buffA);
}

var newFile = fs.createWriteStream('SL_UD_RawData.txt');

newFile.on('error', function (err) { });
finalArray.forEach(function (v) {
  var String = v.toString('utf-8').replace(/\r\n/gi, '');
  newFile.write(String + '\r\n');
});
newFile.end();
