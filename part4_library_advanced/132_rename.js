const fs = require("fs");

const renameFile = (fromFilePathName, toFilePathName) => {
  fs.rename(fromFilePathName, toFilePathName, err => {
    if (err) console.log(`ERROR: ${err}`);
    console.log("===============");
    if (err) throw err;

    console.log("정상적으로 처리되었습니다.");
  });
};

function scriptRenameFile(fromFilePathName, toFilePathName) {
  fs.rename(fromFilePathName, toFilePathName, err => {
    if (err) console.log(`ERROR: ${err}`);
    console.log("===============");
    if (err) throw err;

    console.log("정상적으로 처리되었습니다.");
  });
}

const fromFilePathName = "./hello.txt";
const toFilePathName = "./bye.txt";

// hello.txt 를 bye.txt로
renameFile(fromFilePathName, toFilePathName);

// bye.txt를 hello.txt로
//scriptRenameFile(toFilePathName, fromFilePathName);
