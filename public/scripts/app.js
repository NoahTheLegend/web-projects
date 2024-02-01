import { get_header } from "./header.js";
import { get_samples_grid } from "./samples_grid.js";

document.body.querySelector("header").appendChild(get_header());
document.getElementById("content").appendChild(get_samples_grid());