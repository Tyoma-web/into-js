var firstName = prompt('What is your name?');
var age = prompt('What is your age?');
var job = prompt('What do you do for a living??');
var author = prompt('Your favorite author?');
var color = prompt('Your favorite color?');
var message = 'Hello, ';


if (firstName == null || firstName == "") {
  message = message + '';
} else {
  message = message + firstName + '! ';
}
if (age >= 18)  {
  message = message + 'I see you are ' + age + ' and you are already allowed to vote.';
} else {
  message = message +' I see you are ' + 'less than 18  ' + 'and you are not yet allowed to vote.'
}

if (job == null || job == "") {
  message = message + "";
} else {
  message = message + "You are working as  " + job + '.';
}

if (color == null || color == "") {
  message = message + '';
} else {
  message = message + ' I also like ' + color + ' color. ';
}

if (author == null || author == "") {
  message = message + '';
} else {
  message = message + author + '  is one of my favorite authors.';
}

  document.getElementById("Hello").innerHTML = message;