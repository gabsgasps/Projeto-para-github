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

				if(response.items.length === 0){

					this._message.text = ' Usuário não existe ou é inválido';
					this._introduceError.update(this._message);
					return;
				}else{	
					this._message.text = '';
					this._introduceError.update(this._message);	
				}

				this._usersList.update(response);
		 		this._makeGraphic();
		 		
		 		this._name.value = '';
			})
			.catch(error => {

				this._message.text = error;
				this._introduceError.update(this._message);

			});
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
					.catch(error => {
						this._message.text = error;
						this._introduceError.update(this._message);
					})
			);
	}

	linkUser(user) {

		sessionStorage.setItem('users', user);

		window.location.href = `internUser.html?${user}`;

	}

}