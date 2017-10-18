function tester(){

    document.getElementById("output").innerHTML = firstLast6(1,4);
    document.getElementById("output1").innerHTML = has23(8,6,3);
    document.getElementById("output2").innerHTML = fix23(1,2,3);
    document.getElementById("output3").innerHTML = countYZ("fez day");
    document.getElementById("output4").innerHTML = endOther("and", "hand");
    document.getElementById("output5").innerHTML = starOut("hel*lllo");
    document.getElementById("output6").innerHTML = getSandwich("breadxbread");
    document.getElementById("output7").innerHTML = canBalance(1,1,1,2,1)
    document.getElementById("output8").innerHTML = countClumps(1,2,2,3,4,4)
    document.getElementById("output9").innerHTML = evenlySpaced(1,2,3)
    //test third method, etc
}

function firstLast6(nums){
    if(nums[0] == 6 ){
        return true;
    }

    if(nums[nums.length - 1] == 6){
        return true;
    }else{
        return false;
    }
}

function has23(ints){
    if(ints[0]==2 || ints[0]==3 || ints[1]==2 || ints[1]==3){
        return true;
    }else{
        return false;
    }
}

function fix23(ints){
    var a = ints.indexOf(2);
    var b = ints.indexOf(3);
    var c = ints.lastIndexOf(2);
    if(a == b-1 || c == b-1){
        ints[b]=0;
    }
    return ints;
}

function countYZ(ln){
    var l = 0;
    var i = 0;
    ln = ln.toLowerCase();
    if(ln[ln.length-1]=="z" || ln[ln.length-1]=="y"){
        l+=1;
    }
    while(i<ln.length){
        if(ln[i] === (" ")){
            if(ln[i-1] === ("z")|| ln[i-1] === ("y")){
                l+=1;
            }
        }
        i++;
    }
    return l;
}

function endOther(str,str1){
    str = str.toLowerCase();
    str1 = str1.toLowerCase();
    if(str.length == 1){
        if(str[str.length-1] == str1[str1.length-1]){
            return true;
        }
    }
    if(str[str.length-1] == str1[str1.length-1] && str[str.length-2] == str1[str1.length-2]){
        return true;
    }else{
        return false;
    }

}

function starOut(str){
    var i= 0
    var result = "";
    while(i<str.length){
        if(str[i] != "*" && str[i-1] != "*" && str[i+1] != "*"){
            result += str[i];
        }
        i++;
    }
    return result;
}

function getSandwich(str){
    var a = str.indexOf("bread") + 4;
    var b = str.lastIndexOf("bread");
    var c = "";
    var i = a + 1;
    while(i > a && i < b){
        c += str[i];
        i++;
    }
    return c;
}

function canBalance(ary){
    var add1 = 0;
    var add2 = 0;
    var x = 0;
    for(var i=0; i < ary.length; i++){
        add1 += ary[i]
        for(var y = i+1; y < ary.length; y++) {
            add2 += ary[y];
        }
        if(add1 == add2){
            x += 1;
        }
        add2 = 0;
    }
    if(x == 0){
        return false;
    }
    return true;
}

function countClumps(ary){
    var clumps = 0;
    for(var i=0; i < ary.length; i++){
        var x = i+1;
        if(ary[i] == ary[x]){
            clumps += 1;
            while(ary[i] ==ary[x]){
                i++;
                x++;
            }
        }
    }
    return clumps;
}

function evenlySpaced(a,b,c){
    if(b-a == c-b){
        return true;
    }
    if(b-a == a-c){
        return true;
    }
    if(a-c == c-b){
        return true;
    }
    return false;
}