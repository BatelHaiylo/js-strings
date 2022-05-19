// function getChar(myString){
//     for(char of myString){
//         console.log(char)
//     }
// }

// function getNewString(myString){
//     sum = ""
//     for(i=0; i<myString.length; i++){
//         sum+= i + "." + myString[i]
//     }
//     return sum
// }

// function evenIndexString(myString){
//     var newString = ""
//     for(i=0; i<myString.length; i++){
//         if(i % 2 == 0){
//             newString += "2"
//         }
//         else{
//             newString += myString[i];
//         }
//     }
//     return newString
// }
// function evenIndexString2(myString){
//     var newString = ""
//     for(i=0; i<myString.length; i++){
//         if(i % 2 == 0){
//             newString += "2" + myString[i] 
//         }
//     }
//     return newString
// }


function printHelloOrBye(){
    var name = prompt("please enter a name:")

    if(name[0] == "A"){
        console.log("hello")
    }
    else{
        console.log("bye")
    }
}

function printYesOrNo(){
    var name = prompt("please enter a name:")
    if(name[name.length-1] == "E"){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}

function getUpperCase(myString){
    return myString.toUpperCase()
}

// convertStrToArray("12,5,662")
// function convertStrToArray(myString){
//     var myArr = []
//     var sum=""

//     for(i=0; i<myString.length; i++){
//         if(myString[i] != ","){
//             myArr.push(parseInt(myString[i]))
//             sum=""
//         }
//         else{
//             sum+=myString[i]
//         }
//     }
//     return myArr;
// }

function ConvertStrToArray(myStr){
    var nothing =[]
    var striing=""
    for(var i=0;i<myStr.length;i++){
        if(myStr[i]==","){
            nothing.push(parseInt(striing))
            striing=""
        }
        else if(i==myStr.length-1){
            striing+=myStr[i]
            nothing.push(parseInt(striing))
        }
        else{striing+=myStr[i]}
}
return nothing;
}
console.log(ConvertStrToArray("12,3,66,8,455"));


// function checkStringLength (){
//     var herString = "name:Batel,age:24,gender:female"
     
//      return herString.substring(herString.match(":"),[herString.match(",")]);

        
//     }

function getBiggerLength(str){
    var maxLength = "";
    var strValue = "";

    for(var i=0; i<str.length; i++;){

        if(str[i]==":"){
            startIndex=i+1;
        }

        if(str[i]==","){
            endIndex=i+1;
            strValue = str.substring(startIndex, endIndex)
        }

        if(str.length==i+1){
            endIndex=i+1;
            strValue = str.substring(startIndex, endIndex)
        }

        if(strValue.length > maxLength.length){
            maxLength = strValue;
        }
    }
    return maxLength
}








function checkStringLength(string){
    if(string.length>5){
        return "Long"
    }
    else{
        return "short"
    }
}

function findCharInString(string){
    if(string.match("a") != null){
        return string.match("a")

    }
    else{
        return "not found"
    }
}
function checkCharInString(string){
    if(string.match("r") != null){
        return "true"

    }
    else{
        return "false"
    }
}

function checkCharInString2(string,char){
    if(string.match(char)){
        return "true"

    }
    else{
        return "false"
    }
}
function checkCharInString3(string,char){
    if(string.match(char)){
        return string.lastIndexOf(char)

    }
    else{
        return "char was not found in string"
    }
}

function partOfString(){
    var str = "sayonara"
    str.substring(0,3)
}
function partOfString2(){
    var str = "sayonara"
    str.substring(2,6)
}
function partOfString3(){
    var str = "sayonara"
    str.substring(2,(str.length-1))
}


function comperingIndexToStringLength(str,indx){
    if(indx>str.length){
        return "index is too big"
    }
    else{
        return str.substr(indx,(str.length-1))
    }
}
function comperingIndexToStringLength2(str,indx){
    if(indx>str.length){
        return "index is too big"
    }
    else{
        return str.substr(indx,(indx+4))
    }
}

function sliceTheString(str,num1,num2){
    return (parseInt(str.substr(num1,(num2+1))))
}

function partOfString4(){
    var str = "sayonara"
    str.substring(0,4)
}

function partOfString5(){
    var str = "sayonara"
    str.substring(2,6)
}

function partOfString6(){
    var str = "sayonara"
    str.substring(3,str.length)
}









    

