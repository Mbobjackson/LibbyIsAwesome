CarsMiniButton = document.getElementById("CarsMiniButton");
TrucksButton = document.getElementById("TrucksButton");
CrossSuvButton = document.getElementById("CrossSuvButton");
HybridFcvButton = document.getElementById("HybridsFcvButton");
OtherButton = document.getElementById("OtherButton");
//TODO recreate hoverclass in js
//Trouble comparing id's so both data types are converted to strings and then compared.

Pages = Array.from(document.getElementsByClassName("Pages"));
Buttons = Array.from(document.getElementsByClassName("SelButtons"));
var CurButton = CarsMiniButton;
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
			e.style.color = "rgba(0,0,0,1)";
			CurButton = e.id.toString();
		}
		else
		{
			e.style.borderColor = "rgba(12, 158, 23, 0)";
			e.style.color = "rgba(0,0,0,.3)";
		}
	});
}
SwitchButton("CarsMini");
function SwitchPage(Page)
{
	Pages.forEach(function(e)
	{
		if(e.id == Page)
		{
			e.style.display = ""; // Make page visable
			SwitchButton(Page);

		}
		else
		{
			e.style.display = "none"; // Make page invisable
		}
	});
}
function OnMouseLeave(Button)
{
	if(CurButton !== Button.id.toString())
	{

		Button.style.borderColor = "rgba(12, 158, 23, 0)";
		Button.style.color = "rgba(0,0,0,0.3)";
	}
}
function OnMouseHover(Button)
{
		Button.style.borderBottom = "Solid";
		Button.style.borderColor = "rgba(12, 158, 23, 1)";
		Button.style.color = "rgba(0,0,0,1)";
		Button.style.cursor = "pointer";
		Button.onmouseout = function(){OnMouseLeave(this)};

}

CarsMiniButton.onclick = function(){SwitchPage("CarsMini");};
TrucksButton.onclick = function(){SwitchPage("Trucks");};
CrossSuvButton.onclick = function(){SwitchPage("CrossSuv");};
HybridFcvButton.onclick = function(){SwitchPage("HybridsFcv");};
OtherButton.onclick = function(){SwitchPage("Other");};

CarsMiniButton.onmouseover = function(){OnMouseHover(this)}
TrucksButton.onmouseover = function(){OnMouseHover(this)}
CrossSuvButton.onmouseover = function(){OnMouseHover(this)}
HybridFcvButton.onmouseover = function(){OnMouseHover(this)}
OtherButton.onmouseover = function(){OnMouseHover(this)}
//TrucksButton.onclick = SwitchPage("Trucks")
