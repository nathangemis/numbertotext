function app() {
    let guessNumb = prompt("Enter a number between 0 and 999");
    let translateTab = [];
    let engNumb = "";
    if (guessNumb != parseFloat(guessNumb) || guessNumb < 0 || guessNumb > 999) {
              alert("Bad number");
        app();
    } else {
        for (let i = 0; i < guessNumb.length; i++) {
            translate(guessNumb[i]);
            translateTab.push(engNumb);
        }
        composition();
        alert(stringNmbr);
        app();
    }
function translate(key) {
    switch (key) {
        case "0":
            engNumb = "zero"
            break;
        case "1":
            engNumb = "one"
            break;

        case "2":
            engNumb = "two"
            break;
        case "3":
            engNumb = "three"
            break;
        case "4":
            engNumb = "four"
            break;
        case "5":
            engNumb = "five"
            break;
        case "6":
            engNumb = "six"
            break;
        case "7":
            engNumb = "seven"
            break;
        case "8":
            engNumb = "eight"
            break;
        case "9":
            engNumb = "nine"
            break;
    }
}
function exception(x) {
    switch (guessNumb[x]) {
        case "2":
            translateTab[x] = "twen";
            break;
        case "3":
            translateTab[x] = "thir";
            break;
        case "5":
            translateTab[x] = "fif";
            break;
    }
}
function composition() {
   if (guessNumb.length == 1) {
        stringNmbr = translateTab[0];
    } else if (guessNumb.length == 2) {
        if (guessNumb[0] == "1" && guessNumb > 15) {
            translateTab[0] = "teen";
            stringNmbr = translateTab[1] + translateTab[0];

        } else if (guessNumb < 16 && guessNumb > 10) {
            switch (guessNumb) {
                case "11":
                    stringNmbr = "eleven";
                    break;
                case "12":
                    stringNmbr = "twelve";
                    break;
                case "13":
                    stringNmbr = "thirteen";
                    break;
                case "14":
                    stringNmbr = "fourteen";
                    break;
                case "15":
                    stringNmbr = "fifteen";
                    break;
            }
        } else if (guessNumb[0] != "1" && guessNumb.length < 3) {

            exception(0);
            if (guessNumb[1] == 0) {
                stringNmbr = `${translateTab[0]}ty`;
            } else {
                stringNmbr = `${translateTab[0]}ty-${translateTab[1]}`;
            }
        } else if (guessNumb == "10") {
            stringNmbr = "ten";
        }
    }
    if (guessNumb.length == 3) {
        if (guessNumb[1] == "0" && guessNumb[2] != "0") {
            stringNmbr = `${translateTab[0]} hundred ${translateTab[2]}`
        } else if (guessNumb[1] == 1 && guessNumb[2] < 6 && guessNumb[2] > 0) {
            switch (guessNumb[2]) {
                case "1":
                    stringNmbr = `${translateTab[0]} hundred eleven`
                    break;
                case "2":
                    stringNmbr = `${translateTab[0]} hundred twelve`
                    break;
                case "3":
                    stringNmbr = `${translateTab[0]} hundred thirteen`
                    break;
                case "4":
                    stringNmbr = `${translateTab[0]} hundred fourteen`
                    break;
                case "5":
                    stringNmbr = `${translateTab[0]} hundred fifteen`
                    break;
            }
        } else if (guessNumb[1] == 1 && guessNumb[2] == 0) {
            stringNmbr = `${translateTab[0]} hundred ten`
        } else if (guessNumb[1] == 0 && guessNumb[2] == 0) {
            stringNmbr = `${translateTab[0]} hundred`
        }
        else {
            exception(1);
            if (guessNumb[2] == 0) {
                stringNmbr = `${translateTab[0]} hundred ${translateTab[1]}ty`
            }
            else {
                stringNmbr = `${translateTab[0]} hundred ${translateTab[1]}ty-${translateTab[2]}`
            }
        }
    }
}  
}
app();










