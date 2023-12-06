import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Busq_por_sede from "../views/busq_por_sede.vue";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
import Modal from "../views/Modal.vue";
import Chart from "../views/ChartView.vue";
import Card from "../views/CardView.vue";
import Blank from "../views/BlankView.vue";
import NotFound from "../views/NotFound.vue";
import Cronometro from "../views/cronometro.vue";
import Agregar_Moderador from "../views/Agregar_Moderador.vue";
import Cargar from "../views/Cargar.vue";
import Pase_De_Lista from "../views/Pase_de_lista.vue";
import Busqueda_Moderador from "../views/Busqueda_Moderador.vue";
import Pase_De_Lista_Moderador from "../views/Pase_de_lista_mod.vue";
import mainpage from "../views/mainpage/mainpage.vue";
import login from "../views/login/login.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/busq_por_sede",
    name: "Busq_por_sede",
    component: Busq_por_sede,
  },
  {
    path: "/cronometro",
    name: "cronometro",
    component: Cronometro,
  },
  {
    path: "/agregar_moderador",
    name: "agregar_moderador",
    component: Agregar_Moderador,
  },
  {
    path: "/cargar",
    name: "cargar",
    component: Cargar,
  },
  {
    path: "/pase_de_lista",
    name: "pase_de_lista",
    component: Pase_De_Lista,
  },
  {
    path: "/Pase_de_lista_moderador",
    name: "Pase_de_lista_moderador",
    component: Pase_De_Lista_Moderador,
  },
  {
    path: "/busqueda_moderador",
    name: "busqueda_moderador",
    component: Busqueda_Moderador,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/charts",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
  {
    path: '/',
    name: 'mainpage',
    component: mainpage,
    meta: 
    {
      layout: 'full-width', // or you can set it to null or false
    },
  },
  {
    path: '/alt_login',
    name: 'login',
    component: login,
    meta: 
    {
      layout: 'full-width', // or you can set it to null or false
    },
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
