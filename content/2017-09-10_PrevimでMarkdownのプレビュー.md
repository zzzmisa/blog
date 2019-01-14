+++
date = "2017-09-10"
lastmod = "2017-09-10"
title = "PrevimでMarkdownのプレビュー"
slug = "previm"
tags = [
  "vim"
]
thumbnail = "images/logo_vim.png"
toc = true
draft = false
+++

Maekdownがプレビューできるvimプラグイン[Previm](https://github.com/kannokanno/previm/)の導入メモです。  
readmeに動画がありますが、変更内容をリアルタイムに反映してくれます。便利！

## Dein.vimでPrevimのインストール
プラグインマネージャDein.vimを使ってインストールします。
Dein.vimの導入方法は[こちら](/dein_vim/)。

Dein.vimでprevimを入れるための.vimrcの設定を追加
```
call dein#add('kannokanno/previm')
```

## g:previm_open_cmdの定義
readmeに従って、.vimrcに書いておきます。
```
let g:previm_open_cmd = 'open -a Safari'
```

## プレビュー実行
Markdownファイルをvimで立ち上げて、以下のコマンドを打ちます。

```
:PrevimOpen
```

{{% img src="images/previm1.jpg" w="640" h="336" %}}

できた！
