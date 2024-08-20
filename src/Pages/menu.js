
export const loadMenuPage = () => {


    const restaurantFoods = document.createElement("ul");

    const regular = document.createElement("li");
    regular.classList.add("menu-item");
    const regularTitle = document.createElement("h2");
    regularTitle.textContent = "Regular Garam";
    const regularContent = document.createElement("p");
    regularContent.textContent = "The best Regular Garam that exists. Made with love by the Karur Garam family.";
    regular.appendChild(regularTitle);
    regular.appendChild(regularContent);

    const eggGaram = document.createElement("li");
    eggGaram.classList.add("menu-item");
    const eggGaramTitle = document.createElement("h2");
    eggGaramTitle.textContent = "Egg Garam";
    const eggGaramContent = document.createElement("p");
    eggGaramContent.textContent = "Made with love. The best Egg Garam that exists.";
    eggGaram.appendChild(eggGaramTitle);
    eggGaram.appendChild(eggGaramContent);

    const ealladaiSet = document.createElement("li");
    ealladaiSet.classList.add("menu-item");
    const ealladaiSetTitle = document.createElement("h2");
    ealladaiSetTitle.textContent = "Ealladai Set";
    const ealladaiSetContent = document.createElement("p");
    ealladaiSetContent.textContent = "A Karur and Salem special. The best Ealladai Set that exists.";
    ealladaiSet.appendChild(ealladaiSetTitle);
    ealladaiSet.appendChild(ealladaiSetContent);

    const appalamGaram = document.createElement("li");
    appalamGaram.classList.add("menu-item");
    const appalamGaramTitle = document.createElement("h2");
    appalamGaramTitle.textContent = "Appalam Garam";
    const appalamGaramContent = document.createElement("p");
    appalamGaramContent.textContent = "The best Appalam Garam that exists. The best ingredients and made with love by the Karur Garam family.";
    appalamGaram.appendChild(appalamGaramTitle);
    appalamGaram.appendChild(appalamGaramContent);

    const appalamSet = document.createElement("li");
    const appalamSetTitle = document.createElement("h2");
    appalamSetTitle.textContent = "Appalam Set";
    const appalamSetContent = document.createElement("p");
    appalamSetContent.textContent = "The best Appalam Set that exists. The best ingredients and made with love by the Karur Garam family.";
    appalamSet.appendChild(appalamSetTitle);
    appalamSet.appendChild(appalamSetContent);

    const samosaGaram = document.createElement("li");
    const samosaGaramTitle = document.createElement("h2");
    samosaGaramTitle.textContent = "Samosa Garam";
    const samosaGaramContent = document.createElement("p");
    samosaGaramContent.textContent = "A Samosa special. The best ingredients and made with love by the Karur Garam family.";
    samosaGaram.appendChild(samosaGaramTitle);
    samosaGaram.appendChild(samosaGaramContent);

    const eggSet = document.createElement("li");
    const eggSetTitle = document.createElement("h2");
    eggSetTitle.textContent = "Egg Set";
    const eggSetContent = document.createElement("p");
    eggSetContent.textContent = "This meal has everything you need in order to fulfill your dream of having a Protein Set. The best ingredients and made with love by the Karur Garam family.";
    eggSet.appendChild(eggSetTitle);
    eggSet.appendChild(eggSetContent);

    restaurantFoods.appendChild(regular);
    restaurantFoods.appendChild(eggGaram);
    restaurantFoods.appendChild(ealladaiSet);

    

    const content = document.getElementById("content");

    const restaurantMenuPage = document.createElement("div");
    restaurantMenuPage.classList.add("menu");
    content.appendChild(restaurantMenuPage);
   
    restaurantMenuPage.appendChild(restaurantFoods);
}
