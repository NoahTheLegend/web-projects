import { connect_style } from "./style_connector.js";

export const get_samples_grid = () => {
    connect_style("samples_grid.css");

    const content = document.createElement("div");
    content.id = "samples_grid";

    // requires nodejs to work

    return content;
}