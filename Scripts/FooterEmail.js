var FooterForms = Array.from(document.getElementsByClassName("FooterForm"));

function RemoveText(e)
{
	if(e.value == e.defaultValue)
	{
	e.value = "";
	}
}
function AddText(e)
{
	if(e.value == "")
	{
		e.value = e.defaultValue;	
	}
}
for(i = 0; i < FooterForms.length; i++)
{
	FooterForms[i].onclick = function(){RemoveText(this);};
	FooterForms[i].onblur = function(){AddText(this);};
}
