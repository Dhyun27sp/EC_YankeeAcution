<template>
    <body>
        <header id="header" v-bind:class="{clickOnHeader: isClick}">
        <div  class="header_logo">
            <img src="../components/HinhAnh/Logo/Logo2.png" alt="Logo">
        </div>
        <div class="navigation">
            <a href="#" class="nav_home">TRANG CHỦ</a>
            <a href="#" class="nav_auction">ĐẤU GIÁ</a>
            <a href="#" class="nav_auction">DANH MỤC</a>
            <a href="#" class="nav_auction">GIỚI THIỆU</a>
            <a href="#" class="how_to_buy">TRỢ GIÚP</a>
        </div>
        <div class="header_right">
            <div id="search">
                <button class="searchIcon"  @click="handleClickSearch"><img src="../components/HinhAnh/Icon/Search.png" alt=""></button>
                <div class="searchDrop" v-bind:class="{clicked: isClick}">
                    <div class="cancelSearch" >
                        <button @click="handleClickX">X</button>
                    </div>
                    <div class="groupSearchDrop">
                        <select name="" id="">
                        <option value="0">Tất cả</option>
                        <option value="1">Thẻ bo góc</option>
                        <option value="2">Lightstick</option>
                        <option value="3">Poster</option>
                    </select>
                    <input type="text" placeholder="Tìm kiếm">
                    <button class="searchBtn">Tìm kiếm</button>
                    </div>
                    
                </div>

            </div>
            <div class="cart">
                <img src="../components/HinhAnh/Icon/Cart.png" alt="">
                <div class="count_cart">0</div>
            </div>
            <div class="inform">
                <img src="../components/HinhAnh/Icon/Bell.png" alt="">
            </div>
            <div class="header_btn">
                <router-link class="register"  to="/DangKy">ĐĂNG KÝ</router-link>
                <router-link class="login" to="/DangNhap">ĐĂNG NHẬP</router-link>
            </div>
        </div>
    </header>

    <div class="thongTinCuaHang">
        <div class="shop_info_container">
        <div class="background_shop">
        <div class="shop_img">
            <img src="../components/HinhAnh/Catalog/Kpop.png" alt="avatar">
        </div>
        <div class="shop_info">
            <p class="shop_name">NVT SHOP</p>
            <div class="badge_wrapper">
                <div class="rate_star">
                    <div class="star_icon">
                        <!-- <img src="Image/Star.png" alt="Star"> -->
                    </div>
                    <div class="rate_SubInfo">Đánh giá: 4.1 / 5</div>
                </div>
                <div class="line_row"></div>
                <div class="numbers_of_followers">
                    <i class="ti-user"></i>
                    <div class="followers_SubInfo">Người theo dõi: 1.5+</div>
                </div>
            </div>
        </div>
        <div class="shop_features">

            <button class="chat_button_container">
                <div class="chat_button_icon">
                    <i class="ti-comment"></i>
                </div>
                Chat
            </button>
            <button class="follow_button_container">
                <div class="follow_button_icon">
                    <i class="ti-plus"></i>
                </div>
                Theo dõi
            </button>
            <div class="search_bar">
                <div class="search_button_icon">
                    <i class="ti-search"></i>
                </div>
                <input type="text" value placeholder="Tìm sản phẩm tại cửa hàng">
            </div>
        </div>
        <div class="menu_container">
            <div class="MenuTab">
                <div class="MenuTab_Shop">
                    <a href="">Shop</a>
                </div>
            </div>
            <div class="MenuTab">
                <div class="MenuTab_About">
                    <a href="">About</a>
                </div>
            </div>
            <div class="MenuTab">
                <div class="MenuTab_Feedback">
                    <a href="">Feedback</a>
                </div>
            </div>
        </div>
    </div>

</div>
<div class="product_catalog_container">
    <div class="menu_product">
        <div class="catalog">
            <div class="catalog_icon">
                <!-- <img src="Image/catalog-icon.png" alt="catalog-icon"> -->
            </div>
            <p>Danh mục</p>
        </div>
        <div class="Card">
            <a href="">Card</a>
        </div>
        <div class="LightStick">
            <a href="">LightStick</a>
        </div>
        <div class="Ticket">
            <a href="">Ticket</a>
        </div>
        <div class="Album">
            <a href="">Album</a>
        </div>
    </div>
    <div class="nav_bar-container_product">
        <div class="nav_bar">
            <p> Sắp xếp theo</p>
            <a href="#" class="common_button">Phổ biến</a>
            <a href="#" class="newest_button">Mới nhất</a>
            <a href="#" class="most_selling_button">Bán chạy</a>
            <div></div>
        </div>
        <div>sdaf</div>
    </div>
