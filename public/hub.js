import { get_header } from "./js/header.js";
import { get_samples_grid } from "./js/samples_grid.js";

document.body.querySelector("header").appendChild(get_header());
document.getElementById("content").appendChild(get_samples_grid());