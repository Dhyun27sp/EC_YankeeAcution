import { createRouter, createWebHistory } from "vue-router";
// import Vue from 'vue';


import TrangChu from '../components/TrangChu.vue'
import DangNhap from '../components/DangNhap.vue'
import DangKy from '../components/DangKy.vue'
import SanPham from '../components/SanPham.vue'
import GioHang from '../components/GioHang.vue'
import ThanhToan from '../components/ThanhToan.vue'
import ThongTinCuaHang from '../components/ThongTinCuaHang.vue'

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
   {
    path: '/ThanhToan',
    name: "ThanhToan",
    component: ThanhToan
   },
   {
    path: '/ThongTinCuaHang',
    name: "ThongTinCuaHang",
    component: ThongTinCuaHang
   }

   
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
