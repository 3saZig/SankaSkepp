function Funktionen()
{
	var bilar = document.getElementById("bilar").value; //sätt bilar till det värde vi får in
	var djur = document.getElementById("djur").value;
	var glassar = document.getElementById("glassar").value;

	var myTableBody = document.getElementById("tablebody"); //Vi ska in i tablebody
	var myRow = document.createElement("tr"); //skapa en ny rad

	var bilarTD = document.createElement("td"); //skapa en ny plats för värdet bilar
	bilarTD.innerHTML = bilar; //sätt in värdet bilar på denna nya plats

	var djurTD = document.createElement("td");
	djurTD.innerHTML = djur;

	var glassarTD = document.createElement("td");
	glassarTD.innerHTML = glassar;

	myTableBody.appendChild(myRow); //sätt in den nya raden i den befintliga tabellen, den vi döpt till TableBody

	myRow.appendChild(bilarTD); //sätter platsen på sin plats
	myRow.appendChild(djurTD);
	myRow.appendChild(glassarTD);
}

function SorteraFN()
{
	var myTableBody = document.getElementById("tablebody");


	for (var i = 0; i < myTableBody.children.length; i++)
	{
		var minIndex = i; //Vi ställer oss på plats i, som vi här antar innehåller det lägsta värdet

		for (var j = i + 1; j < myTableBody.children.length; j++) //och med en annan pekare på plats j (1 över i)
		{
			var nameMin = myTableBody.children[minIndex].cells[0].innerHTML; //1. värdet på plats 0, 0 || 2. 1, 0 || 3. 2, 0
			var nameJ = myTableBody.children[j].cells[0].innerHTML; // 1. värdet på plats 1, 0 || 2. 2, 0 ||

			if (nameMin.localeCompare(nameJ) > 0) //jämför nameMin med nameJ (1. värdet på 0,0 med 1,0)

			{
				minIndex = j; //om nameJ är mindre än nameMin, så blir index j. Nästa iteration blir därför från detta nya index + 1 (den kvarstående delen av listan).
			}
		}

		if (minIndex != i) //om index är i, så behövs inte bytas plats. Då hoppas nedanstående sats över.
		{
			for (var x = 0; x < myTableBody.children[i].cells.length; x++) {

			var temp = myTableBody.children[i].cells[x].innerHTML; //värdet på den plats där minsta värdet hittats sparas i var temp
			myTableBody.children[i].cells[x].innerHTML = myTableBody.children[minIndex].cells[x].innerHTML; //byt värdets plats till tabellens första plats
			myTableBody.children[minIndex].cells[x].innerHTML = temp; //lägg in värdet där.

			}
		}

		
	}
	
}
