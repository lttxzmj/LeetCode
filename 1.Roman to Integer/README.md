# Roman to Integer

## 题目地址：

[Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)

## 思路

第一遍审题的时候，大致的思路是这样的。 先判断拿到的是什么字符串， 如果是 "I"、 "X"、“C”，检查它的位置，如果是 "V"、"X"等再相减，最后将拿到的每个数字相加，得到答案。

然后第二遍审题，怎么拿到每个字符串具体代表的数字呢？我想  利用数组来做。因为给的是字符串，我先把它转换成数组，遍历这个数组，就能拿到每个罗马数字了。我再写条件判断这些罗马数字，将具体代表的十进制数拿到。 但是这是单个的数字，我需要再创建一个空的数组，然后将拿到的数字放进去，再将每个数字加起来，这样就拿到了结果。

有了思路以后，我就用最笨的办法写，第一版如下：

```
var romanToInt = function(s) {
    let sArr = s.split('');
    let tmpArr = [];
    for(let i = 0; i < sArr.length;i++){
        if( sArr[i] == "I"){
            if(sArr[i + 1] == "V"){
                tmpArr.push(4);
            }else if(sArr[i + 1] == "X"){
                tmpArr.push(9);
            }else{
                tmpArr.push(1);
            }
        }else if(sArr[i] == 'V'){
            tmpArr.push(5);
        }else if(sArr[i] == "X"){
            if(sArr[i + 1] == 'L'){
                tmpArr.push(40);
            }else if(sArr[i + 1] == 'C'){
                tmpArr.push(90);
            }else{
                tmpArr.push(10);
            }
        }else if(sArr[i] == "L"){
            tmpArr.push(50);
        }else if(sArr[i] == 'C'){
            if(sArr[i + 1] == 'D'){
                tmpArr.push(400);
            }else if (sArr[i + 1] == 'M'){
                tmpArr.push(900);
            }else{
                tmpArr.push(100);
            }
        }else if(sArr[i] == 'D'){
            tmpArr.push(500);
        }else{
            tmpArr.push(1000);
        }
    }

    const result = tmpArr.reduce(function(accu, current){return accu + current});

    return result;
};
```

运行之后，我发现当 `s = "IV"` 的时候， `result` 为 9， 但是答案确是 4，我把 `tmpArr` 打印出来发现是 [4, 5]，等于是当 `sArr[i] == 'I'` 的时候，`sArr[i + 1] == 'V'`  得到 4， 但是当 `sArr[i] == 'V'` 的时候，又算了一次，得到 5，所以  两个相加为 9。那么怎么解决这个问题呢，我想到当 `sArr[i] == 'I'` 且 `sArr[i + 1] == 'V'` 的时候，将 `sArr[i + 1]` 的位置跳过， 因此添加了一行 `i++`。另外 'X'、'C' 放在  特定条件下也是如此。

完整代码  如下：

```
var romanToInt = function(s) {
    let sArr = s.split('');
    let tmpArr = [];
    for(let i = 0; i < sArr.length;i++){
        if( sArr[i] == "I"){
            if(sArr[i + 1] == "V"){
                tmpArr.push(4);
                //如果满足条件，则将 i 跳过这位，再继续算后面的数
                i++;
            }else if(sArr[i + 1] == "X"){
                tmpArr.push(9);
                i++;
            }else{
                tmpArr.push(1);
            }
        }else if(sArr[i] == 'V'){
            tmpArr.push(5);
        }else if(sArr[i] == "X"){
            if(sArr[i + 1] == 'L'){
                tmpArr.push(40);
                i++;
            }else if(sArr[i + 1] == 'C'){
                tmpArr.push(90);
                i++;
            }else{
                tmpArr.push(10);
            }
        }else if(sArr[i] == "L"){
            tmpArr.push(50);
        }else if(sArr[i] == 'C'){
            if(sArr[i + 1] == 'D'){
                tmpArr.push(400);
                i++;
            }else if (sArr[i + 1] == 'M'){
                tmpArr.push(900);
                i++;
            }else{
                tmpArr.push(100);
            }
        }else if(sArr[i] == 'D'){
            tmpArr.push(500);
        }else{
            tmpArr.push(1000);
        }
    }
    const result = tmpArr.reduce(function(accu, current){return accu + current});
    return result;
};
```
