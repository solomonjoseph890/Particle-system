document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const box = [];
  console.log(box.length);

  console.log(box);
  const boxGrid = document.getElementById("box-grid");

  console.log(boxGrid.children);

  for (let index = 500; index > box.length; index--) {
    const plus = document.createElement("p");
    plus.classList.add("text-2xl");
    plus.classList.add("text-gray-500");
    plus.classList.add("cursor-pointer");
    plus.classList.add("m-0");
    plus.classList.add("p-0");
    plus.innerText = "+";
    box.push(plus);
    boxGrid.append(plus);

    plus.addEventListener("mouseover", () => {
      plus.style.color = "black";
      setTimeout(() => {
        plus.style.color = "gray";
      }, 500);
    });

    console.log(box.length);
    console.log(boxGrid.children);
  }
});
