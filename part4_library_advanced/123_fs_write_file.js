const fs = require("fs");

let contents = "";
contents += "<html><head><title>하하하</title>\n";
contents += "<body>\n";
contents += "바디바디요~~\n";
contents += "</body>\n";
contents += "</html>\n";

fs.writeFile("./message.txt", contents);
