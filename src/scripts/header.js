import { connect_style } from "./style_connector.js";

export const get_header = () => {
    connect_style("header.css");

    const headerContent = document.createElement("div");
    headerContent.id = "header_content";

    const headerContentMain = document.createElement("div");
    headerContentMain.id = "header_content_main";

    const bottomSeparator = document.createElement("div");
    bottomSeparator.id = "header_separator";

    headerContent.appendChild(headerContentMain);
    headerContent.appendChild(bottomSeparator);

    const linksInfoList = document.createElement("ul");
    linksInfoList.className = "links-info-list";

    const homePage = createLink("index.html", "");
    createIcon(homePage, "home-icon.svg", "home-icon.svg")
    linksInfoList.appendChild(homePage);

    const githubLink = createLink("https://github.com/NoahTheLegend", "GitHub");
    linksInfoList.appendChild(githubLink);

    const linkedinLink = createLink("https://www.linkedin.com/in/eugene-lytvinov-6b5509251/", "LinkedIn");
    linksInfoList.appendChild(linkedinLink);

    const bioLink = createLink("pages/bio/index.html", "bio");
    linksInfoList.appendChild(bioLink);

    headerContentMain.appendChild(linksInfoList);

    const linksContactsList = document.createElement("div");
    linksContactsList.className = "links-contacts-list";

    headerContentMain.appendChild(linksContactsList);

    linksContactsList.appendChild(createContact("todo: add popup for these E-mail", "https://gmail.com", "ienystell@gmail.com"));
    linksContactsList.appendChild(createContact("Discord", "https://discordapp.com/users/431830392635392022", "noahthelegend"));

    return headerContent;
};

const createLink = (href, text) => {
    const link = document.createElement("a");
    link.href = href;
    link.className = `link link-info-${text.toLowerCase()}`;

    const span = document.createElement("span");
    span.textContent = text;

    link.appendChild(span);

    return link;
};

const createIcon = (elem, imgSrc, imgAlt) => {
    const image = document.createElement("img");
    image.src = `src/svg/${imgSrc}`;
    image.alt = imgAlt;

    elem.insertBefore(image, elem.querySelector("span"));
}

const createContact = (label, href, text) => {
    const contactTxt = document.createElement("button");
    contactTxt.textContent = `${label}: `;

    const contactLink = document.createElement("a");
    contactLink.target = "_blank";
    contactLink.href = href;
    contactLink.textContent = text;

    contactTxt.appendChild(contactLink);

    return contactTxt;
};