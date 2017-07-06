CarsMiniButton = document.getElementById("CarsMiniButton");
TrucksButton = document.getElementById("TrucksButton");
CrossSuvButton = document.getElementById("CrossSuvButton");
HybridFcvButton = document.getElementById("HybridFcvButton");
OtherButton = document.getElementById("OtherButton");



Pages = Array.from(document.getElementsByClassName("Pages"))
function Switch(Page)
{
	Pages.forEach(function(e)
	{
		if(e.id == Page)
		{
			e.style.display = "";
		}
		else
		{
			e.style.display = "none";
		}
	});
}
CarsMiniButton.onclick = function(){Switch("CarsMini");};
TrucksButton.onclick = function(){Switch("Trucks");};
CrossSuvButton.onclick = function(){Switch("CrossSuv");};
HybridFcvButton.onclick = function(){Switch("HybridsFcv");};
OtherButton.onclick = function(){Switch("Other");};

//TrucksButton.onclick = Switch("Trucks")
