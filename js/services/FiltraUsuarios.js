class FiltraUsuarios{

	constructor() {

		this._buscaUsuarios = new BuscaUsuarios();

		this._nome = document.querySelector("#q");//campo do texto
	}

	importaUsuarios() {

		return new Promise((resolve, reject) =>{

			this._buscaUsuarios
				.get(this._nome.value)
				.then(pontero => resolve(pontero))
				.catch(e => reject(console.log('Não foi possivel fazer a requisição dos dados')));
		});
	}

	importaUsuarioIndidual(usuario) {

		return new Promise((resolve, reject) =>{

			this._buscaUsuarios
				.getusuarioIndividual(`https://api.github.com/users/${usuario}`)
				.then(dadosUsuario => resolve(dadosUsuario))
				.catch(e => reject(console.log('Não foi possível a requisição dos dados individuais do usuário')));
		});
	}

}