CarsMiniButton = document.getElementById("CarsMiniButton");
TrucksButton = document.getElementById("TrucksButton");
CrossSuvButton = document.getElementById("CrossSuvButton");
HybridFcvButton = document.getElementById("HybridsFcvButton");
OtherButton = document.getElementById("OtherButton");
//TODO recreate hoverclass in js


Pages = Array.from(document.getElementsByClassName("Pages"));
Buttons = Array.from(document.getElementsByClassName("SelButtons"));
function SwitchButton(Button)
{
	var Button = Button.concat("Button");
	Buttons.forEach(function(e)
	{
		if(e.id == Button)
		{
			
			e.style.borderWidth = "0.1em";
			e.style.borderBottom = "Solid";
			e.style.borderColor = "rgba(12, 158, 23, 1)";
			e.style.color = "rgba(0,0,0,1)"

		}
		else
		{
			e.style.borderWidth = "0em";
			e.style.color = "rgba(0,0,0,0.3)";
		}
	});
}

function SwitchPage(Page)
{
	Pages.forEach(function(e)
	{
		if(e.id == Page)
		{
			e.style.display = ""; // make page visable
			SwitchButton(Page);

		}
		else
		{
			e.style.display = "none"; // Make page invisable
		}
	});
}

CarsMiniButton.onclick = function(){SwitchPage("CarsMini");};
TrucksButton.onclick = function(){SwitchPage("Trucks");};
CrossSuvButton.onclick = function(){SwitchPage("CrossSuv");};
HybridFcvButton.onclick = function(){SwitchPage("HybridsFcv");};
OtherButton.onclick = function(){SwitchPage("Other");};

//TrucksButton.onclick = SwitchPage("Trucks")
