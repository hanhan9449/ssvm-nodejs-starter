// const axios = require('axios').default

let origin_img = document.getElementById("origin-img");
let processed_img = document.getElementById("processed-img");
let image_upload = document.getElementById("image_unload");
let submit_button = document.getElementById("submit");
let imgfile;
image_upload.addEventListener("change", (e) => {
  let files = e.target.files;
  imgfile = files[0];
  console.log(files[0]);
  // preview(files[0], origin_img);
  origin_img.src = URL.createObjectURL(files[0]);
});
submit_button.addEventListener("click", (e) => {
  let formData = new FormData();
  formData.append("image_file", imgfile);
  $.ajax({
    url: "/handler",
    type: "POST",
    data: formData,
    // contentType: "multipart/form-data",
    // dataType: "json",
    async: false,
    cache: false,
    processData: false,
    contentType: false,
    beforeSend: () => {
      console.log("Uploading");
    },
  }).done((data) => {
    console.log(data);
    function hexToBase64(str) {
      return btoa(
        String.fromCharCode.apply(
          null,
          str
            .replace(/\r|\n/g, "")
            .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
            .replace(/ +$/, "")
            .split(" ")
        )
      );
    }
    processed_img.src = "data:image/jpeg;base64," + data;
    // console.log(processed_img.src)
    // console.log("Ok");
  });
});
// function preview(img, dom) {
//   let reader = new FileReader();
//   reader.onload = (e) => {
//     dom.src = e.target.result;
//     // dom.src = URL.createObjectURL(e.target.files[0])
//   };
//   reader.readAsDataURL(img);
// }
