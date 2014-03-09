

//"日本語";
this.JST || (this.JST = {});


this.JST["form/action"] = "<div class=\"{{f.mestype}}\" ng-show=\"form_show.action\"><form name=\"action_form\"><div class=\"action\"><p class=\"text\" ng-bind-html=\"f.preview\"></p><h6>{{f.count}} {{f.title}}</h6><div class=\"mark\" ng-bind-html=\"error(f)\"></div><div class=\"controls controls-row formpl_content\"><div class=\"form-inline\"><select class=\"form-control input-medium\" name=\"target\" ng-change=\"text_valid(f)\" ng-model=\"f.target\" ng-options=\"o.val as o.longname for o in f.targets\"></select><select class=\"form-control input-medium\" name=\"actionno\" ng-change=\"text_valid(f)\" ng-model=\"f.action\" ng-options=\"o.val as o.name for o in f.actions\"></select></div><input class=\"form-control input-block-level\" name=\"actiontext\" ng-change=\"text_valid(f)\" ng-init=\"text_valid(f)\" ng-model=\"f.text\" type=\"text\" /></div><p><a class=\"btn btn-default\" ng-click=\"action(f)\">アクション</a></p><p><span class=\"{{f.error}}\" ng-bind-html=\"f.valid_text\"></span></p></div></form></div>";


this.JST["form/entry"] = "<table class=\"say {{f.mestype}}\" ng-show=\"form_show.entry\"><tr><td class=\"img\"><img ng-src=\"{{img_csid_cid(f.csid_cid)}}\" /></td><td class=\"field\"><form name=\"write_form\"><div class=\"msg\"><div class=\"form-horizontal\"><div class=\"form-group\" ng-show=\"story.entry.limit == &#39;password&#39;\"><label class=\"control-label col-sm-6\" for=\"entrypwd\">参加パスワード</label><div class=\"col-sm-6\"><input class=\"form-control\" id=\"entrypwd\" maxlength=\"8\" ng-model=\"f.password\" size=\"8\" type=\"password\" /></div></div><div class=\"form-group\"><label class=\"control-label col-sm-6\" for=\"selectid\">希望する配役</label><div class=\"col-sm-6\"><select class=\"form-control\" id=\"selectid\" ng-model=\"f.csid_cid\" ng-options=\"o.val as o.name for o in f.csid_cids\"></select></div></div><div class=\"form-group\"><label class=\"control-label col-sm-6\" for=\"selectrole\">希望する役職</label><div class=\"col-sm-6\"><select class=\"form-control\" id=\"selectrole\" ng-model=\"f.role\" ng-options=\"o.val as o.name for o in f.roles\"></select></div></div></div><div class=\"form-inline\"><div class=\"formpl_content\"><div ng-show=\"f.is_preview\"><h3 class=\"mesname\"><a>{{option(f.csid_cids, f.csid_cid).name}}</a></h3><p class=\"{{f.style}} text\" ng-bind-html=\"f.preview\"></p></div><div ng-hide=\"f.is_preview\"><p> 参加する時のセリフ</p><textarea class=\"form-control\" cols=\"30\" ng-change=\"text_valid(f)\" ng-init=\"text_valid(f)\" ng-model=\"f.text\" ng-trim=\"false\" rows=\"{{f.lines}}\"></textarea><div class=\"mark\" ng-bind-html=\"error(f)\"></div></div><p><a class=\"btn btn-default\" ng-click=\"f.is_preview = false\" ng-show=\"f.is_preview\">戻る</a><a class=\"btn btn-default\" ng-click=\"entry(f)\">{{f.title}}</a>{{f.count}}<select class=\"form-control input-small\" ng-model=\"f.style\" ng-options=\"o.val as o.name for o in form.styles\"></select></p><p>{{f.caption}}<span class=\"{{f.error}}\" ng-bind-html=\"f.valid_text\"></span><span diary=\"f\" ng-hide=\"f.is_preview\"></span></p></div></div></div></form></td></tr></table>";


this.JST["form/memo"] = "<table class=\"say {{f.mestype}}\" ng-show=\"form_show.memo\"><tr><td class=\"img\"><img ng-src=\"{{img_csid_cid(f.csid_cid)}}\" /></td><td class=\"field\"><form name=\"write_form\"><div class=\"msg\"><div class=\"form-horizontal\"><h3 class=\"mesname\"><a>{{f.longname}}</a></h3><div class=\"vote\" form=\"ff.jst\" ng-repeat=\"ff in f.votes\"></div><div class=\"mark\" ng-bind-html=\"error(ff)\" ng-repeat=\"ff in f.votes\"></div></div><div class=\"form-inline\"><div class=\"formpl_content\"><p class=\"{{f.style}} text\" ng-bind-html=\"f.preview\" ng-show=\"f.is_preview\"></p><textarea class=\"form-control\" cols=\"30\" ng-change=\"text_valid(f)\" ng-hide=\"f.is_preview\" ng-init=\"text_valid(f)\" ng-model=\"f.text\" ng-trim=\"false\" rows=\"{{f.lines}}\"></textarea><h6>{{f.count}} {{f.caption || f.longname}}</h6><div class=\"mark\" ng-bind-html=\"error(f)\"></div><p><a class=\"btn btn-default\" ng-click=\"f.is_preview = false\" ng-show=\"f.is_preview\">戻る</a><a class=\"btn btn-default\" ng-click=\"write(f)\">{{f.title}}</a><select class=\"form-control input-mini\" ng-model=\"f.style\" ng-options=\"o.val as o.name for o in form.styles\"></select></p><p><span class=\"{{f.error}}\" ng-bind-html=\"f.valid_text\"></span><span diary=\"f\" ng-hide=\"f.is_preview\"></span></p></div></div></div></form></td></tr></table>";


this.JST["form/open"] = "<table class=\"say {{option(f.targets, f.target).mestype}}\" ng-show=\"form_show.open\"><tr><td class=\"img\"><img ng-src=\"{{img_csid_cid(f.csid_cid)}}\" /></td><td class=\"field\"><form name=\"write_form\"><div class=\"msg\"><div class=\"form-horizontal\"><h3 class=\"mesname\"><a>{{f.longname}}</a>&nbsp;({{potof.sow_auth_id}})&nbsp; {{potof.role_names.join(\"、\")}}<span ng-show=\"0 &lt; potof.bonds.length\">&nbsp;★絆</span></h3><div class=\"vote\" form=\"ff.jst\" ng-repeat=\"ff in f.votes\"></div><div class=\"mark\" ng-bind-html=\"error(ff)\" ng-repeat=\"ff in f.votes\"></div></div><div class=\"form-inline\"><div class=\"formpl_content\"><p class=\"{{f.style}} text\" ng-bind-html=\"f.preview\" ng-show=\"f.is_preview\"></p><textarea class=\"form-control\" cols=\"30\" ng-change=\"text_valid(f)\" ng-hide=\"f.is_preview\" ng-init=\"text_valid(f)\" ng-model=\"f.text\" ng-trim=\"false\" rows=\"{{f.lines}}\"></textarea><h6>{{option(f.targets, f.target).name}}</h6><div class=\"mark\" ng-bind-html=\"error(f)\"></div><p><a class=\"btn btn-default\" ng-click=\"f.is_preview = false\" ng-show=\"f.is_preview\">戻る</a><a class=\"btn btn-default\" ng-click=\"write(f)\">{{f.title}}</a><select class=\"form-control input-medium\" ng-model=\"f.target\" ng-options=\"o.val as o.name for o in f.targets\"></select><select class=\"form-control input-mini\" ng-model=\"f.style\" ng-options=\"o.val as o.name for o in form.styles\"></select></p><p><span class=\"{{f.error}}\" ng-bind-html=\"f.valid_text\"></span><span diary=\"f\" ng-hide=\"f.is_preview\"></span></p></div></div></div></form></td></tr></table>";


this.JST["form/secret"] = "<table class=\"say {{f.mestype}}\" ng-show=\"form_show.secret\"><tr><td class=\"img\"><img ng-src=\"{{img_csid_cid(f.csid_cid)}}\" /></td><td class=\"field\"><form name=\"write_form\"><div class=\"msg\"><div class=\"form-horizontal\"><h3 class=\"mesname\"><a>{{f.longname}}</a></h3><div class=\"vote\" form=\"ff.jst\" ng-repeat=\"ff in f.votes\"></div><div class=\"mark\" ng-bind-html=\"error(ff)\" ng-repeat=\"ff in f.votes\"></div></div><div class=\"form-inline\"><div class=\"formpl_content\"><p class=\"{{f.style}} text\" ng-bind-html=\"f.preview\" ng-show=\"f.is_preview\"></p><textarea class=\"form-control\" cols=\"30\" ng-change=\"text_valid(f)\" ng-hide=\"f.is_preview\" ng-init=\"text_valid(f)\" ng-model=\"f.text\" ng-trim=\"false\" rows=\"{{f.lines}}\"></textarea><h6>{{f.count}} {{f.caption || f.longname}}</h6><div class=\"mark\" ng-bind-html=\"error(f)\"></div><p><a class=\"btn btn-default\" ng-click=\"f.is_preview = false\" ng-show=\"f.is_preview\">戻る</a><a class=\"btn btn-default\" ng-click=\"write(f)\">{{f.title}}</a><select class=\"form-control input-mini\" ng-model=\"f.style\" ng-options=\"o.val as o.name for o in form.styles\"></select></p><p><span class=\"{{f.error}}\" ng-bind-html=\"f.valid_text\"></span><span diary=\"f\" ng-hide=\"f.is_preview\"></span></p></div></div></div></form></td></tr></table>";


this.JST["form/silent"] = "<table class=\"say {{f.mestype}}\" ng-show=\"form_show.secret\"><tr><td class=\"img\"><img ng-src=\"{{img_csid_cid(f.csid_cid)}}\" /></td><td class=\"field\"><form name=\"write_form\"><div class=\"msg\"><div class=\"form-horizontal\"><h3 class=\"mesname\"><a>{{f.longname}}</a></h3><div class=\"vote\" form=\"ff.jst\" ng-repeat=\"ff in f.votes\"></div><div class=\"mark\" ng-bind-html=\"error(ff)\" ng-repeat=\"ff in f.votes\"></div></div><div class=\"form-inline\"><div class=\"formpl_content\"><p>{{f.caption}}</p></div></div></div></form></td></tr></table>";


this.JST["form/version"] = "<code ng-click=\"diary.copy(f)\">手帳</code><span>&nbsp;履歴:</span><code ng-click=\"f.ver.back(version)\" ng-repeat=\"version in f.ver.versions()\">{{version}}</code>";


this.JST["form/vote1"] = "<div class=\"form-inline radio\"><a class=\"btn btn-default\" ng-click=\"vote(ff, f)\">{{ff.title}}</a><select class=\"form-control input-medium\" name=\"target\" ng-change=\"vote_change(ff)\" ng-model=\"ff.target1\" ng-options=\"o.val as o.name for o in ff.targets\"></select></div>";


this.JST["form/vote2"] = "<div class=\"form-inline radio\"><a class=\"btn btn-default\" ng-click=\"vote(ff, f)\">{{ff.title}}</a><select class=\"form-control input-medium\" name=\"target1\" ng-change=\"vote_change(ff)\" ng-model=\"ff.target1\" ng-options=\"o.val as o.name for o in ff.targets\"></select>と<select class=\"form-control input-medium\" name=\"target2\" ng-change=\"vote_change(ff)\" ng-model=\"ff.target2\" ng-options=\"o.val as o.name for o in ff.targets\"></select></div>";


this.JST["message/action"] = "<div ng-class=\"message.mestype\"><div class=\"action\"><p class=\"text\" ng-class=\"message.style\"><b ng-bind-html=\"message.name\"></b><span>は、</span><span ng-bind-html=\"message.text\"></span></p><p class=\"mes_date\"><span>&nbsp;</span><span>{{message.time()}}</span></p><hr class=\"invisible_hr\" /></div></div>";


this.JST["message/admin"] = "<div class=\"guide\" ng-class=\"message.mestype\"><h3 class=\"mesname\"><b ng-bind-html=\"message.name\"></b></h3><p class=\"text\" ng-bind-html=\"message.text\" ng-class=\"message.style\"></p><p class=\"mes_date\"><a class=\"mark\" ng-click=\"diary.add.anchor(message)\">{{message.anchor}}</a><span>&nbsp;</span><span>{{message.time()}}</span><span ng-bind-html=\"message.cancel_btn()\"></span></p><hr class=\"invisible_hr\" /></div>";


this.JST["message/aim"] = "<table class=\"say\" ng-class=\"message.mestype\"><tbody><tr><td class=\"img\"><img ng-src=\"{{message.img}}\" /></td><td class=\"field\"><div class=\"msg\"><h3 class=\"mesname\"><b ng-bind-html=\"message.name\"></b>&nbsp;→&nbsp;<b ng-bind-html=\"message.to\"></b></h3><p class=\"text\" ng-bind-html=\"message.text\" ng-class=\"message.style\"></p><p class=\"mes_date\"><a class=\"mark\" ng-click=\"diary.add.anchor(message)\">{{message.anchor}}</a><span>&nbsp;</span><span>{{message.time()}}</span><span ng-bind-html=\"message.cancel_btn()\"></span></p></div></td></tr></tbody></table>";


this.JST["message/cast"] = "<div class=\"formpl_gm\" template=\"navi/potofs\"></div>";


this.JST["message/caution"] = "<p class=\"text caution\" ng-bind-html=\"message.text\"></p><hr class=\"invisible_hr\" />";


this.JST["message/external"] = "<div ng-class=\"message.mestype\"><div class=\"action\"><p class=\"text\" ng-class=\"message.style\"><a href=\"{{message.uri}}\" target=\"_blank\"><span class=\"mark\">{{message.protocol}}</span>://<span class=\"mark\">{{message.host}}</span><span class=\"note\">{{message.path}}</span></a></p><hr class=\"invisible_hr\" /></div></div>";


this.JST["message/info"] = "<p class=\"text\" ng-bind-html=\"message.text\" ng-class=\"message.mestype\"></p><hr class=\"invisible_hr\" />";


this.JST["message/memo"] = "<table class=\"memo\" ng-class=\"message.mestype\"><tbody><tr><td class=\"memoleft\"><h5 ng-bind-html=\"message.name\"></h5></td><td class=\"memoright\"><p class=\"text\" ng-bind-html=\"message.text\" ng-class=\"message.style\" ng-if=\"message.text\"></p><p class=\"text\" ng-class=\"message.style\" ng-if=\"! message.text\">メモをはがした</p><p class=\"mes_date\">{{message.time()}}</p></td></tr></tbody></table>";


