import myImage from '../../assets/images/logo.jpeg';

export const loadHomePage = () =>{
    const restaurantImage = document.createElement('img');
    restaurantImage.src = myImage;
    restaurantImage.alt = "Image of Hotel";

    const restaurantParagraph1 = document.createElement("p");
    restaurantParagraph1.textContent = "Exprience the native taste of Karur";

    const restaurantParagraph2 = document.createElement("p");
    restaurantParagraph2.textContent = "Made with passion since 2024";

    const restaurantParagraph3 = document.createElement("p");
    restaurantParagraph3.textContent = "Order online or visit us!";

    const content = document.getElementById("content");

    const restaurantHomePage = document.createElement("div");
    restaurantHomePage.classList.add("home");
    content.appendChild(restaurantHomePage);

    restaurantHomePage.appendChild(restaurantParagraph1);
    restaurantHomePage.appendChild(restaurantParagraph2);
    restaurantHomePage.appendChild(restaurantImage);
    restaurantHomePage.appendChild(restaurantParagraph3);
};