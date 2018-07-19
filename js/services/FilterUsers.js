class FilterUsers{

	constructor() {

		this._searchUsers = new SearchUsers();

		this._name = document.querySelector("#q");//campo do texto
	}

	importaUsuarios() {

		return new Promise((resolve, reject) =>{

			this._searchUsers
				.get(this._name.value)
				.then(pointer => resolve(pointer))
				.catch(error => reject(console.log('Não foi possivel fazer a requisição dos dados')));
		});
	}

	importaUsuarioIndidual(user) {

		return new Promise((resolve, reject) =>{

			this._searchUsers
				.getusuarioIndividual(`https://api.github.com/users/${user}`)
				.then(dadosUsuario => resolve(dadosUsuario))
				.catch(error => reject(console.log('Não foi possível a requisição dos dados individuais do usuário')));
		});
	}

}