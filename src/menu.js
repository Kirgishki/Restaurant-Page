export function createMenuPage(){
    const homePageContainer = document.createElement("div");
    const pageTitleContainer = document.createElement("div");
    const pageTitle = document.createElement("h1");
    const mainContentContainer = document.createElement("div");
    const image = document.createElement("img");
    const contentTextContainer = document.createElement("div");
    const contentHeading = document.createElement("h2");
    const contentText = document.createElement("p");

    pageTitle.innerText = "Menu of Restaurant";
    contentHeading.innerText = "Menu";
    contentText.innerText = "Menu of the Restaurant";

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