import { RouteRecordRaw } from "vue-router";
import LoginVue from "~/components/Login.vue";
import IndexVue from "~/components/Index.vue";
import HomeVue from "~/components/pages/home/Index.vue";
import WorkSpaceVue from "~/components/pages/workspace/Index.vue";
const login: RouteRecordRaw = {
    path: "/login",
    component: LoginVue
};
const index: RouteRecordRaw = {
    path: "/",
    component: IndexVue,
    children: [
        {path: "/", component: HomeVue},
        {path: "home", component: HomeVue},
        {path: "workspace", component: WorkSpaceVue},
    ]
}
const routes = [login, index];
export default routes;