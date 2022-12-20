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

    <div class="detailCart">
        <h2 class="shopping-cart">Shopping cart (1 item)</h2>

        <div class="content">
            <div class="container-info">
                <div class="content_info-product">
                <img class="product_img" src="" alt="">
                <div class="info">
                    <p>LISA MV LALISA - Bộ Thẻ Card Ảnh Lisa TRONG MV
                    Lalisa Sưu Tầm Mới Nhất + Kèm Poster Lalisa Full HD</p>
                <div class="img">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>
            <div class="money_remove">
                <div class="money">
                    <p>Số lượng</p>
                    <p>53.000 VND</p>
                </div>
                <div class="remove">
                    <p>Save for later</p>
                    <div class="straight-line">

                    </div>
                    <p>Remove</p>
                </div>
            </div>
        </div>
        </div>
            <div class="container_payment">
            <div class="content_total-payment">
                <div class="button_submit">Go to checkout</div>
                <div class="content_total-payment_item">
                    <p>Item (1)</p>
                    <p>US $300</p>
                </div>

                <div class="content_total-payment_subtotal">
                    <p>Subtotal</p>
                    <p>US $300</p>
                </div>
            </div>
        </div>
        </div>

    </div>

    </body>

    
</template>

<script>
export default {
    name: 'GioHang',

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
.detailCart{
    background-color: #FFFFFF;
    width: 100%;
    height: 200px;
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


/* CSS Gio Hang */

.content{
    display: flex;
    justify-content: space-between;
    margin: 0 25px;
}
.container-info{
    border: 1px solid black;
    border-radius: 3px;
    margin-right: 10px;
}
.content_info-product{
    display: flex;
    justify-content: space-between;
    flex: 3;
    padding:10px;
    font-size: 18px;
}

.info{
    width: 50%;
    color: coral;
}
.content_info-product .product_img{
    width: 200px;
    height: 200px;
}
.content_info-product .info .img img{
    width: 50px;
    height: 50px;
}
.money_remove{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.money_remove .money{
    display:flex;
    justify-content: space-between;
}
.straight-line{
    height: 18px;
    width: 1px;
    background-color: black;
}
.money_remove .remove{
    display: flex;
    justify-content: space-between;
}
.container_payment{
    border: 1px solid black;
    border-radius: 3px;
}
.content_total-payment{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    padding: 10px;
    height: 120px;
}
.content_total-payment .button_submit{
    width: 220px;
    height: 30px;
    background-color: coral;
    border-radius: 10px;
    font-size: 14px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    color: white;
}
.content_total-payment_item{
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid black;
}
.content_total-payment_subtotal{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.gioHang{
    margin-top: 120px;
    background-color: #FFFFFF;
}
.shopping-cart{
   padding: 20px 0px;
    margin-left: 30px;
}
</style>