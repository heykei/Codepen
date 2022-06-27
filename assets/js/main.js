const gras = document.getElementById("gras");
const ita = document.getElementById("ita");
const h = document.getElementById("h");
const para = document.getElementById("para");
const select = document.getElementById("select");

const html = document.getElementById("html");
const css = document.getElementById("css");
const styl = document.getElementById("styl");
const js = document.getElementById("js");
const max = 200;
const progress_bar = document.getElementById("progress_bar");
const load = document.getElementById("img");

html.addEventListener("click", () => {
    load.style.visibility = "visible";
});
html.addEventListener("input", () => {
    load.style.visibility = "visible";
});
html.addEventListener("output", () => {
    load.style.visibility = "hidden";
});

css.addEventListener("click", () => {
    load.style.visibility = "visible";
});
css.addEventListener("input", () => {
    load.style.visibility = "visible";
});
css.addEventListener("output", () => {
    load.style.visibility = "hidden";
});

js.addEventListener("click", () => {
    load.style.visibility = "visible";
});
js.addEventListener("input", () => {
    load.style.visibility = "visible";
});
js.addEventListener("output", () => {
    load.style.visibility = "hidden";
});

document.addEventListener("mouseover", () => {
    load.style.visibility = "hidden";
});

gras.addEventListener('click', () => {
    html.value +="<strong></strong>";
});

ita.addEventListener('click', () => {
    html.value +="<em></em>";
});

h.addEventListener('click', () => {
    html.value +="<h1></h1>";
});

para.addEventListener('click', () => {
    html.value +="<p></p>";
});

select.addEventListener('click', () => {
    html.value +="<span></span>";
});

// col.addEventListener('click', () => {
//     css.value +="{ color: };";
// });

html.onkeyup = html.onkeydown = function(){
    document.getElementById("live").innerHTML = this.value;

    let counting = html.value.length; 
    let count = max-live.textContent.length;
    document.getElementById("char_count").innerHTML = count; 
        if (count == 0) {
            html.setAttribute('maxlength', counting)
        } else {
            html.setAttribute('maxlength', '')
        }

        const percent = 100*live.textContent.length/max;

        progress_bar.style.setProperty('width', percent+'%');
            if (percent >= 0 && percent < 50) {
                progress_bar.style.backgroundColor = "forestgreen"; 
            }
            if (percent >= 50 && percent < 80) {
                progress_bar.style.backgroundColor = "lightsalmon"; 
            }
            if (percent >= 80 && percent < 100) {
                progress_bar.style.backgroundColor = "Red"; 
            }
};

function add_color(){
    const col = document.querySelector("#col");
    col.addEventListener("click", () => {
     css.value += " {color: ;}";
    })
}
add_color();

function change_color() {
    const change = document.querySelector("live");
    change.lastChild.
}