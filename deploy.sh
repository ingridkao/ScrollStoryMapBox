#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e

# 建立輸出檔案
npm run build

# 移動至到打包後的dist目錄 
cd dist

# 因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git init 
git add -A
git commit -m 'Deploy v1.0.3 - modify mapbox token'

# 將 dist資料夾中的內容推送至遠端 ScrollStoryMapBox main分支中，並強制無條件將舊有的內容取代成目前的內容（指令 git push -f)
git push -f https://github.com/ingridkao/ScrollStoryMapBox.git master:github-pages
cd -