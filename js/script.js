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

// --------------------------------------- modification ici

// cette fonction permet just de mettre pause a l'execution pendant un temp (ms) donee
function sleep(ms) {
    console.log("hey");
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// on recupere le side bar ca sera utile
const sideBar = document.querySelector("#sidebar");

// puis on recupere tous! les bouton qui ont la class content-head (la tete de chaque group)
const headButtons = document.querySelectorAll(".content-head");

// maintenant on vas ajouter un event listener a chaques bouton
headButtons.forEach((btn) => {
    btn.addEventListener("click", async (event) => {
        // pour chaque boutons on prend le parent (C-A-D le contenaire de la liste deroulante)
        let group = btn.parentElement;

        // si le conteanaire a la classe group-opened (C-A-D si la list est deja derouler)
        if (group.classList.contains("group-opened")) {
            // on enleve la classe opened (on deroule)
            group.classList.remove("group-opened");

            // on change l'icone de sa fleche du bouton a la tete du group (>)
            btn.querySelector(".icon").innerHTML =
                '<i class="fas fa-angle-right"></i>';

            // on recupere chaque items de la liste deroulante
            let items = group.querySelectorAll(".content-item");
            // pour chaques items recuperer on vas attendre 0.03s et leur ajouter la classe (closed-item) ce qui nou permetra de creer l'illusion de deroulement de la list
            for (let i = 0; i < items.length; i++) {
                await sleep(0.03 * 1000 * Math.sqrt(i + 1));
                items[i].classList.add("closed-item");
            }
        } else {
            // ici c'est le meme concept saufe que ici on fait aparaitre et en haut on fait disparaitre les items de la liste
            // Effectivement l'ecole est dure massa
            group.classList.add("group-opened");
            group.querySelector(".icon").innerHTML =
                '<i class="fas fa-angle-down"></i>';
            let items = group.querySelectorAll(".content-item");
            for (let i = 0; i < items.length; i++) {
                await sleep(0.03 * 1000 * Math.sqrt(i + 1));
                items[i].classList.remove("closed-item");
            }
        }
    });
});

// --------------------------------------- fin modification

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

var lineChart = new ApexCharts(
    document.querySelector("#line-chart"),
    lineOptions
);
var barChart = new ApexCharts(document.querySelector("#bar-chart"), barOptions);

lineChart.render();
barChart.render();
