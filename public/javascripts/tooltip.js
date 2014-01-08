
var cookie_in_use;
var cookie;     //クッキー記入予定
var toggle;     //ヘッダ欄それぞれの表示／非表示
var filter;     //フィルタ要素の表示／非表示
var filter_key; //フィルタ要素の表示／非表示
var clipboard;  //ツール欄表示／非表示
var cliptext;   //自由検索テキスト
var ajaxitems;

var stylesheet;
var headbanner;
var viewport  ;
var sayfilter ;

var dst_banner;
var dst_padding;
var dst_style;
var src_banner;
var src_padding;
var src_style;

var objSayFilter;

//ウィンドウの内側の高さを得る
function getClientHeight() {
	var objheight;
	if (! objheight ){	objheight = $(window).height();	}
	if (! objheight ){	objheight = window.innerHeight;	}
	if (! objheight ){	objheight = document.documentElement.clientHeight;	}
	if (! objheight ){	objheight = document.body.clientHeight;	}
	return ( objheight );
}
function getClientWidth(){
	var contentType;
	var width = 480;
	switch(window.orientation){
	case   0:
	case 180:
		width = 480;
		break;
	case -90:
	case  90:
		width = 800;
		break;
	default:
		width = $(window).width();
	}
	return width;
}

//ドキュメントオブジェクトの取得
function getDocumentObject(id) {
	var obj;
	if(document.getElementById) {
		obj = document.getElementById(id)
	} else if (document.all) {
		obj = document.all(id)
	} else {
		obj = null;
	}

	return obj;
}

//エレメントに適用するスタイルシートクラスを変更
function changeClass(id, classname) {
	var obj = getDocumentObject(id);
	if (obj) obj.className = classname;
}


//---------------------------------------------
//フィルタ位置制御ボタン処理
//---------------------------------------------

//発言フィルタを左側へ配置
function moveFilterLeft() {
	if (cookie.layoutfilter > 0) return; //左側に配置済み

	//フィルタを左側へ移動
	changeClass('outframe',     'outframe_navimode');
	changeClass('contentframe', 'contentframe_navileft');
	changeClass('sayfilter',    'sayfilterleft');

	//画像ボタンの切り替え
	var obj = getDocumentObject('button_mvfilterleft');
	if (obj) obj.style.display = 'none';
	var obj = getDocumentObject('button_mvfilterbottom');
	if (obj) obj.style.display = 'inline';

	//チェックボックスを非表示
	changeFilterCheckBoxPlList(0);
	changeFilterCheckBoxTypes(0);

//	changeFilterCheckBoxPlList(1);
//	changeFilterCheckBoxTypes(1);

	cookie.layoutfilter = 1;
	eventFixFilter();
	writeCookieFilter();
}

//発言フィルタを最下段へ配置
function moveFilterBottom() {
	if (cookie.layoutfilter == 0) return; //最下段に配置済み

	//フィルタを最下段へ移動
	changeClass('outframe',     'outframe');
	changeClass('contentframe', 'contentframe');
	changeClass('sayfilter',    'sayfilter');

	//画像ボタンの切り替え
	var obj = getDocumentObject('button_mvfilterleft');
	if (obj) obj.style.display = 'inline';
	var obj = getDocumentObject('button_mvfilterbottom');
	if (obj) obj.style.display = 'none';

	//チェックボックスを表示
//	changeFilterCheckBoxPlList(1);
//	changeFilterCheckBoxTypes(1);

	cookie.layoutfilter = 0;
	unfixFilter(); //固定されていれば解除
	writeCookieFilter();
}

//発言フィルタを固定
function fixFilter()
{
	if (cookie.layoutfilter == 1){	fixFilterNoWriteCookie();	};
	cookie.fixedfilter = 1;
	writeCookieFilter();
}

//発言フィルタを固定（クッキー書き込み無し）
function fixFilterNoWriteCookie() {

	//固定処理
	var obj = getDocumentObject('sayfilter');
	if (!obj) return;

	obj.style.position = 'absolute';
	fixFilterLeftIE();
	fixWidth();

	//画像ボタンの切り替え
	var obj = getDocumentObject('button_fixfilter');
	if (obj) obj.style.display = 'none';
	var obj = getDocumentObject('button_unfixfilter');
	if (obj) obj.style.display = 'inline';

	//フィルタの高さを調整
	var obj = getDocumentObject('sayfilter');
	if (obj) obj.style.height = getClientHeight() + 'px';
}

