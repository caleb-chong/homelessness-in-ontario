window.onscroll = function() {scrollIndicator()};

function scrollIndicator()
{
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%"; 
}

function darkMode()
{
    var element = document.body;
    element.classList.toggle("darkMode");
}

// Image Slideshow JavaScript Code
var slideIndex = 1;
showSlides(slideIndex);

// Buttons to move to next and previous slides
function plusSlides(n)
{
    showSlides(slideIndex +=n);
}

// "Thumbnail Image Controls"
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

// Image Carousel
function showSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length)
    {
        slideIndex = 1;
    }
    if (n < 1)
    {
        slideIndex = slides.length;
    }
    for (i=0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Collapsible Text Code
var coll = document.getElementsByClassName("collapsibleBtn");
var i;

for (i=0; i < coll.length; i++)
{
    coll[i].addEventListener("click", function()
    {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block")
        {
            content.style.display = "none";
        }
        else
        {
            content.style.display = "block";
        }
    });
}