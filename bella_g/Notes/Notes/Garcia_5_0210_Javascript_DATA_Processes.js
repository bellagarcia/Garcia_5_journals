document.getElementById("p2").style.color = "red";


document.write("This is how we math in Javascript.")

var k = prompt("Pick a number");
var r = prompt("Pick another number");
var num1 = parseInt(k);
var num2 = parseInt(r);
var d = (num1+num2);
document.write("\n k is " + k + " r is " + r + " d is k + r and it's \n <br/>" + d);
document.write("\n <br> multiplication:\n<br>");
document.write(k * r);
document.write("\n <br> division:\n<br>");
document.write(k / r);
document.write("\n <br> addition:\n<br>");
document.write(num2 + num1);
document.write("\n <br> subtraction:\n<br>");
document.write(k - r);
document.write("<br>this is num1 " + num1);
document.write("<br>this is num2 " + num2);
num1++;
document.write("<br>this is num1 again " +num1++ + "<br>");
num2++;
document.write("<br>this is num2 again " +num2++ + "<br>");
document.write("<br>this is num2 " + (++num2) + "<br>";
num1 = 42;
num1 += 5;
document.write(num1);
num1 -= 5;
document.write(num1);
num1 /=5;
document.write(num1);


if ( k == r ) {
    document.writeln("k and r are the same");
} else if (k < r){
    document.write("<br> k is less than r");
} else if (k > r){
    document.write("<br>k and r are NOT the same");
}
    else {
        document.write("This should never happen")
    }