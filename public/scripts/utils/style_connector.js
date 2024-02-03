
export const connectStyle = (style) => {
    const path = `css/${style}`;

    var styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.type = "text/css";
    styleLink.href = path;

    try {
        console.log("Connecting style "+path);
        document.head.appendChild(styleLink);
    } catch (error) {
        console.error("Error while adding the style:", error);
    }
}