export default function Entry(title, body) {
  this.title = title;
  this.body = body;
};

Entry.prototype.numWords = function() {
  return this.title.split(" ").length + this.body.split(" ").length;
};

Entry.prototype.numConsonants = function() {
  return countCharacters("qwrtpsdfghjklzxcvbnm", [this.title, this.body]);
};

Entry.prototype.numVowels = function() {
  return countCharacters("aeiouy", [this.title, this.body]);
};

Entry.prototype.getTeaser = function() {
  let teaser = this.body.match(/\(?[^\.\?\!]+[\.\!\?]\)?/g);
  teaser = teaser[0].split(" ");
  teaser = teaser.slice(0, Math.min(8, teaser.length));
  return teaser.join(" ") + "...";
};

function countCharacters(characters, texts) {
  let count = 0;
  texts.forEach(function(text) {
    text.toLowerCase().split("").forEach(function(character) {
      if (characters.includes(character)) {
        count++;
      }
    })
  });

  return count;
}