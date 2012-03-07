# -*- coding: utf-8 -*-


module LinkHelper
    def img_cd(rating)
        case rating
        when nil,"view","r15","r18","gro","0"
            image_tag 'icon/cd_default.png'
        else
            image_tag 'icon/cd_' + rating + '.png'
        end
    end
    def img(csid,cid)
        case csid
        when "juna","name"
            '<img src="http://utage.sytes.net/pan/img/%s/%s.jpg">'%[csid,cid]
        when "bloody","15girls","orange","sow","tmmi"
            '<img src="http://utage.sytes.net/pan/img/%s/%s.png">'%[csid,cid]
        else
            '<img src="http://utage.sytes.net/wolf/img/ririnra/%s.jpg" />'%[cid]
        end.html_safe
    end

    # リンク：外部も含む、人狼の国へ
    def link_to_folder_vil( title, vil )
        if @giji_folder.member? vil.folder
        then
            link_to_info( title,vil.folder,vil.vid)
        else
            url = vil.info_link
            if url and url.size > 5
            then
                url["ua=mb"] = "" if url["ua=mb"]
                link_to( title, url )
            else
                title
            end
        end
    end

    # リンク：人狼議事で持ってるCGI（スタイル共通）
    def link_to_cgi(title,cgi_url)
        suffix = ""
        suffix = "css=" + css
        prefix = ""
        prefix = '/../' unless cgi_url['://']
        if   cgi_url["?"]
        then cgi_url += "&"
        else cgi_url += "?"
        end
        link_to(title,prefix + cgi_url + suffix)
    end

    def link_to_route(title,arg_params)
        link_params = arg_params.merge({
            :css        => css,
        })
        link_to_unless_current(title,link_params)
    end

    # リンク：キャラ別ログ
    def link_to_chr(title,log)
        link_params = {
            :css        => css,
#            :controller => :cgi,
#            :action     => :log,
            :csid       => log.csid,
            :cid        => log.cid,
            :page       => 1,
        }
        link_to_unless_current(title,link_params)
    end
    def link_to_typeid(title,typeid)
        link_params = {
            :css        => css,
#            :controller => :cgi,
#            :action     => :log,
            :typeid     => typeid,
            :page       => 1,
        }
        link_to_unless_current(title,link_params)
    end
    def link_to_logid(title,folder,vid,turn,logid, html_hash = {})
        link_params = {
            :css        => css,
#            :action => "log",
            :folder => folder,
            :vid    => vid,
            :turn   => turn,
            :logid  => logid,
            :page   => 1,
        }
        link_to_unless_current(title, link_params, html_hash)
    end

    # リンク：ログへ
    def link_to_log(title="解除する")
        link_params = {
            :css        => css,
#            :controller => :cgi,
#            :action     => :log,
            :page       => 1,
        }
        link_to_unless_current(title,link_params)
    end

    # リンク：村の中の特定の日の頭
    def links_to_turn(turns)
        link_params = {
            :css        => css,
#            :controller => :cgi,
            :page       => 1,
        }

        ret = []
        ret.push  link_to_info("情報",params[:folder],params[:vid])
        turns.each_with_index do |item,index|
            link_params[:turn  ] = index
            link_params[:action] = :log
            ret.push  link_to_unless_current(item,link_params)
        end
        ret.join(" ")
    end

    # リンク：村の中の特定の日のメモ
    def link_to_memo()
        link_params = {
            :css        => css,
#            :controller => :cgi,
            :page       => 1,
        }

        ret = []
        link_params[:action] = :memo_recent
        ret.push link_to_unless_current('メモ',link_params)

        link_params[:action] = :memo_hist
        ret.push link_to_unless_current('履歴',link_params)

        ret.join("/")
    end

    # リンク：村の情報欄
    def link_to_info(title,folder,vid)
        link_params = {
            :css        => css,
#            :controller => :cgi,
#            :action     => :info,
            :folder     => folder,
            :vid        => vid,
        }
        link_to_unless_current(title,link_params)
    end

    # リンク：終了した村一覧
    def link_to_list_reset(title)
        folder = params[:folder]
        link_params = {
            :css        => css,
#            :controller => :cgi,
#            :action     => :list,
            :folder     => folder,
        }
        link_to(title,link_params)
    end

    def link_to_list(title, folder = params[:folder] )
        link_params = {
            :css        => css,
#            :controller => :cgi,
#            :action     => :list,
            :folder     => folder,
        }
        link_to_unless_current(title,link_params)
    end

    # リンク：トップへ移る
    def link_to_lobby(title)
        link_params = {
            :css        => css,
            controller: :users,
            action:     :index,
        }
        link_to_unless_current(title,link_params)
    end

    # リンク：戦跡ビュアーへ移る
    def link_to_uid( uid )
        link_params = {
            :css        => css,
#            :controller => :user,
#            :action     => :show,
            :user       => uid,
        }
        link_to_unless_current(uid,link_params)
    end


    # リンク：スタイルのみ変更する
    def link_to_lines
        link_params = params.merge({
            :css        => css,
            :page       =>  1,
        })
        ret = []
        [30,50,100,200,500].each do |row|
            link_params[:row] = row
            ret.push link_to_unless_current(row,link_params,{:class=>'res_anchor'})
        end
        ret.join(" ")
    end

end
