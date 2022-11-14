const second = document.getElementById( "second" );
const minute = document.getElementById( "minute" );
const hour = document.getElementById( "hour" );

const clock = document.querySelector( "div" );

for ( let i = 1; i < 13; i++ ){
    const num = document.createElement( "div" );
    const ele = document.createElement( "div" );
    num.appendChild( ele );
    ele.innerHTML = i.toString();
    num.className = "numbers";
    clock.appendChild( num );
}

var child = document.getElementById( "clock" ).children;
console.log( child );
var deg = 122
for ( let i = 4; i < 16; i++ ){
    child[i].style.transform = "rotate(" + deg + "deg)";
    console.log( child[i] );
    child[i].children[0].style.transform = "rotate(" + -deg + "deg)";
    deg += 30;
}

function fun() {
    const d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = ( d.getHours() ) % 12;
    let dh = h * 30 - 90 + 0.5 * m;
    let dm = m * 6 - 90 + 0.1 * s;
    let ds = s * 6 - 90;
    hour.style.transform = "rotate(" + dh + "deg)";
    minute.style.transform = "rotate(" + dm + "deg)";
    second.style.transform = "rotate(" + ds + "deg)";
    setTimeout( fun, 1000 )
}

fun();

