var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n', 'tags': '', 'url': 'Brython.html'}, {'title': '上課心得', 'text': '', 'tags': '', 'url': '上課心得.html'}, {'title': 'W1', 'text': '中秋節放假 \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '上課內容: \n 1.建立41023153@nfu.edu.tw的Microsoft帳號 \n 2.建立Replit的個人帳號 \n 3.建立one shape的個人帳號 \n ____________________________________________________________________________________ \n 心得:當初在建立one drive的帳號時不小心將mail設成41023153@gm.nfu.edu.tw導致無法加入課程，幸好在與老師確認mail是沒有gm之後，重新建立帳號，就成功加入課程了 \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '\n 透過\xa0\xa0 mdecad2022\xa0\xa0 的 organization 建立個人可以管理的倉儲 (site-Github_帳號) \xa0 \n 利用\xa0\xa0 replit 帳號所啟動的動態網站進行內容管理 \xa0 \n 動態轉為靜態網站內容之後,\xa0\xa0 要設法與 Github 倉儲同步. \xa0 \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '上課內容: \n 在 Replit 執行動態網站: \xa0 \n 必須進入 Shell, 在倉儲根目錄執行下列兩則指令 (取下子模組內容, 並安裝執行所需模組). \xa0 \n git submodule update --init --recursive \xa0 \n pip install\xa0\xa0 flask flask_cors bs4 lxml pelican markdown gevent \xa0 \n \xa0連線至  考試主機 :\u202f\xa0 https://exam.cycu.org \u202f 並且辦理帳號及密碼\xa0   \n \xa0 \n 近端工具: 下載\xa0\xa0 \xa0 portable_python_3.10.6.7z \xa0 \n \xa0\xa0\xa0 Portablegit \xa0 \n 雲端工具: Replit \xa0 \n Web 分散式版次管理:\xa0 \xa0 https://github.com \xa0 \xa0 \n \xa0 \n 電腦輔助繪圖工具:\xa0 \xa0 \n \xa0\xa0\xa0 近端 NX2027 與 Solvespace \xa0 \n \xa0\xa0\xa0 雲端: \xa0 https://onshape.com \xa0 \xa0 \n \xa0 ____________________________________________________________________________________ \n 心得:在下載完NX2027後發現內部的部分資料可能被電腦的防火牆給阻擋掉，導致無法成功開啟，好家在問了老師過後，發現重新再下載後就可以成功開啟。 \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': 'Replit 雖然好用, 但畢竟是採用免費帳號, 許多資源的取用受到限制,  https://wcms.repl.co  並不是全時都開機, 當使用者連線時, 雲端虛擬主機才會開機, 且當免費帳號的資源用盡時, 服務連線將會受到限制. 因此, 在工作站室中的一台 Ubuntu 伺服器建立一個 Windows 10 虛擬主機, 從 github.com/mdecycu/wcms 取下倉儲內容, 配置與  https://wcms.repl.co  相同的服務內容:  https://wcms.cycu.org:5443 , 之所以使用 port 5443 是因為同台主機上的 443 已經為  https://nfu.cycu.org  所用, 專門從學校教務主機取出各班選課名單, 以 cad2022 為例:  2a 學員名單 ,  2b 學員名單 , 就是利用 nfu.cycu.org 取得. \n 上課內容及筆記: \n \n \n Login to\xa0 https://mail.nfu.edu.tw \xa0 -\xa0 查看登入 stud.cycu.org 伺服器的帳號密碼, 帳號為 cad+學號, 密碼為四個字元, 包括數字與小寫英文字母 \xa0 \n 請到 excel 檔案\xa0 查詢 \xa0stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用, 9 開頭的 port) 與遠端 (給 stud.cycu.org, 8 開頭的 port) 埠號 \xa0 \n 修改可攜 Python 3.10.6 start.bat, 蓋掉第三行後重新啟動, 目的希望將操作系統的命令搜尋路徑放在可攜目錄搜尋路徑之後. \xa0 \n 重新啟動可攜程式環境, 在其中一個命令列, ssh\xa0\xa0 cad+學號@stud.cycu.org , 表示要使用 secure shell 遠端登入到 stud.cycu.org, 這是一台 Linux 主機, 安裝 Ubuntu 22.04 Server.(若使用的網路連線協定並無 IPv6,\xa0 可將系統的 proxy 設為 140.130.17.4:3128 kmolab/kmolab) \xa0 \n 在 ssh 登入畫面, 以 ssh-keygen 建立 key pairs, .ssh/id_rsa 為 private key, id_rsa.pub 為 public key \xa0 \n 設法利用 Filezilla, 以 sftp 安全的(Secure)檔案(File)傳輸(Transmission)協定(Protocol), 與 stud.cycu.org 伺服器連結. \xa0 \n 利用\xa0 Filezilla sftp 取下 id_rsa.pub, 登錄至 Github 帳號下的 Setting - >\xa0 SSH and GPG keys. \xa0 \n 對\xa0 server sftp 也可以利用\xa0\xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n 接下來要下載\xa0\xa0 config \xa0設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 接下來要在\xa0 Ubuntu (也就是 stud.cycu.org 這台主機所安裝的操作系統) 中, 設定 .gitconfig, 總共包含三項設定: git config --global user.name "scrum-1", git config --global user.email\xa0 "scrum1@mde.tw"\xa0\xa0 以及 git config --global http.proxy http://p42.cycu.org:3128, 這三個設定必須在 ssh 登入畫面中執行, 設定完成檔案會存入帳號根目錄中的 .gitconfig \xa0 \n 利用\xa0 git clone --recurse-submodules\xa0\xa0 git@demo:mdecad2022/site-scrum-1.git \xa0 demo \xa0 \n 接著下載\xa0 server.py , 在 Windows 編輯\xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 登入\xa0 Ubuntu 後, 會使用的指令: pwd 代表 print working directory, clear -\xa0 清除螢幕, cd - 更換目錄, ls -l 列出目錄詳細內容, chmod u+x\xa0 acp \xa0表示讓 user 可以 execute acp script (能夠讓使用者以 source acp 加上提交字串進行 git add, git commit, git push, 如何在 Windows 執行 acp.bat 加上提交字串.   \n \n _______________________________________________________________________________________________ \n \n \n \xa0心得:在上課時聽不太懂該如何操作，所以決定下課後留在教室與同學一起問老師該如何操作，雖然過程十分坎坷，不過最後終於在老師不厭其煩的教導及帶領，還有跟我一起犧牲晚餐時間的同學們的努力下成功完成動態網頁的設立。 \n \n \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'W9', 'text': '', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '上課內容: \n 已知  block.prt  中 p8=59, p9=44, 請利用網際表單, 將 p8, p9 都改為 50 之後, 在瀏覽中提供新的 block_new.prt 檔案下載, 並直接在網頁上展示該零件的 STL 格式檔案. \n 範例檔案:  w10_cad2022_solvespace_ex.7z \n \n \n block_new.prt 檔案下載: /downloads/block_new.stl \n \n \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'w8', 'text': '\n', 'tags': '', 'url': 'w8.html'}, {'title': 'w6', 'text': '\n', 'tags': '', 'url': 'w6.html'}]};