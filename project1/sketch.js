var txt;

var count = {};//creating object to store properties(words)

var keys = [];
function preload(){
    //loading strings from the text file
txt = loadStrings('trial.txt');
//each line will be converted to element of array
}

function setup(){
    //join all the lines
    var joinLines = txt.join('\n');
 //split the lines into words
 var word = joinLines.split(/\W+/);//\W indicates something that is not from a-z and 0-9
 noCanvas();
for (var i = 0;i<word.length;i++){
    //checking each word for counting
    var eachWord = word[i];
    if(count[eachWord] ===undefined){
        //checking id the count has a property
count[eachWord] = 1;
//enter words in the new array only when the word is not repeated
keys.push(eachWord);
    }else{
        count[eachWord]+=1;
    }
}

//arranging in descending order
keys.sort(compare)
   function compare(a,b){
    var countA = count[a];
    var countB =  count[b];
    return countB - countA;
}
//displaying each word with its count
for(var i = 0;i<keys.length;i++){
var key = keys[i];
createDiv(key +' '+ count[key]);
}
}