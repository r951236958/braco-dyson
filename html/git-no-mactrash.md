---
---

# Macbook使用Git提交時忽略 ```.DS_Store```

## 在GitHub專案中新增 ```.gitignore``` 文件

- 使用星號註記忽略檔案
- 透過在 ```.gitconfig``` 中添加 ```.gitignore_global``` 完成全局配置
- 配置文件中添加glob文件路徑

## 使用步驟

### 在GitHub專案目錄中新增 ```.gitignore``` , 並將下方內容貼上後存儲即可

```
*/.DS_Store
.DS_Store
```

### 此配置表示忽略該目錄與其子目錄中的所有.DS_Store檔案

### 新增全局配置檔案 ```~/.gitignore_global``` , 內容與 ```.gitignore``` 相同

### 在git配置文件 ```~/.gitconfig``` 添加全局配置檔案路徑即可

```
[core] 
excludesfile = /Users/your-username/.gitignore_global
```

### 配置完成

> 如需刪除之前已經上傳過的 ```.DS_Store``` , 可嘗試以下指令

```
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
git status                  //根據顯示的提示刪除stage中的文件
git rm --cached filename
git add .gitignore
git commit -m 'delete .DS_Store'
git push origin master
```

### 打完收工