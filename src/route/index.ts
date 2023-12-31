import { createRouter, RouterOptions, createWebHistory } from "vue-router"
import routes from "./routes";

const options: RouterOptions = {
    history: createWebHistory(),
    routes: routes
};
const router = createRouter(options);
export default router;