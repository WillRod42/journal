export default function Entry(title, body) {
  this.title = title;
  this.body = body;
};

Entry.prototype.numWords = function() {
  return this.title.split(" ").length + this.body.split(" ").length;
};

Entry.prototype.numConsonants = function() {
  let count = 0;
  this.title.split("").forEach(function(character) {
    if ("qwrtpsdfghjklzxcvbnm".includes(character)) {
      count++;
    }
  });
  this.body.split("").forEach(function(character) {
    if ("qwrtpsdfghjklzxcvbnm".includes(character)) {
      count++;
    }
  });

  return count;
};