this.JST["message/say"] = "<table class=\"say\" ng-class=\"message.mestype\"><tbody><tr><td class=\"img\"><img ng-src=\"{{message.img}}\" /></td><td class=\"field\"><div class=\"msg\"><h3 class=\"mesname\">{{message.mesicon}}&nbsp;<b ng-bind-html=\"message.name\"></b></h3><p class=\"text\" ng-bind-html=\"message.text\" ng-class=\"message.style\"></p><p class=\"mes_date\"><a class=\"mark\" ng-click=\"diary.add.anchor(message)\">{{message.anchor}}</a><span>&nbsp;</span><span>{{message.time()}}</span><span ng-bind-html=\"message.cancel_btn()\"></span></p></div></td></tr></tbody></table>";


this.JST["navi/chr_list"] = "<hr style=\"border-color:black;\" /><div class=\"chrbox\" ng-repeat=\"chr in chrs\"><img ng-src=\"{{chr.img}}\" /><div class=\"chrblank\" ng-bind-html=\"chr.text\"></div></div><hr style=\"border-color:black;\" />";


this.JST["navi/diary"] = "<table class=\"say SAY\"><tbody><tr><td class=\"img\"><img ng-src=\"{{img_cid(null, &#39;blank&#39;)}}\" /></td><td class=\"field\"><div class=\"msg\"><div class=\"form-inline\"><div class=\"formpl_content\"><textarea class=\"form-control input-block-level\" cols=\"30\" ng-model=\"diary.form.text\" rows=\"5\"></textarea><h6>{{diary.head()}}</h6><p><span>&nbsp;履歴:<code ng-click=\"diary.back(version)\" ng-repeat=\"version in diary.versions()\">{{version}}</code></span></p></div></div></div></td></tr></tbody></table>";


this.JST["navi/events"] = "<ul class=\"nav nav-list unstyled\"><li ng-click=\"set_turn(e.turn)\" ng-repeat=\"e in events\"><a><i class=\"glyphicon glyphicon-film\" ng-if=\"e.turn == event.turn\"></i><i class=\"glyphicon glyphicon-minus\" ng-if=\"e.turn != event.turn\"></i>{{e.name}}</a></li></ul><br />";


this.JST["navi/forms"] = "<div class=\"caution\"><div class=\"text\" listup=\"cautions\"></div><div class=\"text\"><ul><li ng-if=\"story.announce.totalcommit\">{{story.announce.totalcommit}}</li><li ng-if=\"story.is_totalcommit\">{{story.timer.nextcommitdt.relative('ja')}}にcommit</li><li>{{story.timer.nextupdatedt.relative('ja')}}に更新</li><li>{{story.timer.nextchargedt.relative('ja')}}に補充</li><li ng-if=\"story.is_prologue\">{{story.timer.scraplimitdt.relative('ja')}}に廃村</li><li>あと {{story.timer.extend}}回、更新を延長できる。</li></ul></div></div><div form=\"f.jst\" ng-repeat=\"f in form.texts\" ng-show=\"logined()\"></div><div class=\"{{form.win}}\" ng-if=\"logined()\"><div class=\"secret\"><p class=\"text\" listup=\"form.secrets\"></p></div></div><div ng-hide=\"form.confirm\" ng-show=\"logined()\"><div class=\"formpl_gm form-inline\" ng-repeat=\"f in form.command_group.commit\"><div class=\"commitbutton\"><select class=\"form-control\" name=\"commit\" ng-change=\"vote_change(f)\" ng-disabled=\"f.disabled\" ng-model=\"f.commit\" ng-options=\"o.val as o.name for o in f.commits\"></select><a class=\"btn btn-default\" ng-click=\"commit(f)\" ng-disabled=\"f.disabled\">{{f.title}}</a></div><div class=\"mark\" ng-bind-html=\"error(f)\"></div><div ng-bind-html=\"f.caption\"></div></div><div class=\"formpl_gm\" ng-if=\"form.command_group.target &amp;&amp; form.command_targets\"><p class=\"commitbutton\"><select class=\"form-control\" name=\"target\" ng-model=\"form.command_target\" ng-options=\"o.val as o.name for o in form.command_targets\"></select></p><p class=\"commitbutton\"><a class=\"btn btn-default\" ng-click=\"confirm(f)\" ng-disabled=\"f.disabled\" ng-repeat=\"f in form.command_group.target\">{{f.title}}</a></p></div><div class=\"formpl_gm\"><p class=\"commitbutton\"><a class=\"btn btn-default\" ng-click=\"confirm(f)\" ng-disabled=\"f.disabled\" ng-repeat=\"f in form.command_group.button\">{{f.title}}</a></p></div></div><div class=\"formpl_gm\" ng-if=\"form.confirm\"><h3>{{form.confirm}}</h3><a class=\"btn btn-default\" ng-click=\"confirm_cancel()\">×</a><a class=\"btn btn-default\" ng-click=\"confirm_complete()\">◯</a></div>";


this.JST["navi/headline"] = "<div class=\"choice\"><table class=\"board\"><tr><th class=\"no_choice\" colspan=\"4\" style=\"text-align:center;\"><div class=\"progress_log\"><strong>進行中の村　←　</strong><a onclick=\"$(&#39;.progress_log&#39;).hide();$(&#39;.finished_log&#39;).show();\">終了した村を見る</a></div><div class=\"finished_log\"><a onclick=\"$(&#39;.progress_log&#39;).show();$(&#39;.finished_log&#39;).hide();\">進行中の村を見る</a><strong>　→　終了した村</strong></div></th><td class=\"no_choice link\" rowspan=\"2\"><a href=\"http://soy-bean.sakura.ne.jp/pan/sow.cgi\">似顔絵<br />人狼</a></td></tr><tr class=\"link\"><td class=\"no_choice\">ロビー</td><td class=\"no_choice\">夢の形</td><td class=\"no_choice\">陰謀</td><td class=\"no_choice\">ＲＰ　</td></tr><tr class=\"progress_log\"><td class=\"no_choice\" style=\"text-align:left;\"><a href=\"http://crazy-crazy.sakura.ne.jp/giji_lobby/lobby/sow.cgi\">lobby</a><br />offparty<br />　<br />　<br />　</td><td class=\"no_choice\" style=\"text-align:left;\">4村:<a href=\"http://morphe.sakura.ne.jp/morphe/sow.cgi\">morphe</a><br />　<br />　<br />　<br />　</td><td class=\"no_choice\" style=\"text-align:left;\">wolf<br />ultimate<br />allstar<br />4村:<a href=\"http://cabala.halfmoon.jp/cafe/sow.cgi\">cafe</a><br />　</td><td class=\"no_choice\" style=\"text-align:left;\">role-play<br />RP-advance<br />3村:<a href=\"http://perjury.rulez.jp/sow.cgi\">perjury</a><br />3村:<a href=\"http://xebec.x0.to/xebec/sow.cgi\">xebec</a><br />2村:<a href=\"http://crazy-crazy.sakura.ne.jp/crazy/sow.cgi\">crazy</a><br />2村:<a href=\"http://ciel.moo.jp/cheat/sow.cgi\">ciel</a></td><td class=\"no_choice\" style=\"text-align:left;\">1村:pan<br />　<br />　<br />　<br />　</td></tr><tr class=\"finished_log\"><td class=\"no_choice\" style=\"text-align:left;\"><a href=\"http://giji.check.jp/stories?folder=LOBBY\">lobby</a><br /><a href=\"http://giji.check.jp/stories?folder=OFFPARTY\">offparty</a><br />　<br />　<br />　</td><td class=\"no_choice\" style=\"text-align:left;\"><a href=\"http://giji.check.jp/stories?folder=MORPHE\">morphe</a><br />　<br />　<br />　<br />　</td><td class=\"no_choice\" style=\"text-align:left;\"><a href=\"http://giji.check.jp/stories?folder=WOLF\">wolf</a><br /><a href=\"http://giji.check.jp/stories?folder=ULTIMATE\">ultimate</a><br /><a href=\"http://giji.check.jp/stories?folder=ALLSTAR\">allstar</a><br /><a href=\"http://giji.check.jp/stories?folder=CABALA\">cafe</a><br />　</td><td class=\"no_choice\" style=\"text-align:left;\"><a href=\"http://giji.check.jp/stories?folder=RP\">role-play</a><br /><a href=\"http://giji.check.jp/stories?folder=PRETENSE\">advance</a><br /><a href=\"http://giji.check.jp/stories?folder=PERJURY\">perjury</a><br /><a href=\"http://giji.check.jp/stories?folder=XEBEC\">xebec</a><br /><a href=\"http://giji.check.jp/stories?folder=CRAZY\">crazy</a><br /><a href=\"http://giji.check.jp/stories?folder=CIEL\">ciel</a></td><td class=\"no_choice\" style=\"text-align:left;\"><a href=\"http://giji.check.jp/stories?folder=PAN\">pan</a><br />　<br />　<br />　<br />　</td></tr></table></div>";


this.JST["navi/messages"] = "<div class=\"message_filter\"><div class=\"log\"><div class=\"badge\" ng-class=\"page.of.prev.class\" ng-click=\"page.move(page.of.prev.val)\" ng-if=\"page\"> 前のページ</div><hr class=\"invisible_hr\" /></div></div><div class=\"message_filter\" log=\"message\" ng-repeat=\"message in messages\"></div><div class=\"message_filter\"><div class=\"log\"><div class=\"badge\" ng-class=\"page.of.next.class\" ng-click=\"page.move(page.of.next.val)\" ng-if=\"page\"> 次のページ</div><hr class=\"invisible_hr\" /></div></div><div class=\"message_filter drag\" drag=\"message\" ng-repeat=\"message in anchors\"><div class=\"contentframe\" log=\"message\"><div class=\"drag_head\"><span class=\"badge\" href_eval=\"popup({{message.turn}}, &#39;{{message.logid}}&#39;)\">✘</span></div></div></div>";


this.JST["navi/paginate"] = "<a class=\"btn btn-default\" ng-class=\"page.of.first.class\" ng-click=\"page.move(page.of.first.val)\">{{page.of.first.name}}</a><a class=\"btn btn-default\" ng-class=\"page.of.second.class\" ng-click=\"page.move(page.of.second.val)\">{{page.of.second.name}}</a><span ng-class=\"page.of.prev_gap.class\">…</span><a class=\"btn btn-default\" ng-class=\"page.of.prev.class\" ng-click=\"page.move(page.of.prev.val)\">{{page.of.prev.name}}</a><select class=\"form-control input-mini\" ng-model=\"page.value\" ng-options=\"pno.val as pno.name for pno in page.select\"></select><a class=\"btn btn-default\" ng-class=\"page.of.next.class\" ng-click=\"page.move(page.of.next.val)\">{{page.of.next.name}}</a><span ng-class=\"page.of.next_gap.class\">…</span><a class=\"btn btn-default\" ng-class=\"page.of.penu.class\" ng-click=\"page.move(page.of.penu.val)\">{{page.of.penu.name}}</a><a class=\"btn btn-default\" ng-class=\"page.of.last.class\" ng-click=\"page.move(page.of.last.val)\">{{page.of.last.name}}</a>";


this.JST["navi/potofs"] = "<table class=\"potofs\"><thead class=\"head\"><tr><th><span class=\"name\" ng-if=\"sum.actaddpt\">&nbsp;あと{{sum.actaddpt}}促</span><span class=\"name\" ng-if=\"potofs.length\">&nbsp;({{potofs.length}}人)</span></th><th colspan=\"4\" style=\"text-align: right;\"><span><br /><code ng-click=\"secret_toggle()\">ネタバレ</code>&nbsp;</span><span ng-if=\"! secret_is_open\"><code ng-click=\"sort_potofs(&#39;stat_at&#39;,0)\">日程</code><code ng-click=\"sort_potofs(&#39;stat_type&#39;,&#39;&#39;)\">状態</code>&nbsp;<code ng-click=\"sort_potofs(&#39;said_num&#39;,0)\">発言</code></span><span ng-if=\"secret_is_open\"><code ng-click=\"sort_potofs(&#39;stat_at&#39;,0)\">日程</code><code ng-click=\"sort_potofs(&#39;stat_type&#39;,&#39;&#39;)\">状態</code>&nbsp;<code ng-click=\"sort_potofs(&#39;said_num&#39;,0)\">発言</code>&nbsp;<code ng-click=\"sort_potofs(&#39;text&#39;,&#39;&#39;)\">補足</code><br /><code ng-click=\"sort_potofs(&#39;win_name&#39;,&#39;&#39;)\">陣営</code><code ng-click=\"sort_potofs(&#39;role_names&#39;,&#39;&#39;)\">役割</code>&nbsp;<code ng-click=\"sort_potofs(&#39;win_result&#39;,&#39;&#39;)\">勝敗</code>&nbsp;<code ng-click=\"sort_potofs(&#39;select_name&#39;,&#39;&#39;)\">希望</code></span></th><th style=\"width: 1ex\"><a class=\"glyphicon glyphicon-pushpin\" ng-click=\"potof_only(potofs)\"></a></th></tr></thead></table><table class=\"potofs\"><tbody ng-repeat=\"key in potofs_keys\"><tr class=\"head\" ng-if=\"potofs_groups[key].has_head\"><th class=\"mark\" colspan=\"5\"><span ng-bind-html=\"potofs_groups[key].head\"></span><span>({{potofs_groups[key].length}}人)</span></th><th style=\"width: 1ex\"><a class=\"glyphicon glyphicon-pushpin\" ng-click=\"potof_only(potofs_groups[key])\"></a></th></tr><tr ng-class=\"hide_potofs.of[potof_key(potof)].class\" ng-repeat=\"potof in potofs_groups[key]\"><td colspan=\"2\" ng-click=\"potof_toggle(potof)\"><div class=\"name\">{{potof.longname || potof.name}}</div><div class=\"note name\" ng-if=\"potof.auth\"><span class=\"glyphicon glyphicon-user\"></span>{{potof.auth}}</div></td><td ng-click=\"potof_toggle(potof)\" style=\"text-align: right;\"><span class=\"nowrap\">{{potof.stat}}</span><div class=\"note nowrap\" ng-if=\"potof.said\"><span class=\"glyphicon glyphicon-pencil\"></span>{{potof.said}}</div></td><td ng-click=\"potof_toggle(potof)\"><div class=\"nowrap\" ng-if=\"secret_is_open\"><span class=\"note\">{{potof.win_name}}::</span><span>{{potof.role_names.join('、')}}</span><div class=\"note\"><span class=\"mark\">{{potof.win_result}}</span><span class=\"name\" ng-if=\"potof.select_name\">&nbsp; {{potof.select_name}} を希望</span></div></div></td><td ng-click=\"potof_toggle(potof)\"><div ng-if=\"secret_is_open\"><span ng-bind-html=\"potof.text.join(&#39;&#39;)\"></span><span class=\"note\" ng-if=\"potof.bond_names\">{{potof.bond_names.join('、')}}</span><span class=\"note\" ng-if=\"potof.bond_names.length &amp;&amp; potof.pseudobond_names.length\">、</span><s class=\"note\" ng-if=\"potof.pseudobond_names\">{{potof.pseudobond_names.join('、')}}</s></div></td><th style=\"width: 1ex\"><a class=\"glyphicon glyphicon-pushpin\" ng-click=\"potof_only([potof])\"></a></th></tr></tbody></table>";


