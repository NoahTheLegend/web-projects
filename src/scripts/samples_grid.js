import { connect_style } from "./style_connector.js";

export const get_samples_grid = () => {
    connect_style("samples_grid.css");

    const content = document.createElement("div");
    content.id = "samples_grid";

    if (typeof process == "undefined" || !process.version) {
        content.textContent = "Requires Node.js";
        return content;
    }
    
    console.log("Node.js version: "+process.version);

    return content;
}