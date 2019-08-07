function pulaLinha() {
    document.write("<br>");
}

var a = 1;
var b = 0;

for(cont = 1; cont < 10; cont++) {
    for(conta = 1; conta <= 10; conta++) {
        var result = a * b;
        document.write(b + "x" + a + " = " + result + " |" );
        b++;       
        if(conta == 10) {
            pulaLinha();
            a++;
            b = 0;
        }
        
    }
}