this.JST["navi/potofs_small"] = "<table class=\"potofs\"><thead class=\"head\"><tr><th><span class=\"name\" ng-if=\"sum.actaddpt\">&nbsp;{{sum.actaddpt}}促</span></th><th colspan=\"2\" style=\"text-align: right;\"><span><code ng-click=\"secret_toggle()\">ネタバレ</code></span>&nbsp;</th><th style=\"width:1ex\"><a class=\"glyphicon glyphicon-pushpin note\" ng-click=\"potof_only(potofs)\"></a></th></tr></thead></table><table class=\"potofs\"><tbody ng-repeat=\"key in potofs_keys\"><tr class=\"head\" ng-if=\"potofs_groups[key].has_head\"><th colspan=\"3\"><span ng-bind-html=\"potofs_groups[key].head\"></span><span class=\"note\">({{potofs_groups[key].length}}人)</span></th><th style=\"width:1ex\"><a class=\"glyphicon glyphicon-pushpin note\" ng-click=\"potof_only(potofs_groups[key])\"></a></th></tr><tr ng-class=\"hide_potofs.of[potof_key(potof)].class\" ng-repeat=\"potof in potofs_groups[key]\"><td colspan=\"2\" ng-click=\"potof_toggle(potof)\"><span class=\"name\">{{potof.name}}</span></td><td ng-click=\"potof_toggle(potof)\" style=\"text-align: right;\"><span class=\"nowrap note\" ng-bind-html=\"potof.summary()\"></span></td><td style=\"width:1ex\"><a class=\"glyphicon glyphicon-pushpin note\" ng-click=\"potof_only([potof])\"></a></td></tr></tbody></table><table class=\"potofs\"><tbody><tr class=\"head\"><th colspan=\"4\"></th></tr><tr ng-class=\"hide_potofs.of.others.class\"><td colspan=\"4\" ng-click=\"other_toggle()\"><span class=\"name\">他の人々</span></td></tr><tr class=\"head\"><th colspan=\"4\"><div class=\"nowrap\" ng-if=\"! secret_is_open\"><code ng-click=\"sort_potofs(&#39;stat_at&#39;,0)\">日程</code><code ng-click=\"sort_potofs(&#39;stat_type&#39;,&#39;&#39;)\">状態</code>&nbsp;<code ng-click=\"sort_potofs(&#39;said_num&#39;,0)\">発言</code></div><div class=\"nowrap\" ng-if=\"secret_is_open\"><code ng-click=\"sort_potofs(&#39;stat_at&#39;,0)\">日程</code><code ng-click=\"sort_potofs(&#39;stat_type&#39;,&#39;&#39;)\">状態</code>&nbsp;<code ng-click=\"sort_potofs(&#39;said_num&#39;,0)\">発言</code>&nbsp;<code ng-click=\"sort_potofs(&#39;text&#39;,&#39;&#39;)\">補足</code><br /><code ng-click=\"sort_potofs(&#39;win_name&#39;,&#39;&#39;)\">陣営</code><code ng-click=\"sort_potofs(&#39;role_names&#39;,&#39;&#39;)\">役割</code>&nbsp;<code ng-click=\"sort_potofs(&#39;win_result&#39;,&#39;&#39;)\">勝敗</code>&nbsp;<code ng-click=\"sort_potofs(&#39;select_name&#39;,&#39;&#39;)\">希望</code></div></th></tr></tbody></table>";


this.JST["navi/story_navi"] = "<div class=\"form-inline radio\"><label><select class=\"form-control input-mini\" ng-model=\"page.value\" ng-options=\"o.val as o.name for o in page.select\"></select></label><label><select class=\"form-control input-small\" ng-model=\"folder.value\" ng-options=\"o.val as o.name for o in folder.select\"></select></label><label ng-if=\"game_rule\"><select class=\"form-control input-small\" ng-model=\"game_rule.value\" ng-options=\"o.val as o.name for o in game_rule.select\"></select></label><label ng-if=\"rating\"><select class=\"form-control input-small\" ng-model=\"rating.value\" ng-options=\"o.val as o.name for o in rating.select\"></select></label><label ng-if=\"potof_size\"><select class=\"form-control input-mini\" ng-model=\"potof_size.value\" ng-options=\"o.val as o.name for o in potof_size.select\"></select></label><label ng-if=\"upd_interval\"><select class=\"form-control input-mini\" ng-model=\"upd_interval.value\" ng-options=\"o.val as o.name for o in upd_interval.select\"></select></label><label ng-if=\"upd_time\"><select class=\"form-control input-small\" ng-model=\"upd_time.value\" ng-options=\"o.val as o.name for o in upd_time.select\"></select></label><label ng-if=\"roletable\"><select class=\"form-control input-small\" ng-model=\"roletable.value\" ng-options=\"o.val as o.name for o in roletable.select\"></select></label><label ng-if=\"card_win\"><select class=\"form-control input-mini\" ng-model=\"card_win.value\" ng-options=\"o.val as o.name for o in card_win.select\"></select></label><label ng-if=\"card_role\"><select class=\"form-control input-mini\" ng-model=\"card_role.value\" ng-options=\"o.val as o.name for o in card_role.select\"></select></label><label ng-if=\"card_event\"><select class=\"form-control input-mini\" ng-model=\"card_event.value\" ng-options=\"o.val as o.name for o in card_event.select\"></select></label></div>";


this.JST["navi/toolbox"] = "<div class=\"form-inline\"><div class=\"form-group\"><label><a class=\"mark click\" ng-click=\"mode.value = a.value\" ng-repeat=\"a in mode_common\">{{a.name}}</a></label></div>&thinsp;<div class=\"form-group\"><label ng-if=\"event.is_progress\"><a class=\"mark click glyphicon glyphicon-refresh\" ng-click=\"pool_hand()\"></a></label></div>&thinsp;<div class=\"form-group\"><label><a class=\"mark click glyphicon glyphicon-search\" ng-click=\"go.search()\"></a><a class=\"mark click glyphicon glyphicon-pencil\" ng-click=\"go.form()\"></a></label></div><div class=\"form-group\" ng-if=\"event.is_news\"><label ng-if=\"event.is_progress\"><a class=\"btn btn-default\" ng-click=\"ajax_event(event.turn, null, false)\">ページ表示</a></label></div><div class=\"form-group\" ng-if=\"! event.is_news\"><label ng-if=\"event.is_progress\"><a class=\"btn btn-default\" ng-click=\"ajax_event(event.turn, null, true)\">最新の発言</a></label><label template=\"navi/paginate\"></label></div></div>";


this.JST["sow/form/configs"] = "<fieldset><div style=\"display:none;\"><input name=\"trsid\" ng-model=\"config.trsid\" type=\"text\" /><input name=\"hour\" ng-model=\"story.upd.hour\" type=\"text\" /><input name=\"minite\" ng-model=\"story.upd.minute\" type=\"text\" /><input name=\"updinterval\" ng-model=\"story.upd.interval\" type=\"text\" /><input name=\"votetype\" ng-model=\"story.type.vote\" type=\"text\" /><input name=\"roletable\" ng-model=\"story.type.roletable\" type=\"text\" /></div><legend>基本設定</legend><dl><dt>{{config.trs.caption}}</dt><dd>{{config.trs.help}}</dd></dl><dl class=\"dl-horizontal\"><dt><label for=\"vplcnt\">定員</label></dt><dd><div class=\"input-group\"><input class=\"form-control\" id=\"vplcnt\" name=\"vplcnt\" ng-model=\"event.player.limit\" size=\"5\" type=\"number\" /><div class=\"input-group-addon\">人</div></div></dd><dt><label for=\"vplcntstart\">最低人数</label></dt><dd><div class=\"input-group\"><input class=\"form-control\" id=\"vplcntstart\" name=\"vplcntstart\" ng-model=\"event.player.start\" size=\"5\" type=\"number\" /><div class=\"input-group-addon\">人</div></div>※開始方法が人狼BBS型の時のみ</dd><dt><label for=\"updhour\">更新時間</label></dt><dd class=\"row\"><div class=\"form-inline\"><div class=\"form-group\"><select class=\"form-control\" id=\"updhour\" ng-model=\"story.upd.hour\" ng-options=\"o.val as o.name for o in config.hours\"></select></div><div class=\"form-group\"><select class=\"form-control\" id=\"updminite\" ng-model=\"story.upd.minute\" ng-options=\"o.val as o.name for o in config.minutes\"></select></div></div></dd><dt><label for=\"updinterval\">更新間隔</label></dt><dd><div class=\"input-group\"><select class=\"form-control\" id=\"updinterval\" ng-model=\"story.upd.interval\" ng-options=\"o.val as o.name for o in config.intervals\"></select><div class=\"input-group-addon\">ごとに更新</div></div></dd><dt><label for=\"votetype\">投票方法</label></dt><dd><select class=\"form-control\" id=\"votetype\" ng-model=\"story.type.vote\" ng-options=\"o.val as o.name for o in config.votetypes\"></select></dd><dt><label for=\"roletable\">役職配分</label></dt><dd><select class=\"form-control\" id=\"roletable\" ng-model=\"story.type.roletable\" ng-options=\"o.val as o.name for o in config.roletables\"></select></dd></dl></fieldset><fieldset ng-show=\"story.type.roletable == &#39;custom&#39;\"><legend>役職配分自由設定</legend><div ng-repeat=\"title in config.items_keys\"><h3>{{title}}</h3><div class=\"form-inline row\"><div class=\"form-group input-medium\" ng-repeat=\"item in config.items[title]\"><div class=\"input-group\"><div class=\"input-group-addon\" for=\"cnt{{item.key}}\">{{item.name}}</div><input class=\"form-control\" id=\"cnt{{item.key}}\" name=\"cnt{{item.key}}\" ng-model=\"item.count\" size=\"2\" type=\"number\" /></div></div></div></div></fieldset><h3>事件</h3><fieldset class=\"token-input\"><input id=\"eventcard\" name=\"eventcard\" type=\"text\" /><span class=\"btn btn-default\" ng-click=\"tokenInputAdd(&#39;#eventcard&#39;,item.key)\" ng-repeat=\"item in config.items.events\">{{item.name}}</span></fieldset>";


this.JST["sow/log_last"] = "<div class=\"caution text\" ng-if=\"event.is_progress\" style=\"padding-left: 0;\"><table><td style=\"height: 6ex;\"><a class=\"mark glyphicon glyphicon-refresh\" ng-click=\"pool_hand()\" style=\"font-size: 4ex;\"></a></td><td style=\"padding-left: 11px;\">⇚ {{ message.updated_at.format('({dow}) {TT}{hh}時{mm}分', 'ja') }} より先を見る。<br /></td></table></div><hr class=\"invisible_hr\" />";


this.JST["sow/login"] = "<form ng-if=\"! logined()\" ng-submit=\"login(form.login)\"><p class=\"form-inline\"><label><span class=\"mark\"> user id:</span><input class=\"form-control input-small\" name=\"uid\" ng-model=\"form.login.uid\" size=\"10\" type=\"text\" /></label><label><span class=\"mark\"> password:</span><input class=\"form-control input-small\" name=\"pwd\" ng-model=\"form.login.pwd\" size=\"10\" type=\"password\" /></label><input class=\"form-control\" type=\"submit\" value=\"ログイン\" /></p></form><form ng-if=\"logined()\" ng-submit=\"logout(form.login)\"><p class=\"form-inline\"><span class=\"mes_date\" ng-if=\"form.login.is_admin\">[<a ng-href=\"{{form.login.admin_uri}}\">管理画面</a>]</span><span class=\"mes_date\">ログイン情報は{{form.login.expired.relative('ja')}}まで有効です。</span><input type=\"submit\" value=\"{{form.login.uidtext}} がログアウト\" /></p></form>";


this.JST["sow/navi"] = "<div id=\"topviewer\" ng-cloak=\"\"><div class=\"drag\" id=\"topframe\"><div class=\"contentframe form-inline\" name=\"手帳\" navi=\"diary\" template=\"navi/diary\"></div></div></div><div adjust=\"left\" class=\"sayfilter\" id=\"sayfilter\"><div class=\"sayfilter_heading\">{{story.name}}</div><div class=\"insayfilter\" name=\"移動\" navi=\"link\"><div class=\"paragraph\"><div class=\"sayfilter_caption_enable\"> 他の章へ</div><div class=\"sayfilter_content\" template=\"navi/events\"></div></div></div><div class=\"insayfilter\" name=\"名簿\" navi=\"info\"><div class=\"paragraph\" ng-if=\"potofs\"><div class=\"sayfilter_content\" template=\"navi/potofs_small\"></div></div></div><div class=\"insayfilter\" navi=\"page_filter\" ng-if=\"page\"><div class=\"paragraph\"><table class=\"sayfilter_content\"><tr><td><select class=\"form-control input-block-level\" ng-model=\"mode.value\" ng-options=\"o.val as o.name group by o.group for o in mode_select\" style=\"margin-bottom: 0;\"></select></td></tr></table></div></div><div class=\"sayfilter_heading bottom\"></div><div adjust=\"full\" class=\"toolbox\" navi=\"page\" ng-if=\"page\" template=\"navi/toolbox\"></div></div><div id=\"buttons\"><nav><div ng-repeat=\"o in navi.select\"><a class=\"btn\" ng-class=\"o.class\" ng-click=\"navi.move(o.val)\">{{o.name}}</a></div><div><a class=\"btn btn-default\" ng-click=\"navi.blank()\">✗</a></div></nav></div>";


this.JST["sow/navi_edit"] = "<div id=\"topviewer\" ng-cloak=\"\"><div class=\"drag\" id=\"topframe\"><div class=\"contentframe form-inline\" name=\"手帳\" navi=\"diary\" template=\"navi/diary\"></div></div></div><div id=\"buttons\"><nav><div ng-repeat=\"o in navi.select\"><a class=\"btn\" ng-class=\"o.class\" ng-click=\"navi.move(o.val)\">{{o.name}}</a></div><div><a class=\"btn btn-default\" ng-click=\"navi.blank()\">✗</a></div></nav></div>";


this.JST["sow/status_info"] = "";


