import { connectStyle } from "./utils/style_connector.js";

export const get_samples_grid = () => {
    connectStyle("samples_grid.css");

    const content = document.createElement("div");
    content.id = "samples_grid";

    return content;
}