import { RouteRecordRaw } from "vue-router";
import LoginVue from "~/components/Login.vue";
import IndexVue from "~/components/Index.vue";



const _import = (s: string) => ({
    default: () => import(`~/components/pages/${s}/Index.vue`),
    LeftSide: () => import(`~/components/pages/${s}/LeftSide.vue`)
});

const login: RouteRecordRaw = {
    path: "/login",
    component: LoginVue
};
const index: RouteRecordRaw = {
    path: "/",
    component: IndexVue,
    children: [
        {path: "/", components: _import("home")},
        {path: "home", components: _import("home")},
        {path: "workspace", components: _import("workspace")},
        {path: "stock", components: _import("stock")},
        {path: "milestones", components: _import("milestones")},
    ]
}
const routes = [login, index];
export default routes;