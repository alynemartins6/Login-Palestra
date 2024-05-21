/// Tela de login ////
  const inputEmail = document.getElementById('inputEmail');
  const inputSenha = document.getElementById('inputSenha');
  const buttonEnviar = document.getElementById('submit-enviar');
  const buttonCadastrar = document.getElementById('submit-cadastrar');

  buttonEnviar.addEventListener('click', (event) => {
    event.preventDefault();

    let isValid = true;

    if (inputEmail.value === '') {
      alert('Por favor, preencha o campo de email.');
      isValid = false;
    }
   
    if (inputSenha.value === '' || inputSenha.value.length < 8) {
      alert('Por favor, preencha a senha com pelo menos 8 caracteres.');
      isValid = false;
    }

    else if (isValid) {
      let body = new Object();
      body.usuario = inputEmail.value;
      body.senha = inputSenha.value;

      console.log('Formulário enviado com sucesso!' + JSON.stringify(body));

      fetch("http://localhost:8080/login",{"method":"POST","body":JSON.stringify(body)})
      .then(function(resp){
        if (resp.status != 200) throw new Error("Login invalido");
        return resp.json();
      })
      .then( json => document.location.href = "/pagina-principal.html")
      .catch(err => alert("Falha ao realizar login" + err))
      ///.finally(() => document.location.href="/pagina-principal.html" )
    }
  });

  buttonCadastrar.addEventListener('click',(event) =>{
  event.preventDefault();
  document.location.href="/cadastro.html"

  });





