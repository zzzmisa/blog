+++
date = "2017-11-21"
lastmod = "2017-11-20"
slug = "install-anaconda"
tags = [
  "anaconda",
  "jupyter",
  "python"
]
title = "AnacondaとJupyterと分析に使う色々をインストール"
thumbnail = "images/logo_python.png"
toc = false
draft = false
+++

Anacondaと、Jupyterと、分析に使うパッケージ達をインストールします。  
といっても、Jupyter や分析に使う主なパッケージ達は Anaconda に含まれてインストールされます。  
Anaconda は[公式サイト](https://www.anaconda.com/)からダウンロードできます。

## conda コマンドが使えることを確認
Anacondaのインストールが完了すると、ターミナルで `conda` コマンドが打てるようになります。  


```
# バージョン確認
$ conda -V
conda 4.3.30
```

`command not found` になってしまう場合は、ターミナルを立ち上げ直します。

## 分析に使うパッケージ達の確認

Anaconda には、デフォルトで沢山のパッケージがインストールされています。  
`conda list` コマンドを打つとインストール済みのパッケージ一覧を見ることができます。  
使いたいパッケージが、使いたいバージョンでインストールされているかを確認しておきます。

```
$ conda list | grep -e numpy -e scipy -e scikit-learn -e matplotlib -e pandas
matplotlib                2.1.0            py36h5068139_0  
numpy                     1.13.3           py36h2cdce51_0  
numpydoc                  0.7.0            py36he54d08e_0  
pandas                    0.20.3           py36hd6655d8_2  
scikit-learn              0.19.1           py36hffbff8c_0  
scipy                     0.19.1           py36h3e758e1_3  
```


## Jupyter が使えることを確認
以下のコマンドを打つとブラウザ上で、Jupyterが立ち上がります。

```
$ jupyter notebook
```

{{% img src="images/install-anaconda1.png" w="640" h="482" %}}


以上です。
