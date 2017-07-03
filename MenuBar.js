$.get("menubar.html", function(data)
{
    $("#menubar").replaceWith(data);
});