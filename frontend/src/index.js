import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";

//define the route address for each screen
const routes = {
    "/": HomeScreen,
    "/proudct/:id": ProductScreen,
}

//create a router function 
const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}`: '/') +
                    (request.id ? `/${request.id}` : '') +
                    (request.verb ? `/${request.verb}` :'');
    const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;
    const main = document.getElementById("main-container");
    main.innerHTML = await screen.render();
}

window.addEventListener('load', router) ;
window.addEventListener('hashchange', router);