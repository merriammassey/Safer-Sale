const Cloudinary_URL=  "https://api.cloudinary.com/v1_1/dozz8shrp/upload";
const Cloudinary_Upload_Preset = "r36r3yym"; 

var imgPreview = document.getElementById('imgPreview')
var imgUpload = document.querySelector('#imgUpload')


imgUpload.addEventListener('change', function(e) {
 const imgFile = e.target.files[0];
const formData = new FormData();

formData.append('file', imgFile)
formData.append('upload_preset', Cloudinary_Upload_Preset);


axios({
  url: Cloudinary_URL,
  method: 'Post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: formData
 }).then(function(res) {
   imgPreview.src = res.data.secure_url
   image_url = res.data.secure_url
    console.log(image_url) 

 }) .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

 })



async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="item-post"]').value;
  const description = document.querySelector('textarea[name="description-post"]').value;
  const price = document.querySelector('input[name="price-post"]').value;
  const image_Url = document.querySelector('img[name="imgPreview"]').value;
  
  let response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      price,
      image_Url,
    }),  
    headers: {
      "Content-Type": "application/json",
    },  
  });  
  console.log(response)
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    console.log('didnt work')
    // alert(response.statusText);
  }  
}  

document.querySelector(".new-post-form").addEventListener("submit", newFormHandler);




//uploading image


