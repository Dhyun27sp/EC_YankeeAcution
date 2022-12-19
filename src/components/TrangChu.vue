<template>
     <div class="head">
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

                    <!-- <a href="#" class="register">ĐĂNG KÝ</a> -->
                    <!-- <a href="#" class="login">ĐĂNG NHẬP</a> -->
                </div>
            </div>
        </header>
    
        <img class="imgBackground" src="../components/HinhAnh/Home_Background/Background1.jpg" alt="">
        <div class="slogan">
            <p class="slogan_subject">Lưu giữ kỷ niệm <br>cho Idol của bạn</p>
            <p class="slogan-content">KPOP AUCTION - Cung cấp card bo góc mọi thể loại, <br> hãy sưu tầm card bo góc và poster tuyệt đẹp
                để lưu giữ hình ảnh đỉnh cao của thần tượng mà bạn yêu thích!</p>
        </div>
    </div>
    <div class="catalog">
        <div class="title">Danh mục</div>
        <div class="catalog_detail">
            <div class="tag_Catalog">
                <img src="../components/HinhAnh/Catalog/Kpop.png" alt="">
                <p>Card</p>
            </div>
            <div class="tag_Catalog">
                <img src="../components/HinhAnh/Catalog/Kpop.png" alt="">
                <p>Poster</p>
            </div>
            <div class="tag_Catalog">
                <img src="../components/HinhAnh/Catalog/Kpop.png" alt="">
                <p>Lightstick</p>
            </div>
            <div class="tag_Catalog">
                <img src="../components/HinhAnh/Catalog/Kpop.png" alt="">
                <p>Album</p>
            </div>
            <div class="tag_Catalog">
                <img src="../components/HinhAnh/Catalog/Kpop.png" alt="">
                <p>Calendar</p>
            </div>
   
        </div>
    </div>
    <div class="topic">
        <div class="title">Sản phẩm hot</div>
        <div id="detailTopic">
            <div class="leftTopic">
                <button class="button" @mouseover="handleMouseOver($event, 1)"  v-bind:class="{buttonActive: isMouseOver1}"><span>Thẻ bo góc </span><span class="arrowRight" v-bind:class="{arrowActive: isMouseOver1}">&#187;</span></button>
                <button class="button" @mouseover="handleMouseOver($event, 2)" v-bind:class="{buttonActive: isMouseOver2}"><span>Lightstick </span><span class="arrowRight" v-bind:class="{ arrowActive: isMouseOver2}">&#187;</span></button>
                <button class="button" @mouseover="handleMouseOver($event, 3)" v-bind:class="{buttonActive: isMouseOver3}"><span>Poster </span><span class="arrowRight" v-bind:class="{arrowActive: isMouseOver3}">&#187;</span></button>
                <button class="button" @mouseover="handleMouseOver($event, 4)" v-bind:class="{buttonActive: isMouseOver4}"><span>Calender </span><span class="arrowRight" v-bind:class="{arrowActive: isMouseOver4}">&#187;</span></button>
            </div>
            <div class="rightTopic">
                <img class="imgHotProduct" v-bind:class="{imgDisplay: imgDefault}" src="../components/HinhAnh/Product/Product1.png" alt="">
                <img class="imgHotProduct" v-bind:class="{imgDisplay: isMouseOver1}" src="../components/HinhAnh/Home_Background/Background1.jpg" alt="">
                <img class="imgHotProduct" v-bind:class="{imgDisplay: isMouseOver2}" src="../components/HinhAnh/Product/Product1.png" alt="">
                <img class="imgHotProduct" v-bind:class="{imgDisplay: isMouseOver3}" src="../components/HinhAnh/Home_Background/Background1.jpg" alt="">
                <img class="imgHotProduct" v-bind:class="{imgDisplay: isMouseOver4}" src="../components/HinhAnh/Product/Product1.png" alt="">

            </div>
        </div>
    </div>

    <div class="recommend">
        <div class="title">Gợi ý</div>
        <div class="recommendProducts">
            <div class="recommendProduct">
                    <img src="../components/HinhAnh/Product/Product1.png" alt="">
                    <div class="nameProduct">PhotoCart BTS</div>
                    <div class="priceProduct">53.000 VND</div>
                </div>
            <div class="recommendProduct">
                    <img src="../components/HinhAnh/Product/Product1.png" alt="">
                    <div class="nameProduct">PhotoCart BTS</div>
                    <div class="priceProduct">53.000 VND</div>
                </div>
            <div class="recommendProduct">
                <img src="../components/HinhAnh/Product/Product1.png" alt="">
                <div class="nameProduct">PhotoCart BTS</div>
                <div class="priceProduct">53.000 VND</div>
            </div>
            <div class="recommendProduct">
                <img src="../components/HinhAnh/Product/Product1.png" alt="">
                <div class="nameProduct">PhotoCart BTS</div>
                <div class="priceProduct">53.000 VND</div>
            </div>
            <div class="recommendProduct">
                <img src="../components/HinhAnh/Product/Product1.png" alt="">
                <div class="nameProduct">PhotoCart BTS</div>
                <div class="priceProduct">53.000 VND</div>
            </div>
            <div class="recommendProduct">
                <img src="../components/HinhAnh/Product/Product1.png" alt="">
                <div class="nameProduct">PhotoCart BTS</div>
                <div class="priceProduct">53.000 VND</div>
            </div>
            <div class="recommendProduct">
                <img src="../components/HinhAnh/Product/Product1.png" alt="">
                <div class="nameProduct">PhotoCart BTS</div>
                <div class="priceProduct">53.000 VND</div>
            </div>
    
    
        </div>
    </div>
    <footer>
        <div class="container">
            <div class="noi-dung about">
                <h2>Về Chúng Tôi</h2>
                <p>Lorem ipsumdolor sit...</p>
    <!--            <ul class="social-icon">-->
    <!--                <li><a href=""><i class="fa fa-facebook"></i></a></li>-->
    <!--                <li><a href=""><i class="fa fa-twitter"></i></a></li>-->
    <!--                <li><a href=""><i class="fa fa-instagram"></i></a></li>-->
    <!--                <li><a href=""><i class="fa fa-youtube"></i></a></li>-->
    <!--            </ul>-->
            </div>
            <div class="noi-dung links">
                <h2>Đường Dẫn</h2>
                <ul>
                    <li><a href="#">Trang Chủ</a></li>
                    <li><a href="#">Về Chúng Tôi</a></li>
                    <li><a href="#">Thông Tin Liên Lạc</a></li>
                    <li><a href="#">Dịch Vụ</a></li>
                    <li><a href="#">Điều Kiện Chính Sách</a></li>
                </ul>
            </div>
            <div class="noi-dung contact">
                <h2>Thông Tin Liên Hệ</h2>
                <ul class="info">
                    <li>
                        <span><i class="fa fa-map-marker"></i></span>
                        <span>Đường Số 1<br />
                             Quận 1, Thành Phố Hồ Chí Minh<br />
                             Việt Nam</span>
                    </li>
                    <li>
                        <span><i class="fa fa-phone"></i></span>
                        <p><a href="#">+84 123 456 789</a>
                            <br />
                            <a href="#">+84 987 654 321</a></p>
                    </li>
                    <li>
                        <span><i class="fa fa-envelope"></i></span>
                        <p><a href="#">diachiemail@gmail.com</a></p>
                    </li>
                    <li>
    <!--                    <form class="form">-->
    <!--                        <input type="email" class="form__field" placeholder="Đăng Ký Subscribe Email" />-->
    <!--                        <button type="button" class="btn btn&#45;&#45;primary  uppercase">Gửi</button>-->
    <!--                    </form>-->
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'TrangChu',

  data() {
    return{
        isMouseOver1: false,
        isMouseOver2: false, 
        isMouseOver3:false, 
        isMouseOver4: false,

        imgDefault: true,   
                    
        isClick: false,
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
        }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0;
    padding: 0;
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
}
.groupSearchDrop{
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
/* CSS header home */
.head{
    width: 100%;
}
.imgBackground{
    width: 100%;
    height: 550px;
    opacity: 0.9;
    z-index: -1;
    position: relative;
    top: -60px;
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
}
header:hover{
    background-color: #FFFFFF;
}
.slogan{
    position: absolute;
    left: 160px;
    top: 160px;
    width: 750px;
}
.slogan_subject{
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 58px;
    font-weight: bolder;
}
.slogan-content{
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 25px;
}
/*CSS Catalog*/
.catalog{
    width: 100%;
    height: 500px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.catalog>.title{
    margin-bottom: 50px;
}
.catalog_detail{
    display: flex;
    justify-content: center;
}
.title{
    /*padding-top: 50px;*/
    display: flex;
    justify-content: center;
    font-size: 55px;
    padding-bottom: 30px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
}
.catalog>.title{
    /*font-size: 55px;*/
    color: #19124F;
}
.tag_Catalog{
    width: 150px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 10px;
    transition: transform .25s ease;
}
.tag_Catalog:hover{
    transform: scale(1.3);
}
.tag_Catalog>img{
    width: 150px;
    height: 150px;
}
.tag_Catalog>p{
    display: flex;
    align-self: center;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 18px;
    color: #19124F;
}
/*CSS Topic*/
.topic{
    width: 100%;
    background-color: black;
    /*font-family: Lato, sans-serif;*/
    padding: 50px 0;

}
.topic>.title{
    color: #FFFFFF;
}
#detailTopic{
    display: flex;
    justify-content: center;
}
.button {
    background: none;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 48px;
    width: fit-content;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px 40px;
}
.button span {
    display: inline-block;
    position: relative;
    transition: visibility .1s linear;
}
.arrowRight{
    visibility: hidden;
}
.arrowActive{
    visibility: visible;
}
.buttonActive{
    border-bottom:  5px solid #FFFFFF;
}
.button:hover span {
    margin-right: 5px;
}
.button:hover span:after {
    opacity: 1;
    right: 0;
}
.leftTopic{
    padding: 30px 0;
    width: 35%;
    display: flex;
    flex-direction: column;
}
.rightTopic{
    width: 55%;
    
}
.imgHotProduct{
    width: 100%;
    height: 400px;
    display: none;
    transition: display 0.3s linear;
}
.imgDisplay{
    display: block;
}

/*CSS Recommend Product*/
.recommend{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 50px 5%;
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

/* CSS footer */

footer{
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px 0px;
    background: #111;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
footer .container{
    width: 100%;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
}
footer .container .noi-dung{
    margin-right: 30px;
   
}
footer  .container .noi-dung.about{
    width:40%;
}
footer .container .noi-dung.about h2{
    position: relative;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
}
footer .container .noi-dung.about h2:before{
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: #f00;
}
footer .container .noi-dung.about p{
    color: #999;
}
/*Thiết Lập Cho Thành Phần Icon Mạng Xã Hội*/
.social-icon{
    margin-top: 20px;
    display: flex;
}
.social-icon li {
    list-style: none;
}
.social-icon li a{
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    border-radius: 4px;
}
.social-icon li a:hover{
    background: #f00;
}
.social-icon li a .fa{
    color: #fff;
    font-size: 20px;
}
.links h2{
    position: relative;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
}
.links h2{
    position: relative;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
}
.links h2::before{
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: #f00;
}
.links{
    position: relative;
    width: 25%;
}
.links ul li{
    list-style: none;
}
.links ul li a{
    color: #999;
    text-decoration: none;
    margin-bottom: 10px;
    display: inline-block;
}
.links ul li a:hover{
    color: #fff;
}
.contact h2{
    position: relative;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
}
.contact h2::before{
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: #f00;
}
.contact{
    width: calc(35% - 60px);
    margin-right: 0 !important;
}
.contact .info{
    position: relative;
}
.contact .info li{
    display: flex;
    margin-bottom: 16px;
}
.contact .info li span:nth-child(1) {
    color: #fff;
    font-size: 20px;
    margin-right: 10px;
}
.contact .info li span{
    color: #999;
}
.contact .info li a{
    color: #999;
    text-decoration: none;
}
</style>
