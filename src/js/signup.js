$('#signupSubmit').on('click', ()=>{
    let email = $('#signupEmail').val()
    let password = $('#signupPassword').val();
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('you made an account as ' + user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  })