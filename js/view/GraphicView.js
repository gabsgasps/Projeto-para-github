class GraphicView extends View{

	constructor(element) {

		super(element);

	}

	template(users) {
		let followers = [];
		let logins = [];

		users.forEach((user) => {

			followers.push(user.followers);
			logins.push(user.login);
		});
		
		let chartGraph = new Chart(this._element, {
			type: 'bar',
		    data: {
		    	labels: logins,
			    datasets:[{
			    	label: "Seguidores dos Usuários",
			    	data: followers,
			    	borderWidth: 6,
			    	borderColor: '#25262a',
			    	backgroundColor: 'transparent'
			    }]
		    },
		    options: {
		        title: {
		            display: true,
		            text: 'Gráfico de Seguidores dos Usuários',
		        	fontSize: 30
		        },
		        legend: {

		            labels: {
		               	fontColor: 'black',
		                number: 12,
		            }
		        }
		    }
		});
		
	}

}