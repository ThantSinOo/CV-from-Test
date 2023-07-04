import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import DashBoard from '../views/DashBoard.vue'
import CvForm from '../views/CvForm.vue'
import CheckCvinfo from '../views/CheckCvinfo.vue'
import CheckPrimaryInfo from '../views/CheckPrimaryInfo.vue'
import DoeView from '../views/DoeView.vue'
import RegisterNewWorker from '../views/RegisterNewWorker.vue'
import ReviewCv from '../views/ReviewCv.vue'
import store from '../store/auth'


const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    // meta: { requiresAuth: true },
  },

  {
    path: "/",
    name: "login",
    component: LoginPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/checkprimaryinfo",
    name: "checkprimaryinfo",
    component: CheckPrimaryInfo,
    meta: { requiresAuth: false },
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
    meta: { requiresAuth: false },
  },

  {
    path: "/cvform",
    name: "cvform",
    component: CvForm,
    meta: { requiresAuth: true },
  },
  {
    path: "/checkcvinfo",
    name: "checkcvinfo",
    component: CheckCvinfo,
    meta: {requiresAuth: true}
  },
  {
    path: "/doe",
    name: "doe",
    component: DoeView,
    meta: {requiresAuth: false}
    
  },
  {
    path: "/register",
    name: "register",
    component: RegisterNewWorker,
    meta: {requiresAuth: false}
  },
  {
    path: "/reviewcv",
    name: "reviewcv",
    component: ReviewCv,
    meta: {requiresAuth: false}
  }


]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.token !== null;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/'); // Redirect to the login page if authentication is required but the user is not authenticated
  } else {
    next(); // Allow navigation to the requested page
  }
});

export default router;
