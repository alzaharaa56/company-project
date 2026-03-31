const genxList = document.getElementById("genxdenma");
const numbergenx = ["GENX I", "GENX II", "GENX III", "GENX IIII", "GENX IIIII"];

// add the navigation items
function createNavItems() {
  numbergenx.forEach((lest, index) => {
    let newListItem = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.href = `#section${index + 1}`;
    anchor.textContent = lest;
    newListItem.appendChild(anchor);
    genxList.appendChild(newListItem);

    // set click event to scroll
    anchor.addEventListener("click", (event) =>
      scrollToSection(event, anchor, index)
    );
  });
}

const sections = document.querySelectorAll(".genx-section");

//  handle click event
function scrollToSection(event, anchor, index) {
  event.preventDefault(); // Prevent default anchor behavior
  document.querySelector(".active")?.classList.remove("active");
  anchor.classList.add("active");

  // Smooth scroll to the corresponding section
  document.querySelector(`#section${index + 1}`).scrollIntoView({
    behavior: "smooth",
  });
}

// set the active section fro scrolling
function setActiveSectionOnScroll() {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const anchor = genxList.children[index].querySelector("a");

    //  add the active
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      document.querySelector(".active")?.classList.remove("active");
      anchor.classList.add("active");
    }
  });
}

// add scroll
function init() {
  createNavItems();
  // add the nav items
  window.addEventListener("scroll", setActiveSectionOnScroll);
}

// call function init
init();

function makeActive() {
  const sections = document.querySelectorAll(".grid-section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      section.classList.add("active"); // add active class
    } else {
      section.classList.remove("active"); // remove the  class fro view
    }
  });
}

//  initially when sections  rcroll  in view on page load
window.addEventListener("scroll", makeActive);
// call makeActive

makeActive();
