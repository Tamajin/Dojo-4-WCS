// créer une fonction qui décompose une chaine de caractères dans un tableau avec objets.
// mettre tout en minuscule et caracteres spéciaux.

// méthode 1

function countLetters(word) {
    word = word.replace(/[&#,+()$~%'":*?<>!_\-{}|]/," ").split(" ").join("").toLowerCase();
    const numberOfLetters = {};
    for (let i = 0; i < word.length; i++){
        const letter = word[i];
        if (!numberOfLetters[letter]){
            numberOfLetters[letter] = 1;
        }
        else {
            numberOfLetters[letter]++;
        }
    }
    return numberOfLetters;
};

console.log( countLetters("cassse % tç`èèèteMPT") );

// méthode 2 qui fonctionne pas bien lol!!!

function countLettersBis(word){
   word = word.replace(/[&#,+()$~%'":*?<>!_\-{}|]/," ").split(" ").join("").toLowerCase();
   let lettre = {};
   for (let i = 0; i < word.length; i++){
     incr(word[i]);
   }
   return lettre;
 
   function incr(key){
     if (lettre[key]){
       lettre[key]++;
     }
     else{
       lettre[key] = 1;
   }
 }
}
 console.log(countLettersBis("b o N j ^ o oo u r à to uuu s"));
