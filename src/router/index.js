import { createRouter, createWebHistory } from "vue-router";
// import Vue from 'vue';


import TrangChu from '../components/TrangChu/TrangChu.vue'
import DangNhap from '../components/DangNhap/DangNhap.vue'
import DangKy from '../components/DangKy/DangKy.vue'

const routes= [
    {path: '/',
    // name: "homepage",
    component: TrangChu
    },
    {path: '/home',
    name: "homepage",
    component: TrangChu
    },
   {
    path: '/DangNhap',
    name: "DangNhap",
    component: DangNhap
   },
   {
    path: '/DangKy',
    name: "DangKy",
    component: DangKy
   }

   
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
