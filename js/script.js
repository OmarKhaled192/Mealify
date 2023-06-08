// =========================== nav links effect ============================
const allLinks = document.querySelectorAll("header nav .container ul li");
let checkedlinks; // changeable array at every time...

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    checkedlinks = document.querySelectorAll(
      "header nav .container ul li.checked-link"
    );
    checkedlinks.forEach((eachlink) => {
      eachlink.classList.remove("checked-link");
    });
    link.classList.add("checked-link");
  });
});


// ============================== dark mode ===================================
const mode = document.querySelector("header nav .container .toggle-menu .mode");
const modeIcons = document.querySelectorAll(
  "header nav .container .toggle-menu .mode i"
);

mode.addEventListener("click", () => {
  // firstly change the icon
  modeIcons.forEach((modeIcon) => modeIcon.classList.toggle("hidden"));

  // then load file css and append it in body
  if(document.getElementById("darkFileStyle") != null) {
    document.getElementById("darkFileStyle").remove();
  } else {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "css/dark.css";
    link.id = "darkFileStyle";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
});
