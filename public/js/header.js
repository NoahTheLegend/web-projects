import { connect_style } from "./style_connector.js";

export const get_header = () => {
    connect_style("header.css");

    // wrapper
    const headerContent = document.createElement("div");
    headerContent.id = "header_content";

    // content
    const headerContentMain = document.createElement("div");
    headerContentMain.id = "header_content_main";

    const bottomSeparator = document.createElement("div");
    bottomSeparator.id = "header_separator";

    headerContent.appendChild(headerContentMain);
    headerContent.appendChild(bottomSeparator);

    // links
    const linksInfoList = document.createElement("ul");
    linksInfoList.className = "links-info-list";

    const homePage = createLink("index.html", "");

    const homeIcon = document.createElement("img");
    homeIcon.src = "public/svg/home-icon.svg";
    homeIcon.alt = "404";
    homePage.insertBefore(homeIcon, homePage.querySelector("span"));

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

    // apply
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