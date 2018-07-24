class InternUserController{

	constructor() {

		let $ = document.querySelector.bind(document);
		
		this._filterUsers = new FilterUsers();

		this._userArea = new UserAreaView($(".aparece"));

		this._user = sessionStorage.getItem('users');

		this.internUser(this._user);
	}

	internUser(userLogin) {

		this._filterUsers
			.importUserIndividual(`${userLogin}`)
			.then(user => this._userArea.update(user))
			.catch(error => console.log(error));
	}

}