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
const entry = Entry("Ttl", "Bd");
entry.numConsonants();
Expected-output: 5