let game_number=26;
let user_number=prompt("Guess a number");
while(user_number!=game_number){
    console.log("U have guess wrong number");
    user_number=prompt("Guess another time");
}
console.log("U guess right number");