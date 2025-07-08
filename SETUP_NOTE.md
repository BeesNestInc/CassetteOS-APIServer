## 📄 installer/ サブモジュール運用に関する注意点（READMEメモなど用）

### installer/ ディレクトリの運用について（Git Submodule）

このリポジトリでは、CassetteOSのインストーラー（installer.shなど）を
外部の専用リポジトリとして管理しています。

#### ✅ 目的
スクリプト配信と実装開発を分離することで、インストーラーの独立管理を実現しています。

#### 📁 構成
CassetteOS-APIServer/
├── scripts ← サブモジュール（別リポジトリ:CassetteOS-Tools）
|   └── v0.0.1/
|       ├── install.sh
|       ├── uninstall.sh
|       ├── update.sh
|       └── etc..
└── .gitmodules

#### 🛠 初回セットアップ（clone時）
```bash
git clone --recursive https://github.com/BeesNestInc/CassetteOS-APIServer.git
```
**※ --recursive を忘れた場合：**
```
git submodule init
git submodule update
```
#### 🔄 サブモジュールの更新
```bash
cd script/
git pull origin main
cd ..
git add installer
git commit -m "Update installer submodule to latest commit"
```
##### 🚫 やってはいけないこと
* installer/ に直接別の git clone をしない（壊れます）
* installer/ を普通のディレクトリとして使おうとしない
* .gitmodules や .git/config の中身を不用意にいじらない

##### 💡 補足
installer/ の実体は独立したリポジトリです（例：https://github.com/BeesNestInc/CassetteOS-Tools）

この構成により、配信環境（CassetteOS-APIServer）とスクリプト開発が分離されています
