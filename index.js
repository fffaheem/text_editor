// let footer = document.querySelectorAll(".footer");
// let pg_count = 1;
// footer.forEach(pg => {
//     pg.innerText = pg_count;
//     pg_count++;
// });

let header = document.querySelector(".header");
let footer = document.querySelector(".footer");

let header_start = document.querySelectorAll(".header-start");
let header_no_count = document.querySelectorAll(".header-no-count");
let header_no = document.querySelectorAll(".header-no");
let header_end = document.querySelectorAll(".header-end");

let footer_start = document.querySelectorAll(".footer-start");
let footer_no_count = document.querySelectorAll(".footer-no-count");
let footer_no = document.querySelectorAll(".footer-no");
let footer_end = document.querySelectorAll(".footer-end");

if (header_start.length != header_end.length) {
    alert("header start and end are not equal");
}

if (footer_start.length != footer_end.length) {
    alert("footer start and end are not equal");
}

let listt = []
for (let i = 0; i < header_start.length; i++) {
    let start = header_start[i];
    let end = header_end[i];
    let inner_list = [start];
    while (start != end) {
        start = start.nextElementSibling;
        inner_list.push(start);
    }
    listt.push(inner_list);
    // console.log(inner_list);
}

console.log(listt);

for (let i = 0; i < listt.length; i++) {
    let inner_list = listt[i];
    let counter = 0;
    for (let j = 0; j < inner_list.length; j++) {
        let el = inner_list[j];
        let header_text = "";
        if (el.className.includes("header-no-count")) {

        } else if (el.className.includes("header-no")) {
            counter++;
        }
        else {
            counter++;
            header_text = header.innerHTML + " " + counter;
        }
        el.innerHTML = header_text + "<br>" + el.innerHTML
    }
}





// for font size
let elements = document.querySelectorAll("[class*='font-']");

elements.forEach(el => {
    el.classList.forEach(cls => {
        if (cls.startsWith("font-")) {
            let size = cls.split("-")[1];
            if (!isNaN(size)) {
                el.style.fontSize = size + "px";
            } else {
                el.style.fontSize = "50px";
                el.innerText = "Wrong font size class please fix it";
            }
        }
    });
});