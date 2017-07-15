let Carousel = document.getElementsByClassName("Carousel");
[].forEach.call(Carousel,function(c)
{
	let Left = c.getElementsByClassName("Left")[0],
	Right = c.getElementsByClassName("Right")[0],
	Pictures = c.getElementsByClassName("Images")[0],
	imgs = Pictures.getElementsByTagName("img"),
	bubblesContainer = c.getElementsByClassName('bubbles')[0],
	CurIndex = 0,
	width = 80,
	unit = "vw",
	bubbles = [];
	for(let i = 0; i < imgs.length; i++)
	{
        let b = document.createElement("span");
        b.classList.add('bubble');
        bubblesContainer.appendChild(b);
        bubbles.push(b);
        b.addEventListener('click', function ()
		{
            CurIndex = i;
            MoveImage();
        });
	}
	function MoveImage()
	{
		Pictures.style.left = -width * CurIndex + unit;
		bubbles.forEach(function (b, i)
		{
            if (i === CurIndex)
			{
                b.classList.add('active');
            }
			else
			{
                b.classList.remove('active');
            }
        });
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
	MoveImage();
});