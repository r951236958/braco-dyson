---

---

# 在Macbook上從本機使用git時，避免提交垃圾文件 ```.DS_Store```

## 配置 ```.gitignore``` 文件

### 簡要說明

> 此配置文件可避免git提交時忽略其中所標示之文件
> 各GitHub專案目錄中都要有 ```.gitignore```
> 在文件中添加欲被忽略之檔名, 並使用星號來包含其子目錄中相同文件
> 並在家目錄中 ```.gitconfig``` 裡添加導入 ```.gitignore_global``` 來完成全局配置
> 在該配置文件中添加glob全局配置的文件路徑

### 操作步驟

- 在GitHub專案目錄新增 ```.gitignore```配置文件

1.  建立檔案 ```.gitignore``` , 並將以下貼上儲存檔案
2.  如果已經有此文件存在, 直接修改文件並新增以下內容

```
*/.DS_Store
.DS_Store
```

3. 此配置完成後, 表示git提交時忽略該目錄與其子目錄中的所有.DS_Store檔案

- 在家目錄中git配置文件裡面添加全局配置文件的檔案路徑來完成全局配置 

1.  在家目錄 ```$HOME``` 裡面新增全局配置所需導入之檔案 ```.gitignore_global```
2.  該檔案內容與 ```.gitignore``` 相同
3.  其內容與 ```.gitignore``` 相同
4.  git全局配置文件 ```~/.gitconfig``` 路徑位於家目錄 ```$HOME``` 下, 添加內容如下

```
[core] 
excludesfile = /Users/your-HOME/.gitignore_global
```

- 配置完成

> 如需刪除之前已經上傳過的 ```.DS_Store``` , 可嘗試以下指令

```
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
git status                  //根據顯示的提示刪除stage中的文件
git rm --cached filename
git add .gitignore
git commit -m 'delete .DS_Store'
git push origin master
```

- 打完收工
