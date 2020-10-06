const ncp = require("ncp");
const path = require("path");

const projectName = process.argv[2];

const source = path.join(__dirname, "project");
const destination = path.join(__dirname, projectName);

ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("done!");
});
