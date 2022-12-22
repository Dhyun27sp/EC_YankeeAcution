<template>
    <body>
        <header id="header" v-bind:class="{clickOnHeader: isClick}">
        <div  class="header_logo">
            <img src="../components/HinhAnh/Logo/Logo2.png" alt="Logo">
        </div>
        <div class="navigation">
            <router-link class="register" to="/">TRANG CHỦ</router-link>
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
                    <input type="text" placeholder="Tìm kiếm" v-model="inputSearch">
                    <!-- <div class="txtSearch" placeholder="Tìm kiếm"> hhkjgF</div> -->
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

    <div class="allProduct">
    <div class="leftAllProduct">
        <div class="sidenav">
            <a href="#">Danh mục</a>
            <a href="#about">Card</a>
            <a href="#services">Lightstick</a>
            <a href="#clients">Album</a>
            <a href="#contact">Ticket</a>
        </div>
    </div>
    <div class="rightAllProduct">
        <div class="recommendProducts">
            <div class="recommendProduct" v-for="product in filteredProducts" v-bind:key="product.name">
                <img src="../components/HinhAnh/Product/Product1.png" alt="">
                <div class="nameProduct">{{ product.name }}</div>
                <div class="priceProduct">{{ product.price }}</div>
            </div>

        </div>
    </div>
</div>

    </body>


</template>

<script>

export default {
    name: 'TimKiem',
    data(){
        return{
            inputSearch: '',
            products:[
                {
                    name:'thien',
                    price: '24'
                },
                {
                    name:'duong',
                    price: '25'
                },
                {
                    name:'duc',
                    price: '26'
                },
            ], 
        }
    }, 
   
    filters:{
        toLowerCase(text){
            return text.toLowerCase();
        }
    }, 
    computed:{
        filteredProducts(){
            return this.products.filter((element)=>{
                return element.name.match(this.search);
            })
        },
        // getDataSearch(){
        //     evenBus.$on('inputSearch', (search)=>{
        //         this.inputSearch= search
        //     })
        // }
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
    visibility: visible;
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
/* .groupSearchDrop>input */
.groupSearchDrop>input {
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

/* CSS toan bo san pham */
.allProduct{
    width: 100%;
    display: flex;
    justify-content: center;
}
.leftAllProduct{
    width: 18%;
    background-color: #ffffff;
    margin-top: 99px;
    margin-right: 4px;
    margin-bottom: 4px;
}
.rightAllProduct{
    margin-top: 99px;
    margin-bottom: 4px;
    width: 80%;
    background-color: #ffffff;
}
.sidenav {
    width: 100%;
    overflow-x: hidden;
    padding-top: 20px;
}

.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    /*color: #818181;*/
    color: #19124F;
    display: block;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
}

.sidenav a:hover {
    color: #f1f1f1;
    background-color: #19124F;
}
.recommendProducts{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.recommendProduct{
    width: 220px;
    margin: 15px 15px;
    position: relative;
    top: 5px;
    display: flex;
    flex-direction: column;
}
.recommendProduct>img{
    width: 100%;
    height: auto;
    border-radius: 3px;
}
.nameProduct{
    width: 100%;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 20px;
    color: #19124F;
    margin: 7px 0px;
    text-align: center;
}
.priceProduct{
    width: 100%;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 22px;
    color: #19124F;
    text-align: center;
    font-weight: bold;
}
.recommendProduct:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    top: 0px;
}

</style>