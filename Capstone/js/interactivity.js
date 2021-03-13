var x = 1;
function next()
{
    if (x < 3 && x > 0)
    {
        var slide = x + 1;
        if (slide == 1)
        {
            document.getElementById("slider").style.backgroundImage = "url('../images/group2.jpg')";
        }
        else if (slide == 2)
        {
            document.getElementById("slider").style.backgroundImage = "url('../images/group3.jpg')";
        }
        else if(slide == 3)
        {
            document.getElementById("slider").style.backgroundImage = "url('../images/girl1.jpg')";
        }
        x++;
    }
}
function previous()
{
    if (x > 1 && x < 4)
    {
        var slide = x - 1;
        if (slide == 1)
        {
            document.getElementById("slider").style.backgroundImage = "url('../images/group2.jpg')";
        }
        else if (slide == 2)
        {
            document.getElementById("slider").style.backgroundImage = "url('../images/group3.jpg')";
        }
        else if(slide == 3)
        {
            document.getElementById("slider").style.backgroundImage = "url('../images/girl1.jpg')";
        }
        x--;
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

