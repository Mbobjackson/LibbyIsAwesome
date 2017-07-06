//document.write('<p>test</p>');
var Pages = Array.from(document.getElementsByClassName("page"));
var Next = document.getElementsByClassName("NextButton")[0];
var Back = document.getElementsByClassName("BackButton")[0];
var word = "Page"
var CurPage = 1;
function NextPage()
{
	CurPage++;
	UpdatePage();
}
function BackPage()
{
	CurPage--;
	UpdatePage();
}
function UpdatePage()
{
	Pages.forEach(function(e)
	{
		if(e.id.toString() == word.concat(CurPage))
		{
			e.style.display = "";
		}else
		{
			e.style.display = "none";
		}
	});
}
Next.addEventListener("click",NextPage);
Back.addEventListener("click",BackPage);