</div>
    
    </div>

    </body>

    
</template>

<script>
export default {
    name: 'ThongTinCuaHang',

    data() {
    return{
        isMouseOver1: false,
        isMouseOver2: false, 
        isMouseOver3:false, 
        isMouseOver4: false,

        imgDefault: true,   
                    
        isClick: false,

        // timeCount: '',
                }   
    },
    methods: {
        handleMouseOver(e, number){ 
            if(number==1){
                this.isMouseOver1= true;
                this.isMouseOver2= false;
                this.isMouseOver3= false;
                this.isMouseOver4= false;
                this.imgDefault= false;      
            }
            else if(number==2){
                this.isMouseOver1= false;
                this.isMouseOver2= true;
                this.isMouseOver3= false;
                this.isMouseOver4= false
                this.imgDefault= false;
            }  
            else if(number==3){
                this.isMouseOver1= false;
                this.isMouseOver2= false;
                this.isMouseOver3= true;
                this.isMouseOver4= false
                this.imgDefault= false;
            }  
            else if(number==4){
                this.isMouseOver1= false;
                this.isMouseOver2= false;
                this.isMouseOver3= false;
                this.isMouseOver4= true
                this.imgDefault= false;
            }              
        },
        handleClickSearch(e){
            this.isClick= true;
        }, 
        handleClickX(e){
            this.isClick= false;
        },
       
    }    
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.thongTinCuaHang{
    background-color: #FFFFFF;
    width: 100%;
    /* height: 200px; */
    position: relative;
    top: 99px;
}
body{   
    background-color: #F2F2F6;
}
header{
    background-color: #FFFFFF;
}
header{
    width: 100%;
    height: 95px;
    /*padding: 0 2%;*/
    display: flex;
    justify-content: center;
    transition: background-color .3s linear;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.navigation{
    width: 43%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navigation>a{
    width: 100px;
    text-decoration: none;
    color: black;
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 15px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
}
.navigation>a:hover{
    color: #F47458;
    border-bottom: 1.5px solid #F47458;
}
.header_logo{
    width:7%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 0;
    margin-right: 50px;
}
.header_logo>img{
    width: 110%;

}
.header_right{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#search{
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;
}
.searchIcon{
    height: 100%;
    width: 100%;
    background: none;
    border: none;
}
.searchIcon>img{
    width: 25px;
    height: 25px;
}
.searchDrop{
    background: #FFFFFF;
    position: absolute;
    top: 95px;
    left: 0px;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: visibility .2s linear;
    visibility: hidden;
}.groupSearchDrop{
    width: 100%;
    display: flex;
    justify-content: center;

}
.clicked{
    visibility: visible;
}
.groupSearchDrop>select{
    height: 33px;
    width: 150px;
    margin-right: 10px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 16px;
}
.searchBtn{
    width: 80px;
    height: 33px;
    background-color: #F47458;
    border: none;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 16px;
}
.groupSearchDrop>input{
    height: 30px;
    width: 35%;
    margin-right: 10px;
    padding-left: 5px;
}
.cancelSearch{
    width: 100%;
    margin-right: 7%;
    display: flex;
    justify-content: flex-end;
}
.cancelSearch>button{
    font-size: 25px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    background: none;
    border: none;
}
.cart{
    position: relative;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}
.cart>img{
    width: 25px;
    height: 25px;
}
.count_cart{
    width: 18px;
    height: 18px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: black;
    color: #FFFFFF;
    z-index: 1;
    position: absolute;
    top: 30px;
    right: 3px;
}
.inform{
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}
.inform>img{
    width: 25px;
    height: 25px;
}
.header_btn{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header_btn>a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-decoration: none;
    width: 45%;
    height: 42px;
    border: 1.5px solid black;
    border-radius: 25px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 14px;
}
.login{
    background-color: #F66A55;
}
.clickOnHeader{
    background-color: #FFFFFF;
}

/* CSS Thong tin cua hang */
.shop_info_container{
    position: relative;
}
.background_shop{
    height: 180px;
    margin:0 25px;
    padding: 15px 15px;
    background-image: url('../components/HinhAnh/Home_Background/Background_shop.jpg');
    background-size:cover ;
    display: flex;
}

.shop_img img{
    width: 110px;
}
.shop_info{
    display: flex;
    flex-direction: column;
}
.shop_name{
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    padding-top: 10px;
    padding-bottom: 35px;
}

.badge_wrapper{
    display: flex;
    align-items: center;
}

.rate_star{
    display: flex;
}

.star_icon img{
    width: 20px ;
}

.rate_SubInfo{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-top: 2px;
    margin-left: 10px;
}

.line_row{
    height: 15px;
    width: 1px;
    margin: 0 15px;
    background-color: black;
}
.numbers_of_followers{
    display: flex;
}

.shop_features{
    border-left: 1px solid rgb(0 0 0);
    height: 100px;
    padding-left: 50px;
    margin-left: 50px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.chat_button_container{
    padding: 6px 12px;
    border: 1px solid black;
    border-radius: 4px;
    background: none;
    color: black;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.54;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}
.chat_button_icon{
    padding-right: 10px;
}
.follow_button_container{
    padding: 6px 12px;
    margin: 0 50px;
    background-color: rgb(11, 116, 229);
    border: 1px solid rgb(11, 116, 229);
    border-radius: 4px;
    color: rgb(255, 255, 255);
    font-size: 13px;
    font-weight: 500;
    line-height: 1.54;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}

.follow_button_icon{
    padding-right: 10px;
}

.search_bar {
    width: 320px;
    position: relative;
}
.search_button_icon{
    position: absolute;
    top: 8px;
    left: 14px;
}
.search_bar input{
    width: 100%;
    border: none;
    outline: none;
    border-radius: 4px;
    height: 36px;
    padding-left: 44px;
}

.menu_container{
    position: absolute;
    display: flex;
    padding-top: 108px;
}

.MenuTab{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    padding: 18px 0;
    cursor: pointer;
    position: relative;
    width: 130px;
    text-align: center;
}
.MenuTab_Shop{
    font-size: 16px;
    color: black;
    line-height: 20px;
    text-align: center;
    text-transform: capitalize;
    font-weight: normal;
    transition: font-weight 0.1s ease-in 0s;
}
.MenuTab_Shop::after{
    content: "";
    transition: background-color 0.1s ease-in-out 0s;
    position: absolute;
    bottom: 10px;
    background-color: transparent;
    width: 24px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    height: 4px;
    border-radius: 4px;
}

.product_catalog_container{
    display: flex;
    margin:30px 25px;
}

.menu_product{
    display: flex;
    flex-direction: column;
    font-family: Inter, sans-serif;
    font-style: normal;
    line-height: 34px;
    padding-right: 40px;
    width: 220px;
}
.menu_product a{
    color: black;
}
.catalog{
    display: flex;
    border-bottom: 2px solid gray;
    margin-top: 10px;
}
.catalog_icon{
    margin-top: 4px;
    margin-right: 4px;
}
.catalog_icon img{
    width: 25px;
}
.catalog p{
    font-size: 25px;
    font-weight: 700;

}
.Card ,.LightStick ,.Ticket ,.Album{
    margin: 10px 0;
}

.nav_bar-container_product{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.nav_bar{
    display: flex;
    background: rgba(217, 217, 217, 0.4);
    height: 52px;
}
.nav_bar p{
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    margin: 14px 0 0 15px;
}

.common_button{
    padding: 17px 14px;
    margin: 7px 10px 7px 25px;
    background-color: coral;
    border: 1px solid coral;
    border-radius: 4px;
    color: white;
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.54;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}

.newest_button{
    padding: 17px 14px;
    margin: 7px 10px;
    background-color: white;
    border: 1px solid white;
    border-radius: 4px;
    color: black;
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.54;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}

.most_selling_button{
    padding: 17px 14px;
    margin: 7px 10px;
    background-color: white;
    border: 1px solid white;
    border-radius: 4px;
    color: black;
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.54;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}
</style>