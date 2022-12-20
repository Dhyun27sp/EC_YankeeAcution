vue <template>
  <div class="container">
    <div class="container_header">
        <div class="container_header_logo&title">
            <img class="logo" src="../components/HinhAnh/Logo/Logo1.png">
            <h2 class="payment">Thanh toán</h2>
        </div>
        <div class="help-noti-account">
            <div class="nav-help">
                <!-- <i class="ti-help-alt"></i> -->
                <img src="../components/HinhAnh/Icon/Help.png" alt="">
                <a href="">
                    Trợ giúp
                </a>
            </div>
            <div class="nav-help">
                <!-- <i class="ti-bell"></i> -->
                <img src="../components/HinhAnh/Icon/Bell.png" alt="">
                <a href="">
                    Thông báo
                </a>
            </div>
            <div class="nav-help">
                <!-- <i class="ti-user"></i> -->
                <img src="../components/HinhAnh/Icon/Profile.png" alt="">
                <a href="">
                    nguyenvinhthien
                </a>
            </div>
        </div>
    </div>


    <div class="Container_Address">
        <div class="address_icon">
            <!-- <i class="ti-location-pin"></i> -->
            <img src="../components/HinhAnh/Icon/Location.png" alt="">
            <a href="">
                Địa chỉ nhận hàng
            </a>
        </div>
        <div class="address-info">
            <div class="name_customer">
                <span>Tên người nhận:</span>
                <p>nguyenvinhthien</p>
            </div>
            <div class="phone_number">
                <span>Số điện thoại:</span>
                <p>0827833943</p>
            </div>
            <div class="address">
                <span>Địa chỉ:</span>
                <p>01 Vo Van Ngan , Binh Tho, Thu Duc, Thanh pho Ho Chi Minh</p>
            </div>
            <div class="address-info-icon">
                <!-- <i class="ti-reload"></i> -->
                <img src="../components/HinhAnh/Icon/Convert.png" alt="">
                <a href="">
                    Thay đổi
                </a>
            </div>
        </div>

    </div>

    <div class="Container_Product">
        <div class="product_info_header">
            <span>Thông tin sản phẩm</span>
        </div>
<!--        <div class="shop_name">-->
<!--            <span> Cửa hàng:&nbsp </span>-->
<!--            <p>verogra_0723</p>-->
<!--        </div>-->
        <div class="product_info">
            <div class="product">
                <img class="product_img" src="../components/HinhAnh/Product/Product1.png">
                <p>LISA MV LALISA - Bộ Thẻ Card Ảnh Lisa TRONG MV Lalisa Sưu Tầm Mới Nhất + Kèm Poster Lalisa Full HD </p>
            </div>
            <div class="product_purchase_info">
                <div class="produc_type">
                    <span>Loại</span>
                    <p>ST01</p>
                </div>
                <div class="product_quantity">
                    <span>Số lượng</span>
                    <p>1</p>
                </div>
                <div class="product_unit_price">
                    <span>Đơn giá</span>
                    <p>99.000 VND</p>
                </div>
                <div class="Amount">
                    <span>Thành tiền</span>
                    <p>99.000 VND</p>
                </div>
            </div>
        </div>
        <hr class="line">
        <div class="product_info_footer">
            <div class="Note">
                <p>Ghi Chú:</p>
                <input type="text">
            </div>
            <div class="Delivery_cost-Est_delivery">
                <div class="Delivery_cost">
                    <span>Chi phí vận chuyển:</span>
                    <p>15.000 VND</p>
                </div>
                <div class="Est_delivery">
                    <span>Dự kiến giao hàng:</span>
                    <p>15/11/2022</p>
                </div>
            </div>
        </div>
    </div>
    <div class="Container_payment_methods ">
        <div class="payment_methods_header">
            <div class="payment_methods">
                <span>Phương thức thanh toán</span>
            </div>
            <div class="credit_debit">
                Thẻ tín dụng/ghi nợ
            </div>
            <div class="cod">
                Thanh toán khi nhận hàng
            </div>

        </div>
        <div class="credit_debit_or_cod">
            Thanh toán bằng thẻ tín dụng/ghi nợ
        </div>
        <hr class="line">
    <div class="Container_payment_methods-payment">
        <div class="total_money_for_product">
            <p class="total_money_for_product_content">Tổng tiền hàng</p>
            <p class="total_money_for_product_number">100.000VND</p>
        </div>
        <div class="fee_delivery">
            <p class="fee_delivery_content">Phí vận chuyển</p>
            <p class="fee_delivery_number">100.000VND</p>
        </div>
        <div class="total_money">
            <p class="total_money_content">Tổng thanh toán</p>
            <p class="total_money_number">100.000VND</p>
        </div>
        <div class="confirm_puy_delivery">
            Đặt hàng
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name:'ThanhToan'
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{ background-color: #EBEBEB;
    height: 1000px;}
.container_header{
    background-color: white;

}

/*Header*/
.container_header_logo\&title{
    display: flex;
    width: 50%;
}

.logo{
    width: 272px;
    height: 173px;
}

.payment{
    font-family: Poppins, sans-serif;
    color: coral;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px solid coral;
    padding-left: 15px;
    margin: 20px;

}

.container_header{
    display: flex;

}

.help-noti-account{
    display: flex;
    justify-content: flex-end;
    width: 50%;
    margin-top: 20px;
    margin-right: 40px;
}

