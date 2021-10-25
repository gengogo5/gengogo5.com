---
title: "コードブロックの動作確認"
date: "2021-10-25"
---

技術系のブログではしばしばソースコードや設定ファイルを記事に載せる。  
その際にマークダウンのコードブロック（3連バッククォート）を使うが、Next.jsを入れたばかりだと表示に反映されない。

今後技術系記事を書いていくにあたり、コードブロック表示を有効にしておきたい。

## コードブロック例

### Ruby

```ruby
class HelloWorld                 # class文
  Version = "1.0"                # 定数の定義
 
  def initialize(myname="Ruby")  # initializeメソッド
    @name = myname               # インスタンス変数の初期化
  end
 
  def hello                      # インスタンスメソッド
    print "Hello, world. I am ", @name, ".\n"
  end
end

bob   = HelloWorld.new("Bob")
alice = HelloWorld.new("Alice")
ruby  = HelloWorld.new
 
bob.hello

```

### JavaScript

```javascript

var today = new Date();
var thisYear = today.getFullYear();
var thisMonth = today.getMonth() + 1;

console.log(`今年 ${thisYear} / 今月 ${thisMonth}`);

var nextYear,nextMonth;
if ( thisMonth === 12 ) {
  nextMonth = 1;
  nextYear = thisYear + 1;
} else {
  nextMonth = thisMonth; 
  nextYear = thisYear;
}

console.log(`来月 ${nextYear}年${nextMonth}月`);

```
