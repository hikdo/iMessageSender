
var imessage = require("./index.js");

//imessage.sendMessage("421939022@qq.com", "hello🐶🎉", null, function() {
//	console.log("should be fine.");
//});

imessage.sendMessage("someone@qq.com", "hello🐶🎉", "/Users/look/Desktop/avatar.png", function(code, stdout, stderr) {
	console.log(code, stdout, stderr);
});

//imessage.sendMessage("paul come back 🤷‍♀️", "imessage module 2 unit test - can send message with emojis🤷‍♀️\nand new lines", function() {
//	console.log("should be fine.");
//});
