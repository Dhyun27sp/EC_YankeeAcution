import { createRouter, createWebHistory } from "vue-router";
// import Vue from 'vue';


import TrangChu from '../components/TrangChu.vue'
import DangNhap from '../components/DangNhap.vue'
import SanPham from '../components/SanPham.vue'
import GioHang from '../components/GioHang.vue'
import DangKy from '../components/DangKy.vue'
import ToanBoSanPham from '../components/ToanBoSanPham.vue'
import TimKiem from '../components/TimKiem.vue'
import ThanhToan from '../components/ThanhToan.vue'

const routes = [
    {
        path: '/',
        // name: "homepage",
        component: TrangChu
    },
    {
        path: '/TrangChu',
        name: "TrangChu",
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
    // {
    //     path: '/SanPham',
    //     name: "SanPham",
    //     component: SanPham
    // },
    {
        path: '/GioHang',
        name: "GioHang",
        component: GioHang
    },
    {
        path: '/ToanBoSanPham',
        name: "ToanBoSanPham",
        component: ToanBoSanPham,
    },
    {
        path: '/ToanBoSanPham/XemChiTiet/:id',
        name: "ToanBoSanPham.XemChiTiet",
        component: SanPham,
    },
    {
        path: '/TimKiem',
        name: "TimKiem",
        component: TimKiem
    },
    {
        path: '/ThanhToan',
        name: "ThanhToan",
        component: ThanhToan
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