.help-noti-account .nav-help{
    font-family: Poppins, sans-serif;
    justify-content: space-around;
    cursor: pointer;
    display: inline-flex;
}

.help-noti-account .nav-help a{
    text-decoration: none;
    color: coral;
    margin-top: 5px;
}
.nav-help>img{
    width: 23px;
    height: 23px;
    margin-right: 3px;
}
.nav-help + .nav-help{
    margin-left: 20px;
}

.help-noti-account i{
    color: black;
    font-size: 25px;
    cursor: pointer;
    margin-right: 5px;
}
a{
    text-decoration: none;
}
.address_icon>img{
    width: 25px;
    height: 25px;
    margin-right: 3px;
}
.address_icon{
    display: flex;
    align-items: center;
}
/*Address*/
.Container_Address{
    margin: 15px 8px;
    background-color: white;
    border-radius: 3px;
    height: 110px;
}
.address_icon{
    padding: 20px 0px 10px 25px;
    color: coral;
    font-size: 23px;
}

.address_icon a{
    font-family: Poppins, sans-serif;
    font-weight: bold;
    color: coral;
}

.address-info{
    display: flex;
    justify-content: space-between;
    font-family: Inter, sans-serif;
    font-size: 16px;
    padding: 0px 25px 0px 25px;
}
.address-info p{
    font-weight: bold;
}
.name_customer , .phone_number, .address, .address-info-icon{
    display: flex;
}
.address-info-icon>img{
    width: 18px;
    height: 18px;
    margin-right: 3px;
}
/*Product*/
.Container_Product{
    margin: 15px 8px;
    background-color: white;
    border-radius: 3px;
    height: 350px;
}
.product_info_header{
    padding: 20px 0px 10px 25px;
    font-size: 23px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    color: coral;
}

/*.shop_name{*/
/*    display: flex;*/
/*    padding-left: 25px;*/
/*    font-family: Inter, sans-serif;*/
/*    font-size: 16px;*/
/*}*/

/*.shop_name p{*/
/*    font-weight: bold;*/
/*}*/

.product_info{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-family: Poppins, sans-serif;
    padding: 20px 25px 50px 25px;
}

.product{
    display: flex;
    flex: 2;
    color: coral;
}
.product_img{
    padding-right: 10px;
    width: 100px;
    height: 100px;
}
.product_purchase_info{
    display: flex;
    justify-content: space-between;
    flex: 1;
}


.line{
    /*display: inline-block;*/
    width: auto;
    height: 0px;
    margin-left: 25px;
    margin-right: 25px;
    border: 1px dashed rgba(51, 51, 51, 0.7);
}

.product_info_footer{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-family: Poppins, sans-serif;
    padding: 50px 25px 10px 25px;
}

.Note{
    display: flex;
    flex: 2;
}

.Note input{
    width: 670px;
    height: 35px;
    border: 1px solid #333333;
    left: 152px;
    top: 609px;
    background: rgba(217, 217, 217, 0.3);
    margin-right: 15px;
}
.Note>p{
    margin-right: 15px;
}

.Delivery_cost-Est_delivery{
    display: flex;
    justify-content: space-between;
    flex: 1;
}

.Delivery_cost{
    display: flex;
    justify-content: space-between;
}

.Est_delivery{
    display: flex;
    justify-content: space-between;
}
.Container_payment_methods{
    margin: 15px 8px;
    background-color: white;
    border-radius: 3px;
    height: 350px;
}
.payment_methods_header{
    display: flex;
    padding: 20px 0px 10px 25px;
    font-family: Poppins, sans-serif;
    height: 100px;
}
.payment_methods{
    font-size: 23px;
    font-weight: bold;
    color: coral;
    display: flex;
    margin:auto 0;
}

.credit_debit{
    font-size: 16px;
    color: coral;
    text-align: center;
    display: flex;
    margin: auto 47px;
    border: 1px solid red;
    padding: 10px 10px;
    border-radius: 5px;
}
.credit_debit:hover{
    background-color: coral;
    cursor:pointer;
    color: black;
}
.cod{
    display: flex;
    margin: auto 0;
    border: 1px solid black;
    padding: 10px 10px;
    border-radius: 5px;
}
.cod:hover{
    background-color: #333;
    cursor:pointer;
    color: white;
}
.credit_debit_or_cod{
    font-family: Poppins, sans-serif;
    padding: 0px 0 30px 25px;
}
.Container_payment_methods-payment{
    float: right;
    width: 300px;
    margin: 50px 50px;
    align-items: center;
}
.total_money_for_product,
.fee_delivery,
.total_money{
    font-size: 18px;
    display: flex;
    justify-content:space-between;
    margin:20px 0;
}
.total_money_number{
    font-size: 28px;
    color: coral;
}
.total_money_content_{
    padding-top: 10px;
}
.confirm_puy_delivery{
    background-color: coral;
    font-size: 18px;
    text-align: center;
    padding: 15px 80px;
    border-radius: 3px;
    color: white;
}
.confirm_puy_delivery:hover{
    cursor:pointer;
    background-color:chocolate;
}
.total_money_for_product_content, .total_money_for_product_number, .fee_delivery_content, .fee_delivery_number, .total_money_content, .confirm_puy_delivery{
    font-family: Poppins, sans-serif;
}
</style>