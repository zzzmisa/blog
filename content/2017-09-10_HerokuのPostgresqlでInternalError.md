+++
date = "2017-09-10"
lastmod = "2017-09-13"
title = "HerokuのpostgresqlページがInternal Error"
slug = "heroku_postgresql_internal_error"
tags = [
  "heroku"
]
thumbnail = "images/logo_heroku.png"
toc = false
draft = false
+++

## 起こった問題

Herokuのpostgresqlページがエラーで表示できませんでした。  
エラー文は以下です。

> Internal Error  
> Couldn't fetch detail about ****  
> Sory about that! Our engineers have been notified.  
> Perhaps return to the datastore list?  

{{% img src="images/heroku_postgresql_internal_error1.png" caption="Referenced from Heroku." href="https://www.heroku.com/" w="640" h="492" %}}

エラーを検索しても特に関係ありそうな記事は見つかりませんでした。  
障害が起こってるのかなと思って、Herokuの公式ブログを見ても情報無し。  
同じように困っている人はいないかなと思って、Twitterを見ても情報無し。
"return to the datastore list" して他のデータベースを見ても同じエラーで開けませんでした。

ちなみに、Herokuにデプロイしているアプリからのpostgresqlへの読み書きは普通にできました。


## 直した方法
"Our engineers have been notified." って書いてあるし、そのうち直るかなっと思って数時間開いてみたら普通に開けました。  
何だったんだ...。

{{% img src="images/heroku_postgresql_internal_error2.png" caption="Referenced from Heroku." href="https://www.heroku.com/" w="640" h="494" %}}

