+++
date = "2017-01-21"
lastmod = "2017-01-21"
title = "HUGOサイトをMacのローカル環境に置いてLAN内から確認"
slug = "access_to_local_hugo_blog"
tags = [
  "hugo"
]
thumbnail = "images/logo_hugo.png"
toc = false
draft = false
+++

HUGOで作ったサイトを、Macのローカル環境に立てたWebサーバに置いて、同一LAN内の端末から確認します。  
サイトを公開する前に、スマホなどでレイアウトを確認する時に使えます。

## 環境
macOS Sierra 10.12.2

## 手順

1. `ifconfig`かシステム環境設定で、MacのローカルIPを確認する。
* ローカル環境用にHUGOサイトをビルドする。  
 `-b`オプションにて、上記で確認したローカルIPをbaseURLに指定。  
 `-d`オプションにて、公開用のpublicとは別のフォルダをビルド先に設定。  

    ```
    $ hugo -b http://192.168.xxx.xxx/ -d public_for_local -t hugo_theme_robust
    ```
* ApacheのDocumentRootを、HUGOサイトをビルドしたフォルダに書き換える。

    ```
    $ sudo vim /etc/apache2/httpd.conf
    
    # DocumentRoot "/Library/WebServer/Documents"
    # <Directory "/Library/WebServer/Documents">
    DocumentRoot "/hogehoge/public_for_loacl"
    <Directory "/hogehoge/public_for_loacl">
    ```
* Apacheを立ち上げる。

    ```
    $ sudo apachectl start
    ```
* Macと同一LAN内の端末のブラウザで `http://192.168.xxx.xxx/` にアクセスすると、ビルドしたHUGOサイトが表示されるはず。  
もし「It works!」が表示される場合は、DocumentRootの設定が上手く行っていない。  
「It works!」も表示されない場合は、Apacheの起動が上手く行っていない。  

以上です。
