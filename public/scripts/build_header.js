// SEO will ignore info here
import { connectStyle } from "./utils/style_connector.js";

export const get_header = () => {
    connectStyle("header.css");

    // header container
    const headerContent = document.createElement("div");
    headerContent.id = "header_container";

    {
        // header content
        const headerContentMain = document.createElement("div");
        headerContentMain.id = "header_container_main";
        
        // decorator
        const bottomSeparator = document.createElement("div");
        bottomSeparator.id = "header_separator";

        // apply
        headerContent.appendChild(headerContentMain);
        headerContent.appendChild(bottomSeparator);


        // router
        {
            // links
            const linksInfoList = document.createElement("ul");
            linksInfoList.className = "links-info-list";
            let link_prefix = "link_";

            // home
            {
                const homePage = createLink("index.html", "Home").addClass(link_prefix+"home");
                const homeIcon = document.createElement("img");
                homeIcon.src = "svg/home-icon.svg";
                homeIcon.alt = "404";
                homePage.insertBefore(homeIcon, homePage.querySelector("span"));
                linksInfoList.appendChild(homePage);
            }
            
            // other
            {
                const githubLink = createLink("https://github.com/NoahTheLegend", "GitHub").addClass(link_prefix+"github");
                linksInfoList.appendChild(githubLink);
            }
            
            {
                const linkedinLink = createLink("https://www.linkedin.com/in/eugene-lytvinov-6b5509251/", "LinkedIn").addClass(link_prefix+"linkedin");
                linksInfoList.appendChild(linkedinLink);
            }

            {
                const bioLink = createLink("pages/bio/index.html", "Bio").addClass(link_prefix+"bio");
                linksInfoList.appendChild(bioLink);
            }
            
            // apply
            headerContentMain.appendChild(linksInfoList);


            // contacts
            const linksContactsList = document.createElement("div");
            linksContactsList.className = "links-contacts-list";
            headerContentMain.appendChild(linksContactsList);
            
            //apply
            linksContactsList.appendChild(createContact("todo: add popup for these E-mail", "https://gmail.com", "ienystell@gmail.com"));
            linksContactsList.appendChild(createContact("Discord", "https://discordapp.com/users/431830392635392022", "noahthelegend"));
        }
    }

    return headerContent;
};

const createLink = (href, text) => {
    const link = document.createElement("a");
    link.href = href;
    link.className = `link`;

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