$('#signinSubmit').on('click', ()=>{
    let email = $('#signinEmail').val()
    let password = $('#signinPassword').val();
    console.log(email, password)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('you logged into an account as ' + user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message)
      // ..
    });
  
  })