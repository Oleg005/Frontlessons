// Рівносторонній трикутник
document.write("<br><br>")
let y = 8;
let x = 7;
let n = 1;

for (let h = 0; h < y; h++) {
  for (let wsp = 0; wsp < x; wsp++) {
    document.write("&nbsp\n");
  }
  for (var wst = 0; wst < n; wst++) {
    document.write("*");
  }
  x -= 1;
  n += 2;
  document.write("<br>");
}

// Прямокутний трикутник
document.write("<br><br>")
for (let a = 0; a < 8; a++) {
    for (let b = 0; b < a + 1; b++) {
      document.write("*\n");
    }
    document.write("<br>");
}

// Ромб
document.write("<br><br>")
let first = 18;
let second = 1;
let third = 20;
for (let a = 0; a <= third; a++){
    for (let j = 0; j <= first; j++){
        document.write("&nbsp")
    }
    for (let p = 0; p < second; p++){
        document.write("*")
    }
    first--;
    second++;
    if (a >= third / 2 && a <= third){
        second = second - 2;
        first = first + 2;
    }
    document.write("<br>");
}

// Порожній квадрат
document.write("<br><br>")
for(a=1; a<=10; a++){
    if(a==1 || a==10){ 
        for(let j=0; j<10; j++){
            document.write("&nbsp;&nbsp;*");
        }
        document.write("<br>");
    }else{
        document.write("&nbsp;&nbsp;*");
        for(let k=0; k<8; k++){
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
        }
        document.write("&nbsp;&nbsp;*");
        document.write("<br>");
    }
}

