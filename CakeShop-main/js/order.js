var item_id_, item_img_, item_cato_, item_name_, item_price_;

function fetch_() {
    item_id_ = sessionStorage.getItem("_Item_Id_");
    item_img_ = sessionStorage.getItem("_Item_Img_");
    item_cato_ = sessionStorage.getItem("_Item_Cato_");
    item_name_ = sessionStorage.getItem("_Item_name_");
    item_price_ = sessionStorage.getItem("_Item_Price_");


    document.getElementById('im_ord_prod').src = item_img_;
    document.getElementById('item_name_para').innerHTML = item_name_;
    document.getElementById('item_price_para').innerHTML = item_price_;

}

document.getElementById('review_').onclick = function() {

    var price = document.getElementById('item_price_para').innerHTML;
    var qty = document.getElementById('_quantity_').value;
    var total = price * qty;

    document.getElementById('prod_name_').innerHTML = item_name_;
    document.getElementById('prod_cost_').innerHTML = item_price_;
    document.getElementById('prod_quantity_').innerHTML = qty;
    document.getElementById('prod_Total_').innerHTML = total;
    document.getElementById('order_summ_div').style.display = "block";

    order_place_success(item_name_, item_price_, qty, total, item_img_, item_id_, item_cato_);
}

function order_place_success(item_name_, item_price_, qty, total, item_img_, item_id_, item_cato_) {
    document.getElementById('place_order_').onclick = function() {
        firebase.database().ref('Custmer_Order/' + item_id_ + item_price_).set({
            Item_Img_URL: item_img_,
            Item_Id: item_id_,
            Item_cate: item_cato_,
            Item_name: item_name_,
            Item_Price: item_price_,
            Total_Price: total,
            Quantity: qty
        });
    }
}