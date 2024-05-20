
  const inputEmail = document.getElementById('inputEmail');
  const inputSenha = document.getElementById('inputSenha');
  const buttonEnviar = document.getElementById('enviar');
  const buttonCadastrar = document.getElementById('cadastrar');

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

    if (isValid) {

      console.log('Formulário enviado com sucesso!');
    }
  });

