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