this.JST["sow/village_info"] = "<div class=\"mes_maker story\"><dl class=\"dl-horizontal\"><dt>村の名前</dt><dd>{{story.name}}</dd><dt>こだわり</dt><dd><img ng-src=\"{{story.rating_url}}\" />{{story.announce.rating}}</dd></dl><p class=\"text head\" ng-bind-html=\"story.comment\"></p><p class=\"text\">■<a href=\"sow.cgi?cmd=rule#rule\">国のルール</a></p><p class=\"text\" ng-repeat=\"nrule in story.announce.nrules\">{{nrule}}</p><p class=\"text\">■<a href=\"sow.cgi?cmd=rule#mind\">心構え</a></p></div><div class=\"mes_admin story\"><dl><dt class=\"text\" ng-bind-html=\"story.announce.trs_name\"></dt><dd><div class=\"text\" ng-bind-html=\"story.announce.trs_help\"></div></dd><dt class=\"text\" ng-bind-html=\"story.announce.game_name\"></dt><dd><ul class=\"text\" ng-bind-html=\"story.announce.game_help\"></ul></dd><dt class=\"text\">オプション設定</dt><dd><ul class=\"text\"><li>{{story.announce.starttype}}</li><li ng-repeat=\"option_help in story.option_helps\">{{option_help}}</li></ul></dd></dl></div><div class=\"mes_admin story\"><dl class=\"dl-horizontal\"><dt>登場人物</dt><dd>{{story.announce.csidcaptions}}</dd><dt>更新時間</dt><dd>{{story.upd.time_text}}</dd><dt>更新間隔</dt><dd>{{story.upd.interval_text}}{{story.type.recovery}}</dd><dt>発言制限</dt><dd>{{story.type.saycnt.CAPTION}}<br />{{story.type.saycnt.HELP}}</dd><dt>役職配分</dt><dd>{{story.type.roletable_text}}<br />{{story.card.config_names}}<br />{{story.card.event_names}}</dd><dt>定員</dt><dd>{{event.player.limit}}人 （ダミーキャラを含む）</dd><dt>人数</dt><dd>{{potofs.length - potofs.mob().length}}人 （ダミーキャラを含む）</dd><dt ng-if=\"story.is_wbbs\">最低人数</dt><dd ng-if=\"story.is_wbbs\">{{event.player.start}}人 （ダミーキャラを含む）</dd><dt>投票方法</dt><dd>{{story.type.vote_text.CAPTION}}</dd><dt>見物人</dt><dd>{{story.type.mob_text.CAPTION}}に {{event.player.mob}}人まで （{{story.type.mob_text.HELP}}）</dd><dt>廃村期限</dt><dd>{{lax_time(story.timer.scraplimitdt)}}</dd></dl></div>";


this.JST["sow/village_info_epilogue"] = "<div class=\"mes_maker story\"><dl class=\"dl-horizontal\"><dt>村の名前</dt><dd>{{story.name}}</dd><dt>こだわり</dt><dd><img ng-src=\"{{story.rating_url}}\" />{{story.announce.rating}}</dd></dl><p class=\"head text\" ng-bind-html=\"story.comment\"></p></div><div class=\"mes_maker story\"><dl><dt class=\"text\">オプション設定</dt><dd><ul class=\"text\"><li ng-repeat=\"option_help in story.option_helps\">{{option_help}}</li></ul></dd></dl></div><div class=\"mes_maker story\"><dl class=\"dl-horizontal\"><dt>更新時間</dt><dd>{{story.upd.time_text}}</dd><dt>更新間隔</dt><dd>{{story.upd.interval_text}}{{story.type.recovery}}</dd><dt>発言制限</dt><dd>{{story.type.saycnt.CAPTION}}<br />{{story.type.saycnt.HELP}}</dd><dt>定員</dt><dd>{{event.player.limit}}人 （ダミーキャラを含む）</dd><dt>人数</dt><dd>{{potofs.length - potofs.mob().length}}人 （ダミーキャラを含む）</dd><dt ng-if=\"story.is_wbbs\">最低人数</dt><dd ng-if=\"story.is_wbbs\">{{event.player.start}}人 （ダミーキャラを含む）</dd><dt>投票方法</dt><dd>{{story.type.vote_text.CAPTION}}</dd><dt>見物人</dt><dd>{{story.type.mob_text.CAPTION}}に {{event.player.mob}}人まで （{{story.type.mob_text.HELP}}）</dd><dt>役職配分</dt><dd>{{story.type.roletable_text}}</dd></dl><div class=\"form-horizontal\"><div class=\"control-group\"><code>編成</code>： {{story.card.config_names}}</div><div class=\"control-group\"><code>残存事件</code>： {{story.card.event_names}}</div><div class=\"control-group\"><code>破棄役職</code>： {{story.card.discard_names}}</div></div></div>";


this.JST["theme/css"] = "<span><a class=\"mark\" ng-click=\"styles.width = &#39;center-msg&#39;\">800</a><a class=\"mark\" ng-click=\"styles.width = &#39;mini-msg&#39;\">480</a></span>&nbsp;<span><a class=\"mark\" ng-click=\"styles.theme = &#39;cinema&#39;\">煉瓦</a><a class=\"mark\" ng-click=\"styles.theme = &#39;night&#39;\">月夜</a><a class=\"mark\" ng-click=\"styles.theme = &#39;star&#39;\">蒼穹</a><a class=\"mark\" ng-click=\"styles.theme = &#39;wa&#39;\">和の国</a></span>&nbsp;<a class=\"glyphicon glyphicon-cog\" ng-click=\"show_style_navi = ! show_style_navi\" style=\"font-size: 36px; margin-bottom: -26px; vertical-align: -26px;\"></a>";


this.JST["theme/style_navi"] = "<div class=\"pagenavi\"><h6 ng-if=\"show_style_navi\">スタイル：ログの見た目 &emsp;&emsp;&emsp;&emsp;</h6><dl class=\"dl-horizontal\" ng-if=\"show_style_navi\"><dt ng-if=\"css\"><select class=\"form-control input-block-level\" ng-model=\"css.value\" ng-options=\"o.val as o.name group by o.group for o in css.select\"></select></dt><dd class=\"form-inline\" ng-if=\"css\"><div class=\"form-group mark\"><label class=\"checkbox\" ng-repeat=\"key in selector_keys.font\"><input ng-model=\"styles.font\" type=\"radio\" value=\"{{key}}\">{{selectors.font[key]}}</input></label></div>&thinsp;<div class=\"form-group mark\"><label class=\"checkbox\" ng-repeat=\"key in selector_keys.width\"><input ng-model=\"styles.width\" type=\"radio\" value=\"{{key}}\">{{selectors.width[key]}}</input></label></div></dd></dl><h6 ng-if=\"show_style_navi &amp;&amp; page\">ログの表示方法 &emsp;&emsp;&emsp;&emsp;</h6><dl class=\"dl-horizontal\" ng-if=\"show_style_navi &amp;&amp; msg_style\"><dt><select class=\"form-control input-block-level\" ng-model=\"msg_style.value\" ng-options=\"o.val as o.name group by o.group for o in msg_style.select\"></select></dt><dd class=\"form-inline\"><div class=\"form-group\"><label><select class=\"form-control input-mini\" ng-model=\"msg_styles.power\" ng-options=\"key as selectors.power[key] for key in selector_keys.power\"></select></label>&thinsp;</div><div class=\"form-group\"><label><select class=\"form-control input-mini\" ng-model=\"msg_styles.order\" ng-options=\"key as selectors.order[key] for key in selector_keys.order\"></select></label>&thinsp;</div><div class=\"form-group\"><label><select class=\"form-control input-mini\" ng-model=\"msg_styles.row\" ng-options=\"key as selectors.row[key] for key in selector_keys.row\"></select></label>&thinsp;</div></dd></dl><h6 ng-if=\"mode\">フィルタ：表示するログ &emsp;&emsp;&emsp;&emsp;</h6><dl class=\"dl-horizontal\" ng-if=\"mode\"><dt><select class=\"form-control input-block-level\" ng-model=\"mode.value\" ng-options=\"o.val as o.name group by o.group for o in mode_select\"></select></dt><dd class=\"form-inline\"><div class=\"form-group\"><a class=\"mark click\" ng-click=\"mode.value = a.value\" ng-repeat=\"a in mode_common\">{{a.name}}</a></div>&thinsp;<div class=\"form-group mark\" ng-if=\"show_style_navi\"><label><input ng-model=\"modes.view\" type=\"radio\" value=\"open\">公開</input></label><label><input ng-model=\"modes.view\" type=\"radio\" value=\"clan\">内緒話</input></label><label><input ng-model=\"modes.view\" type=\"radio\" value=\"think\">独り言</input></label><label><input ng-model=\"modes.view\" type=\"radio\" value=\"all\">全部</input></label></div>&thinsp;<div class=\"form-group mark\" ng-if=\"show_style_navi\"><label class=\"checkbox\"><input ng-model=\"modes.last\" type=\"checkbox\">最後の言葉</input></label><label class=\"checkbox\"><input ng-model=\"modes.open\" type=\"checkbox\">公開発言</input></label><label class=\"checkbox\"><input ng-model=\"msg_styles.pl\" type=\"checkbox\">中身発言</input></label></div></dd></dl><h6 ng-if=\"page\">ページ、日程の移動 &emsp;&emsp;&emsp;&emsp;</h6><dl class=\"dl-horizontal\" ng-if=\"page\"><dt><select class=\"form-control input-block-level\" ng-change=\"set_turn(event.turn)\" ng-model=\"event\" ng-options=\"e as e.name for e in events\"></select></dt><dd class=\"form-inline\"><div class=\"form-group\"><label ng-if=\"! event.is_news\"><select class=\"form-control input-mini\" ng-model=\"page.value\" ng-options=\"o.val as o.name for o in page.select\"></select></label></div>&thinsp;<div class=\"form-group\"><label ng-if=\"event.is_progress\"><a class=\"btn btn-default\" ng-click=\"ajax_event(event.turn, null, false)\" ng-if=\"  event.is_news\">ページ表示</a><a class=\"btn btn-default\" ng-click=\"ajax_event(event.turn, null, true)\" ng-if=\"! event.is_news\">最新の発言</a></label></div>&thinsp;<div class=\"form-group\"><label><input class=\"form-control input-medium\" ng-blur=\"search.value = search_input\" ng-model=\"search_input\" placeholder=\"ログを探す\" type=\"text\" /></label></div>&thinsp;<div class=\"form-group\"><label ng-if=\"event.is_progress\"><a class=\"mark click glyphicon glyphicon-pencil\" ng-click=\"go.form()\"></a></label></div></dd></dl></div>";


