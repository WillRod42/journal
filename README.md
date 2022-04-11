Describe: Entry()

Test: "It should return an object with the given title and body as properties"
Code: Entry("Title", "Body");
Expected-output: {"title": "Title, "body": "Body}



Describe: numWords()

Test: "It should return the number of words of the journal entry it is run on"
Code:
const entry = Entry("Title", "Body");
entry.numWords();
Expected-output: 2



Describe: numConsonants()

Test: "It should return the number of consonants of the journal entry it is run on"
Code: 
const entry = new Entry("Ttl", "Bd");
entry.numConsonants();
Expected-output: 5

Test: "It should return the number of consonants of the journal entry it is run on, excluding vowels"
Code: 
const entry = new Entry("Title", "Body");
entry.numConsonants();
Expected-output: 5



Describe: numVowels()

Test: "It should return the number of vowels of the journal entry it is run on"
Code: 
const entry = Entry("ie", "oy");
entry.numConsonants();
Expected-output: 5

Test: "It should return the number of vowels of the journal entry it is run on, excluding consonants"
Code: 
const entry = new Entry("Title", "Body");
entry.numConsonants();
Expected-output: 5



Describe: getTeaser()

Test: "It should return the first eight words of the body of an entry"
Code:
const entry = new Entry("Title", "Body");
entry.getTeaser();
Expected-output: "Body..."
