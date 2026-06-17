(() => {
  let elements = {
    body: document.querySelector("body"),
    font: document.querySelectorAll("[class*='font-']"),
    padding: document.querySelectorAll("[class*='p-']")
  }

  function set_padding() {

    for (const el of elements.padding) {
      if (el === elements.body) {
        continue;
      }
      
      for(const cls of el.classList){
        if (!cls.startsWith("p-")) {
          continue
        }
        let paddings = cls.split("-").slice(1,-1);
        if (paddings.length == 1) {
          el.style.padding = `${paddings[0]}px`
          // all left,right,up and down
        } else if (paddings.length == 2) {
          // left,right and up, down
        } else if (paddings.length == 4) {
          // left, right, up and down
        } else {
          prompt("abey")
        }
        console.log(paddings)
      }
      // process el
    }

  }

  set_padding()


  elements.font.forEach(el => {
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
  
})();
