let Carousel = document.getElementsByClassName("Carousel");
[].forEach.call(Carousel,function(c)
{
	let Left = c.getElementsByClassName("Left")[0],
	Right = c.getElementsByClassName("Right")[0],
	Pictures = c.getElementsByClassName("Images")[0],
	imgs = Pictures.getElementsByTagName("img"),
	CurIndex = 0;
	width = 880;
	function MoveImage()
	{
		Pictures.style.left = -width * CurIndex + "px";
	}
	Right.addEventListener("click",function()
	{
		CurIndex++;
		if(CurIndex >= imgs.length)
		{
			CurIndex = 0;
		}
		MoveImage();
	});

	Left.addEventListener("click",function()
	{
		CurIndex--;
		if(CurIndex < 0)
		{
			CurIndex = imgs.length - 1;
		}
		MoveImage();
	});

});