this.FACES = [
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "b44",
    "name": "ドナルド",
    "order": 70010
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "b49",
    "name": "ボリス",
    "order": 70012
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m01",
    "name": "ケムシ",
    "order": 70007
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m02",
    "name": "ポプラ",
    "order": 70008
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m03",
    "name": "トノサマ",
    "order": 70003
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m04",
    "name": "アオイ",
    "order": 70009
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m05",
    "name": "ナナコロ",
    "order": 70004
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m06",
    "name": "リリンラ",
    "order": 70002
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m07",
    "name": "アリス",
    "order": 70006
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m08",
    "name": "おっぱい",
    "order": 70011
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m09",
    "name": "カミジャー",
    "order": 70012
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m10",
    "name": "アチャポ",
    "order": 70013
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m11",
    "name": "ライトニング",
    "order": 70015
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m12",
    "name": "トルニトス",
    "order": 70014
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m13",
    "name": "ミケ",
    "order": 70016
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m14",
    "name": "カリュクス",
    "order": 70017
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m15",
    "name": "ミソチャ",
    "order": 70005
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "m99",
    "name": "パルック",
    "order": 70001
  },
  {
    "caption": "とのさま広場",
    "csid": "changed",
    "face_id": "r30",
    "name": "トリ",
    "order": 70006
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c01",
    "name": "メアリー",
    "order": 55
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c02",
    "name": "アルフレッド",
    "order": 38
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c03",
    "name": "スティーブン",
    "order": 71
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c04",
    "name": "ノーリーン",
    "order": 29
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c05",
    "name": "キャサリン",
    "order": 59
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c07",
    "name": "ティモシー",
    "order": 20
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c08",
    "name": "ベネット",
    "order": 66
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c09",
    "name": "ヒロシ",
    "order": 32
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c10",
    "name": "ゾーイ",
    "order": 17
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c100",
    "name": "グレッグ",
    "order": 87
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c101",
    "name": "クラリッサ",
    "order": 88
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c102",
    "name": "ウォーレン",
    "order": 168
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c103",
    "name": "ナンシー",
    "order": 998
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c104",
    "name": "ヒュー",
    "order": 89
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c105",
    "name": "シメオン",
    "order": 82
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c106",
    "name": "ワンダ",
    "order": 90
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c107",
    "name": "イヴォン",
    "order": 195
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c108",
    "name": "ブローリン",
    "order": 91
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c109",
    "name": "ラディスラヴァ",
    "order": 163
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c11",
    "name": "カルヴィン",
    "order": 16
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c110",
    "name": "リー",
    "order": 92
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c111",
    "name": "スージー",
    "order": 93
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c113",
    "name": "ジェレミー",
    "order": 94
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c12",
    "name": "バーナバス",
    "order": 12
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c13",
    "name": "ロミオ",
    "order": 62
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c14",
    "name": "レティーシャ",
    "order": 31
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c15",
    "name": "ウェーズリー",
    "order": 73
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c16",
    "name": "マリアンヌ",
    "order": 13
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c17",
    "name": "ユリシーズ",
    "order": 23
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c18",
    "name": "エマ",
    "order": 63
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c19",
    "name": "タバサ",
    "order": 67
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c20",
    "name": "グロリア",
    "order": 78
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c21",
    "name": "ニール",
    "order": 50
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c22",
    "name": "ワット",
    "order": 60
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c23",
    "name": "チャールズ",
    "order": 44
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c24",
    "name": "ナタリア",
    "order": 41
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c25",
    "name": "ルーカス",
    "order": 77
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c26",
    "name": "モニカ",
    "order": 9
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c27",
    "name": "リンダ",
    "order": 65
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c28",
    "name": "ケイト",
    "order": 47
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c29",
    "name": "イアン",
    "order": 11
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c30",
    "name": "フィリップ",
    "order": 49
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c31",
    "name": "ネル",
    "order": 250
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c32",
    "name": "オスカー",
    "order": 36
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c33",
    "name": "ホリー",
    "order": 37
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c34",
    "name": "トニー",
    "order": 14
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c35",
    "name": "ダン",
    "order": 4
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c36",
    "name": "ミッシェル",
    "order": 8
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c37",
    "name": "セシル",
    "order": 34
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c38",
    "name": "コリーン",
    "order": 2
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c39",
    "name": "シビル",
    "order": 24
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c40",
    "name": "ハワード",
    "order": 25
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c41",
    "name": "ヤニク",
    "order": 21
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c42",
    "name": "ラルフ",
    "order": 33
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c43",
    "name": "ガストン",
    "order": 72
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c44",
    "name": "ドナルド",
    "order": 15
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c45",
    "name": "プリシラ",
    "order": 218
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c46",
    "name": "ゲイル",
    "order": 30
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c47",
    "name": "ペラジー",
    "order": 80
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c48",
    "name": "ビアンカ",
    "order": 225
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c49",
    "name": "ボリス",
    "order": 1
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c50",
    "name": "ディーン",
    "order": 7
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c51",
    "name": "ヨーランダ",
    "order": 53
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c52",
    "name": "ギリアン",
    "order": 52
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c53",
    "name": "ゼルダ",
    "order": 5
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c54",
    "name": "ザック",
    "order": 75
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c55",
    "name": "パピヨン",
    "order": 10
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c56",
    "name": "ゴドウィン",
    "order": 19
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c57",
    "name": "ツェツィーリヤ",
    "order": 28
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c58",
    "name": "ブルーノ",
    "order": 22
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c59",
    "name": "ムパムピス",
    "order": 27
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c60",
    "name": "ポーチュラカ",
    "order": 215
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c61",
    "name": "ヌマタロウ",
    "order": 43
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c62",
    "name": "ヴェラ",
    "order": 61
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c63",
    "name": "ピッパ",
    "order": 57
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c64",
    "name": "ヘクター",
    "order": 190
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c65",
    "name": "ズリエル",
    "order": 26
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c66",
    "name": "クリストファー",
    "order": 39
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c67",
    "name": "ソフィア",
    "order": 200
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c68",
    "name": "ヨアヒム",
    "order": 48
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c69",
    "name": "ギネス",
    "order": 56
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c70",
    "name": "パティ",
    "order": 18
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c71",
    "name": "ノックス",
    "order": 70
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c72",
    "name": "ヴェスパタイン",
    "order": 79
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c73",
    "name": "ローズマリー",
    "order": 170
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c74",
    "name": "フランシスカ",
    "order": 6
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c75",
    "name": "ビリー",
    "order": 35
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c76",
    "name": "ジョージ",
    "order": 210
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c77",
    "name": "キャロライナ",
    "order": 3
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c78",
    "name": "ネイサン",
    "order": 150
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c79",
    "name": "マーゴ",
    "order": 42
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c80",
    "name": "テッド",
    "order": 81
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c81",
    "name": "サイラス",
    "order": 180
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c82",
    "name": "ロビン",
    "order": 160
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c83",
    "name": "アイリス",
    "order": 240
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c84",
    "name": "ブレンダ",
    "order": 128
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c85",
    "name": "ハナ",
    "order": 129
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c86",
    "name": "ホレーショー",
    "order": 230
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c87",
    "name": "エリアス",
    "order": 220
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c88",
    "name": "ピエール",
    "order": 126
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c89",
    "name": "カトリーナ",
    "order": 127
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c90",
    "name": "ケヴィン",
    "order": 125
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c91",
    "name": "ドロシー",
    "order": 130
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c92",
    "name": "セレスト",
    "order": 140
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c93",
    "name": "ベッキー",
    "order": 145
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c94",
    "name": "ダーラ",
    "order": 165
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c95",
    "name": "モリス",
    "order": 84
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c96",
    "name": "レオナルド",
    "order": 83
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c97",
    "name": "ジェフ",
    "order": 85
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c98",
    "name": "オズワルド",
    "order": 86
  },
  {
    "caption": "人狼議事",
    "csid": "ririnra",
    "face_id": "c99",
    "name": "サイモン",
    "order": 999
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf01",
    "name": "ラッシード",
    "order": 80001
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf02",
    "name": "エスペラント",
    "order": 80002
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf03",
    "name": "ピート",
    "order": 80003
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf04",
    "name": "アシモフ",
    "order": 80004
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf05",
    "name": "モナリザ",
    "order": 80005
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf06",
    "name": "ワレンチナ",
    "order": 80006
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf07",
    "name": "ヤンファ",
    "order": 80007
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf08",
    "name": "ＰＪ",
    "order": 80008
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf09",
    "name": "キリシマ",
    "order": 80009
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf10",
    "name": "ナユタ",
    "order": 80010
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf11",
    "name": "イワノフ",
    "order": 80011
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf12",
    "name": "†ルシフェル†",
    "order": 80012
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf13",
    "name": "トルドヴィン",
    "order": 80013
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf14",
    "name": "クリスマス",
    "order": 80016
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf15",
    "name": "ジェームス",
    "order": 80017
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf16",
    "name": "ライジ",
    "order": 80018
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf17",
    "name": "ジャック",
    "order": 80019
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf18",
    "name": "玖休",
    "order": 80014
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf19",
    "name": "参休",
    "order": 80015
  },
  {
    "caption": "明後日への道標",
    "csid": "SF",
    "face_id": "sf20",
    "name": "ティソ",
    "order": 80020
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w01",
    "name": "鏡花",
    "order": 90038
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w02",
    "name": "慶三郎",
    "order": 90041
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w03",
    "name": "朔",
    "order": 90022
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w04",
    "name": "小鈴",
    "order": 90034
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w05",
    "name": "定吉",
    "order": 90001
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w06",
    "name": "ゆり",
    "order": 90035
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w07",
    "name": "夕顔",
    "order": 90030
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w08",
    "name": "朝顔",
    "order": 90028
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w09",
    "name": "チャールズ",
    "order": 90017
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w10",
    "name": "博史",
    "order": 90015
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w11",
    "name": "沼太郎",
    "order": 90021
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w12",
    "name": "おみつ",
    "order": 90014
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w13",
    "name": "たまこ",
    "order": 90020
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w14",
    "name": "華月斎",
    "order": 90019
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w15",
    "name": "八重",
    "order": 90039
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w16",
    "name": "勢",
    "order": 90005
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w17",
    "name": "雷門",
    "order": 90026
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w18",
    "name": "菊",
    "order": 90006
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w20",
    "name": "藤之助",
    "order": 90012
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w21",
    "name": "鉄平",
    "order": 90002
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w22",
    "name": "竹三",
    "order": 90003
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w23",
    "name": "仁右衛門",
    "order": 90033
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w24",
    "name": "辰次",
    "order": 90009
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w25",
    "name": "法泉",
    "order": 90016
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w26",
    "name": "勝丸",
    "order": 90007
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w27",
    "name": "源蔵",
    "order": 90024
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w28",
    "name": "甚六",
    "order": 90025
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w29",
    "name": "志乃",
    "order": 90011
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w30",
    "name": "雪代",
    "order": 90018
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w31",
    "name": "日向",
    "order": 90013
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w32",
    "name": "明之進",
    "order": 90040
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w33",
    "name": "団十郎",
    "order": 90032
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w34",
    "name": "余四朗",
    "order": 90023
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w35",
    "name": "奈須麿",
    "order": 90008
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w36",
    "name": "ウト",
    "order": 90004
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w37",
    "name": "芙蓉",
    "order": 90010
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w38",
    "name": "一平太",
    "order": 90037
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w39",
    "name": "沙耶",
    "order": 90027
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w40",
    "name": "朧",
    "order": 90031
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w43",
    "name": "春松",
    "order": 90029
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w44",
    "name": "雪客",
    "order": 90042
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w45",
    "name": "亀吉",
    "order": 90043
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w46",
    "name": "梅子",
    "order": 90044
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w47",
    "name": "置壱",
    "order": 90045
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w48",
    "name": "直円",
    "order": 90048
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w49",
    "name": "錠",
    "order": 90049
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w50",
    "name": "丁助",
    "order": 90050
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w51",
    "name": "鬼丞",
    "order": 90051
  },
  {
    "caption": "和の国てやんでえ",
    "csid": "wa",
    "face_id": "w52",
    "name": "櫻子",
    "order": 90052
  }
]
;
//"日本語";


this.ERROR = {
  "deny/admin": null,
  "deny/self": "本人ではありません。",
  "deny/login": "ログインして、アカウントを作りましょう。",
  "deny/auth": "ログインしてください。",
  "deny/not_finish": "まだ終了していません。"
} ;



this.GIJI = {
  "templates": {

  },
  "box": {

  },
  "folders": {
    "PAN": {
      "evil": "WOLF",
      "role_play": false
    },
    "OFFPARTY": {
      "evil": "EVIL",
      "role_play": false
    },
    "LOBBY": {
      "evil": "EVIL",
      "role_play": false
    },
    "RP": {
      "evil": "WOLF",
      "role_play": true
    },
    "PRETENSE": {
      "evil": "WOLF",
      "role_play": true
    },
    "PERJURY": {
      "evil": "WOLF",
      "role_play": true
    },
    "XEBEC": {
      "evil": "WOLF",
      "role_play": true
    },
    "CRAZY": {
      "evil": "WOLF",
      "role_play": true
    },
    "BRAID": {
      "evil": "WOLF",
      "role_play": true
    },
    "CIEL": {
      "evil": "WOLF",
      "role_play": true
    },
    "WOLF": {
      "evil": "WOLF",
      "role_play": false
    },
    "ULTIMATE": {
      "evil": "EVIL",
      "role_play": false
    },
    "ALLSTAR": {
      "evil": "EVIL",
      "role_play": false
    },
    "CABALA": {
      "evil": "EVIL",
      "role_play": false
    },
    "MORPHE": {
      "evil": "EVIL",
      "role_play": false
    }
  },
  "link": {
    "servers": "http://melon-cirrus.sakura.ne.jp/wiki/?%A5%B5%A1%BC%A5%D0%A1%BC%A5%EA%A5%B9%A5%C8",
    "plan": "http://jsfun525.gamedb.info/wiki/?%B4%EB%B2%E8%C2%BC%CD%BD%C4%EA%C9%BD",
    "wiki": "http://melon-cirrus.sakura.ne.jp/wiki/",
    "scedure": "http://jsfun525.gamedb.info/wiki/?%B4%EB%B2%E8%C2%BC%CD%BD%C4%EA%C9%BD"
  },
  "style_groups": {
    "pan": [
      {
        "val": "juna",
        "group": "審問",
        "item": "box-msg",
        "color": "white",
        "theme": "juna"
      },
      {
        "val": "sow",
        "group": "物語",
        "item": "box-msg",
        "color": "white",
        "theme": "sow"
      }
    ],
    "giji": [
      {
        "val": "cinema",
        "group": "煉瓦",
        "item": "speech",
        "color": "white",
        "theme": "cinema"
      },
      {
        "val": "wa",
        "group": "和の国",
        "item": "speech",
        "color": "white",
        "theme": "wa"
      },
      {
        "val": "star",
        "group": "蒼穹",
        "item": "speech",
        "color": "black",
        "theme": "star"
      },
      {
        "val": "night",
        "group": "月夜",
        "item": "speech",
        "color": "black",
        "theme": "night"
      }
    ]
  },
  "modes": [
    {
      "val": "info_all_open",
      "name": "設定と情報",
      "group": "情報",
      "form": [
        "action"
      ],
      "regexp": "info_all_open",
      "face": "info",
      "view": "all",
      "open": true
    },
    {
      "val": "info_all",
      "name": "進行状況",
      "group": "情報",
      "form": [
        "action"
      ],
      "regexp": "info_all",
      "face": "info",
      "view": "all"
    },
    {
      "val": "info_open_last",
      "name": "村の設定",
      "group": "情報",
      "form": [

      ],
      "regexp": "info_open_last",
      "face": "info",
      "view": "open",
      "open": true,
      "last": true
    },
    {
      "val": "memo_all_open",
      "name": "メモ履歴-全部",
      "group": "メモ履歴",
      "form": [
        "entry",
        "action",
        "memo"
      ],
      "regexp": "memo_all",
      "face": "memo",
      "view": "all",
      "open": true
    },
    {
      "val": "memo_open",
      "name": "メモ履歴-公開",
      "group": "メモ履歴",
      "form": [
        "entry",
        "action",
        "memo"
      ],
      "regexp": "memo_open",
      "face": "memo",
      "view": "open",
      "open": true
    },
    {
      "val": "memo_all_open_last",
      "name": "メモ-全部",
      "group": "メモ",
      "form": [
        "entry",
        "action",
        "memo"
      ],
      "regexp": "memo_all",
      "face": "memo",
      "view": "all",
      "open": true,
      "last": true
    },
    {
      "val": "memo_open_last",
      "name": "メモ-公開",
      "group": "メモ",
      "form": [
        "entry",
        "action",
        "memo"
      ],
      "regexp": "memo_open",
      "face": "memo",
      "view": "open",
      "open": true,
      "last": true
    },
    {
      "val": "talk_all",
      "name": "秘密議事全部",
      "group": "秘密議事録",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_all",
      "face": "talk",
      "view": "all"
    },
    {
      "val": "talk_think",
      "name": "独り言",
      "group": "秘密議事録",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_think",
      "face": "talk",
      "view": "think"
    },
    {
      "val": "talk_clan",
      "name": "内緒話/狼/鳴/…",
      "group": "秘密議事録",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_clan",
      "face": "talk",
      "view": "clan"
    },
    {
      "val": "talk_all_last",
      "name": "非公開の最後の言葉全部",
      "group": "非公開の最後の言葉",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_all_last",
      "face": "talk",
      "view": "all",
      "last": true
    },
    {
      "val": "talk_think_last",
      "name": "最後の言葉-独り言",
      "group": "非公開の最後の言葉",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_think_last",
      "face": "talk",
      "view": "think",
      "last": true
    },
    {
      "val": "talk_clan_last",
      "name": "最後の言葉-内緒話/狼/鳴/…",
      "group": "非公開の最後の言葉",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_clan_last",
      "face": "talk",
      "view": "clan",
      "last": true
    },
    {
      "val": "talk_all_open",
      "name": "議事全部",
      "group": "議事録",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_all_open",
      "face": "talk",
      "view": "all",
      "open": true
    },
    {
      "val": "talk_think_open",
      "name": "公開議事録+独り言",
      "group": "議事録",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_think_open",
      "face": "talk",
      "view": "think",
      "open": true
    },
    {
      "val": "talk_clan_open",
      "name": "公開議事録+内緒話/狼/鳴/…",
      "group": "議事録",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_clan_open",
      "face": "talk",
      "view": "clan",
      "open": true
    },
    {
      "val": "talk_open",
      "name": "公開議事録",
      "group": "議事録",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_open",
      "face": "talk",
      "view": "open",
      "open": true
    },
    {
      "val": "talk_all_open_last",
      "name": "最後の言葉全部",
      "group": "最後の言葉",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_all_open_last",
      "face": "talk",
      "view": "all",
      "last": true,
      "open": true
    },
    {
      "val": "talk_think_open_last",
      "name": "最後の言葉-公開or独り言",
      "group": "最後の言葉",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_think_open_last",
      "face": "talk",
      "view": "think",
      "last": true,
      "open": true
    },
    {
      "val": "talk_clan_open_last",
      "name": "最後の言葉-公開or内緒話/狼/鳴/…",
      "group": "最後の言葉",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_clan_open_last",
      "face": "talk",
      "view": "clan",
      "last": true,
      "open": true
    },
    {
      "val": "talk_open_last",
      "name": "最後の言葉-公開",
      "group": "最後の言葉",
      "form": [
        "entry",
        "action",
        "open",
        "secret",
        "silent"
      ],
      "regexp": "talk_open_last",
      "face": "talk",
      "view": "open",
      "last": true,
      "open": true
    }
  ],
  "csids": {
    "default": {
      "path": "/images/portrate/",
      "ext": ".jpg"
    },
    "15girls": {
      "path": "/images/15girls/",
      "ext": ".jpg"
    },
    "bloody": {
      "path": "/images/bloody/",
      "ext": ".png"
    },
    "bunmei": {
      "path": "/images/bunmei/",
      "ext": ".jpg"
    },
    "juna": {
      "path": "/images/juna/",
      "ext": ".jpg"
    },
    "name": {
      "path": "/images/name/",
      "ext": ".jpg"
    },
    "orange": {
      "path": "/images/orange/",
      "ext": ".png"
    },
    "sow": {
      "path": "/images/sow/",
      "ext": ".jpg"
    },
    "tmmi": {
      "path": "/images/TMMI/",
      "ext": ".jpg"
    }
  },
  "message": {
    "order": {
      "MAKER": 1,
      "ADMIN": 1,
      "INFOSP": 2,
      "INFONOM": 2,
      "INFOWOLF": 2,
      "CAST": 2,
      "CAUTION": 9
    },
    "template": [
      {
        "mestype": {
          "CAST": "cast",
          "INFOSP": "info",
          "INFONOM": "info",
          "INFOWOLF": "info",
          "CAUTION": "caution"
        }
      },
      {
        "subid": {
          "A": "action"
        }
      },
      {
        "mestype": {
          "DELETEDADMIN": "admin",
          "MAKER": "admin",
          "ADMIN": "admin",
          "AIM": "aim",
          "ANONYMOUS": "info"
        }
      },
      {
        "subid": {
          "M": "memo",
          "S": "say"
        }
      }
    ]
  }
} ;



