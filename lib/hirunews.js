const _0x1e0504=_0x52ca;(function(_0x4021e9,_0x14c6c3){const _0x5ac8c2=_0x52ca,_0x590b5a=_0x4021e9();while(!![]){try{const _0x42d39b=-parseInt(_0x5ac8c2(0xfe))/0x1+-parseInt(_0x5ac8c2(0x108))/0x2*(parseInt(_0x5ac8c2(0x104))/0x3)+parseInt(_0x5ac8c2(0x103))/0x4+-parseInt(_0x5ac8c2(0xf3))/0x5+parseInt(_0x5ac8c2(0xf7))/0x6*(parseInt(_0x5ac8c2(0x10c))/0x7)+-parseInt(_0x5ac8c2(0xfa))/0x8+parseInt(_0x5ac8c2(0x107))/0x9;if(_0x42d39b===_0x14c6c3)break;else _0x590b5a['push'](_0x590b5a['shift']());}catch(_0x11b64b){_0x590b5a['push'](_0x590b5a['shift']());}}}(_0x243b,0xa3696));function _0x52ca(_0x1dc86c,_0x481bd3){const _0x243b24=_0x243b();return _0x52ca=function(_0x52caf0,_0x3b2d38){_0x52caf0=_0x52caf0-0xf2;let _0x25dbbc=_0x243b24[_0x52caf0];return _0x25dbbc;},_0x52ca(_0x1dc86c,_0x481bd3);}const axios=require(_0x1e0504(0xf4)),cheerio=require(_0x1e0504(0x100));function _0x243b(){const _0x278258=['get','78fcmpUK','split','catch','3203864mLZnTI','data','then','latestHiru','182471zeLmtW','#article-phara2','cheerio','body\x20>\x20div:nth-child(14)\x20>\x20center\x20>\x20h1','src','2702192kNIMBm','3czCIJh','attr','load','15224742tYMeNE','2205326Ysxzri','exports','href','body\x20>\x20div:nth-child(14)\x20>\x20div.row\x20>\x20div.col-sm-12.col-md-9.col-lg-9.section\x20>\x20div\x20>\x20div:nth-child(2)\x20>\x20div.column.middle\x20>\x20a:nth-child(1)','206157jUpeIW','body\x20>\x20div:nth-child(14)\x20>\x20div.row\x20>\x20div.col-sm-12.col-md-9.col-lg-9.section\x20>\x20div\x20>\x20div:nth-child(2)\x20>\x20div.column.left\x20>\x20div\x20>\x20a\x20>\x20img','1975490QhJHXx','axios','text'];_0x243b=function(){return _0x278258;};return _0x243b();}async function latestHiru(){return new Promise(async(_0x5e8f3e,_0x3feebb)=>{const _0x57a4b9=_0x52ca;axios[_0x57a4b9(0xf6)]('https://www.hirunews.lk/local-news.php?pageID=1')['then'](_0x3a25c6=>{const _0x4aaf2d=_0x57a4b9,_0x1e2ed8=cheerio[_0x4aaf2d(0x106)](_0x3a25c6[_0x4aaf2d(0xfb)]),_0x43abb7=_0x1e2ed8(_0x4aaf2d(0x10b))[_0x4aaf2d(0x105)](_0x4aaf2d(0x10a)),_0x1d6330=_0x1e2ed8(_0x4aaf2d(0xf2))[_0x4aaf2d(0x105)](_0x4aaf2d(0x102));axios[_0x4aaf2d(0xf6)](_0x43abb7)[_0x4aaf2d(0xfc)](_0x22943c=>{const _0x60daad=_0x4aaf2d,_0x110f37=cheerio['load'](_0x22943c[_0x60daad(0xfb)]),_0x42d78c=_0x110f37(_0x60daad(0xff))[_0x60daad(0xf5)]();let [_0x3c7a68]=_0x42d78c[_0x60daad(0xf8)]`window.`;const _0xff1fbb=_0x110f37(_0x60daad(0x101))['text']();_0x5e8f3e({'link':_0x43abb7,'img':_0x1d6330,'title':_0xff1fbb,'desc':_0x3c7a68});})[_0x4aaf2d(0xf9)](_0x483d0f=>{_0x3feebb(_0x483d0f);});})[_0x57a4b9(0xf9)](_0x5bf7d7=>{_0x3feebb(_0x5bf7d7);});});}module[_0x1e0504(0x109)][_0x1e0504(0xfd)]=latestHiru;