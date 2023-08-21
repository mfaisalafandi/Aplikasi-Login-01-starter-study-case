/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

let akun = [
  ['admin@dicoding.com', 'superpassword'],
];

const regisFormElement = document.querySelector('#regisForm');
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

const btnRegis = document.querySelector('#btn-regis');
const btnLogin = document.querySelector('#btn-login');

btnRegis.addEventListener('click', () => {
  regisFormElement.style.display = "block";
  loginFormElement.style.display = "none";
});

btnLogin.addEventListener('click', () => {
  regisFormElement.style.display = "none";
  loginFormElement.style.display = "block";
});

if (loginFormElement != null) {
  loginFormElement.addEventListener('submit', function(event) {
      console.log(akun);
      event.preventDefault();
      // TODO 1 : Mendapatkan input email dan password pengguna dari form.
      const email = inputEmailElement.value;
      const pass = inputPasswordElement.value;
    
      let isThere = false;
      for (let i = 0; i < akun.length; i++) {
        if (email == akun[i][0] && pass == akun[i][1]) {
          isThere = true;
          goToHome();
          break;
        } 
      }

      if (!isThere) {
        showPopUp();
      }
  });
}

if (regisFormElement != null) {
  regisFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    let inputEmailRegis = document.querySelector('#inputEmailRegis');
    let inputPasswordRegis = document.querySelector('#inputPasswordRegis');
  
    let email = inputEmailRegis.value;
    let pass = inputPasswordRegis.value;
  
    if (email != "" && pass != "") {
      let newAkun = [email, pass];
      akun.push(newAkun);
    }

    console.log(akun);
    regisFormElement.style.display = "none";
    loginFormElement.style.display = "block";

    let modalRegis = document.querySelector('#modalRegis');
    modalRegis.style.display = "block"

    setTimeout(function() {
      modalRegis.style.display = "none";
    }, 3000)
  });
}