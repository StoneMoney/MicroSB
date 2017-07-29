console.log("Running MICROSB [@ngiano]! Close this window or press Ctrl+C when you are finished");
//node-modules
const WebSocket = require('ws'),
	path = require("path"),
	fs = require('fs-extra'),
	opn = require("opn"),
	glob = require("glob")
const wss = new WebSocket.Server({ port: 8081 });
//paths for required files
var socket = path.join(__dirname, '/websocket.dll')
var scriptExe = path.join(__dirname, '/MicroSB AutoHotKey Script 1.exe')
var sbImgE = path.join(__dirname, '/sbE.png')
var sbImg1 = path.join(__dirname, '/sb1.png')
var sbImg2 = path.join(__dirname, '/sb2.png')
var sbImg3 = path.join(__dirname, '/sb3.png')
var sbImg4 = path.join(__dirname, '/sb4.png')
var sbImg5 = path.join(__dirname, '/sb5.png')
var sbImg6 = path.join(__dirname, '/sb6.png')
var sbImg7 = path.join(__dirname, '/sb7.png')
var sbImg8 = path.join(__dirname, '/sb8.png')
var sbImg9 = path.join(__dirname, '/sb9.png')
var sbImg10 = path.join(__dirname, '/sb10.png')
var sbSnd1 = path.join(__dirname, '/sb1.mp3')
var sbSnd2 = path.join(__dirname, '/sb2.mp3')
var sbSnd3 = path.join(__dirname, '/sb3.mp3')
var sbSnd4 = path.join(__dirname, '/sb4.mp3')
var sbSnd5 = path.join(__dirname, '/sb5.mp3')
var sbSnd6 = path.join(__dirname, '/sb6.mp3')
var sbSnd7 = path.join(__dirname, '/sb7.mp3')
var sbSnd8 = path.join(__dirname, '/sb8.mp3')
var sbSnd9 = path.join(__dirname, '/sb9.mp3')
var sbSnd10 = path.join(__dirname, '/sb10.mp3')
var result = path.join(__dirname, '/result.html')
//app workspace
const baseFolder = process.env.APPDATA+'\\MicroSoundboard';
console.log("FILE LOCATIONS: "+baseFolder);
const dataFolder = process.env.APPDATA+'\\MicroSoundboard\\data';
//create folders for workspace, if they don't exist already
if (!fs.existsSync(baseFolder)){
    fs.mkdirSync(baseFolder);
}
if (!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
}
if (!fs.existsSync(baseFolder+'\\bin')){
    fs.mkdirSync(baseFolder+'\\bin');
}
if (!fs.existsSync(baseFolder+'\\ahk')){
    fs.mkdirSync(baseFolder+'\\ahk');
}
if (!fs.existsSync(baseFolder+'\\ahk\\exe')){
    fs.mkdirSync(baseFolder+'\\ahk\\exe');
}
if (!fs.existsSync(dataFolder+'\\sb1.png')){
	fs.copySync(sbImg1,dataFolder+'\\sb1.png');
}
if (!fs.existsSync(dataFolder+'\\sb2.png')){
	fs.copySync(sbImg2,dataFolder+'\\sb2.png');
}
if (!fs.existsSync(dataFolder+'\\sb3.png')){
	fs.copySync(sbImg3,dataFolder+'\\sb3.png');
}
if (!fs.existsSync(dataFolder+'\\sb4.png')){
	fs.copySync(sbImg4,dataFolder+'\\sb4.png');
}
if (!fs.existsSync(dataFolder+'\\sb5.png')){
	fs.copySync(sbImg5,dataFolder+'\\sb5.png');
}
if (!fs.existsSync(dataFolder+'\\sb6.png')){
	fs.copySync(sbImg6,dataFolder+'\\sb6.png');
}
if (!fs.existsSync(dataFolder+'\\sb7.png')){
	fs.copySync(sbImg7,dataFolder+'\\sb7.png');
}
if (!fs.existsSync(dataFolder+'\\sb8.png')){
	fs.copySync(sbImg8,dataFolder+'\\sb8.png');
}
if (!fs.existsSync(dataFolder+'\\sb9.png')){
	fs.copySync(sbImg9,dataFolder+'\\sb9.png');
}
if (!fs.existsSync(dataFolder+'\\sb10.png')){
	fs.copySync(sbImg10,dataFolder+'\\sb10.png');
}
if (!fs.existsSync(dataFolder+'\\sb1.mp3')){
	fs.copySync(sbSnd1,dataFolder+'\\sb1.mp3');
}
if (!fs.existsSync(dataFolder+'\\sb2.mp3')){
	fs.copySync(sbSnd2,dataFolder+'\\sb2.mp3');
}
if (!fs.existsSync(dataFolder+'\\sb3.mp3')){
	fs.copySync(sbSnd3,dataFolder+'\\sb3.mp3');
}
if (!fs.existsSync(dataFolder+'\\sb4.mp3')){
	fs.copySync(sbSnd4,dataFolder+'\\sb4.mp3');
}
if (!fs.existsSync(dataFolder+'\\sb5.mp3')){
	fs.copySync(sbSnd5,dataFolder+'\\sb5.mp3');
}
if (!fs.existsSync(dataFolder+'\\sb6.mp3')){
	fs.copySync(sbSnd6,dataFolder+'\\sb6.mp3');
}
if (!fs.existsSync(dataFolder+'\\sb7.mp3')){
	fs.copySync(sbSnd7,dataFolder+'\\sb7.mp3');
}
if (!fs.existsSync(dataFolder+'\\sb8.mp3')){
	fs.copySync(sbSnd8,dataFolder+'\\sb8.mp3');
}
if (!fs.existsSync(dataFolder+'\\sb9.mp3')){
	fs.copySync(sbSnd9,dataFolder+'\\sb9.mp3');
}
if (!fs.existsSync(dataFolder+'\\sb10.mp3')){
	fs.copySync(sbSnd10,dataFolder+'\\sb10.mp3');
}
//regex
var pattern1 = "^sb ([0-9]+)";
var re1 = new RegExp(pattern1,'i');
//send local copies of files to workspace
fs.copySync(result,baseFolder+'/result.html');
fs.copySync(sbImgE,dataFolder+'/sbE.png');
fs.copySync(socket,baseFolder+'/bin/websocket.dll');
fs.copySync(scriptExe,baseFolder+'/ahk/exe/MicroSB AutoHotKey Script 1.exe');
//open autohotkey file
opn(baseFolder+'/ahk/exe/MicroSB AutoHotKey Script 1.exe');
wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(message) {
		if(re1.test(message)) {
			var matches = message.match(pattern1);
			wss.clients.forEach(function each(client) {
				if (client !== ws && client.readyState === WebSocket.OPEN) {
					client.send("trigger "+matches[1]);
				}
			});
		}

	});

});