function showText (elem) {
    if(elem.previousElementSibling.clientHeight === 80){
        elem.previousElementSibling.style.height = "100%";
        elem.innerHTML = "Show less"
    } else {
        elem.previousElementSibling.style.height = "80px";
        elem.innerHTML = "Read more..."
    };
}