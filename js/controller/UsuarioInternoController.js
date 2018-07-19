class UsuarioInternoController{

	constructor() {

		let $ = document.querySelector.bind(document);
		
		this._filterUsers = new FilterUsers();

		this._areaUsuario = new AreaUsuarioView($(".aparece"));

		this._user = sessionStorage.getItem('users');

		this.usuarioInterno(this._user);
	}

	usuarioInterno(userLogin) {

		this._filterUsers
			.importaUsuarioIndidual(`${userLogin}`)
			.then(user => this._areaUsuario.update(user))
			.catch(error => console.log(error));
	
	}

}