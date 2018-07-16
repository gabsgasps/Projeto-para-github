class GraficoView extends View{

	constructor(elemento) {

		super(elemento);

	}

	template(usuarios) {
		let followers = [];
		let logins = [];

		usuarios.forEach((usuario) => {

			followers.push(usuario.followers);
			logins.push(usuario.login);
		});
		
		let chartGraph = new Chart(this._elemento, {
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