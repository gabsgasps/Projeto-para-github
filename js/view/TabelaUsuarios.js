class TabelaUsuarios extends View{

	constructor(elemento) {

		super(elemento);

	}

	template(usuarios) {
		let html = '';
		 
		for (let i = 0; i <= usuarios.items.length; i++) {

			if (i < 10) html += `
				<a href="#" target="_blank" class="list-group-item list-group-item-action lista" onclick="usuariosController.linkUsuario('${usuarios.items[i].login}')">
					${usuarios.items[i].login}
			  	</a>`
		}

		return `
			<h3>Lista de Usuários</h3>
			<div class="list-group">
			  ${html}
			  <a href="#" class="list-group-item list-group-item-action disabled">
			  	Total: ${usuarios.total_count}
			  </a>
			</div>	
		`			
	}
}