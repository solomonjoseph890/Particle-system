document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const box = [];
  console.log(box.length);

  console.log(box);
  const boxGrid = document.querySelector(".box-grid");

  console.log(boxGrid.children);

  for (let index = 500; index > box.length; index--) {
    const plus = document.createElement("p");
    plus.classList.add("particle");
    plus.innerText = "+";
    box.push(plus);
    boxGrid.append(plus);

    plus.addEventListener("mouseover", () => {
      plus.style.color = "black";
      setTimeout(() => {
        plus.style.color = "grey";
      }, 500);
    });

    console.log(box.length);
    console.log(boxGrid.children);
  }
});
