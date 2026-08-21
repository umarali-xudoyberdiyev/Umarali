const fs = require("fs");
const path = require("path");
const os = require("os");

try {
  const filePath = path.join(__dirname, "data.txt");

  const data = fs.readFileSync(filePath, "utf-8");

  console.log(data);

  console.log("Platforma:", os.platform());

  console.log("Arxitektura:", os.arch());

  console.log("CPU yadrolari:", os.cpus().length);

  console.log("Umumiy xotira:", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");

  console.log("Bo'sh xotira:", (os.freemem() / 1024 / 1024).toFixed(2), "MB");

  console.log("Home katalog:", os.homedir());

  console.log(path.parse(filePath));
} catch (error) {
  console.log("Xatolik yuz berdi:", error.message);
}
