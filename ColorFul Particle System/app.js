document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const box = [];
  console.log(box.length);
  const orangeColors = [
    "#FFF3E0", // lightest (peach)
    "#FFE0B2", // light orange
    "#FFB74D", // medium orange
    "#FF9800", // base orange
    "#FB8C00", // deep orange
    "#F57C00", // darker orange
    "#EF6C00", // strong burnt orange
    "#E65100", // dark burnt orange
    "#FFCC80", // accent light
    "#FF6D00", // vibrant accent
  ];

  const modernOrangePalette = [
    "#FFF4E6", // very light background
    "#FFD8A8", // soft orange
    "#FFA94D", // warm orange
    "#FF922B", // vibrant orange
    "#FD7E14", // main orange
    "#E8590C", // darker accent
    "#D9480F", // burnt orange
    "#A63E07", // deep contrast
  ];

  console.log(box);

  const boxGrid = document.getElementById("box-grid");
  let track = 0;
  console.log(boxGrid.children);

  for (let i = 500; i > box.length; i--) {
    if (track >= orangeColors.length) {
      track = 0;
    }
    const plus = document.createElement("p");
    plus.classList.add("text-2xl");
    plus.classList.add("text-gray-500");
    plus.classList.add("cursor-pointer");
    plus.classList.add("m-0");
    plus.classList.add("p-0");
    plus.style.color = orangeColors[track];
    plus.style.opacity = 0.2;

    plus.innerText = "+";
    box.push(plus);
    boxGrid.append(plus);

    track++;

    plus.addEventListener("mouseover", () => {
      plus.style.opacity = 1;
      setTimeout(() => {
        plus.style.opacity = 0.2;
      }, 500);
    });

    console.log(box.length);
    console.log(boxGrid.children);
  }
});
