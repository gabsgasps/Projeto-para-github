class UsersController{

	constructor() {

		let $ = document.querySelector.bind(document);

		this._name = document.querySelector("#q");

		this._usersList = new UsersList($(".list"));

		this._filterUsers = new FilterUsers();

		this._graficView = new GraficView($(".line-chart"));

		this._introducedError = new IntroducedErrorView($(".introducedError"));

		this._message = new Message();
	}

	search(event){

		event.preventDefault();

		this._filterUsers
			.importaUsuarios()
			.then(response => {

				this._validaCampo(response);
				
				this._usersList.update(response);
		 		this._montaGrafico();
		 		
		 		this._name.value = '';
			})
			.catch(e => console.log(e));
	}

	_montaGrafico(){

		let users = [];
		//Usa o textContent das td's para 
			//fazer requisições das informações 
				//de cada usuario Individualmente 
		//Passando-os para a view do gráfico 
		document.querySelectorAll(".lista")
			.forEach(usersNames => 
				this._filterUsers
					.importaUsuarioIndidual(usersNames.textContent)
					.then(informationUsers => {

						users.push(informationUsers)
						this._graficView.update(users)
					})
					.catch(e => console.log(e))
			)
	}

	linkUsuario(users) {

		sessionStorage.setItem('users', users);

		window.location.href = 'usuarioInterno.html';

	}

	_validaCampo(response) {
		if (response.items.length === 0) {

			this._message.text ='Usuário não existe ou é inválido';
			this._introducedError.update(this._message);
			this._name.value = '';
			return;
		}else{
			this._message.text ='';
			this._introducedError.update(this._message);

		}
	}

}