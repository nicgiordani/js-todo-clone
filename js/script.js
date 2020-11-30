// Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine.
// Consiglio: fate uno step alla volta, prima caricate Handlebars da CDN in pagina, poi provate a seguire i primi step della sezione "Usage", modificando le proprietà dell'oggetto context.

$(document).ready(function () {

  var compiti = [
    "comprare il pane",
    "Andare a crossfit",
    "Lavare la macchina",
    "Conquistare il mondo"
  ];

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < compiti.length; i++) {

    var context = {
      testo: compiti[i]

    };
    var html = template(context);
    $("#todo").append(html);

  }

});