this.OPTION = {
  "cookie": {
    "expire": {
      "years": 1
    }
  },
  "head_img": {
    "cinema": [
      "r",
      "c"
    ],
    "star": [
      "r",
      "c"
    ],
    "wa": [
      "b",
      "w"
    ],
    "night": [
      "b",
      "w"
    ],
    "sow": [
      "r",
      "c"
    ],
    "juna": [
      "b",
      "w"
    ]
  },
  "jp_wday": [
    "日",
    "月",
    "火",
    "水",
    "木",
    "金",
    "土"
  ],
  "face_titles": {
    "c": "人狼議事",
    "m": "とのさま広場",
    "r": null,
    "b": null,
    "sf": "明後日の道標",
    "w": "和の国てやんでえ",
    "g": "エクスパンション：大陸議事",
    "mad": "エクスパンション：狂騒議事",
    "t": "エクスパンション：帰還者議事"
  },
  "page": {
    "pile": 1,
    "folder": {
      "options": {
        "current": "ALL",
        "location": "search",
        "is_cookie": false
      },
      "button": {
        "ALL": "- すべて -",
        "PAN": "似顔絵人狼:",
        "WOLF": "人狼議事標準:",
        "RP": "人狼議事RP:",
        "PRETENSE": "人狼議事RP:A",
        "PERJURY": "人狼議事RP:Bp",
        "XEBEC": "人狼議事RP:Bx",
        "CRAZY": "人狼議事RP:Bc",
        "CIEL": "人狼議事RP:Cc",
        "ULTIMATE": "人狼議事大乱闘:",
        "ALLSTAR": "人狼議事大乱闘:A",
        "CABALA": "人狼議事CabalaCafe:",
        "MORPHE": "人狼議事モルペウス:",
        "LOBBY": "人狼議事ロビー",
        "OFFPARTY": "人狼議事オフ相談所"
      }
    },
    "roletable": {
      "options": {
        "current": "ALL",
        "location": "hash",
        "is_cookie": false
      },
      "button": null
    },
    "rating": {
      "options": {
        "current": "ALL",
        "location": "hash",
        "is_cookie": false
      },
      "button": null
    },
    "game_rule": {
      "options": {
        "current": "ALL",
        "location": "hash",
        "is_cookie": false
      },
      "button": null
    },
    "potof_size": {
      "options": {
        "current": "ALL",
        "location": "hash",
        "is_cookie": false
      },
      "button": null
    },
    "card_win": {
      "options": {
        "current": "ALL",
        "location": "hash",
        "is_cookie": false
      },
      "button": null
    },
    "card_role": {
      "options": {
        "current": "ALL",
        "location": "hash",
        "is_cookie": false
      },
      "button": null
    },
    "card_event": {
      "options": {
        "current": "ALL",
        "location": "hash",
        "is_cookie": false
      },
      "button": null
    },
    "upd_time": {
      "options": {
        "current": "ALL",
        "location": "hash",
        "is_cookie": false
      },
      "button": null
    },
    "upd_interval": {
      "options": {
        "current": "ALL",
        "location": "hash",
        "is_cookie": false
      },
      "button": null
    },
    "page": {
      "options": {
        "current": 1,
        "location": "hash",
        "is_cookie": false
      }
    },
    "page_search": {
      "options": {
        "current": 1,
        "location": "search",
        "is_cookie": false
      }
    },
    "css": {
      "options": {
        "current": "cinema_center-msg_std-font",
        "location": "hash",
        "is_cookie": true
      }
    },
    "msg_style": {
      "options": {
        "current": "simple_asc_50",
        "location": "hash",
        "is_cookie": true
      }
    },
    "potofs": {
      "options": {
        "current": "stat_type",
        "location": "hash",
        "is_cookie": false
      },
      "button": {
        "stat_at": "日程",
        "stat_type": "状態",
        "said_num": "発言",
        "win_result": "勝敗",
        "win_name": "陣営",
        "role_names": "役割",
        "select_name": "希望",
        "text": "補足"
      }
    }
  },
  "selectors": {
    "order": {
      "asc": "上から下へ",
      "desc": "下から上へ"
    },
    "row": {
      "10": "10行",
      "20": "20行",
      "30": "30行",
      "50": "50行",
      "100": "100行",
      "200": "200行"
    },
    "power": {
      "simple": "シンプル",
      "mobile": "携帯用",
      "pc": "ＰＣ用"
    },
    "font": {
      "large-font": "大判",
      "novel-font": "明朝",
      "std-font": "ゴシック",
      "small-font": "小文字"
    },
    "width": {
      "large-msg": "大判",
      "center-msg": "中央",
      "game-msg": "大判左",
      "right-msg": "左半分",
      "mini-msg": "携帯用"
    }
  },
  "css": {
    "h1": {
      "widths": {
        "large-msg": 770,
        "game-msg": 770,
        "center-msg": 580,
        "right-msg": 580,
        "mini-msg": 458
      }
    }
  },
  "rating": {
    "default": {
      "caption": "とくになし"
    },
    "love": {
      "caption": "[愛] 恋愛を重視",
      "alt": "愛"
    },
    "sexy": {
      "caption": "[性] 性表現あり",
      "alt": "性"
    },
    "sexylove": {
      "caption": "[性愛] 大人の恋愛",
      "alt": "性愛"
    },
    "violence": {
      "caption": "[暴] 暴力、グロ",
      "alt": "暴"
    },
    "sexyviolence": {
      "caption": "[性暴] えろぐろ",
      "alt": "性暴"
    },
    "teller": {
      "caption": "[怖] 恐怖を煽る",
      "alt": "怖"
    },
    "drunk": {
      "caption": "[楽] 享楽に耽る",
      "alt": "楽"
    },
    "gamble": {
      "caption": "[賭] 賭博に耽る",
      "alt": "賭"
    },
    "crime": {
      "caption": "[罪] 犯罪描写あり",
      "alt": "罪"
    },
    "drug": {
      "caption": "[薬] 薬物表現あり",
      "alt": "薬"
    },
    "word": {
      "caption": "[言] 殺伐、暴言あり",
      "alt": "言"
    },
    "fireplace": {
      "caption": "[暢] のんびり雑談",
      "alt": "暢"
    },
    "appare": {
      "caption": "[遖] あっぱれネタ風味",
      "alt": "遖"
    },
    "ukkari": {
      "caption": "[張] うっかりハリセン",
      "alt": "張"
    },
    "child": {
      "caption": "[全] 大人も子供も初心者も、みんな安心",
      "alt": "全"
    },
    "biohazard": {
      "caption": "[危] 無茶ぶり上等",
      "alt": "危"
    },
    "": {
      "caption": "null",
      "alt": ""
    },
    "0": {
      "caption": "0",
      "alt": ""
    },
    "r15": {
      "caption": "１５禁",
      "alt": ""
    },
    "r18": {
      "caption": "１８禁",
      "alt": ""
    },
    "gro": {
      "caption": "暴力、グロ",
      "alt": ""
    },
    "view": {
      "caption": "view"
    },
    "alert": {
      "caption": "要注意",
      "alt": ""
    }
  },
  "gon": {
    "errors": {

    },
    "cautions": [

    ],
    "form": {
      "side": [

      ],
      "links": [

      ],
      "texts": [

      ],
      "secrets": [

      ],
      "commands": {

      },
      "styles": [
        {
          "name": "(通常)",
          "val": ""
        },
        {
          "name": "等幅",
          "val": "mono"
        },
        {
          "name": "見出し",
          "val": "head"
        }
      ]
    }
  }
} ;



