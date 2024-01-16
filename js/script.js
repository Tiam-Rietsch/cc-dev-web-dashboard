// on commence par recuperer le bouton de menu
const menuBtn = document.querySelector("#menu-btn");

// on ajoute on event listener et handler pour l'evennement click
menuBtn.addEventListener("click", (event) => {
  // on commence par recuperer le side bar du DOM
  const sideBar = document.querySelector("#sidebar");

  // si le bouton menu ne contient pas la class opened (ouverte)
  if (!menuBtn.classList.contains("opened")) {
    // on vas changer son icone en croix et ajout la class opened
    menuBtn.innerHTML = '<i class="fas fa-xmark"></i>';
    menuBtn.classList.add("opened");
    // puis on ajout la class visible-side au sidebar (aside)
    sideBar.classList.add("visible-side");
  } else {
    // dans le cas contraire on remet son icone comme normale
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    menuBtn.classList.remove("opened");
    // et on enleve la classe visible-side au aside
    sideBar.classList.remove("visible-side");
  }
});

// charts

var lineOptions = {
  chart: {
    type: "line",
  },
  stroke: {
    curve: "smooth",
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 50],
    },
    {
      name: "profit",
      data: [50, 30, 20, 60, 40, 50, 20, 5],
    },
  ],
  xaxis: {
    categories: [10, 15, 20, 25, 30, 35, 40, 45],
  },
};

var barOptions = {
  chart: {
    type: "bar",
  },
  stroke: {
    curve: "smooth",
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 50],
    },
    {
      name: "profit",
      data: [50, 30, 20, 60, 40, 50, 20, 5],
    },
  ],
  xaxis: {
    categories: [10, 15, 20, 25, 30, 35, 40, 45],
  },
};

var lineChart = new ApexCharts(document.querySelector("#line-chart"), lineOptions);
var barChart = new ApexCharts(document.querySelector("#bar-chart"), barOptions);

lineChart.render();
barChart.render();