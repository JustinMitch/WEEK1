
var stringtype = "mysring", stringtype2="mystring", bool = true, boolS="true", numbertype = 10, numbertypeS="10";
//counter from 1-10 
for ( var i = 0; i <= 10; i++ ) {
	console.log(i);
	document.write(i + "<br />");

}

//counter from 10-0
document.write( "<br />");
for ( var i = 10; i >= 0; i-- ) {
	console.log(i);
	document.write(i + "<br />");

}
//comparison
if(numbertype == numbertypeS ) 
{
console.log ("is true");
} 
else 
{
console.log ("is false");
}

if (numbertype === numbertypeS) 
{
console.log ("is true");
}
else 
{
console.log ("is false");
}
//boolean comparison
if(bool == boolS ) 
{
console.log ("is true");
} 
else 
{
console.log ("is false");
}


if(bool === boolS ) 
{
console.log ("is true");
} 
else 
{
console.log ("is false");
}
//string comparison

if( stringtype== stringtype2 ) 
{
console.log ("is true");
} 
else 
{
console.log ("is false");
}

if( stringtype=== stringtype2 ) 
{
console.log ("is true");
} 
else 
{
console.log ("is false");
}



console.log("before");
console.log("stringtype");

stringtype = stringtype + "more string";

console.log("before");
console.log(stringtype);


