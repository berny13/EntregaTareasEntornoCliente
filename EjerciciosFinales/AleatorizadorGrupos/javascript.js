$("button").on("click", function (e) {
	e.preventDefault();
	var nombresporGrupo = parseInt($(".pergroup").val()),
		todoslosNombres = $("textarea").val().split("\n"),
		nombreslenght = todoslosNombres.length;

	var numerogrupos = Math.ceil(nombreslenght / nombresporGrupo);

	if ($(".numerogrupos").val()) {
		numerogrupos = parseInt($(".numerogrupos").val());
		nombresporGrupo = nombreslenght / numerogrupos;
	}

	$(".grupos").empty();

	for (i = 0; i < numerogrupos; i++) {
		$(".grupos").append(
			'<div class="group" id="group' +
				(i + 1) +
				'"><h2>Group ' +
				(i + 1) +
				"</h2></div>"
		);
	}

	$(".group").each(function () {
		for (j = 0; j < nombresporGrupo; j++) {
			var randname = Math.floor(Math.random() * todoslosNombres.length);
			if (todoslosNombres[randname]) {
				$(this).append("<p>" + todoslosNombres[randname] + "</p>");
			}
			todoslosNombres.splice(randname, 1);
			console.log(todoslosNombres);
		}
	});
});

$(".toggle-wrap a").on("click", function (e) {
	e.preventDefault();
	$(".wrap").toggleClass("alt");
	$(".pergroup-wrap, .numerogrupos-wrap").find("input").val("");
});
