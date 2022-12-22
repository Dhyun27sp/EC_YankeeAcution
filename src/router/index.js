import { createRouter, createWebHistory } from "vue-router";
// import Vue from 'vue';


import TrangChu from '../components/TrangChu.vue'
import DangNhap from '../components/DangNhap.vue'
import SanPham from '../components/SanPham.vue'
import GioHang from '../components/GioHang.vue'
import DangKy from '../components/DangKy.vue';

const routes = [
    {
        path: '/',
        // name: "homepage",
        component: TrangChu
    },
    {
        path: '/home',
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
    },
    {
        path: '/SanPham',
        name: "SanPham",
        component: SanPham
    },
    {
        path: '/GioHang',
        name: "GioHang",
        component: GioHang
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
