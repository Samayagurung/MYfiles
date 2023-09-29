const email = document.getElementById("email");

const password = document.getElementById("password");

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let data = {
    email: email.value,
    password: password.value,
  };
  // change object to json using json.stringify method

  const loginForm = async () => {
    const resp = await fetch("https://backend-mu-pied.vercel.app/users/login",{
      method: "POST",
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    const loginResp = await resp.json();

    if(loginResp){
      document.getElementById('error-message').innerText=loginResp.message;
    }else{
      document.getElementById('error-message').innerText=loginResp.message
    }

    console.log(loginResp)
  };
  loginForm();
});
