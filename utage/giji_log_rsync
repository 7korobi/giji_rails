rsync -e 'ssh -p 22' -r vage@vage.sakura.ne.jp:/home/vage/www/perjury/ /www/giji_log/vage/ --exclude='*.svn-base' --exclude='*.svn' --exclude='*.bak' --stats &
rsync -e 'ssh -p 22' -r apollo@apollo.sakura.ne.jp:/home/apollo/www/sow/xebec/ /www/giji_log/xebec/ --exclude='*.svn-base' --exclude='*.svn' --exclude='*.bak' --stats &
rsync -e 'ssh -p 22' -r aocafe@aocafe.sakura.ne.jp:/home/aocafe/www/noir/cafe/ /www/giji_log/cafe/ --exclude='*.svn-base' --exclude='*.svn' --exclude='*.bak' --stats &
rsync -e 'ssh -p 20002' -r nanakorobi@jinro.jksy.org:/home/nanakorobi/public_html/ /www/giji_log/jksy/ --exclude='*.svn-base' --exclude='*.svn' --exclude='*.bak' --stats &
lftp -u crazy-crazy,yhvxa3vwh6 crazy-crazy.sakura.ne.jp -e 'set ftp:ssl-allow off; mirror --only-newer -X .svn-base -X .svn -X .bak  /home/crazy-crazy/www/crazy/ /www/giji_log/crazy/; exit' &
lftp -u crazy-crazy,yhvxa3vwh6 crazy-crazy.sakura.ne.jp -e 'set ftp:ssl-allow off; mirror --only-newer -X .svn-base -X .svn -X .bak  /home/crazy-crazy/www/giji_lobby/lobby/ /www/giji_log/lobby/; exit' &
lftp -u party,TyaboFil20 party.ps.land.to -e 'set ftp:ssl-allow off; mirror --only-newer -X .svn-base -X .svn -X .bak  /public_html/kitchen/ /www/giji_log/kitchen/; exit' &
