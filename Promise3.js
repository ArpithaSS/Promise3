function getLogo() {
  var curl = document.getElementById("companyName").value;
  console.log(curl);
  fetch(`https://logo.clearbit.com/${curl}`)
    .then((response) => response.blob())
    .then((images) => {
      var url = URL.createObjectURL(images);
      displaylogo(url);
    })
    .catch("Failed");
}
function displaylogo(url) {
  document.getElementById("CompanyLogo").src = url;
}
