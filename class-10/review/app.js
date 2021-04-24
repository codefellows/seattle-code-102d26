console.log('hello world');

function getUserName(){
    let userName = prompt('Please Enter Your Name!');
    return userName;
}

let user1 = getUserName();

function checkUserName(){
    while(user1.toLowerCase() != 'roger'){
        user1 = getUserName();
    }
}

checkUserName()

function guessNumber(){
    for(var i = 0; i < 10; i++){
        let correctAnswer = 38;
        let userAnswer = prompt('Enter a number 1-100');
        if(userAnswer == correctAnswer){
            alert('Correct');
            break;
        } else {
            alert('WRONG!!!')
        }
    }
}

guessNumber()
