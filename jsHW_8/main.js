let findP = document.querySelectorAll("p");
findP.forEach((paragraph) => (paragraph.style.backgroundColor = "#ff0000"));
const optionsList = document.getElementById("optionsList");
console.log(optionsList);
const parentOptionList = optionsList.parentElement;
console.log(parentOptionList);
let childOptionList = parentOptionList.childNodes;

console.log(childOptionList);

if (optionsList.hasChildNodes()) {
  let optionsListChildNodes = optionsList.childNodes;
  optionsListChildNodes.forEach((child) =>
    console.log(`nodeName - ${child.nodeName}, nodeType - ${child.nodeType}`)
  );
}

let p = document.getElementById("testParagraph");
p.className = "testParagraph";
p.innerHTML = "This is a paragraph";

let e = document.querySelector(".main-header");
for (const child of e.children) {
  console.log(child);
  child.classList.add("nav-item");
}
const getAllChildren = (e) => {
  if (e.children.length === 0) return [e];
  let allChildElements = [];
  for (let i = 0; i < e.children.length; i++) {
    let children = getAllChildren(e.children[i]);
    if (children) allChildElements.push(...children);
  }
  allChildElements.push(e);
  return allChildElements;
};
const elementChildrens = getAllChildren(e);
console.log(elementChildrens);
elementChildrens.forEach((e) => e.classList.add("nav-item"));

let sectionTitle = document.querySelectorAll(".section-title");
sectionTitle.forEach((element) => element.classList.remove("section-title"));
console.log(sectionTitle);
