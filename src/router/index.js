import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/404.vue";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout.vue"),
    // component: { render: h => h("router-view") }, // 等同于上面import引入的渲染页面
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login.vue")
      },
      {
        path: "/user/Register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register.vue")
      }
    ]
  },
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
    children: [
      // dashboard
      {
        path: '/',
        redirect: '/dashboard/analysis'
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: () =>
              import(/* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis")
          }
        ]
      },
      {
        path: '/form',
        name: 'form',
        component: { render: h => h('router-view') },
        children: [
          {
            path: 'form/basic-form',
            name: 'basicform',
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm")
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            components: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/StepForm"),
            children: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info'
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: () =>
                  import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step1")
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: () =>
                  import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step2")
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: () =>
                  import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step3")
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "*",
    name: '404',
    component: NotFound
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.path !== from.path) { // 同个页面跳转不显示进度条
    NProgress.start() // 页面加载、接口请求进度条
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
