const fullName = document.getElementById("fullName");
const email = document.getElementById("emailAddress");
const password = document.getElementById("password");
const signUp = document.getElementById("signup-btn");

const signupHandler = async (event)=>{
  event.preventDefault();

  const fullName= document.querySelector("#fullName").value;
  const email= document.querySelector("#emailAddress").value;
  const password= document.querySelector("#password").value;

  const data2={
    fullName:  fullName,
    email: email,
    password:password
  }
  const resp = await fetch(" https://backend-mu-pied.vercel.app/users/register",{
    method: "POST",
    body: JSON.stringify(data2),
    headers:{
      "Content-Type": "application/json"
    }
  })
  const signupResp = await resp.json()

  if(signupResp.status){
    window.location.href="../login2/chibi/index2.html";
  }else{
    document.getElementById("arr-message").innerText=signupResp.message
  }
}