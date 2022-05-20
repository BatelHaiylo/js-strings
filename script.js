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

// function printHelloOrBye(){
//     var name = prompt("please enter a name:")

//     if(name[0] == "A"){
//         console.log("hello")
//     }
//     else{
//         console.log("bye")
//     }
// }

// function printYesOrNo(){
//     var name = prompt("please enter a name:")
//     if(name[name.length-1] == "E"){
//         console.log("Yes")
//     }
//     else{
//         console.log("No")
//     }
// }

// function getUpperCase(myString){
//     return myString.toUpperCase()
// }

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

// function ConvertStrToArray(myStr){
//     var nothing =[]
//     var striing=""
//     for(var i=0;i<myStr.length;i++){
//         if(myStr[i]==","){
//             nothing.push(parseInt(striing))
//             striing=""
//         }
//         else if(i==myStr.length-1){
//             striing+=myStr[i]
//             nothing.push(parseInt(striing))
//         }
//         else{striing+=myStr[i]}
// }
// return nothing;
// }
// console.log(ConvertStrToArray("12,3,66,8,455"));

// function checkStringLength (){
//     var herString = "name:Batel,age:24,gender:female"

//      return herString.substring(herString.match(":"),[herString.match(",")]);

//     }

// function getBiggerLength(str){
//     var maxLength = "";
//     var strValue = "";

//     for(var i=0; i<str.length; i++){

//         if(str[i]==":"){
//             startIndex=i+1;
//         }

//         if(str[i]==","){
//             endIndex=i+1;
//             strValue = str.substring(startIndex, endIndex)
//         }

//         if(str.length==i+1){
//             endIndex=i+1;
//             strValue = str.substring(startIndex, endIndex)
//         }

//         if(strValue.length > maxLength.length){
//             maxLength = strValue;
//         }
//     }
//     return maxLength
// }

// function getKeyValue2(myStr, key){
//     var startValue = 0;
//     var endValue ;
//     for(i=0; i<myStr.length; i++){
//         if(myStr[i] == ":"){
//             startValue = i+1
//         }
//         if(myStr[i] == ","){
//             endValue = i
//             console.log(myStr.substring(startValue,endValue))
//         }
//         if(i == myStr.length-1){
//             console.log(myStr.substring(startValue,myStr.length))

//         }
//     }
// }
// getKeyValue2("name:nathan,family:krasney,city:haifa" ,"family")

// myStr = "js_string_3_b"
// function getKeyLenght(myStr){
//     var value = ""
//     var key = ""

//     return key.length
// }

// myStr = "js_string_3_b"
// function getValueLength(myStr){
//     var value = ""
//     var key = ""

//     return value.length
// }

// function checkStringLength(string){
//     if(string.length>5){
//         return "Long"
//     }
//     else{
//         return "short"
//     }
// }

// function findCharInString(string){
//     if(string.match("a") != null){
//         return string.match("a")

//     }
//     else{
//         return "not found"
//     }
// }
// function checkCharInString(string){
//     if(string.match("r") != null){
//         return "true"

//     }
//     else{
//         return "false"
//     }
// }

// function checkCharInString2(string,char){
//     if(string.match(char)){
//         return "true"

//     }
//     else{
//         return "false"
//     }
// }
// function checkCharInString3(string,char){
//     if(string.match(char)){
//         return string.lastIndexOf(char)

//     }
//     else{
//         return "char was not found in string"
//     }
// }

// function partOfString(){
//     var str = "sayonara"
//     str.substring(0,3)
// }
// function partOfString2(){
//     var str = "sayonara"
//     str.substring(2,6)
// }
// function partOfString3(){
//     var str = "sayonara"
//     str.substring(2,(str.length-1))
// }

// function comperingIndexToStringLength(str,indx){
//     if(indx>str.length){
//         return "index is too big"
//     }
//     else{
//         return str.substr(indx,(str.length-1))
//     }
// }
// function comperingIndexToStringLength2(str,indx){
//     if(indx>str.length){
//         return "index is too big"
//     }
//     else{
//         return str.substr(indx,(indx+4))
//     }
// }

