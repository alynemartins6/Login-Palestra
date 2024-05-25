const inputNome = document.getElementById("inputNome");
const inputSobrenome = document.getElementById("inputSobrenome");
const inputMatricula = document.getElementById("inputMatricula");
const inputCpf = document.getElementById("inputCpf");
const form = document.querySelector("form");
const buttonCadastrar = document.getElementById("submit-cadastrar");

buttonCadastrar.addEventListener("click", async (event) => {
	event.preventDefault();

	const isValid = validateForm();

	if (isValid) {
		let formulario = new Object();
		formulario.firstName = inputNome.value;
		formulario.lastName = inputSobrenome.value;
		formulario.cpf = inputCpf.value;
		formulario.registerID = inputMatricula.value;
		formulario.email = inputEmail.value;
		formulario.password = inputSenha.value;
		console.log("Formulário enviado com sucesso!" + JSON.stringify({ ...formulario }));

		await fetch("http://localhost:3000/user/signup", {
			method: "POST",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formulario),
		})
			.then(function (resp) {
				if (!resp.ok) throw new Error("Falha ao cadastrar usuário");
				return resp.json();
			})
			.then((json) => alert("Cadastro realizado com sucesso"))
			.catch((err) => alert("Falha ao realizar cadastro: " + err));
	}
});

function validateForm() {
	let isValid = true;

	if (inputNome.value === "") {
		alert('O campo "Primeiro Nome" é obrigatório.');
		isValid = false;
	}
	if (inputSobrenome.value === "") {
		alert('O campo "Sobrenome" é obrigatório.');
		isValid = false;
	}
	if (inputEmail.value === "") {
		alert('O campo "Email" é obrigatório.');
		isValid = false;
	}
	if (inputSenha.value === "") {
		alert('O campo "Senha" é obrigatório.');
		isValid = false;
	} else if (inputSenha.value.length < 8) {
		alert("A senha deve ter pelo menos 8 caracteres.");
		isValid = false;
	}
	if (inputMatricula.value === "") {
		alert('O campo "Matrícula" é obrigatório.');
		isValid = false;
	}
	if (inputCpf.value === "") {
		alert('O campo "CPF" é obrigatório.');
		isValid = false;
	}
	return isValid;
}