this.SOW = {
  "options": {
    "seq-event": {
      "help": "事件が順序どおりに発生する"
    },
    "show-id": {
      "help": "ユーザーIDを公開する"
    },
    "entrust": {
      "help": "委任投票をする"
    },
    "select-role": {
      "help": "役職希望を受け付ける"
    },
    "random-target": {
      "help": "投票・能力の対象に「ランダム」を含める"
    },
    "undead-talk": {
      "help": "狼・妖精と死者との間で、会話ができる"
    },
    "aiming-talk": {
      "help": "ふたりだけの内緒話をすることができる"
    }
  },
  "roletable": {
    "secret": "詳細は黒幕だけが知っています。",
    "custom": "自由設定",
    "default": "標準",
    "hamster": "ハムスター",
    "mistery": "（なんだっけ？？？）",
    "random": "ランダム",
    "test1st": "人狼審問試験壱型",
    "test2nd": "人狼審問試験弐型",
    "ultimate": "アルティメット",
    "wbbs_c": "人狼BBS-C国",
    "wbbs_f": "人狼BBS-F国",
    "wbbs_g": "人狼BBS-G国",
    "lover": "恋愛天使"
  },
  "vote": {
    "sign": {
      "CAPTION": "記名で投票"
    },
    "anonymity": {
      "CAPTION": "匿名で投票"
    }
  },
  "mes_text": [
    "mes_text",
    "mes_text_monospace",
    "mes_text_report"
  ],
  "monospace": {
    "mono": 1,
    "head": 2
  },
  "n_rule_name": [
    "短期はここではできない。",
    "情報ページ（ここ）を熟読する。",
    "ルールを守り、つねに心構えに気を配る。",
    "進行中は、どんな嘘でもＯＫ。",
    "ただし、（村建て人）、（管理人）の発言では嘘をつかないこと。",
    "突然死をしない。"
  ],
  "switch": {
    "wolf": {
      "mestype": "WSAY"
    },
    "pixi": {
      "mestype": "XSAY"
    },
    "muppet": {
      "mestype": "SAY"
    },
    "sympathy": {
      "mestype": "SPSAY"
    }
  },
  "loves": {
    "love": {
      "win": "LOVER"
    },
    "hate": {
      "win": "HATER"
    }
  },
  "wins": {
    "MOB": {
      "name": "見物人"
    },
    "NONE": {
      "name": "その他"
    },
    "HUMAN": {
      "name": "村人陣営"
    },
    "WOLF": {
      "name": "人狼陣営"
    },
    "EVIL": {
      "name": "敵側の人間"
    },
    "GURU": {
      "name": "笛吹き"
    },
    "PIXI": {
      "name": "妖精"
    },
    "LONEWOLF": {
      "name": "一匹狼"
    },
    "LOVER": {
      "name": "恋人陣営"
    },
    "HATER": {
      "name": "邪気陣営"
    },
    "DISH": {
      "name": "据え膳"
    }
  },
  "groups": {
    "MOB": {
      "name": "見物人"
    },
    "OTHER": {
      "name": "その他"
    },
    "HUMAN": {
      "name": "村人陣営"
    },
    "WOLF": {
      "name": "人狼陣営"
    },
    "EVIL": {
      "name": "敵側の人間"
    },
    "PIXI": {
      "name": "妖精"
    }
  },
  "specials": {
    "mob": {
      "name": "見物人",
      "win": "MOB"
    }
  },
  "roles": {
    "mob": {
      "name": "見物人",
      "win": "MOB",
      "group": "OTHER"
    },
    "lover": {
      "name": "弟子",
      "win": null,
      "group": "OTHER"
    },
    "robber": {
      "name": "盗賊",
      "win": null,
      "group": "OTHER"
    },
    "tangle": {
      "name": "怨念",
      "win": null,
      "group": "OTHER"
    },
    "villager": {
      "name": "村人",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "stigma": {
      "name": "聖痕者",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "fm": {
      "name": "結社員",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "sympathy": {
      "name": "共鳴者",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "seer": {
      "name": "占い師",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "seerwin": {
      "name": "信仰占師",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "oura": {
      "name": "気占師",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "aura": {
      "name": "気占師",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "seerrole": {
      "name": "賢者",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "guard": {
      "name": "守護者",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "medium": {
      "name": "霊能者",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "mediumwin": {
      "name": "信仰霊能者",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "mediumrole": {
      "name": "導師",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "necromancer": {
      "name": "降霊者",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "follow": {
      "name": "追従者",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "fan": {
      "name": "煽動者",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "hunter": {
      "name": "賞金稼",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "weredog": {
      "name": "人犬",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "prince": {
      "name": "王子様",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "rightwolf": {
      "name": "狼血族",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "doctor": {
      "name": "医師",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "curse": {
      "name": "呪人",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "dying": {
      "name": "預言者",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "invalid": {
      "name": "病人",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "alchemist": {
      "name": "錬金術師",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "witch": {
      "name": "魔女",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "girl": {
      "name": "少女",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "scapegoat": {
      "name": "生贄",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "elder": {
      "name": "長老",
      "win": "HUMAN",
      "group": "HUMAN"
    },
    "jammer": {
      "name": "邪魔之民",
      "win": "EVIL",
      "group": "EVIL"
    },
    "snatch": {
      "name": "宿借之民",
      "win": "EVIL",
      "group": "EVIL"
    },
    "bat": {
      "name": "念波之民",
      "win": "EVIL",
      "group": "EVIL"
    },
    "cpossess": {
      "name": "囁き狂人",
      "win": "EVIL",
      "group": "EVIL"
    },
    "possess": {
      "name": "狂人",
      "win": "EVIL",
      "group": "EVIL"
    },
    "fanatic": {
      "name": "狂信者",
      "win": "EVIL",
      "group": "EVIL"
    },
    "muppeting": {
      "name": "人形使い",
      "win": "EVIL",
      "group": "EVIL"
    },
    "wisper": {
      "name": "囁き狂人",
      "win": "EVIL",
      "group": "EVIL"
    },
    "semiwolf": {
      "name": "半狼",
      "win": "EVIL",
      "group": "EVIL"
    },
    "dyingpossess": {
      "name": "---",
      "win": "EVIL",
      "group": "EVIL"
    },
    "oracle": {
      "name": "魔神官",
      "win": "EVIL",
      "group": "EVIL"
    },
    "sorcerer": {
      "name": "魔術師",
      "win": "EVIL",
      "group": "EVIL"
    },
    "walpurgis": {
      "name": "魔法少年",
      "win": "EVIL",
      "group": "EVIL"
    },
    "headless": {
      "name": "首無騎士",
      "win": "WOLF",
      "group": "WOLF"
    },
    "wolf": {
      "name": "人狼",
      "win": "WOLF",
      "group": "WOLF"
    },
    "aurawolf": {
      "name": "---",
      "win": "WOLF",
      "group": "WOLF"
    },
    "intwolf": {
      "name": "智狼",
      "win": "WOLF",
      "group": "WOLF"
    },
    "cursewolf": {
      "name": "呪狼",
      "win": "WOLF",
      "group": "WOLF"
    },
    "whitewolf": {
      "name": "白狼",
      "win": "WOLF",
      "group": "WOLF"
    },
    "childwolf": {
      "name": "仔狼",
      "win": "WOLF",
      "group": "WOLF"
    },
    "dyingwolf": {
      "name": "衰狼",
      "win": "WOLF",
      "group": "WOLF"
    },
    "silentwolf": {
      "name": "黙狼",
      "win": "WOLF",
      "group": "WOLF"
    },
    "werebat": {
      "name": "コウモリ人間",
      "win": "PIXI",
      "group": "PIXI"
    },
    "hamster": {
      "name": "栗鼠妖精",
      "win": "PIXI",
      "group": "PIXI"
    },
    "mimicry": {
      "name": "擬狼妖精",
      "win": "PIXI",
      "group": "PIXI"
    },
    "dyingpixi": {
      "name": "風花妖精",
      "win": "PIXI",
      "group": "PIXI"
    },
    "trickster": {
      "name": "悪戯妖精",
      "win": "PIXI",
      "group": "PIXI"
    },
    "hatedevil": {
      "name": "邪気悪魔",
      "win": "HATER",
      "group": "OTHER"
    },
    "loveangel": {
      "name": "恋愛天使",
      "win": "LOVER",
      "group": "OTHER"
    },
    "passion": {
      "name": "片思い",
      "win": "LOVER",
      "group": "OTHER"
    },
    "lonewolf": {
      "name": "一匹狼",
      "win": "LONEWOLF",
      "group": "WOLF"
    },
    "guru": {
      "name": "笛吹き",
      "win": "GURU",
      "group": "OTHER"
    },
    "dish": {
      "name": "鱗魚人",
      "win": "DISH",
      "group": "OTHER"
    },
    "bitch": {
      "name": "遊び人",
      "win": "LOVER",
      "group": "OTHER"
    }
  },
  "gifts": {
    "none": {
      "name": "",
      "win": null,
      "group": null
    },
    "lost": {
      "name": "喪失",
      "win": null,
      "group": "OTHER"
    },
    "bind": {
      "name": "---",
      "win": null,
      "group": null
    },
    "shield": {
      "name": "光の輪",
      "win": null,
      "group": "OTHER"
    },
    "glass": {
      "name": "魔鏡",
      "win": null,
      "group": "OTHER"
    },
    "ogre": {
      "name": "悪鬼",
      "win": "WOLF",
      "group": "WOLF"
    },
    "fairy": {
      "name": "妖精の子",
      "win": "PIXI",
      "group": "PIXI"
    },
    "fink": {
      "name": "半端者",
      "win": "EVIL",
      "group": "EVIL"
    },
    "decide": {
      "name": "決定者",
      "win": null,
      "group": "OTHER"
    },
    "seeronce": {
      "name": "夢占師",
      "win": null,
      "group": "OTHER"
    },
    "dipsy": {
      "name": "酔払い",
      "win": null,
      "group": "OTHER"
    }
  },
  "events": {
    "nothing": {
      "name": "普通の日"
    },
    "aprilfool": {
      "name": "四月馬鹿"
    },
    "turnfink": {
      "name": "二重スパイ"
    },
    "turnfairy": {
      "name": "妖精の輪"
    },
    "eclipse": {
      "name": "日蝕"
    },
    "cointoss": {
      "name": "Sir Cointoss"
    },
    "force": {
      "name": "影響力"
    },
    "miracle": {
      "name": "奇跡"
    },
    "prophecy": {
      "name": "聖者のお告げ"
    },
    "clamor": {
      "name": "不満"
    },
    "fire": {
      "name": "熱意"
    },
    "nightmare": {
      "name": "悪夢"
    },
    "ghost": {
      "name": "亡霊"
    },
    "escape": {
      "name": "逃亡"
    },
    "seance": {
      "name": "降霊会"
    }
  },
  "maskstates": {
    "268435200": null,
    "1024": "投票対象外",
    "512": "恩恵対象外",
    "256": "能力対象外",
    "64": "感染",
    "32": "負傷",
    "8": "<s>投票</s>",
    "7": "<s>全能力</s>",
    "4": "<s>恩恵</s>",
    "3": "<s>能力</s>",
    "2": "<s>毒薬</s>",
    "1": "<s>蘇生薬</s>"
  },
  "live": {
    "live": "生存者",
    "executed": "処刑",
    "victim": "襲撃",
    "cursed": "呪詛",
    "droop": "衰退",
    "suicide": "後追",
    "feared": "恐怖",
    "suddendead": "突然死",
    "mob": "見物人"
  },
  "live_caption": {
    "live": "生存者",
    "executed": "処刑",
    "victim": "犠牲者",
    "cursed": "犠牲者",
    "droop": "犠牲者",
    "suicide": "犠牲者",
    "feared": "犠牲者",
    "suddendead": "突然死",
    "mob": "見物人"
  },
  "mob": {
    "visiter": {
      "CAPTION": "客席",
      "HELP": "進行中会話は客席同士のみ"
    },
    "grave": {
      "CAPTION": "裏方",
      "HELP": "進行中会話は墓下と"
    },
    "alive": {
      "CAPTION": "舞台",
      "HELP": "進行中会話は地上、墓下、両方と"
    },
    "juror": {
      "CAPTION": "陪審",
      "HELP": "進行中会話は陪審同士のみ。陪審（＆決定者）だけが投票する。"
    },
    "gamemaster": {
      "CAPTION": "黒幕",
      "HELP": "進行中会話は地上、墓下、両方と。場を支配する特権をもつ。"
    }
  },
  "game_rule": {
    "TABULA": {
      "CAPTION": "タブラの人狼",
      "HELP": "<li>同数票の処刑候補が複数いた場合、ランダムに処刑する。\n<li>狼を全滅させると、村勝利。\n<li>人≦狼、つまり人間と人狼を１対１にしたとき、人間が余計にいなくなったら、狼勝利。\n"
    },
    "MILLERHOLLOW": {
      "CAPTION": "ミラーズホロウ",
      "HELP": "<li>同数票の処刑候補が複数いた場合、処刑をとりやめる。\n<li>すべての死者は役職が公開される。\n<li>狼を全滅させると、村勝利。\n<li>「村人」を全滅させると、狼勝利。<br>役職を持つ村側の生き残りは、勝利に直接は寄与しない。\n"
    },
    "LIVE_TABULA": {
      "CAPTION": "タブラの人狼（死んだら負け）",
      "HELP": "<li>同数票の処刑候補が複数いた場合、ランダムに処刑する。\n<li>狼を全滅させると、村側の生存者が勝利。\n<li>人≦狼、つまり人間と人狼を１対１にしたとき、人間が余計にいなくなったら、狼勝利。\n<li>ただし、仲間が勝利していても、死んでしまった者は敗北である。\n"
    },
    "LIVE_MILLERHOLLOW": {
      "CAPTION": "ミラーズホロウ（死んだら負け）",
      "HELP": "<li>同数票の処刑候補が複数いた場合、処刑をとりやめる。\n<li>狼を全滅させると、村側の生存者が勝利。\n<li>「村人」を全滅させると、狼勝利。役職を持つ村側の生き残りは、勝利に直接は寄与しない。\n<li>ただし、仲間が勝利していても、死んでしまった者は敗北である。\n"
    },
    "TROUBLE": {
      "CAPTION": "Trouble☆Aliens",
      "HELP": "<li>同数票の処刑候補が複数いた場合、ランダムに処刑する。\n<li>人狼は会話できない。襲撃候補リストで判断できない。\n<li>襲撃先は翌日、犠牲候補と人狼に開示される。\n<li>守護者は、より大人数の人狼からは守りきることができず、身代わりに感染する。\n<li>１人の人狼が襲撃すると感染、複数の人狼や一匹狼、賞金稼ぎが襲撃すると死亡する。\n<li>狼を全滅させると、村側の生存者が勝利（村側は死んだら負ける）。\n<li>人≦狼、つまり人間と人狼を１対１にしたとき、人間が余計にいなくなったら、狼と感染者の勝利。\n"
    },
    "MISTERY": {
      "CAPTION": "深い霧の夜",
      "HELP": "<li>同数票の処刑候補が複数いた場合、ランダムに処刑する。\n<li>村側は自分の役職を自覚しない。\n<li>村側は、能力の結果不審者を見かけることがある。\n<li>人狼の行動対象に選ばれると、不審者を見かける。\n<li>狼を全滅させると、村勝利。\n<li>役職「村人」を全滅させると、狼勝利。<br>役職を持つ村側の生き残りは、勝利に直接は寄与しない。\n"
    },
    "VOV": {
      "CAPTION": "狂犬病の谷",
      "HELP": "<li>同数票の処刑候補が複数いた場合、ランダムに処刑する。\n<li>１人の人狼が襲撃すると感染、複数の人狼や一匹狼、賞金稼ぎが襲撃すると死亡する。\n<li>狼を全滅させると、村勝利。\n<li>人≦狼、つまり人間と人狼を１対１にしたとき、人間が余計にいなくなったら、狼勝利。\n"
    },
    "SECRET": {
      "CAPTION": "陰謀に集う胡蝶",
      "HELP": "<li>同数票の処刑候補が複数いた場合、ランダムに処刑する。\n<li>人狼は会話できない。襲撃候補リストで判断できない。\n<li>襲撃先は翌日、犠牲候補と人狼に開示される。\n<li>狼を全滅させると、村側の生存者が勝利。\n<li>人≦狼、つまり人間と人狼を１対１にしたとき、人間が余計にいなくなったら、狼の生存者が勝利。\n<li>いかなる場合も、死んでしまったものは敗北である。\n"
    }
  },
  "trs": {
    "all": {
      "CAPTION": "オール☆スター",
      "HELP": "すべての役職、恩恵、事件を楽しむことができる、「全部入り」のセットです。また、進行中以外はクローンにされたり、セキュリティ・クリアランスが変ったりします。"
    },
    "simple": {
      "CAPTION": "ラッキー☆スター",
      "HELP": "初心者向けの、シンプルな設定です。拡張設定の一部が固定になっています。"
    },
    "star": {
      "CAPTION": "Orbital☆Star",
      "HELP": "すべての役職、恩恵、事件を楽しむことができます。また、進行中以外はクローンにされたり、セキュリティ・クリアランスが変ったりします。<br>宇宙時代に突入した「全部入り」のセットです。村落共同体は渓谷や高原ではなく、小惑星帯や人工コロニー、移民船にあるでしょう。事件が始まるまでは、とても充実した近代的なインフラが整っていたのですが……"
    },
    "regend": {
      "CAPTION": "議事☆伝承",
      "HELP": "すべての役職、恩恵、事件を楽しむことができる、「全部入り」のセットです。アクション内容は穏当になり、未来的ですばらしいクローンも居ません。"
    },
    "fool": {
      "CAPTION": "適当系",
      "HELP": "てきとーな感じ。"
    },
    "sow": {
      "CAPTION": "人狼物語",
      "HELP": "ウェブゲーム「人狼物語」風の役職を楽しめます。ただし、細かい動作に違いがあります。"
    },
    "wbbs": {
      "CAPTION": "人狼BBS",
      "HELP": "ウェブゲーム「人狼BBS」風の役職を楽しめます。ただし、細かい動作に違いがあります。"
    },
    "juna": {
      "CAPTION": "人狼審問",
      "HELP": "ウェブゲーム「人狼審問」風の役職を楽しめます。ただし、細かい動作に違いがあります。"
    },
    "complex": {
      "CAPTION": "PARANOIA",
      "HELP": "ようこそ、トラブルシューター。市民達は進行中以外はクローンにされたり、セキュリティ・クリアランスが変ったりします。<br>！注意！　入村直後の市民はクローンではありません。ただちに別れを告げてあげましょう。　！注意！"
    },
    "complexx": {
      "CAPTION": "ParanoiA",
      "HELP": "ようこそ、トラブルシューター。市民達は進行中以外はクローンにされたり、セキュリティ・クリアランスが変ったりします。<br>！注意！　入村直後の市民はクローンではありません。ただちに別れを告げてあげましょう。　！注意！"
    },
    "cabala": {
      "CAPTION": "ギロチン広場",
      "HELP": "権謀術数を弄び、虚実まじえた会話を楽しむためのセットです。"
    },
    "tabula": {
      "CAPTION": "タブラの人狼",
      "HELP": "カードゲーム「Lupus in Tabula」風の役職を楽しめます。ただし、疫病神、公証人、悪魔くん、には対応していません。"
    },
    "millerhollow": {
      "CAPTION": "ミラーズホロウ",
      "HELP": "カードゲーム「The Werewolves of Millers Hollow + New Moon」風の役職を楽しめます。ただし、愚か者には対応していません。守護者、笛吹きにすこし違いがあります。"
    },
    "ultimate": {
      "CAPTION": "アルティメット",
      "HELP": "カードゲーム「アルティメット人狼」風の役職を楽しめます。ただし、ドワーフ、ドッペルゲンガー、アル中、愚か者、倫理学者には対応していません。"
    }
  },
  "saycnt": {
    "sow": {
      "CAPTION": "人狼物語",
      "HELP": null
    },
    "say5": {
      "CAPTION": "寡黙への挑戦",
      "COST_SAY": "count",
      "COST_MEMO": "none",
      "COST_ACT": "count",
      "RECOVERY": 1,
      "MAX_SAY": 5,
      "MAX_TSAY": 5,
      "MAX_SPSAY": 5,
      "MAX_WSAY": 10,
      "MAX_GSAY": 10,
      "MAX_PSAY": 10,
      "MAX_ESAY": 999,
      "MAX_SAY_ACT": 5,
      "ADD_SAY": 0,
      "MAX_ADDSAY": 0,
      "MAX_MESLINE": 10
    },
    "point": {
      "COST_SAY": "point",
      "COST_MEMO": "count",
      "COST_ACT": "count",
      "MAX_ESAY": 9999
    },
    "count": {
      "COST_SAY": "count",
      "COST_MEMO": "count",
      "COST_ACT": "count",
      "ADD_SAY": 0,
      "MAX_ADDSAY": 0
    },
    "lobby": {
      "CAPTION": "ロビー",
      "HELP": "∞pt/∞act",
      "COST_SAY": "none",
      "COST_MEMO": "none",
      "COST_ACT": "none",
      "RECOVERY": 1,
      "MAX_SAY": 9999,
      "MAX_TSAY": 9999,
      "MAX_SPSAY": 9999,
      "MAX_WSAY": 9999,
      "MAX_GSAY": 9999,
      "MAX_PSAY": 9999,
      "MAX_ESAY": 9999,
      "MAX_SAY_ACT": 99,
      "ADD_SAY": 9999,
      "MAX_ADDSAY": 0,
      "MAX_MESCNT": 1000,
      "MAX_MESLINE": 20
    },
    "say5x200": {
      "CAPTION": "寡黙への挑戦",
      "COST_SAY": "count",
      "COST_MEMO": "none",
      "COST_ACT": "count",
      "RECOVERY": 1,
      "MAX_SAY": 5,
      "MAX_TSAY": 5,
      "MAX_SPSAY": 5,
      "MAX_WSAY": 10,
      "MAX_GSAY": 10,
      "MAX_PSAY": 10,
      "MAX_ESAY": 999,
      "MAX_SAY_ACT": 5,
      "ADD_SAY": 0,
      "MAX_ADDSAY": 0,
      "MAX_MESLINE": 10,
      "HELP": "（24h回復） 200字x5回/5act'",
      "MAX_MESCNT": 200
    },
    "say5x300": {
      "CAPTION": "小論文への挑戦",
      "COST_SAY": "count",
      "COST_MEMO": "none",
      "COST_ACT": "count",
      "RECOVERY": 1,
      "MAX_SAY": 5,
      "MAX_TSAY": 5,
      "MAX_SPSAY": 5,
      "MAX_WSAY": 10,
      "MAX_GSAY": 10,
      "MAX_PSAY": 10,
      "MAX_ESAY": 999,
      "MAX_SAY_ACT": 5,
      "ADD_SAY": 0,
      "MAX_ADDSAY": 0,
      "MAX_MESLINE": 10,
      "HELP": "（24h回復） 300字x5回/15act'",
      "MAX_MESCNT": 300
    },
    "saving": {
      "COST_SAY": "count",
      "COST_MEMO": "count",
      "COST_ACT": "count",
      "ADD_SAY": 0,
      "MAX_ADDSAY": 0,
      "CAPTION": "節約",
      "HELP": "250字x20回/15act",
      "RECOVERY": 0,
      "MAX_SAY": 20,
      "MAX_TSAY": 10,
      "MAX_SPSAY": 10,
      "MAX_WSAY": 30,
      "MAX_GSAY": 20,
      "MAX_PSAY": 20,
      "MAX_ESAY": 999,
      "MAX_SAY_ACT": 15,
      "MAX_MESCNT": 250,
      "MAX_MESLINE": 10
    },
    "wbbs": {
      "COST_SAY": "count",
      "COST_MEMO": "none",
      "COST_ACT": "count",
      "ADD_SAY": 0,
      "MAX_ADDSAY": 0,
      "CAPTION": "人狼BBS",
      "HELP": "200字x20回",
      "RECOVERY": 0,
      "MAX_SAY": 20,
      "MAX_TSAY": 5,
      "MAX_SPSAY": 20,
      "MAX_WSAY": 40,
      "MAX_GSAY": 20,
      "MAX_PSAY": 20,
      "MAX_ESAY": 999,
      "MAX_SAY_ACT": 0,
      "MAX_MESCNT": 200,
      "MAX_MESLINE": 5
    },
    "euro": {
      "COST_SAY": "count",
      "COST_MEMO": "count",
      "COST_ACT": "count",
      "ADD_SAY": 0,
      "MAX_ADDSAY": 0,
      "CAPTION": "欧州",
      "HELP": "（24h回復） 800字x30回/30act",
      "RECOVERY": 1,
      "MAX_SAY": 30,
      "MAX_TSAY": 999,
      "MAX_SPSAY": 999,
      "MAX_WSAY": 999,
      "MAX_GSAY": 999,
      "MAX_PSAY": 30,
      "MAX_ESAY": 999,
      "MAX_SAY_ACT": 30,
      "MAX_MESCNT": 800,
      "MAX_MESLINE": 20
    },
    "tiny": {
      "COST_SAY": "point",
      "COST_MEMO": "point",
      "COST_ACT": "count",
      "MAX_ESAY": 9999,
      "CAPTION": "たりない",
      "HELP": "（24h回復）（メモは20pt） 333pt/9act",
      "RECOVERY": 1,
      "MAX_SAY": 333,
      "MAX_TSAY": 999,
      "MAX_SPSAY": 333,
      "MAX_WSAY": 999,
      "MAX_GSAY": 999,
      "MAX_PSAY": 999,
      "MAX_SAY_ACT": 9,
      "ADD_SAY": 0,
      "MAX_ADDSAY": 0,
      "MAX_MESCNT": 300,
      "MAX_MESLINE": 10
    },
    "weak": {
      "COST_SAY": "point",
      "COST_MEMO": "point",
      "COST_ACT": "count",
      "MAX_ESAY": 9999,
      "CAPTION": "むりせず",
      "HELP": "（24h回復）（メモは20pt） 777pt/15act",
      "RECOVERY": 1,
      "MAX_SAY": 777,
      "MAX_TSAY": 777,
      "MAX_SPSAY": 777,
      "MAX_WSAY": 999,
      "MAX_GSAY": 999,
      "MAX_PSAY": 1200,
      "MAX_SAY_ACT": 15,
      "ADD_SAY": 0,
      "MAX_ADDSAY": 0,
      "MAX_MESCNT": 600,
      "MAX_MESLINE": 15
    },
    "juna": {
      "COST_SAY": "point",
      "COST_MEMO": "count",
      "COST_ACT": "count",
      "MAX_ESAY": 9999,
      "CAPTION": "しんもん",
      "HELP": "（24h回復） 1200pt/24act",
      "RECOVERY": 1,
      "MAX_SAY": 1200,
      "MAX_TSAY": 700,
      "MAX_SPSAY": 700,
      "MAX_WSAY": 3000,
      "MAX_GSAY": 2000,
      "MAX_PSAY": 2000,
      "MAX_SAY_ACT": 24,
      "ADD_SAY": 0,
      "MAX_ADDSAY": 0,
      "MAX_MESCNT": 1000,
      "MAX_MESLINE": 20
    },
    "vulcan": {
      "COST_SAY": "point",
      "COST_MEMO": "count",
      "COST_ACT": "count",
      "MAX_ESAY": 9999,
      "CAPTION": "いっぱい",
      "HELP": "（24h回復） 1000pt+++300pt/36act",
      "RECOVERY": 1,
      "MAX_SAY": 1000,
      "MAX_TSAY": 1000,
      "MAX_SPSAY": 1500,
      "MAX_WSAY": 4000,
      "MAX_GSAY": 3000,
      "MAX_PSAY": 3000,
      "MAX_SAY_ACT": 36,
      "ADD_SAY": 300,
      "MAX_ADDSAY": 3,
      "MAX_MESCNT": 1000,
      "MAX_MESLINE": 20
    },
    "infinity": {
      "CAPTION": "むげん",
      "HELP": "∞pt/∞act",
      "COST_SAY": "none",
      "COST_MEMO": "none",
      "COST_ACT": "none",
      "RECOVERY": 1,
      "MAX_SAY": 9999,
      "MAX_TSAY": 9999,
      "MAX_SPSAY": 9999,
      "MAX_WSAY": 9999,
      "MAX_GSAY": 9999,
      "MAX_PSAY": 9999,
      "MAX_ESAY": 9999,
      "MAX_SAY_ACT": 99,
      "ADD_SAY": 9999,
      "MAX_ADDSAY": 0,
      "MAX_MESCNT": 1000,
      "MAX_MESLINE": 20
    },
    "weak_braid": {
      "COST_SAY": "point",
      "COST_MEMO": "point",
      "COST_ACT": "count",
      "MAX_ESAY": 9999,
      "CAPTION": "むりせず",
      "HELP": "（24h回復）（メモは20pt） 600pt++100pt/15act",
      "RECOVERY": 1,
      "MAX_SAY": 600,
      "MAX_TSAY": 600,
      "MAX_SPSAY": 600,
      "MAX_WSAY": 999,
      "MAX_GSAY": 999,
      "MAX_PSAY": 1200,
      "MAX_SAY_ACT": 15,
      "ADD_SAY": 100,
      "MAX_ADDSAY": 2,
      "MAX_MESCNT": 600,
      "MAX_MESLINE": 15
    },
    "juna_braid": {
      "COST_SAY": "point",
      "COST_MEMO": "count",
      "COST_ACT": "count",
      "MAX_ESAY": 9999,
      "CAPTION": "しんもん",
      "HELP": "（24h回復） 800pt++200pt/24act",
      "RECOVERY": 1,
      "MAX_SAY": 800,
      "MAX_TSAY": 700,
      "MAX_SPSAY": 700,
      "MAX_WSAY": 3000,
      "MAX_GSAY": 2000,
      "MAX_PSAY": 2000,
      "MAX_SAY_ACT": 24,
      "ADD_SAY": 200,
      "MAX_ADDSAY": 2,
      "MAX_MESCNT": 1000,
      "MAX_MESLINE": 20
    },
    "vulcan_braid": {
      "COST_SAY": "point",
      "COST_MEMO": "count",
      "COST_ACT": "count",
      "MAX_ESAY": 9999,
      "CAPTION": "いっぱい",
      "HELP": "（24h回復） 1000pt+++300pt/36act",
      "RECOVERY": 1,
      "MAX_SAY": 1000,
      "MAX_TSAY": 1000,
      "MAX_SPSAY": 1500,
      "MAX_WSAY": 4000,
      "MAX_GSAY": 3000,
      "MAX_PSAY": 3000,
      "MAX_SAY_ACT": 36,
      "ADD_SAY": 300,
      "MAX_ADDSAY": 3,
      "MAX_MESCNT": 1000,
      "MAX_MESLINE": 20
    },
    "infinity_braid": {
      "CAPTION": "むげん",
      "HELP": "∞pt/∞act",
      "COST_SAY": "none",
      "COST_MEMO": "none",
      "COST_ACT": "none",
      "RECOVERY": 1,
      "MAX_SAY": 9999,
      "MAX_TSAY": 9999,
      "MAX_SPSAY": 9999,
      "MAX_WSAY": 9999,
      "MAX_GSAY": 9999,
      "MAX_PSAY": 9999,
      "MAX_ESAY": 9999,
      "MAX_SAY_ACT": 99,
      "ADD_SAY": 9999,
      "MAX_ADDSAY": 0,
      "MAX_MESCNT": 1000,
      "MAX_MESLINE": 20
    }
  },
  "log": {
    "anchor": {
      "q": null,
      "m": "#",
      "a": "%",
      "S": "",
      "T": "-",
      "W": "*",
      "G": "+",
      "P": "=",
      "X": "!",
      "V": "@"
    },
    "mestypetext": [
      null,
      null,
      "【管理人削除】",
      null,
      null,
      null,
      "【未確】",
      null,
      "【削除】",
      "【人】",
      "【独】",
      "【赤】",
      "【墓】",
      "【鳴】",
      "【念】",
      "【見】",
      "【憑】",
      null,
      null,
      null
    ],
    "font": [
      null,
      null,
      "color=\"gray\"",
      null,
      null,
      null,
      null,
      null,
      "color=\"gray\"",
      null,
      "color=\"gray\"",
      "color=\"red\"",
      "color=\"teal\"",
      "color=\"blue\"",
      "color=\"green\"",
      "color=\"maroon\"",
      null,
      "color=\"purple\"",
      null,
      "color=\"red\""
    ]
  }
} ;



this.URL = {
  "file": "http://7korobi.gehirn.ne.jp",
  "rails": "http://giji.check.jp"
} ;



this.SOW_RECORD = {"CABALA":{
  "monospace": [
    null,
    "mono",
    "head",
    null
  ],
  "roles": [
    null,
    "villager",
    "stigma",
    "fm",
    "sympathy",
    "seer",
    "seerwin",
    "aura",
    "seerrole",
    "guard",
    "medium",
    "mediumwin",
    "mediumrole",
    "necromancer",
    "follow",
    "fan",
    "hunter",
    "weredog",
    "prince",
    "rightwolf",
    "doctor",
    "curse",
    "dying",
    "invalid",
    "alchemist",
    "witch",
    "girl",
    "scapegoat",
    "elder",
    29,
    30,
    "jammer",
    "snatch",
    "bat",
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    "possess",
    "fanatic",
    "muppeting",
    "wisper",
    "semiwolf",
    "dyingpossess",
    "oracle",
    "sorcerer",
    "walpurgis",
    50,
    51,
    "headless",
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    "wolf",
    "aurawolf",
    "intwolf",
    "cursewolf",
    "whitewolf",
    "childwolf",
    "dyingwolf",
    "silentwolf",
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    "hamster",
    82,
    83,
    84,
    85,
    "mimicry",
    87,
    "dyingpixi",
    "trickster",
    "hatedevil",
    "loveangel",
    "passion",
    "lover",
    "robber",
    95,
    "lonewolf",
    "guru",
    "dish",
    99,
    100,
    "bitch",
    "tangle",
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    null
  ],
  "gifts": [
    null,
    null,
    "lost",
    "bind",
    4,
    "shield",
    "glass",
    "ogre",
    "fairy",
    "fink",
    10,
    "decide",
    "seeronce",
    "dipsy",
    14,
    15,
    16,
    17,
    18,
    19,
    null
  ],
  "events": [
    null,
    "nothing",
    "aprilfool",
    "turnfink",
    "turnfairy",
    "eclipse",
    "cointoss",
    "force",
    "miracle",
    "prophecy",
    10,
    "clamor",
    "fire",
    "nightmare",
    "ghost",
    "escape",
    "seance",
    17,
    18,
    19,
    null
  ],
  "winners": [
    "WIN_NONE",
    "WIN_HUMAN",
    "WIN_WOLF",
    "WIN_GURU",
    "WIN_PIXI",
    "WIN_PIXI",
    "WIN_LONEWOLF",
    "WIN_LOVER",
    "WIN_HATER",
    null
  ],
  "mestypes": [
    null,
    "INFOSP",
    "DELETEDADMIN",
    "CAST",
    "MAKER",
    "ADMIN",
    "QUEUE",
    "INFONOM",
    "DELETED",
    "SAY",
    "TSAY",
    "WSAY",
    "GSAY",
    "SPSAY",
    "BSAY",
    "VSAY",
    "MSAY",
    "AIM",
    "ANONYMOUS",
    "INFOWOLF",
    null
  ],
  "mestypeicons": [
    "",
    "",
    "管理人削除:",
    "",
    "",
    "",
    "未確:",
    "",
    "削除:",
    "人:",
    "独:",
    "赤:",
    "墓:",
    "鳴:",
    "念:",
    "見:",
    "憑:",
    "秘:"
  ]
}};
