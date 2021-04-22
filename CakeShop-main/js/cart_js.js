var email_from_login;
function fetch_cart(){
    email_from_login = localStorage.getItem("EMAIL_FROM_SIGN_UP");

    var playersRef = firebase.database().ref("Cart/");
    var cust_email = email_from_login;

    playersRef.orderByChild("Custom_Email_").equalTo(cust_email).on("child_added", function(data) {
        let c_email_ =data.val().Custom_Email_;
        let c_id_ = data.val().Item_Id_;
        let c_img_url = data.val().Item_Img_URL_;
        let c_item_price = data.val().Item_Price_;
        let c_cato_ = data.val().Item_cate_;
        let c_name =data.val().Item_name_;

        show_cart(c_email_,c_id_,c_img_url,c_item_price,c_cato_,c_name);
    });
}


function show_cart(c_email_,c_id_,c_img_url,c_item_price,c_cato_,c_name)
{
    var div1 = document.getElementById('cart_data_');

    var img_ = document.createElement('img');
    img_.id = "img_element";
    img_.style.height = "200px";
    img_.style.width = "200px";
    img_.style.marginTop = "4%";

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

document.getElementById('buy_total_cart').onclick = function()
{
    var sum_res = 0;
    email_from_login = localStorage.getItem("EMAIL_FROM_SIGN_UP");

    var playersRef = firebase.database().ref("Cart/");
    var cust_email = email_from_login;

    playersRef.orderByChild("Custom_Email_").equalTo(cust_email).on("child_added", function(data) {
        let c_email_ =data.val().Custom_Email_;
        let c_id_ = data.val().Item_Id_;
        let c_img_url = data.val().Item_Img_URL_;
        let c_item_price = data.val().Item_Price_;
        let c_cato_ = data.val().Item_cate_;
        let c_name =data.val().Item_name_;

        console.log(c_email_,c_id_,c_img_url,c_item_price,c_cato_,c_name);
        sum_res = parseInt(sum_res) + parseInt(c_item_price);
        
        cart_total(c_name,sum_res);
    });
}

    function cart_total(c_name,sum_res){
        
    }
 