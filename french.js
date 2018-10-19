let number = prompt('Inscrit un nombre entre 0 et 999');
finalWord ="";


let oneToNineTeen = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
let tenToNinety = ["vingt","trente","quarante","cinquante","soixante","septante","quatre-vingt","nonante"];

if(number < 19){
    wordIndex = number - 1;
    finalWord = oneToNineTeen[wordIndex];

    
    

} else if (number < 100 && number > 19){
    let ones = number % 10;
    let tens = Math.floor(number/10);

    indexOnes = ones -1;
    indexTens = tens -2;
    
    if(indexOnes == 0){
        finalWord = `${tenToNinety[indexTens]} et ${oneToNineTeen[indexOnes]}`

    }else {
        finalWord = `${tenToNinety[indexTens]} ${oneToNineTeen[indexOnes]}`
    }
    
} else if (number.length == 3){
    let ones = number[0] - 1;
    let tens = `${number[1]}${number[2]}`
    //if()
    
    let tens = Math.floor(tens/10);

}

alert(finalWord);