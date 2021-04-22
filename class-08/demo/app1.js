
function getUserName(){
    let userName = prompt('Please Enter Your Name');
    document.write('<h2>' + userName + '</h2>');
    return userName;
}

function likesStarWars(){
    let likeSW = prompt('You like Star Wars Better Than Star Trek yes or no');

    while (likeSW.toLowerCase() != 'yes' && likeSW.toLowerCase() != 'no'){
        likeSW = prompt('You like Star Wars Better Than Star Trek yes or no');
    }
}

function customGreeting(user1){
    if (user1.toLowerCase() == 'roger'){
        document.write('<h3>Welcome Darth Roger</h3>');
    }else if(user1.toLowerCase() == 'tom') {
        document.write('<h3>Welcome Acolite Tom</h3>');
    } else {
        document.write('<h3>Imposter</h3>');
    }
}


function addPictures(){
    numberOfPictures = prompt('How many SW Pics do you want to see?');
    url = "https://theglenecho.com/wp-content/uploads/2021/02/baby-yoda.jpg"
    for(let i = 0; i < numberOfPictures; i ++){
        document.write('<img src="' + url + '" >');
    }
}