// Assignment code here
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberChar= ["1","2","3","4","5","6","7","8","9"];
var specialChar= ["!","@","#","$","%","^","&","*","(",")","?"];
var passwordLength = []

function randomInt (min,max){
    if (!max){
        max=min
        min=0
    }
    var random=Math.random();
    return Math.floor (min * (1-random) + random * max);//dropt decimal point in number
}
function randItem (list){
    return list[(randomInt.length)]
} 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){

//Psuedo Code
// 1. Prompt the user on the criteria for the password
    // use window.prompt?
    //a. user selects citeria
    //b. lenth is between 8 and 128 characters
    //c. user selects between Upper, and lower case letters, numbers, and special characters
//2.  User imput must be validated and one criteria is selected. 

//need to return generated pasword by storing into variable.  
var length = parseInt(prompt('Hello, how long do you want your password to be?'));
if(isNaN(length)){
    window.alert("Please enter a number between 8 and 128");
    return //return entered to limit the user to continue with the prompts to generate password.  Starts the code over and forces the user to select new criter.  
}else if (length<8){
    window.alert("please choose password greater the 8")
    return //stops the funtion
} else if (length>128){
    window.alert("choose password less then 128 characters")
    return // stops the function and returns to the position where the fuction was originally called
} 
var includeUpperCase=confirm("would you like to use Upper Case")
var includeLowerCase=confirm("would you like to use Lower Case")
var includeNumber=confirm("would you like to use a Number")
var includeSpecialCharacter=confirm("would you like to use a special character")

if(includeUpperCase === false && includeLowerCase === false && includeNumber === false && includeSpecialCharacter === false)
    { alert("you must choose one parameter")
return null}

if (includeUpperCase === true){
    passwordLength.push(upperCase) // the push should add the element to the new array?
}
if (includeLowerCase === true){
    passwordLength.push(lowerCase)
}
if (includeNumber === true){
    passwordLength.push(numberChar)
}
if (includeSpecialCharacter === true){
    passwordLength.push(specialChar)
} 

var genPassword = "" //open string that will adopt each iteration of the for loop in the next line
// for loop used to take a ranom list dictated by user
var passwordArray=[]
for (var i = 0; i < length; i++){
    var randomItem = getRandomItem(passwordLength);
    
}
}

// Write password to the #password input
function writePassword() {
  //generatePassward function is not defined-->Define generatePassword() by creating a function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordLength;
console.log(passwordLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//citations: 
//Creating javascript random numbers with math.random(). Udacity. (2022, September 27). Retrieved October 30, 2022, from https://www.udacity.com/blog/2021/04/javascript-random-numbers.html#:~:text=Javascript%20creates%20pseudo%2Drandom%20numbers,it%20will%20never%20be%201.
// Hailemariam, A. (2022, October). Tutoring. Tutoring Session. 
// zacharyliuzacharyliu                    24.8k44 gold badges2020 silver badges1515 bronze badges, Ionuț G. StanIonuț G. Stan                    172k1818 gold badges187187 silver badges199199 bronze badges, Darin DimitrovDarin Dimitrov                    1.0m267267 gold badges32573257 silver badges29142914 bronze badges, Lior ElromLior Elrom                    18.6k1616 gold badges7676 silver badges9191 bronze badges, Gordon GustafsonGordon Gustafson                    39.2k2525 gold badges111111 silver badges155155 bronze badges, Shams AnsariShams Ansari                    72255 silver badges1212 bronze badges, Prasobh.KollattuPrasobh.Kollattu                    1, CodlerCodler                    10.6k66 gold badges5151 silver badges6565 bronze badges, Stanislav VincentStanislav Vincent                    60177 silver badges66 bronze badges, StarkersStarkers                    9, Kamil KiełczewskiKamil Kiełczewski                    76.9k2626 gold badges339339 silver badges316316 bronze badges, TravisTravis                    1, Ariful IslamAriful Islam                    62477 silver badges1212 bronze badges, Janaka R RajapakshaJanaka R Rajapaksha                    3, NewBieCoderNewBieCoder                    17922 silver badges55 bronze badges, ChrisChris                    2, user1764199user1764199                    16511 gold badge22 silver badges44 bronze badges, epixepix                    11311 silver badge55 bronze badges, Learner.jsLearner.js                    7111 silver badge33 bronze badges, … Achintha IsuruAchintha Isuru                    2. (1957, January 1). Generating random whole numbers in JavaScript in a specific range. Stack Overflow. Retrieved October 30, 2022, from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range#:~:text=random()%3B-,Math.,max%20(non%2Dinclusive). 