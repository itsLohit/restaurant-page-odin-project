import myImage from "../../assets/images/ContactMap.png";
export const loadContactPage = () =>{

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 +911234554321";

  const address = document.createElement("p");
  address.textContent = "🏠 Covai Road 42, Karur, TamilNadu, India";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = myImage;
  restaurantLocation.alt = "Mozzafiato restaurant location";

  const content = document.getElementById("content");

  const restaurantContactPage = document.createElement("div");
  restaurantContactPage.classList.add("contact");
  content.appendChild(restaurantContactPage);

  restaurantContactPage.appendChild(phoneNumber);
  restaurantContactPage.appendChild(address);
  restaurantContactPage.appendChild(restaurantLocation);
}
