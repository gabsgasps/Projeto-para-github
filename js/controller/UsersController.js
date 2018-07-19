class UsersController{

	constructor() {

		let $ = document.querySelector.bind(document);

		this._name = document.querySelector("#q");

		this._usersList = new UsersList($(".list"));

		this._filterUsers = new FilterUsers();

		this._graphicView = new GraphicView($(".line-chart"));

		this._introduceError = new IntroduceErrorView($(".introduceError"));

		this._message = new Message();
	}

	search(event){

		event.preventDefault();

		this._filterUsers
			.importUsers()
			.then(response => {

				this._validaCampo(response);
				
				this._usersList.update(response);
		 		this._makeGraphic();
		 		
		 		this._name.value = '';
			})
			.catch(e => console.log(e));
	}

	_makeGraphic(){

		let users = [];
		
		document.querySelectorAll(".lista")
			.forEach(usersNames => 
				this._filterUsers
					.importUserIndividual(usersNames.textContent)
					.then(informationUsers => {

						users.push(informationUsers)
						this._graphicView.update(users)
					})
					.catch(e => console.log(e))
			)
	}

	linkUsuario(user) {

		sessionStorage.setItem('users', user);

		window.location.href = 'usuarioInterno.html';

	}

	_validaCampo(response) {

		if (response.items.length === 0) {

			this._message.text ='Usuário não existe ou é inválido';
			this._introduceError.update(this._message);
			this._name.value = '';
			return;
		}else{

			this._message.text ='';
			this._introduceError.update(this._message);

		}
	}

}