console.log('write code here!');

var promise = $.ajax({
  url: '/api/dragonlance'
});

promise.done(function(data) {
  console.log('data', data);

  var characterList = document.querySelector('.character-list');

  var html = '';

  for (var i = 0; i < data.characters.length; i++) {
    var character = data.characters[i];

    var output = Mustache.render('<li><h2>{{name}}</h2><p>Description: {{description}}</p></li>', character);
    console.log(output);
    html += output;
  }

  characterList.innerHTML = html;

});
