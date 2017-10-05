$(document).ready(function () {

	$("div input:text").css({
		background: "white",
		border: "2px purple solid"
	});

	$("div input:button").css({
		background: "white",
		border: "2px purple solid"
	});

	//$("div .rtable").css({
	//	background: "white",
	//	border: "2px purple solid"
	//});

	$("#knappSkickaIn").click(function () {

		var input = "<div class='rTableRow'><div class='rTableCell'>"
			+ $("#fornamn").val() + "</div>" +
			"<div class='rTableCell'>"
			+ $("#efternamn").val() + "</div>" +
			"<div class='rTableCell'>"
			+ $("#telefonnummer").val() + "</div>" +
			"<div class='rTableCell'>"
			+ $("#personnummer").val() + "</div></div>";

		$("#tablebody").append(input);

	});

	$("#kon")
	{

		$("#kon")

		var nummer = "#personnummer";
		int i = int.Parse(personnummer[8].ToString());

		Console.WriteLine(personnummer[8]);
		string tmp = i % 2 == 0 ? "Kvinna" : "Man";

		Console.WriteLine(tmp);

	});

	$("#sorteringsKnapp").click(function () {

		for (var i = 0; i < rTableRow; i++)
		{
			var index = i;

			for (var j = i + 1; i < rTableRow; i++)

			

			{

			}
		}

	});

});

//function SorteraFN() {
//	var myTableBody = document.getElementById("tablebody");


//	for (var i = 0; i < myTableBody.children.length; i++) {
//		var minIndex = i; //Vi ställer oss på plats i, som vi här antar innehåller det lägsta värdet

//		for (var j = i + 1; j < myTableBody.children.length; j++) //och med en annan pekare på plats j (1 över i)
//		{
//			var nameMin = myTableBody.children[minIndex].cells[0].innerHTML; //1. värdet på plats 0, 0 || 2. 1, 0 || 3. 2, 0
//			var nameJ = myTableBody.children[j].cells[0].innerHTML; // 1. värdet på plats 1, 0 || 2. 2, 0 ||

//			if (nameMin.localeCompare(nameJ) > 0) //jämför nameMin med nameJ (1. värdet på 0,0 med 1,0)

//			{
//				minIndex = j; //om nameJ är mindre än nameMin, så blir index j. Nästa iteration blir därför från detta nya index + 1 (den kvarstående delen av listan).
//			}
//		}

//		if (minIndex != i) //om index är i, så behövs inte bytas plats. Då hoppas nedanstående sats över.
//		{
//			for (var x = 0; x < myTableBody.children[i].cells.length; x++) {

//				var temp = myTableBody.children[i].cells[x].innerHTML; //värdet på den plats där minsta värdet hittats sparas i var temp
//				myTableBody.children[i].cells[x].innerHTML = myTableBody.children[minIndex].cells[x].innerHTML; //byt värdets plats till tabellens första plats
//				myTableBody.children[minIndex].cells[x].innerHTML = temp; //lägg in värdet där.

//			}
//		}


//	}

//}
