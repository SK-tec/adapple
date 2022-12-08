/*const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
*/

const form=document.getElementById('contact');
const formEvent=form.addEventListener("submit",async(e)=>{
  console.log("handleSubmit executed")
    e.preventDefault();
    //setStatus("Sending...");
    const {name,email,message}=e.target.elements;
    let details={
        name:name.value,
        email:email.value,
        message:message.value,
    };
    console.log(details);
    let response=await fetch('http://localhost:5000/',{
        method:"POST",
        headers:{
            "Content-Type":"application/json;charset=utf-8",},
        body:JSON.stringify(details),
    });
    //setStatus('Submit');
    let result=await response.json();
    console.log(result);
    alert(result.status);
})
/*const handleSubmit=async(e)=>{
  console.log("handleSubmit executed")
    e.preventDefault();
    setStatus("Sending...");
    const {name,email,message}=e.target.elements;
    let details={
        name:name.value,
        email:email.value,
        message:message.value,
    };
    console.log(details);
    let response=await fetch('http://localhost:5000/',{
        method:"POST",
        headers:{
            "Content-Type":"application/json;charset=utf-8",},
        body:JSON.stringify(details),
    });
    setStatus('Submit');
    let result=await response.json();
    console.log(result);
    alert(result.status);
};*/
