var email_from_login;
var count_cart = 0;

function fetch_item() {

    email_from_login = localStorage.getItem("EMAIL_FROM_SIGN_UP");

    var playersRef = firebase.database().ref("Cart/");
    var cust_email = email_from_login;

    playersRef.orderByChild("Custom_Email_").equalTo(cust_email).on("child_added", function(data) {
        count_cart++;

        document.getElementById('_cart_').innerHTML = count_cart;
    });

    firebase.database().ref().child('Food_Shop/').on('value', function(snapshot) {
        snapshot.forEach(
            function(ChilSnapshot) {
                // document.getElementById('myimg').src = ChilSnapshot.val().src=ChilSnapshot.val().Link;
                // let Link1 = ChilSnapshot.val().src = ChilSnapshot.val().Img_url1;

                let Item_id_ = ChilSnapshot.val().Item_Id;
                let Item_img = ChilSnapshot.val().src = ChilSnapshot.val().Item_Img_URL;
                let Item_Catagory = ChilSnapshot.val().Item_cate;
                let Item_Name = ChilSnapshot.val().Item_name;
                let Item_Price = ChilSnapshot.val().Item_Price;

                // console.log(Item_id_, Item_img, Item_Catagory, Item_Name, Item_Price);

                showitems(Item_id_, Item_img, Item_Catagory, Item_Name, Item_Price);

            })
    })


}

function showitems(Item_id_, Item_img, Item_Catagory, Item_Name, Item_Price) {
    var div1 = document.getElementById('fet_items');

    var img_ = document.createElement('img');
    img_.id = "img_element";
    img_.style.height = "200px";
    img_.style.width = "200px";
    img_.style.marginTop = "4%";


    var para_name = document.createElement('p');
    para_name.id = 'item_name_para';
    var para_price = document.createElement('p');
    para_price.id = 'item_price_para';

    img_.src = Item_img;
    para_name.innerHTML = Item_Name;
    para_price.innerHTML = "₹ " + Item_Price;

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
    var btn_cart = document.createElement('button');

    btn_buy.innerHTML = "Buy Now";
    btn_cart.innerHTML = "Add to Cart";
    btn_cart.id = "cart_btn_"
    btn_cart.style.marginLeft = "2%";

    div3_.appendChild(img_);
    div3_.appendChild(para_name);
    div4_.appendChild(para_price);
    div4_.appendChild(btn_buy);
    div4_.appendChild(btn_cart);

    div1_.appendChild(div2_);
    div1_.appendChild(div3_);
    div1_.appendChild(div4_);
    div1_.appendChild(div5_);

    div1.appendChild(div1_);


    btn_buy.addEventListener('click', function() {
        btn_buy_(Item_id_, Item_img, Item_Catagory, Item_Name, Item_Price);
    });


    btn_cart.addEventListener('click', function() {
        btn_cart_(Item_id_, Item_img, Item_Catagory, Item_Name, Item_Price);
    });


}

function btn_buy_(Item_id_, Item_img, Item_Catagory, Item_Name, Item_Price) {
    sessionStorage.setItem("_Item_Id_", Item_id_);
    sessionStorage.setItem("_Item_Img_", Item_img);
    sessionStorage.setItem("_Item_Cato_", Item_Catagory);
    sessionStorage.setItem("_Item_name_", Item_Name);
    sessionStorage.setItem("_Item_Price_", Item_Price);
    sessionStorage.setItem("_Customer_email", email_from_login);

    window.location.href = "./order.html";

}

function btn_cart_(Item_id_, Item_img, Item_Catagory, Item_Name, Item_Price) {

    var c_email = email_from_login;
    var sub_mail = c_email.substring(0, c_email.length - 4);

    firebase.database().ref('Cart/' + sub_mail + "_" + Item_id_).set({
        Item_Img_URL_: Item_img,
        Item_Id_: Item_id_,
        Item_cate_: Item_Catagory,
        Item_name_: Item_Name,
        Item_Price_: Item_Price,
        Custom_Email_: c_email
    });
    alert("Added to Cart...");
    window.location.reload();
}