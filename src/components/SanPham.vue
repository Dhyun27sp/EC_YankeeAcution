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
    <div class="details">
      <div class="leftDetail">
          <div class="gallery">
              <div class="container">
                            <div class="mySlide">
                              <img src="../components/HinhAnh/Product/Product1.png" alt="">
                            </div>
                  <!--          <div class="mySlide">-->
                  <!--            <img src="HinhAnh/Home_Background/Background.png" alt="">-->
                  <!--          </div>-->
                  <!--          <div class="mySlide">-->
                  <!--            <img src="HinhAnh/Home_Background/Background.png" alt="">-->
                  <!--          </div>-->
              </div>
          </div>
        <div class="row">
          <div class="column"><img src="../components/HinhAnh/Product/Product1.png" alt="" class="demo"></div>
          <div class="column"><img src="../components/HinhAnh/Product/Product1.png" alt="" class="demo"></div>
          <div class="column"><img src="../components/HinhAnh/Product/Product1.png" alt="" class="demo"></div>
        </div>
          <div class="detailProduct">
              <p class="descriptTitle">Chi tiết sản phẩm:</p>
              <ul>
                  <li>Số lượng: 15</li>
                  <li>Kích thước: tùy chọn</li>
                  <li>Gửi từ: Thành phố Hồ Chí Minh</li>
              </ul>
          </div>
          <div class="description">
              <p class="descriptTitle">Mô tả sản phẩm:</p>
              <p class="descriptContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</p>
          </div>
      </div>
      <div class="centerDetail">

              <div class="name">LISA MV LALISA- Bộ Thẻ Card Ảnh Lisa TRONG MV Lalisa </div>
              <div class="bidCount">3 đã đấu giá</div>
              <!-- <div class="rate_bidCount">
                  <div class="starRate">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                  </div>
                  <div class="bidCount">3 đã đấu giá</div>
              </div> -->
              <div class="timeLeft">
                  <p><span>Thời gian: </span>03d 45h 3m </p>

                  <!-- <p><vue-countdown :time="2 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
    Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
  </vue-countdown></p> -->

                  

                  <div class="bid">Giá khởi điểm:
                      <div class="price">50.398 VND</div>
                      <div class="placeBid"><input type="text" placeholder="Mức giá/ 1 sản phẩm..."></div>
                      <!--                  <div class="instruction">*Giá đặt ra phải lớn hơn hoặc bằng giá khởi điểm</div>-->
                      <div class="Qty">
                          <div class="labelQty">Số lượng:</div>
                          <div class="buyQty">
                              <button class="substractBtn">-</button>
                              <div>1</div>
                              <button class="plusBtn">+</button>
                          </div>
                      </div>
                      <!--              <div class="bidQty"><input type="text" placeholder="Số lượng..."></div>-->
                      <!--              <div class="bidCount">[3 bids]</div>-->
                      <div class="Btn"><button class="largeBtn placeBidBtn">Đấu giá</button></div>
                      <div class="Btn"><button class="largeBtn add2CartBtn">Thêm vào giỏ hàng</button></div>

                  </div>

              </div>

          <div class="shop">
              <div class="shopProfile">
                  <span class="profileIcon"><img src="../components/HinhAnh/Icon/Profile.png" alt=""></span>
                  <span class="shopName">Đinh Tấn Phúc Hi</span>
              </div>
              <div class="shopRate_Flow">
                  <div class="shopRate">
                      <div>
                          <span class="avgRate">0/5</span>
                          <span class="fa fa-star checked"></span>
                      </div>
                      <span class="titleFlow">4+</span>
                  </div>
                  <div class="shopFlow">
                      <span class="amountFlow">0</span>
                      <span class="titleFlow">Sản phẩm</span>
<!--                      <button class="shopBtn">Theo dõi</button>-->
                  </div>
              </div>
              <div class="btnFlow">
                  <button class="shopBtn">Xem shop</button>
              </div>
              <div class="shopGuarantees">
                  <div class="shopGuarantee">
                      <img src="../components/HinhAnh/Icon/Like.png" alt="">
                      <span>Hoàn tiền 100% nêu hàng giả</span>
                  </div>
                  <div class="shopGuarantee">
                      <img src="../components/HinhAnh/Icon/Check.png" alt="">
                      <span>Mở hộp kiểm tra nhận hàng</span>
                  </div>
                  <div class="shopGuarantee">
                      <img src="../components/HinhAnh/Icon/Convert.png" alt="">
                      <span>Trả hàng trong 7 ngày nếu lỗi</span>
                  </div>
              </div>

