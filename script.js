window.onload = init;
function init() {
  document.body.append(document.createElement("div"));

  const rowLetter = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""];
  const rowBlack1 = [
    "8",
    "&#9820;",
    "&#9822;",
    "&#9821;",
    "&#9819;",
    "&#9818;",
    "&#9821;",
    "&#9822;",
    "&#9820;",
    "8",
  ];
  const rowBlack2 = [
    "7",
    "&#9823;",
    "&#9823;",
    "&#9823;",
    "&#9823;",
    "&#9823;",
    "&#9823;",
    "&#9823;",
    "&#9823;",
    "7",
  ];

  const rowWhite1 = [
    "1",
    "&#9814;",
    "&#9816;",
    "&#9815;",
    "&#9813;",
    "&#9812;",
    "&#9815;",
    "&#9816;",
    "&#9814;",
    "1",
  ];
  const rowWhite2 = [
    "2",
    "&#9817;",
    "&#9817;",
    "&#9817;",
    "&#9817;",
    "&#9817;",
    "&#9817;",
    "&#9817;",
    "&#9817;",
    "2",
  ];

  let table = document.createElement("table");

  for (let i = 0, c = 9; i < 10, c >= 0; i++, c--) {
    let tr = document.createElement("tr");
    for (j = 0; j < 10; j++) {
      let td = document.createElement("td");
      let j9 = function () {
        if (j == 9) {
          td.classList.add("rotate");
        }
      };
      if (i == 0 || i == 9) {
        td.innerText = rowLetter[j];
        if (i == 0) {
          td.classList.add("rotate");
        }
      } else if (i == 1) {
        td.innerHTML = rowBlack1[j];
        j9();
      } else if (i == 2) {
        td.innerHTML = rowBlack2[j];
        j9();
      } else if (i == 7) {
        td.innerHTML = rowWhite2[j];
        j9();
      } else if (i == 8) {
        td.innerHTML = rowWhite1[j];
        j9();
      } else {
        if (j == 0 || j == 9) {
          td.innerText = c;
          j9();
        }
      }
      if (i > 0 && j > 0 && i < 9 && j < 9) {
        td.style.cssText = `border: dashed 1px black;`;
      }
      if ((i + j) % 2 != 0 && i > 0 && j > 0 && i < 9 && j < 9) {
        td.style.background = "brown";
      }

      tr.append(td);
    }
    table.append(tr);
  }
  document.querySelector("div").append(table);
}
