var Button = document.getElementsByClassName("morebutton")[0];

function OnClick()
{
	alert("More button was clicked!");
};
Button.addEventListener("click",OnClick,false)