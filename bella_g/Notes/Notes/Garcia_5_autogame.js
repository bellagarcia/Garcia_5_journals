var magic = Math.floor((Math.random() * 15) + 1);
var guess = prompt ("What's your guess");
while (magic != guess){
    if (guess < magic){
        guess = prompt("Too low :( Try again");
        document.write("Too Low... ");
    } else if (guess > magic){
        guess = prompt("Too high :((( Try again");
        document.write("Too High... ")
    } else {
            document.write("This should not happen");
    }
    
}
document.writeln("You are a winner!!!1!1!!");
        