// function sliceTheString(str,num1,num2){
//     return (parseInt(str.substr(num1,(num2+1))))
// }

// function partOfString4(){
//     var str = "sayonara"
//     str.substring(0,4)
// }

// function partOfString5(){
//     var str = "sayonara"
//     str.substring(2,6)
// }

// function partOfString6(){
//     var str = "sayonara"
//     str.substring(3,str.length)
// }

// function userNameData(){
//     var userName = prompt("please enter your name:")
//     var startName;
//     var endNane;

//     for(i=0; i<userName.length; i++){
//         if(userName[i]==" "){
//             console.log("string contain spaces")
//         }
//         else{
//             console.log("string dosent contain spaces")
//         }
//         if(userName[i]==userName[i].toUpperCase){
//             startName += userName[i]
//             console.log(userName.substring(startName))
//         }
//         if(userName[i]== userName.length-1){
//             endNane = userName[i]
//             console.log(userName.substring(startName, endName))
//         }
//     }
//     console.log(userName.length);
// }
// // function checkHowManyNames(someName){
// //     var spaceSum;
// //     for(i=0; someName.mach(" ")!= null; i++){
// //         spaceSum++
// //         if()
// //     }
// // }

// function checkHowManyNames(someName){
//     var spaceSum = 0
//     var nameArr = []
//     var srartStr =someName[0]
//     var endtStr =""

//     c{

//         if(someName[i] == someName[(someName.length-1)]){
//             someName.slice(someName[i])
//         }
//         if(someName.mach(" ")){
//             someName.toLowerCase()
//             return someName.charAt(0).toUpperCase() + someName.slice(1)
//         }
//         else if(!someName.mach(" ")){
//             spaceSum++
//             if(spaceSum==1  && someName[i]==" "){
//                 endStr += someName[i]
//                 nameArr.push(someName.substring(endStr))
//                 endtStr =""
//             }
//             else if(spaceSum<1  && someName[i]==" ")
//         }

//     }
// }

function checkHowManyNames(someName){
    var spaceCounter = 0
    var nameArr = []
    var endStr =""


    for(i=0; i<someName.length; i++){
        if(someName[i]==(" ")){
            spaceCounter++;
            endStr = i;
        }
    }

    if(spaceCounter<1){
        someName.toLowerCase()
        return someName.charAt(0).toUpperCase() + someName.slice(1);
    }
    else if(spaceCounter==1){
        var frs = nameArr.push(someName.substring(0,endStr));
        var sec = nameArr.push(someName.substring(endStr+1,someName.length));
        return nameArr        
    }
    else if(spaceCounter>=2){
        console.log(someName);
    }

}

function getLongestLastNamePrintShortest(str1,str2){

    for(i=0; i<(str1.length+str2.length); i++){
        if(str1.length>str2.length){
            console.log(str2.toLowerCase())
            return str1

        }
        console.log(str1.toLowerCase())
        return str2
    }

}

function getFirstCharFnameDotLnameUpperCase(fName,lName){
    for(i=0; i<(fName.length+lName.length); i++){
        return fName.substr(0, 1).toUpperCase()+"."+lName.toUpperCase()
    }
}

function getExcistingCarIndexOrFullString(str,tav){
    if(str.indexOf(tav) != -1){
        return str.indexOf(tav)
    }
    else{
        return str
    }
}

function getStringLongerThenSixOrCharInString(str,tav){
    if(str.length>6){
        return str
    }
    return str.indexOf(tav)
}

function checkIfCountryNameLongerThenThree(country){
    if(country.length<3){
        return "yes"
    }
    return "no"
}

function checkFirstnameAndLastname(){
    var fName = prompt("please enter your first name")
    var lName = prompt("please enter your first name")

    if(!fName.indexOf("a") == 0){
        console.log("your first name contains the letter a")
    }
    if(lName.match("api")){
        console.log("your last name contains the string api")
    }
}

