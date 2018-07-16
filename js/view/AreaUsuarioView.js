class AreaUsuarioView extends View{

	constructor(elemento) {

		super(elemento);
	}

	template(usuario) {
		
		return `
		 	<div class="viewUsuario card">
		    	<img class="card-img-top" src="https://avatars2.githubusercontent.com/u/${usuario.id}?v=4" alt="Card image cap">
		    	<div class="card-body">
		     		<h5 class="card-title">
		     			<strong>Login:</strong> ${usuario.login}
		     		</h5>
		     		<p class="card-text">
		      			<strong>Id:</strong> ${usuario.id}
		     		</p>
		     		<p class="card-text">
		      			<strong>Name:</strong> ${usuario.name}
		     		</p>
		     		<p class="card-text">
		      			<strong>Bio:</strong> ${usuario.bio}
		     		</p>
		     		<p class="card-text">
		      			<strong>Location:</strong> ${usuario.location}
		     		</p>
		    	</div>
		  	</div>
		`
	}
}