<!--              <div class="shopBtn">-->
<!--                  <button>Xem shop</button>-->
<!--                  <button>Theo dõi</button>-->
<!--              </div>-->
          </div>
      </div>
    </div>
    <div class="feedBack">
        <div class="left_feedBack">
        </div>
        <div class="right_feedBack">
            <div class="fBackTitle">
                <div class="middle">Đánh giá chi tiết</div>
            </div>
            <div class="userFBack">
                <div class="userInfo" >
                    <div class="userName">NguyeVinhThien</div>
                    <div class="starRate">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="contentFBack">
                    <div class="leftIcon">+</div>
                    <div class="middleContent">truong dai học su pham kỹ thuat</div>
                    <div class="rightDate">25/12/2022</div>
                </div>
            </div>
            <div class="userFBack">
                <div class="userInfo" >
                    <div class="userName">Đỗ Trung Đức</div>
                    <div class="starRate">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="contentFBack">
                    <div class="leftIcon">+</div>
                    <div class="middleContent">Good</div>
                    <div class="rightDate">15/02/2022</div>
                </div>
            </div>
        </div>
    </div>
    </body>
  
</template>

<script>

export default {
    name: 'SanPham',

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
    // created() {
    //             // setInterval(this.getNow, 1000);

    //             timeCalculated (); {
    //   const endDateDateTimeObj = DateTime.fromISO(this.endDate)
    //   const theDiff = endDateDateTimeObj.diff(this.now, ['hours', 'minutes', 'seconds'])

    //   return `${theDiff.hours}:${theDiff.minutes}:${Math.round(theDiff.seconds)}`
    // }
    //         },

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
        // getNow() {
        //             const today = new Date();
        //             const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        //             const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //             const dateTime = date +' '+ time;
        //             this.timeCount = dateTime;      
        //         }
    }    
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
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
/*CSS Details Product*/
.details{
    margin-top: 98px;
    width: auto;
    display: flex;
    justify-content: center;
}
/*CSS left details*/
.leftDetail{
    width: 65%;
    background-color: #FFFFFF;
    margin-top: 3px;
    margin-right: 3px;
    border-radius: 3px;
}
.gallery{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    width: 100%;
    height: 600px;
    position: relative;
    background-color: #FFFFFF;
}

.prev, .next{
    font-size: 38px;
}
.prev{
    margin-right: 5px;
}
.next{
    margin-left: 5px;
}