//発言フィルタの固定を解除
function unfixFilter() {
	if (cookie.fixedfilter == 0) return; //固定されていない

	var obj = getDocumentObject('sayfilter');
	if (!obj) return;
	obj.style.position = 'static';

	//画像ボタンの切り替え
	var obj = getDocumentObject('button_fixfilter');
	if (cookie.layoutfilter == 0) {
		if (obj) obj.style.display = 'none';
	} else {
		if (obj) obj.style.display = 'inline';
	}
	var obj = getDocumentObject('button_unfixfilter');
	if (obj) obj.style.display = 'none';

	var obj = getDocumentObject('sayfilter');
	if (obj) obj.style.height   = 'auto';
	cookie.fixedfilter = 0;
	writeCookieFilter();
}

//---------------------------------------------
//チェックボックスの表示／非表示
//---------------------------------------------

//個人チェックボックスの表示／非表示
function changeFilterCheckBoxPlList(enabled) {
	changeFilterCheckBox('checkpnofilter', enabled)
}

//発言種別チェックボックスの表示／非表示
function changeFilterCheckBoxTypes(enabled) {
	changeFilterCheckBox('checktypefilter', enabled)
}

//チェックボックスの表示／非表示
function changeFilterCheckBox(checkname, enabled) {
	var display = 'none';
	if (enabled > 0) display = 'inline';
	checkname = checkname + '_';

	$(":checkbox").each(function(){
		if (0 < this.id.indexOf(checkname) ){
			this.style.display = display;
		}
	});
}

//---------------------------------------------
//イベント呼び出し
//---------------------------------------------

//イベント
//発言フィルタを固定（スクロールイベント、IE用）
function eventFixFilter() {
	fixWidth();
	if (cookie.fixedfilter == 0) return; //固定モードでないなら実行しない
	fixFilterLeftIE();
}

//発言フィルタの縦サイズを調整
function eventResize() {
	var height = getClientHeight();
	sayfilter.height( height );
	eventFixFilter();
}

function fixWidth(){
	var mode = false;
	var width = getClientWidth();
	src_style = stylesheet.attr("href");
	src_banner = headbanner.attr("src");

    if (src_style.match(/480.css/)) mode = 480;
    if (src_style.match(/800.css/)) mode = 800;
    if (! mode) return;
    if (1 != cookie.layoutfilter) return;
      var all_width, fold, gap, info_width, small;
      small = 122 + 80;
      fold = false;
      switch (mode) {
        case 480:
          if (small < width - 462) {
            info_width = width - 462;
          } else if (small < width - 350) {
            info_width = width - 350;
            fold = true;
          } else {
            info_width = width;
          }
          break;
        case 800:
          gap = 10;
          if (gap < width - 770) {
            info_width = 190 + (width - 770) / 2;
          } else {
            info_width = 190;
            fold = true;
          }
      }
      sayfilter.width(info_width);
}


//---------------------------------------------
//IE用フィルタ制御
//---------------------------------------------

//発言フィルタを画面左上に固定（IE用）
function fixFilterLeftIE() {
	if (!objSayFilter) return;

//	IE専用操作。にする場合。
//	if (navigator.appName.indexOf('Microsoft Internet Explorer') < 0) return;
	objSayFilter.style.top  = $(window).scrollTop();
	objSayFilter.style.left = 0;
}

/*
	var objSayFilter = $('sayfilter');
	var objOutFrame  = $('outframe' );
	if (!objSayFilter) return;
	if (!objOutFrame ) return;

	objSayFilter.css({                    // ×
		top  : $(window).scrollTop(),
		left : objOutFrame.offset().left  // ×
	});
	return;

	objSayFilter.animate({                // ×
		top :($(window).scrollTop()    ),
		left:(objOutFrame.offset().left)  // ×
	},{
		duration:700,
		queue   :false,
		easing  :"linear"
	});
	return;
*/

