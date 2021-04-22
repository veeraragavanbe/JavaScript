var files = [];
var reader = new FileReader();
var _ImgUrl;
// selecting image

document.getElementById('sel_prod').onclick = function() {
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = e => {
            files = e.target.files;
            reader = new FileReader();
            reader.onload = function() {
                document.getElementById("prod_img").src = reader.result;
            }
            reader.readAsDataURL(files[0]);
        }
        input.click();
    }
    // adding new items into firebase
document.getElementById("sub_").onclick = function() {

    var _Item_ID_ = document.getElementById("Item_id_").value;
    var _Item_Name_ = document.getElementById("Item_name_").value;
    var _Item_Price_ = document.getElementById("Item_price_").value;
    var _Item_Category_ = document.getElementById("Ite_category").value;

    var uploadTask = firebase.storage().ref('Food/' + _Item_ID_ + '/' + _Item_Name_ + ".png").put(files[0]);

    uploadTask.on('state_changed', function(snapshot) {
            // var progress = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
            //   document.getElementById('UpProgress').innerHTML = 'upload' + 100 + '%';

        },
        function(error) {
            alert('error in saving image')
        },

        function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(url) {
                _ImgUrl = url;

                // inserting records
                firebase.database().ref('Food_Shop/' + _Item_ID_).set({
                    Item_Img_URL: _ImgUrl,
                    Item_Id: _Item_ID_,
                    Item_cate: _Item_Category_,
                    Item_name: _Item_Name_,
                    Item_Price: _Item_Price_

                });
                alert("Record added successfully");

            });
        });

}