.mySlide{
    width: 100%;
    height: 100%;
}
.mySlide>img{
    width: 100%;
    height: 600px;
    border-radius: 3px;
}
.row{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
}
.column{
    margin: 0 10px;
}
.column>img{
    width: 50px;
    height: 50px;
}
/*CSS center detail*/
.centerDetail{
    margin-top: 4px;
    width: 35%;
    padding: 40px 30px;
    background-color: #ffffff;
}
.name{
    width: 100%;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    /*color: #F47458;*/
    color: #19124F;
    font-size: 24px;

}
.checked{
    color: orange;
}
.rate_bidCount{
    display: flex;
    margin-top: 10px;
}
.timeLeft{
    margin-top: 10px;
    padding-top: 10px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 14px;
    color: #19124F;
}
.timeLeft>p{
    margin-top: 8px;
    font-size: 16px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
}
.timeLeft>p>span{
    font-size: 16px;
}
.bid{
    position: relative;
    margin-top: 20px;
    padding-top: 10px;
    font-size: 16px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
}
.price{
    color: #F66A55;
    font-size: 28px;
    position: absolute;
    top: 10px;
    left: 110px;

}
.placeBid{
    padding-top: 25px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
.bidQty{
    padding-top: 10px;
    padding-left: 30px;
}
.placeBid>input{
    border: 1.5px solid gray;
    border-radius: 3px;
    height: 40px;
    width: 95%;
    padding: 0 5px;
}
.instruction{
    margin-top: 5px;
    padding-left: 10px;
    color: red;
}
.bid>input::placeholder{
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
}
.bidCount{
    font-size: 14px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    color: #19124F;
    margin-top: 20px;
    padding-left: 5px;
}
.Btn{
    width: 100%;
    display: flex;
    justify-content: center;
}
.largeBtn{
    width: 95%;
    height: 45px;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    color: #07002F;
    font-weight: bold;
}
.placeBidBtn{
    margin-top: 40px;
    background-color: #F66A55;
}
.Qty{
    display: flex;
    margin-top: 40px;
    margin-left: 10px;
}
.labelQty{
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 14px;
    margin-right: 15px;
}
.buyQty{
    height: 20px;
    width: fit-content;
    display: flex;
    border: 1px solid gray;
}

.plusBtn, .substractBtn{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background-color: #FFFFFF;
    border: none;
    color: #F47458;
}
.substractBtn{
    border-right: 1px solid gray;
}
.buyQty>div{
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.plusBtn{
    border-left: 1px solid gray;
}

.add2CartBtn{
    margin-top: 15px;
    background-color: #FFAC75;
}
/*CSS right details*/
.rightDetail{
    width: 350px;
    height: 400px;
}
.detailProduct{
    margin-top: 50px;
    margin-left: 5px;
}
.detailProduct>ul{
    padding-left: 25px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 16px;
    color: #19124F;
}
.description{
    width: 100%;
    margin-top: 15px;
    margin-left: 5px;
}
.descriptTitle{
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #19124F;
}
.descriptContent{
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 16px;
    color: #19124F;
}

/*CSS Feedback*/
.feedBack{
    width: 100%;
    display: flex;
}
.left_feedBack{
    width: 35%;
    margin-top: 13px;
    margin-right: 3px;
    background-color: #FFFFFF;
}
.right_feedBack{
    width: 65%;
    margin-top: 13px;
    background-color: #FFFFFF;
    padding: 2% 2%;
}
.fBackTitle{
    width: 100%;
    padding-bottom: 30px;
    display: flex;
}
.middle{
    font-size: 20px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    color: #19124F;
}
.line{
    width: 35%;
    height: 0px;
    border-bottom: 1px solid #000000;
}
.userFBack{
    border-bottom: 1px solid #000000;
    padding-bottom: 10px;
    margin-bottom: 15px;
}
.userInfo{
    display: flex;
    align-items: center;
}
.userName,.middleContent, .rightDate{
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 16px;
}
.userName{
    padding-right: 15px;
    padding-left: 25px;
}
.leftIcon{
    width: 18px;
    height: 18px;
    font-size: 18px;
    border-radius: 50%;
    color: #FFFFFF;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}
.contentFBack{
    display: flex;
    align-items: center;
    margin-top: 5px;
}
.middleContent{
    width: 90%;
}
.shop {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    border-radius: 3px;
    border-top: 3px solid #F2F2F6;
    margin: 30px 30px;
}
.shopProfile{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;
}
.profileIcon{
    margin-right: 7px;
}
.profileIcon>img{
    width: 40px;
    height: 40px;
}
.shopName{
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 16px;
    color: #19124F;
    font-weight: bold;
}
.shopRate_Flow
{
    display: flex;
    justify-content: center;
}
.shopRate{
    width: 35%;
    border-right: 1.5px solid #D6DADF;
    margin-right: 15px;
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-right: 15px;
}

.shopFlow{
    width: 35%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.avgRate, .amountFlow{
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 16px;
    font-weight: bold;
}
.titleFlow{
    color: #9695A8;
    font-size: 16px;
}
.shopBtn{
    width: 80px;
    height: 25px;
    border: 1.5px solid #F66A55;
    background: none;
    border-radius: 3px;
    color: #F66A55;
    margin-top: 25px;
}
.shopGuarantees{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}
.shopGuarantee{
    width: 25%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

}
.shopGuarantee>img{
    width: 35px;
    height: 35px;
}
.shopGuarantee>span{
    font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif;
    font-size: 14px;
    color: #19124F;
    margin-top: 5px;
    width: 80%;
}
.btnFlow{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>