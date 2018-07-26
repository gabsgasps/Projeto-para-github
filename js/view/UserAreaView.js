class UserAreaView extends View{

	constructor(element) {

		super(element);
	}

	template(user) {
		
		return `
		 	<div class="userArea card">
		    	<img class="card-img-top" src="https://avatars2.githubusercontent.com/u/${user.id}?v=4" alt="Card image cap">
		    	<div class="card-body">
		     		<h5 class="card-title">
		     			<strong>Login:</strong> ${user.login}
		     		</h5>
		     		<p class="card-text">
		      			<strong>Id:</strong> ${user.id}
		     		</p>
		     		<p class="card-text">
		      			<strong>Name:</strong> ${user.name}
		     		</p>
		     		<p class="card-text">
		      			<strong>Bio:</strong> ${user.bio}
		     		</p>
		     		<p class="card-text">
		      			<strong>Location:</strong> ${user.location}
		     		</p>
		    	</div>
		  	</div>
		`
	}
}