class UsersList extends View{

	constructor(element) {

		super(element);
	}

	template(users) {
		let html = '';
		 
		for (let i = 0; i <= users.items.length; i++) {

			if (i < 10) html += `
				<a href="#" target="_blank" class="list-group-item list-group-item-action lista" onclick="usersController.linkUsuario('${users.items[i].login}')">
					${users.items[i].login}
			  	</a>`
		}

		return `
			<h3>Lista de Usuários</h3>
			<div class="list-group">
			  ${html}
			  <a href="#" class="list-group-item list-group-item-action disabled">
			  	Total: ${users.total_count}
			  </a>
			</div>	
		`			
	}
}