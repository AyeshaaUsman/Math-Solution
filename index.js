
var choice = prompt((`What Math Solution Do You Want?
    1) Forward Counting
    2) Backward Counting
    3) Multiplication Table

    (Select Numbers 1,2,3)`
 ));
 

 switch (choice) {
    case '1':
        var forwardCounting;
        document.write("<h3>Forward Counting:</h3>");
        for (var i = 1; i <= 100; i = i + 10) {
            for(var j = i; j < i + 10; j++){
            document.write(" "+ j + " ");
        }
        document.write("<br><br>");
    }
        break;
    case '2':
        var backwardCountingl;
        document.write("<h3>Backward Counting:</h3>");
    
        for (var i = 100; i >= 1; i = i - 10) {
            for (var j = i; j > i - 10 && j >= 1; j--) {
                document.write(" " + j + " ");
            }
            document.write("<br><br>");
        }
        break;
    case '3':
        var multiplicationTable;

        var tableOf = parseInt(prompt("Enter the table number?"));
        document.write("<h3>Multiplication Table of " + tableOf + ":</h3>");
        for (var i = 1; i <= 10; i++) {
            document.write(tableOf + " X " + i + " = " + (tableOf * i) + "<br>");
        }
        document.write("<br>");
}


