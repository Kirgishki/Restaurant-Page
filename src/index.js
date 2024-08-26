import "./style.css";
import { createMenuPage } from "./menu";
import { createContactPage } from "../contact";
import { createAboutPage } from "../about";

const nav = (function(){
    const navElement = document.querySelector("nav");

    navElement.addEventListener("click", changeColorActiveTab);
    navElement.addEventListener("click", changeTabContent);

    function changeColorActiveTab(activeTabButton){
        if(activeTabButton.target.tagName == "BUTTON"){
            navElement.querySelectorAll("button").forEach(button => {button.classList.remove("activeTab")});
            activeTabButton.target.classList.add("activeTab");
        }
    }

    function changeTabContent(activeTabButton){

        if(activeTabButton.target.tagName == "BUTTON"){
            switch (activeTabButton.target.innerText) {
                case "Home":
                    pageContent.setPageContent(createHomePage());
                    break;
                case "Menu":
                    pageContent.setPageContent(createMenuPage());
                    break
                case "About":
                    pageContent.setPageContent(createAboutPage());
                    break
                case "Contact":
                    pageContent.setPageContent(createContactPage());
                    break
            }
        }
    }
})();

const pageContent = (function(){
    const contentElement = document.querySelector("#content");
    const homePage = createHomePage();

    contentElement.appendChild(homePage);

    function setPageContent(content){
        contentElement.innerText = "";
        if(typeof(content) == "string"){
            contentElement.innerText = content;
        }else{
            contentElement.appendChild(content);
        }
    }

    return {setPageContent};
})();

function createHomePage(){
    const homePageContainer = document.createElement("div");
    const pageTitleContainer = document.createElement("div");
    const pageTitle = document.createElement("h1");
    const mainContentContainer = document.createElement("div");
    const image = document.createElement("img");
    const contentTextContainer = document.createElement("div");
    const contentHeading = document.createElement("h2");
    const contentText = document.createElement("p");

    pageTitle.innerText = "Best Restaurant in Town!!!!";
    contentHeading.innerText = "Lorem Ipsum";
    contentText.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    image.setAttribute("src", "./images/restaurant-cover.jpeg");
    image.setAttribute("alt", "Restaurant food");

    pageTitleContainer.appendChild(pageTitle);
    contentTextContainer.appendChild(contentHeading);
    contentTextContainer.appendChild(contentText);
    mainContentContainer.appendChild(image);
    mainContentContainer.appendChild(contentTextContainer);
    homePageContainer.appendChild(pageTitleContainer);
    homePageContainer.appendChild(mainContentContainer);

    return homePageContainer;
}