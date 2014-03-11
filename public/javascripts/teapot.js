
//小物スクリプト

var paragraph; //発言種別欄の表示／非表示
var isMSIE = /*@cc_on!@*/false;

function chrImgChange(target,select,prefix,csid,postfix){
  var i    = select.selectedIndex;
  var value= select.options[i].value + postfix;
  var path = prefix + value.replace( csid, "" );
  target.src = path;
}

var makevilform_level = {
// システム
		'votetype'       : 1,
// 村側
		'cntvillager'    : 0,
		'cntseer'        : 0,
		'cntguard'       : 0,
		'cntmedium'      : 0,
		'cntstigma'      : 1,
		'cntfm'          : 1,
		'cntalchemist'   : 1,
		'cntgirl'        : 1,
		'cntsympathy'    : 2,
		'cntaura'        : 2,
		'cntcurse'       : 2,
		'cntdying'       : 2,
		'cntinvalid'     : 2,
		'cntscapegoat'   : 2,
		'cntdoctor'      : 3,
		'cntnecromancer' : 3,
		'cntfollow'      : 3,
		'cntfan'         : 3,
		'cnthunter'      : 3,
		'cntweredog'     : 3,
		'cntprince'      : 3,
		'cntrightwolf'   : 3,
		'cntelder'       : 3,
		'cntseerwin'     : 5,
		'cntseerrole'    : 5,
		'cntmediumwin'   : 5,
		'cntmediumrole'  : 5,
		'cntwitch'       : 5,
// 裏切り
		'cntpossess'     : 1,
		'cntfanatic'     : 2,
		'cntmuppeting'   : 1,
		'cntwisper'      : 2,
		'cntsemiwolf'    : 2,
		'cntdyingpossess': 2,
		'cntoracle'      : 2,
		'cntsorcerer'    : 2,
// 人狼
		'cntwolf'        : 0,
		'cntaurawolf'    : 2,
		'cntintwolf'     : 2,
		'cntcursewolf'   : 2,
		'cntwhitewolf'   : 2,
		'cntchildwolf'   : 2,
		'cntdyingwolf'   : 2,
		'cntsilentwolf'  : 2,
		'cntheadless'    : 2,
// 妖精
		'cnthamster'     : 1,
		'cntguru'        : 2,
		'cntbat'         : 2,
		'cnttrickster'   : 2,
		'cntjammer'      : 2,
		'cntmimicry'     : 2,
		'cntsnatch'      : 3,
		'cntdyingpixi'   : 2,
// その他
		'cntrobber'      : 2,
		'cntlover'       : 2,
		'cntpassion'     : 2,
		'cntlonewolf'    : 2,
		'cntloveangel'   : 2,
		'cnthatedevil'   : 2,
		'cntdish'        : 2,
// 恩恵
		'cntdecide'      : 0,
		'cntshield'      : 2,
		'cntglass'       : 2,
		'cntogre'        : 2,
		'cntfairy'       : 2,
		'cntfink'        : 2,
		'cntseeronce'    : 3,
// 事件
		'cntnothing'     : 2,
		'cntaprilfool'   : 2,
		'cntturnfink'    : 2,
		'cntturnfairy'   : 2,
		'cnteclipse'     : 2,
		'cntcointoss'    : 2,
		'cntforce'       : 2,
		'cntmiracle'     : 2,
		'cntprophecy'    : 2,
		'cntclamor'      : 2,
		'cntfire'        : 2,
		'cntnightmare'   : 2,
		'cntghost'       : 2,
		'cntescape'      : 2,
		'cntseance'      : 2
};

function deployHTML5(){
	deployHTML5 = (function(){});

	/* 一覧をスマートにする工夫 */
	if ( isMSIE ){
		document.createElement("section");
		document.createElement("article");
		document.createElement("aside");
		document.createElement("header");
		document.createElement("footer");
		document.createElement("nav");
		document.createElement("dialog");
		document.createElement("figure");
		document.createElement("audio");
		document.createElement("video");
		document.createElement("embed");
		document.createElement("m");
		document.createElement("meter");
		document.createElement("time");
		document.createElement("canvas");
		document.createElement("command");
		document.createElement("datagrid");
		document.createElement("details");
		document.createElement("datalist");
		document.createElement("datatemplate");
		document.createElement("rule");
		document.createElement("nest");
		document.createElement("event-source");
		document.createElement("output");
		document.createElement("progress");
	}

}



$(document).ready(deployHTML5);



