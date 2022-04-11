export default function Entry(title, body) {
  this.title = title;
  this.body = body;
};

Entry.prototype.numWords = function() {
  return this.title.split(" ").length + this.body.split(" ").length;
};