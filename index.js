// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var len = sentence.length;
var sentence1 = '';
while(var i = 0;i < len ; i++){
  var c = sentence.chatAt(i);
  if(i == 0){
    sentence1 = sentence1 + c.toUpperCase();
  }
  else if(sentence.charAt(i-1) == ' '){
    sentence1 = sentence1 + c.toUpperCase();
  }
  else{
    sentence = sentence + c;
  }
}
console.log(sentence);

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
var len = money.length;
var m = '';
while(var i = 0;i < len ; i++){
  if(typeof(money[i]) != Number)
    continue;
  else{
    m = m + money[i];
  }
}
var i = m.parseInt(m);
console.log(m);
