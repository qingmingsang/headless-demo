var webPage = require('webpage');
var page = webPage.create();

page.open('http://www.baidu.com/', function (s) {
  console.log(s);//success
  phantom.exit();
});
