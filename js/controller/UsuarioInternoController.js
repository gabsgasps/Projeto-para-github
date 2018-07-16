class UsuarioInternoController{

	constructor() {

		let $ = document.querySelector.bind(document);
		
		this._filtraUsuarios = new FiltraUsuarios();

		this._areaUsuario = new AreaUsuarioView($(".aparece"));

		this._usuario = sessionStorage.getItem('usuarios');

		this.usuarioInterno(this._usuario);
	}

	usuarioInterno(usuarioLogin) {


		//let b = sessionStorage.getItem('usuario');

		this._filtraUsuarios
			.importaUsuarioIndidual(`${usuarioLogin}`)
			.then(usuario => this._areaUsuario.update(usuario))
			.catch(e => console.log(e));

		/*if (sessionStorage.length == 1) {

			sessionStorage.clear();
		}*/
	}

}