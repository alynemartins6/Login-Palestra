/// Tela de login ////
const inputEmail = document.getElementById("inputEmail");
const inputSenha = document.getElementById("inputSenha");
const buttonEnviar = document.getElementById("submit-enviar");
const buttonCadastrar = document.getElementById("submit-cadastrar");

buttonEnviar.addEventListener("click", async (event) => {
	event.preventDefault();

	let isValid = true;

	if (inputEmail.value === "") {
		alert("Por favor, preencha o campo de email.");
		isValid = false;
	}

	if (inputSenha.value === "" || inputSenha.value.length < 8) {
		alert("Por favor, preencha a senha com pelo menos 8 caracteres.");
		isValid = false;
	} else if (isValid) {
		let body = new Object();
		body.email = inputEmail.value;
		body.pass = inputSenha.value;
		await fetch("http://localhost:3000/auth/login", {
			method: "POST",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})
			.then(async function (resp) {
				if (!resp.ok) throw new Error("Falha ao cadastrar usuário");
				const data = await resp.json();
				localStorage.setItem("token", data.accessToken);
				alert("Login realizado com sucesso");
				console.log(data.accessToken);
				return data.accessToken;
			})
			.then((json) => alert("Login realizado com sucesso"))
			.then(() => document.location.href = "/pagina-principal.html")
			.catch((err) => alert("Falha ao realizar login: " + err));
	}
});

buttonCadastrar.addEventListener("click", (event) => {
	event.preventDefault();
	document.location.href = "/cadastro.html";
});
