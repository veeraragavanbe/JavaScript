var email_from_login;

// showing cart products from firebase
// particular customer cart will show
function fetch_cart() {
    email_from_login = localStorage.getItem("EMAIL_FROM_SIGN_UP");

    var playersRef = firebase.database().ref("Cart/");
    var cust_email = email_from_login;

    playersRef.orderByChild("Custom_Email_").equalTo(cust_email).on("child_added", function(data) {
        let c_email_ = data.val().Custom_Email_;
        let c_id_ = data.val().Item_Id_;
        let c_img_url = data.val().Item_Img_URL_;
        let c_item_price = data.val().Item_Price_;
        let c_cato_ = data.val().Item_cate_;
        let c_name = data.val().Item_name_;

        show_cart(c_email_, c_id_, c_img_url, c_item_price, c_cato_, c_name);
    });
}

// printing cart data

function show_cart(c_email_, c_id_, c_img_url, c_item_price, c_cato_, c_name) {
    var div1 = document.getElementById('cart_data_');

    var img_ = document.createElement('img');
    img_.id = "img_element";


    var para_name = document.createElement('p');
    para_name.id = 'item_name_para';
    var para_price = document.createElement('p');
    para_price.id = 'item_price_para';

    img_.src = c_img_url;
    para_name.innerHTML = c_name;
    para_price.innerHTML = "₹ " + c_item_price;

    var div1_ = document.createElement('div');
    div1_.className = 'row';
    div1_.id = "first_row_";

    var div2_ = document.createElement('div');
    div2_.className = 'col-2';

    var div3_ = document.createElement('div');
    div3_.className = 'col-4';

    var div4_ = document.createElement('div');
    div4_.className = 'col-4';
    div4_.id = 'colum4_';

    var div5_ = document.createElement('div');
    div5_.className = 'col-2';

    var btn_buy = document.createElement('button');
    btn_buy.innerHTML = "Remove From Cart";
    btn_buy.id = "rem_cart";

    var sub_email = c_email_.substring(0, c_email_.length - 4);
    btn_buy.addEventListener('click', function() {
        firebase.database().ref('Cart/' + sub_email + "_" + c_item_price).remove();
        window.location.reload();
    })

    div3_.appendChild(img_);
    div3_.appendChild(para_name);
    div4_.appendChild(para_price);
    div4_.appendChild(btn_buy);

    div1_.appendChild(div2_);
    div1_.appendChild(div3_);
    div1_.appendChild(div4_);
    div1_.appendChild(div5_);
    div1.appendChild(div1_);

    document.getElementById('buy_now').style.display = 'block';
}

// purchasing cart products
document.getElementById('buy_total_cart').onclick = function() {
    var sum_res = 0;
    email_from_login = localStorage.getItem("EMAIL_FROM_SIGN_UP");

    var playersRef = firebase.database().ref("Cart/");
    var cust_email = email_from_login;

    // getting cart detail
    playersRef.orderByChild("Custom_Email_").equalTo(cust_email).on("child_added", function(data) {
        let c_email_ = data.val().Custom_Email_;
        let c_id_ = data.val().Item_Id_;
        let c_img_url = data.val().Item_Img_URL_;
        let c_item_price = data.val().Item_Price_;
        let c_cato_ = data.val().Item_cate_;
        let c_name = data.val().Item_name_;

        // console.log(c_email_,c_id_,c_img_url,c_item_price,c_cato_,c_name);
        sum_res = parseInt(sum_res) + parseInt(c_item_price);

        cart_total(sum_res, c_email_, c_id_, c_img_url, c_item_price, c_cato_, c_name);
    });
}

// adding all cart total and show to customer
function cart_total(sum_res, c_email_, c_id_, c_img_url, c_item_price, c_cato_, c_name) {
    var total_cart = sessionStorage.getItem("_total_prod_");

    document.getElementById('c_tot_prod').innerHTML = total_cart;
    document.getElementById('c_tot_price').innerHTML = sum_res;

    document.getElementById('tot_bill_').style.display = 'block';
    document.getElementById('cart_data_').style.display = 'none';

    document.getElementById('buy_now').style.display = 'none';




    place_order_car(c_email_, c_id_, c_img_url, c_item_price, c_cato_, c_name);


}

// purchaase all cart products
function place_order_car(c_email_, c_id_, c_img_url, c_item_price, c_cato_, c_name) {
    document.getElementById('plc_order').onclick = function() {
        var sub_email = c_email_.substring(0, c_email_.length - 4);
        var total = c_item_price;
        firebase.database().ref('Custmer_Order/' + sub_email + "_" + c_item_price).set({
            Item_Img_URL: c_img_url,
            Item_Id: c_id_,
            Item_cate: c_cato_,
            Item_name: c_name,
            Item_Price: c_item_price,
            Total_Price: total,
            Quantity: "1",
            Custom_Emai: c_email_
        });

        alert("Your Order Placed...");
        var sub_email = c_email_.substring(0, c_email_.length - 4);
        // firebase.database().ref('Cart/' + sub_email + "_" + c_item_price).remove();
        // firebase.database().ref("Cart/").orderByChild("Custom_Email_").equalTo(c_email_).remove();
        $(document).ready(function() {
            setTimeout(function() {
                location.assign("./mainpage.html");
            }, 2000);
        });
    }
}