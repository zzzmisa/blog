+++
date = "2017-09-16"
lastmod = "2017-09-16"
title = "HerokuにRailsアプリを公開する"
slug = "heroku_with_rails"
tags = [
  "rails",
  "heroku"
]
thumbnail = "images/logo_heroku.png"
toc = true
draft = false
+++

HerokuにRailsアプリを公開する方法の備忘録です。  

今回公開するのは、Rails 5で作成したアプリアプリです。  
公式ドキュメントの[Getting Started with Rails 5.x on Heroku](https://devcenter.heroku.com/articles/getting-started-with-rails5/)を参考に操作していきます。


```
# Railsバージョン確認
$ rails -v
Rails 5.1.2
```

## Herokuを使う準備
[Heroku](https://www.heroku.com/)サイトで、アカウント登録、heroku-cliのインストールを済ませておきます。  
今回インストールしたバージョンは以下です。

```
# heroku-cliバージョン確認
$ heroku --version
heroku-cli/6.14.20 (darwin-x64) node-v8.4.0
```

## Herokuアプリの作成

コマンドラインからも操作できるけど、今回はWeb画面から操作しました。

まずは右上のNew > Create new app をクリック。
{{% img src="images/heroku_with_rails1.png" w="640" h="513" caption="Referenced from Heroku." href="https://www.heroku.com/" %}}

App name を入力して、Create app をクリック。  
ここで入力した文字列が、公開するHerokuアプリのURLの一部になります。
{{% img src="images/heroku_with_rails2.png" w="640" h="513" caption="Referenced from Heroku." href="https://www.heroku.com/" %}}

Herokuアプリができました。
{{% img src="images/heroku_with_rails3.png" w="640" h="513" caption="Referenced from Heroku." href="https://www.heroku.com/" %}}

## Heroku Postgresの準備

Herokuの標準DBである、Heroku Postgresを準備します。
Herokuでは、RDBはHeroku Postgres、KVSは Heroku Redisを使うのが一般的です。

まずはResoucesタブのAdd-onsでHeroku Postgresを追加。

{{% img src="images/heroku_with_rails4.png" w="640" h="513" caption="Referenced from Heroku." href="https://www.heroku.com/" %}}

追加時にプランを選ぶモーダルダイアログが出るので、無料で行きたいならFreeプランを選びます。
{{% img src="images/heroku_with_rails5.png" w="640" h="513" caption="Referenced from Heroku." href="https://www.heroku.com/" %}}


## database.ymlの設定

準備したHeroku Postgresのホスト名、データベース名、パスワードなどをRailsアプリのdatabase.ymlに反映させます。

作成したHeroku Postgresをクリック。

{{% img src="images/heroku_with_rails6.png" w="640" h="513" caption="Referenced from Heroku." href="https://www.heroku.com/" %}}

Settingsタブをクリック後、Database CredentialsのView Credentials...をクリック。

{{% img src="images/heroku_with_rails8.png" w="640" h="417" caption="Referenced from Heroku." href="https://www.heroku.com/" %}}

ホスト名、データベース名、パスワードなどが表示されるので、database.ymlのproductionに反映させます。

{{% img src="images/heroku_with_rails9.png" w="640" h="477" caption="Referenced from Heroku." href="https://www.heroku.com/" %}}

```
production:
  <<: *default
  encoding: utf8  
  adapter: postgresql
  port: xxxx
  username: xxxx
  host: xxxx.xxxx.xxxx.com
  database: xxxx
  password: xxxx
```


## Gemfileの設定

Gemfileは、Railsのデフォルト設定で`gem 'sqlite3'`となっている部分を`gem 'pg'`に書き換えておきます。

```
# gem 'sqlite3'
gem 'pg'
```


## デプロイ

Deployタブにデプロイ方法が書いてあるので、好きな方法でアップします。  
今回は、Heroku Gitで行いました。

{{% img src="images/heroku_with_rails10.png" w="640" h="667" caption="Referenced from wikipedia." href="https://www.heroku.com/" %}}

```
# 既にGitリポジトリがある場合
# リモートリポジトリとしてherokuを登録
$ heroku git:remote -a zzzmisa-rails
# リモートリポジトリherokuにpush
$ git push heroku master
```

デプロイが成功したら、Web画面左上のOpen appをクリックすると、公開したアプリにアクセスできます。

{{% img src="images/heroku_with_rails11.png" w="640" h="513" caption="Referenced from wikipedia." href="https://www.heroku.com/" %}}

## （おまけ）開発環境へのPostgreSQLインストール

ドキュメントによると...

> We highly recommend using PostgreSQL during development.

開発環境でもPostgreSQLを使うことを強くおすすめします、とのことなので、ローカルにもPostgresをインストールしておくと良さそうです。

Postresのローカルへのインストール方法は[Local setup](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup)に書いてあります。



インストールができたら、database.ymlのdevelopmentのadapterをpostgresqlに変えて、DBをマイグレートし直せはOKです。  
[Heroku](https://www.heroku.com/)サイトで、アカウント登録、heroku-cliのインストールを済ませておきます。  