//発言フィルタの縦位置を一旦ゼロにする（IE用）
function moveFilterTopZeroIE() {
}


//---------------------------------------------
//
//---------------------------------------------
SowFeed = (function() {
    function SowFeed() {
      this.title = $("title").text();
      this.url = document.URL;
      if (this.url.indexOf("vid=") < 0 || this.url.indexOf("#newsay") < 0) return;
      this.url = this.url.replace(/#newsay/, "&cmd=rss");
    }

    SowFeed.prototype.to_date = function(str) {
      var date, day, hour, min, month, sec, year;
      date = new Date();
      if (str.match(/([0-9]+)-([0-9]+)-([0-9]+)T([0-9]+):([0-9]+):([0-9]+)/)) {
        year = parseInt(RegExp.$1, 10);
        month = parseInt(RegExp.$2, 10);
        day = parseInt(RegExp.$3, 10);
        hour = parseInt(RegExp.$4, 10);
        min = parseInt(RegExp.$5, 10);
        sec = parseInt(RegExp.$6, 10);
        date.setYear(year);
        date.setMonth(month);
        date.setDate(day);
        date.setHours(hour);
        date.setMinutes(min);
        date.setSeconds(sec);
        date.setMilliseconds(0);
        return date.getTime();
      } else {
        return false;
      }
    };

    SowFeed.prototype.check = function() {
      var _this = this;
      setTimeout(function() {
        return _this.check_base(0, 0, 0);
      }, 1000);
      return $("#newinfo:last > img").show();
    };

    SowFeed.prototype.check_base = function(newDateInt, newFeeds, oldFeeds) {
      var infomes, maxDateInt;
      var _this = this;
      infomes = void 0;
      maxDateInt = 0;

      return $.ajax({
        url: this.url,
        dataType: "xml",
        success: function(xml) {
          $(xml).find("item").each(function(index, element) {
            var thisDateInt, thisTime;
            thisTime = $(element).find("date").text();
            if (thisTime === "") {
              thisTime = getElementsByTagName("dc:date")[0].firstChild.nodeValue;
            }
            thisDateInt = _this.to_date(thisTime);
            if (newDateInt === 0) newDateInt = thisDateInt;
            if (maxDateInt < thisDateInt) maxDateInt = thisDateInt;
            if (newDateInt < thisDateInt) {
              return newFeeds++;
            } else {
              newDateInt = maxDateInt;
              return false;
            }
          });
          if (newFeeds > oldFeeds) {
            if ($(document).find("#newinfo").size() > 1) newFeeds -= oldFeeds;
            $("title").text(("(" + newFeeds + ") ") + _this.title);
            infomes = newFeeds + " 件の新しい発言があります。";
            if ($("#newinfo").size() > 0) {
              $("#newinfo:last > a").text(infomes).show();
              $("#newinfo:last > img").hide();
              $("#newinfo:last").show();
            }
            return oldFeeds = newFeeds;
          }
        },
        error: function(xhr, status, e) {},
        complete: function(xhr, status) {
          return setTimeout(function() {
            return _this.check_base(newDateInt, newFeeds, oldFeeds);
          }, 5 * 60 * 1000);
        }
      });
    };

    SowFeed.prototype.more = function(link) {
      var base, href;
      href = link.href;
      base = $(link).parent();
      base.append($('<img src="img/ajax-loader.gif">'));
      $(link).remove();
      $.get(href, {}, function(data) {
        var mes;
        mes = $(data).find(".inframe:first").children(":not(h2)");
        setAjaxEvent(mes);
        base.hide();
        return base.after(mes);
      });
      return false;
    };

    SowFeed.prototype.clear = function(link) {
      var base, href;
      href = link.href;
      base = $(link).parent();
      base.find("img").show();
      $(link).hide();
      $.get(href, {}, function(data) {
        var mes;
        mes = $(data).find(".inframe:first").children(":not(h2,#readmore)");
        setAjaxEvent(mes);
        base.hide();
        base.before(mes);
        return $("title").text(this.title.replace(/��+� /, ""));
      });
      return false;
    };

    return SowFeed;

})();


//---------------------------------------------
// 征服済
//---------------------------------------------
//発言フィルタの初期化
function unpack(key,filter) {
	if( cookie[key] ){
		var ary = cookie[key].split(',');
		for (var i=0; i< ary.length; i++ ){
			filter[key+"_"+i] = ary[i];
		}
	}
}

function initFilter() {
	filter        = [];
	toggle        = [];
	cookie        = [];
	cookie.fixedfilter  = -1;
	cookie.layoutfilter = -1;

	cookie_in_use = [];
	cookie_in_use.clipboard    = true;
	cookie_in_use.cliptext     = true;
	cookie_in_use.toggle       = true;
	cookie_in_use.fixedfilter  = true;
	cookie_in_use.layoutfilter = true;
//  cookie_in_use  定義 を setItem内でも追加している。
//  cookie_in_use  定義 を writeCookieFilter内でも追加している。
	cookie_in_use.uid = false;
	cookie_in_use.pwd = false;


	//クッキーの読み込み
	var doc_cookie = document.cookie + '; ';
	var cookies = doc_cookie.split('; ');
	for (var i = 0; i < cookies.length; i++) {
		var data = cookies[i].split('=');
		if (!data[1]) data[1] = '';
		cookie[data[0]] = data[1];
	}

	//圧縮クッキーを展開
	unpack('typefilter',filter);
	unpack('pnofilter' ,filter);
	if( cookie.toggle ){
		var ary = cookie.toggle.split(',');
		for (var i=0; i< ary.length; i++ ){
			toggle[ary[i]] = 1;
		}
	}
	if( cookie.clipboard )
		$("#clipboard").val( unescape(cookie.clipboard) );
	if( cookie.cliptext )
		$("#cliptext" ).val( unescape(cookie.cliptext)  );


	if (cookie.layoutfilter < 1) cookie.layoutfilter = 0;
	if (cookie.fixedfilter  < 1) cookie.fixedfilter  = 0;

	if (cookie.layoutfilter == 0) {
		//チェックボックスの表示
//		changeFilterCheckBoxPlList(1);
//		changeFilterCheckBoxTypes(1);
	}

	if ((cookie.fixedfilter == 1)&&(cookie.layoutfilter == 1))
		fixFilterNoWriteCookie();
	return;
}

//クッキーへの書き込み。もうすこしラクができないものか。
function writeCookieFilter() {
	// ゾンビクッキーだがめんどくさいので。(^^;)
	var alives  = '; expires=Thu, 1-Jan-2030 00:00:00 GMT';
	var deletes = '; expires=Thu, 1-Jan-1970 00:00:00 GMT';

	$("#clipboard").each(function(){
		cookie.clipboard = escape( $(this).val() );
	});
	$("#cliptext").each(function(){
		cookie.cliptext = escape( $(this).val() );
	});

// 配列形式の圧縮
	var list = [];
	for(var key in filter ){
		var fhead = key.split('_');
		list[fhead[0]] = [];
		cookie_in_use[key]      = false;
		cookie_in_use[fhead[0]] = true;
	}
	for(var key in filter ){
		var fhead = key.split('_');
		list[fhead[0]][fhead[1]] = filter[key];
	}
	for(var key in list ){
		cookie[key] = list[key].join(',');
	}
	cookie.toggle = "";
	for(var key in toggle ){
		if( toggle[key] == 1 )
			cookie.toggle += key + ",";
	}

// クッキーの記入

	for(var key in cookie ){
		if ( ! cookie_in_use[key] )
			continue;
		if ( filter[key] ){
			expires = deletes;
		} else {
			expires = alives;
		}
		document.cookie = key + '=' + cookie[key] + ';path=/' + expires;
	}
}



//発言のうち欲しい部分のみを表示する。
function changeSayDisplays() {
	var i;

	$(".message_filter").each(function(){
		var id = this.id.split("_");
		var no      = parseInt(id[0]);
		var logpno  = parseInt(id[1]);
		var mestype = parseInt(id[2]);

		var display = "block";

		if(  filter["pnofilter_" +logpno ] == 1
		  || filter["typefilter_"+mestype] == 1
		){
			display = "none";
		} else {
			var msg_key = $(this).find("p:not(.mes_date)").text().length;
			var b_key   = 0;
			$(this).find("em").each(function(){
				var b_display = "";
				if( filter["typefilter_5"] == 1 ){
					b_display = "none";
					b_key += $(this).text().length+4;
					if( msg_key - b_key < 1 ){
						display = "none";
					} else {
						$(this).next("span").remove();
						$(this).after("<span>/* B.G */</span>");
					}
				} else {
					b_display = "inline";
					$(this).next("span").remove();
				}
				this.style.display = b_display;
			});
		}
		this.style.display = display;
	});
}

//発言のうち欲しい部分をピックアップする
function summary() {
	$("#itemlist").empty();

	var ischeckclipseer    = 1 != toggle.clipseer;
	var ischeckclipexecute = 1 != toggle.clipexecute;
	var ischeckclipagenda  = 1 != toggle.clipagenda;
	var ischeckcliptopix   = 1 != toggle.cliptopix;
	var ischeckclipanchor  = 1 != toggle.clipanchor;
	var ischeckclipbm      = 1 != toggle.clipbm;
	var cliptext           = $("#cliptext").val();

	var result_list = [];

	$(".message_filter").each(function(){
		var link = "#newsay";
		var name = "？";
		var item = "";
		var box  = $(this);
		var mes  = box.find("p:not(.mes_date)");
		var text = mes.text();

		if ( ischeckclipseer ){
			var tseer    = text.match("●");
			if( tseer ){	item += " ●";	}
		}

		if ( ischeckclipexecute ){
			var texecute = text.match("▼");
			if( texecute ){	item += " ▼";	}
		}

		if ( ischeckclipagenda ){
			var tagenda  = text.match("■");
			if( tagenda ){	item += " ■";	}
		}

		if ( ischeckcliptopix ){
			var ttopix   = text.match("【");
			if( ttopix ){	item += " 【】";	}
		}

		if( cliptext ){
			var clipary  = cliptext.split(' ');
			for(var i=0; i < clipary.length; i++ ){
				if( -1 < text.indexOf(clipary[i]) )
					item += " "+clipary[i];
			}
		}

		if ( ischeckclipbm ){
			box.find(".action_bm .mes_action, .mes_think .action p:not(.mes_date)").each(function(){
				var name = $(this).find("a").text();
				var text = $(this).text().replace(name,"");
				item += " "+ text;
			});
		}
		if ( ischeckclipanchor ){
			mes.find(".res_anchor").each(function(){
				var text = $(this).text();
				var href = this.href;
				if( 0 == text.indexOf(">>")){
					href = href.replace("#","&logid=").replace("&move=page","");
				}
				item += ' <a class="res_anchor" href="'+ href +'" target="_blank">'+ text +'</a>';
			});
		}
		if( "" == item ) return;

		$(this).find("a[name]").each(function(){
			link = this.name;
			name_ary = $(this).text().split(" ");
			name = name_ary[name_ary.length - 1];
		});
		result_list.push('<div class="sayfilter_content_enable"><div class="sayfilter_incontent"><a class="res_anchor" href="#' + link + '">'+name+"</a>"+item+"</div></div> " );
	});
	$('#itemlist').append(result_list.join(""));
}


//---------------------------------------------
//フィルタ操作欄の展開／畳む
//---------------------------------------------
function tribind_click( selecter, ary, enable, disable ){
	var button = $(selecter);
	button.click( changeButtonTri );
	button.each(function(){
		var target = $(this).next().filter("div");
		var name   = target.attr("id");
		this.target        = target;
		this.target_name   = name;
		this.target_var    = ary;
		this.style_enable  = enable;
		this.style_disable = disable;
		this.set_function  = setHeader;
		this.set_function(button,this,ary[name]);
	});
}

function headerbind_click( selecter, ary, enable, disable ){
	var button = $(selecter);
	button.click( changeButton );
	button.each(function(){
		var target = $(this).next().filter("div");
		var name   = target.attr("id");
		this.target        = target;
		this.target_name   = name;
		this.target_var    = ary;
		this.style_enable  = enable;
		this.style_disable = disable;
		this.set_function  = setHeader;
		this.set_function(button,this,ary[name]);
	});
}

function summarybind_click( selecter, ary, enable, disable ){
	var button = $(selecter);
	var name   = button.attr("id");
	button.click( changeButton );
	button.click( summary );
	button.each(function(){
		this.target_name   = name;
		this.target_var    = ary;
		this.style_enable  = enable;
		this.style_disable = disable;
		this.set_function  = setItem;
		this.set_function(button,this,ary[name]);
	});
}

function filterbind_click( selecter, ary, enable, disable ){
	var button = $(selecter);
	var name = button.attr("id");
	button.click( changeButton );
	button.click( changeSayDisplays );
	button.each(function(){
		this.target_name   = name;
		this.target_var    = ary;
		this.style_enable  = enable;
		this.style_disable = disable;
		this.set_function  = setFilter;
		this.set_function(button,this,ary[name]);
	});
}

function while_bind_click( head, ary, enable, disable, bind_click ){
	for( var i = 0; i < 99; i++ ){
		var id       = head+i;
		var selecter = "#"+id;
		var button   = $(selecter);
		var count    = button.size();
		if( 0 == count ){
			if ( 0 == i ) return;
			if ( 9  < i ) continue;
			filter[id] = 2;
		} else {
			if( filter[id] != 1 ) filter[id] = 0;
			bind_click(selecter,ary,enable,disable);
		}
	}
}

function changeButtonTri() {
	var button = $(this);
	var list   = [2,0,1];
	var now    = this.target_var[this.target_name];
	list[undefined] = list[0];
	this.set_function(button,this, list[now] );
}

function changeButton() {
	var button = $(this);
	var list   = [1,0];
	var now    = this.target_var[this.target_name];
	list[undefined] = list[0];
	this.set_function(button,this, list[now] );
}

function change_pnofilter_all() {
	var id_ary  = $(this).attr("id").split('_');
	var enabled = id_ary[ id_ary.length - 1 ];
	var i;
	//フィルタ位置を一旦リセット
	moveFilterTopZeroIE();
	$(".sayfilter_content div").each(function(){
		var id = this.id;
		if (id.indexOf('pnofilter_') < 0) return;
		var button = $(this);

		if (enabled == 2) {
			setItem(button,this, (this.target_var[this.target_name] == 1)?(0):(1) );
		} else {
			setItem(button,this,enabled);
		}
	});

	changeSayDisplays();
	fixFilterLeftIE();
	fixWidth();
}



function setFilter(button,field,value){
	setItem(button,field,value);

}

function setHeader(button,field,value){
	setItem(button,field,value);
	if( value == 1 ){
		field.target.slideUp('fast');
	} else {
		field.target.slideDown('fast');
	}
	if( value == 2 ){
		field.target.addClass("ie_hover");
	} else {
		field.target.removeClass("ie_hover");
	}
}

function setItem(button,field,value){
	button.removeClass(field.style_enable+" "+field.style_disable);

	cookie_in_use[field.target_name]    = true;
	field.target_var[field.target_name] = value;
	if( value == 1 ){
		button.addClass(field.style_disable);
	} else {
		button.addClass(field.style_enable);
	}
}

function pumpNumber() {
	return( parseInt( new Date().getTime()/1000 ) );
}

function closeWindow() {
	$(".close").toggle(
	function(){
		var ank  = $(this);
		var base = ank.parents(".drag");
		base.fadeOut("nomal", function(){
			base.remove();
		});
		return false;
	},function(){
		var ank  = $(this);
		var base = ank.parents(".drag");
		base.fadeOut("nomal", function(){
			base.remove();
		});
		return false;
	});
}

function setAjaxEvent(target){
	// 記号類修飾
	// 日時、発言プレビュー内部、を対象外にしておく。そうしないとヤバイ。
	target.find("p:not(.multicolumn_label):not(.mes_date)").each(function(){
		html = $(this).html();
		$(this).html(
			html
			.replace(/(\/\*)(.*?)(\*\/|$)/g,'<em>$1$2$3</em>')
//			.replace(/(\*\*+)/g,'<strong>$&</strong>')
//			.replace(/(\[)(.+?)(\])/g,'<b>$&</b>')
		);
	});

	// アンカー文字取得
	target.find(".img img").mouseup(function(){
		var name = "？";
		var link = "";
		var text = "";
		message = $(this).parents(".say").find(".msg");
		message.find("a[name]").each(function(){
			link = this.name;
			name_ary = $(this).text().split(" ");
			name = name_ary[name_ary.length - 1];
		});
		message.find(".mes_date").each(function(){
			ank  = $(this).text().match(/\((.?\d+)\)/)[1];
			turn = $(this).attr("turn");
			text = "\n(>>" + turn + ":" + ank + " " + name + ")";
		});
		$("#clipboard").val( $("#clipboard").val() + text );
	});

	// ドラッグ機能付与
	var drag_switch = $('<span> o </span>').addClass("drag_switch");
	target.filter(function(){
		var base = $(this);
		return( ! base.hasClass("drag"));
	}).find(".mes_date").append(drag_switch);

	target.find(".drag_switch").toggle(function(){
		var drag_switch = $(this);
		var base = drag_switch.parents(".message_filter");

		base.css({ zIndex:pumpNumber() });

		$(base).clone(true).css('display', 'none').addClass("origin").insertAfter(base);
		$(base).addClass("drag");

		var handlerId = "handler" + pumpNumber();
		var handler = $('<h3 id="'+handlerId+'">.</h3>').addClass("handler");
		$(base).prepend(handler);
		$(base).draggable();
		return false;
	},function(){
		var name  = $(this);
		var base = name.parents(".message_filter");

		base.nextAll(".origin").fadeIn();
		base.fadeOut("nomal", function(){
			base.remove();
		});
		return false;
	});


	// アンカーポップアップ機能付与
	target.find(".res_anchor").toggle(
	function(mouse){
		var ank  = $(this);
		var base = ank.parents(".message_filter");//.parents(".message_filter").children();
		var text = ank.text();
		var title = ank.attr("title");
		if( 0 == text.indexOf(">>") ){
			if(undefined == title || "" == title){
				var href = this.href.replace("#","&logid=").replace("&move=page","");
				$.get(href,{},function(data){
					var mes = $(data).find(".message_filter");//.parents(".message_filter").children();
					var date = $(mes).find(".mes_date");
					base.after(mes);

					// これキャッシュしたら、パフォーマンス上がらないかなあ。
					ajaxitems.push(mes);

					var topm    = mouse.pageY +  16;
                    var leftm = $('#contentframe').offset().left;
					var leftend = $("body").width() - mes.width() - 8;
					if( leftend < leftm ){
						leftm   = leftend;
					}
					mes.css({ top:topm, left:leftm, zIndex: pumpNumber() });
					mes.addClass("drag").css("display","none");
					$(mes).fadeIn();

					var handlerId = "handler" + pumpNumber();
					var handler = $('<div id="'+handlerId+'">.</div>').addClass("handler");
					$(mes).prepend(handler);
					$(mes).draggable();

					var close = $('<span> x </span>').addClass("close");
					date.append(close);
					closeWindow();

					setAjaxEvent(mes);

				});
			}else{
				window.open(this.href, '_blank');
				return false;
			}
		}else{
			window.open(this.href, '_blank');
			return false;
		}
		return false;
	},function(mouse){
		var ank  = $(this);
		var base = ank.parents(".message_filter");//.parents(".message_filter").children();
		base.nextAll(".drag").fadeOut("nomal", function(){
			base.nextAll(".drag").remove();
		});
		return false;
	});

}

temp_toggle = []

function deployToolTip(){
	deployToolTip = (function(){});

	stylesheet = $('head link[rel="stylesheet"]');
	headbanner = $('h1 img');
	viewport   = $('head meta[name="viewport"]');
	navimode   = $('.outframe_navimode');
	sayfilter  = $('#sayfilter');
	pagenavi_fullwidth = navimode.find('.pagenavi');
	navimode_fullwidth = navimode.find('h2,.turnnavi,.row_all,.mes_admin,.mes_maker,.info,.infosp,.infowolf,.caution,.action_bm');

	objSayFilter = getDocumentObject('sayfilter');
	ajaxitems  = [];

	setAjaxEvent($(".message_filter"));
	(new SowFeed).check();

	initFilter();

	headerbind_click('.header' , temp_toggle, "sayfilter_heading","sayfilter_heading" );

	headerbind_click('#filter_header' , toggle, "sayfilter_heading","sayfilter_heading" );
	headerbind_click('#notepad_header', toggle, "sayfilter_heading","sayfilter_heading" );

	while_bind_click('livetypecaption_', toggle, "sayfilter_caption_enable","sayfilter_caption_disenable",tribind_click );
	while_bind_click('pnofilter_'      , filter, "sayfilter_content_enable","sayfilter_content_disenable",filterbind_click );
	filterbind_click('#pnofilter_-1'    , filter, "sayfilter_content_enable","sayfilter_content_disenable" );

	tribind_click('#mestypefiltercaption', toggle, "sayfilter_caption_enable","sayfilter_caption_disenable" );
	headerbind_click('#lumpfiltercaption'   , toggle, "sayfilter_caption_enable","sayfilter_caption_disenable" );
	$('.sayfilter_button_lump').click( change_pnofilter_all );

	headerbind_click('#textnotepadcaption', toggle ,"sayfilter_caption_enable","sayfilter_caption_disenable" );
	headerbind_click('#itempickercaption' , toggle ,"sayfilter_caption_enable","sayfilter_caption_disenable" );
	headerbind_click('#adcaption'         , toggle ,"sayfilter_caption_enable","sayfilter_caption_disenable" );

	while_bind_click('typefilter_', filter, "sayfilter_content_enable","sayfilter_content_disenable", filterbind_click );

	summarybind_click('#clipbm'     , toggle,"sayfilter_content_enable","sayfilter_content_disenable" );
	summarybind_click('#clipanchor' , toggle,"sayfilter_content_enable","sayfilter_content_disenable" );
	summarybind_click('#clipseer'   , toggle,"sayfilter_content_enable","sayfilter_content_disenable" );
	summarybind_click('#clipexecute', toggle,"sayfilter_content_enable","sayfilter_content_disenable" );
	summarybind_click('#clipagenda' , toggle,"sayfilter_content_enable","sayfilter_content_disenable" );
	summarybind_click('#cliptopix'  , toggle,"sayfilter_content_enable","sayfilter_content_disenable" );

	$('#cliptext').change(summary);
	$('#cliptext').keyup(function(code){
		if( code == 13 )
			summary();
	});
	$('#cliptext').show();

	$('#button_mvfilterleft').click(moveFilterLeft);
	$('#button_mvfilterleft').click(fixFilter);
	$('#button_mvfilterleft').keypress(moveFilterLeft);
	$('#button_mvfilterleft').keypress(fixFilter);
	$('#button_mvfilterbottom').click(moveFilterBottom);
	$('#button_mvfilterbottom').keypress(moveFilterBottom);

	$('#button_fixfilter').click(fixFilter);
	$('#button_fixfilter').keypress(fixFilter);
	$('#button_unfixfilter').click(unfixFilter);
	$('#button_unfixfilter').keypress(unfixFilter);

	$('#notepad').after('<div id="notepad_after" style="height:55px"></div>');
	changeSayDisplays();
	summary();

	if( cookie.layoutfilter ){
		cookie.layoutfilter = 0;
		moveFilterLeft();
	} else {
		cookie.layoutfilter = 1;
		moveFilterBottom();
	}
	fixFilter();

	if( isMSIE ){
		$("i").parent("div").hover(
			function () {
				$(this).addClass("ie_hover");
			},
			function () {
				$(this).removeClass("ie_hover");
			}
		);
		$(".i_hover,.i_active").hover(
			function () {
				$(this).addClass("ie_hover");
			},
			function () {
				$(this).removeClass("ie_hover");
			}
		);
	}
}

$(window).resize(eventResize);
$(window).scroll(eventFixFilter);
$(window).unload(writeCookieFilter);
$(document).ready(deployToolTip);
window.onorientationchange = fixWidth;

