
// logo 

// function logo(){
//     var logo = document.getElementById('logo');
//     var positionY = 50+ "px";
//     if(logo>=positionY){
//         logo.classList.add("logo_change");
//     }
// }


// dark

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.getElementById('contact').style.backgroundColor="#292c35"
})
// menu

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menu");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
            navbar.classList.remove("sticky");
        }
}

// form comment

// function form(){
//     var fname =document.getElementById('fname').value;
//     var lname =document.getElementById('lname').value;
//     var email =document.getElementById('email').value;
//     var arr =[fname,lname,email];
//     var input =document.getElementById('input');
//     input.innerHTML = arr;

// }

// scroll bar

$("a").click(function(){
    var pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
});

// muted video
let video = document.getElementById("video");
        function mute(){
            video.muted= true;
        }
        function unmute(){
            video.muted = false;
        }

        // more btn

        function project(){
            let project_more_div_main= document.getElementById('project_more_div_main');
            // project_more_div_main.style.display = 'block';
            if(project_more_div_main.style.display === 'none'){
                project_more_div_main.style.display = 'block';
            }
            else{
                project_more_div_main.style.display = 'none';
            }

        }
        function hide(){
            let project_more_div_main= document.getElementById('project_more_div_main');
            project_more_div_main.style.display = 'none';

        }


