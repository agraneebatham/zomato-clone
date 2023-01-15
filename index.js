import { city } from "./city.js";
import { popularcity } from "./popularcity.js"
import { restaurant } from "./restaurant.js";
import { topRestaurant } from "./topRestaurant.js";
import { cityName } from "./citydataexplore.js";

//SECTION-3:LOCALITIES
let localitiesContainerEl = document.querySelector(".localities-container")

let htmllocaliteslist = city.map((el) => {
    return `
        <div class="localities-list ">
            <div class="localities-card">
                <h3>${el.name}</h3>
                <p>${el.place ? el.place + "places" : ""}</p>
            </div>
            <i class="fa-solid fa-angle-right"></i>
        </div>
        `
}).join("")

localitiesContainerEl.innerHTML = htmllocaliteslist

//SECTION-3:LOCALITIES

//SECTION-5:EXPLORE
function showData(clickId, displayId, toggle, data, join) {
    document.getElementById(clickId).addEventListener("click", () => {
        if (toggle) {
            document.getElementById(displayId).style.display = "block"
            toggle = false
        }
        else {
            document.getElementById(displayId).style.display = "none"
            toggle = true
        }
    })

    let popularCityHTMLLink = "";
    for (let i = 0; i < data.length; i++) {
        popularCityHTMLLink += `
    <a class="popularcityName" href=${data[i].link}>${data[i].decs}</a>
    <span class="dot">${join}</span>
    `
    }

    document.getElementById(displayId).innerHTML = popularCityHTMLLink
}

let toggle1 = true;
showData("popularCityListID", "popularcityId", toggle1, popularcity, "•")

let toggle2 = true;
showData("restaurantID", "restaurantDisplayDataID", toggle2, restaurant, "•")

console.log(topRestaurant)

let toggle3 = true;
showData("topRestaurantID", "topRestaurantDisplayID", toggle3, topRestaurant, "    ")

let toggle4 = true;
showData("cityDeliverID", "cityDeliverDisplayID", toggle4, cityName, "    ")

//SECTION-5:EXPLORE