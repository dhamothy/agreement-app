import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(
        /* webpackChunkName: "transfer-edit" */ "../views/pages/Account.vue"
      )
  },
  {
    path: "/documents",
    name: "Documents",
    component: () =>
      import(
        /* webpackChunkName: "transfer-edit" */ "../views/pages/Documents.vue"
      )
  },
  {
    path: "/transfer",
    name: "Transfer",
    component: () =>
      import(
        /* webpackChunkName: "transfer-edit" */ "../views/pages/Transfer.vue"
      )
  },
  {
    path: "/transfer/:id",
    name: "TransferDetails",
    component: () =>
      import(
        /* webpackChunkName: "transfer-edit" */ "../components/TransferDetails.vue"
      ),
    props: true
  },
  {
    path: "/transfer/:id/edit",
    name: "TransferEdit",
    component: () =>
      import(
        /* webpackChunkName: "transfer-edit" */ "../components/TransferEdit.vue"
      ),
    props: true
  },
  {
    path: "/reports",
    name: "Reports",
    component: () =>
      import(
        /* webpackChunkName: "transfer-edit" */ "../views/pages/Reports.vue"
      )
  },
  {
    path: "/upload",
    name: "UploadFull",
    component: () =>
      import(
        /* webpackChunkName: "transfer-edit" */ "../components/UploadFull.vue"
      )
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "transfer-edit" */ "../views/pages/404.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
