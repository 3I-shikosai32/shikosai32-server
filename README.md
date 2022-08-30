# shikosai32-server

## Setup

1. リポジトリをクローンする。
   ```powershell
   git clone "https://github.com/3I-shikosai32/shikosai32-server"
   cd "shikosai32-server"
   ```
2. 依存パッケージをインストールする。
   ```powershell
   yarn install
   ```
3. 責任者から環境変数を受け取り、それをもとに`.env`ファイルを作成する。
4. [任意] MongoDBに開発用のDBを作成する。
   ```powershell
   mongo -u mongo
   > use shikosai32
   ```
5. [任意] 作成したMongoDBのURLを`.env`の`DATABASE_URL`に上書きする。
6. `@prisma/client`を自動生成する。
   ```powershell
   yarn prisma:gen
   ```
7. サーバーを起動し、手順が上手くいっていることを確認する。
   ```powershell
   yarn dev
   ```
