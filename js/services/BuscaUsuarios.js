class BuscaUsuarios{

	
	get(valorCampo){

		return new Promise((resolve,reject) =>{

			let xhr = new XMLHttpRequest();

			xhr.open('GET', `https://api.github.com/search/users?q=${valorCampo}`);



			xhr.onreadystatechange = () => {
			
				if(xhr.readyState == 4){

					if(xhr.status == 200) resolve(JSON.parse(xhr.responseText));
						
					else reject(xhr.responseText);
				}
			}

			xhr.send();
		});
	}


	getusuarioIndividual(url) {

		return new Promise((resolve,reject) =>{

			let xhr = new XMLHttpRequest();

			xhr.open('GET', url);

			xhr.onreadystatechange = () => {
			
				if(xhr.readyState == 4){

					if(xhr.status == 200) resolve(JSON.parse(xhr.responseText));
						else reject(xhr.responseText);
				}
			}

			xhr.send();
		});
	}
}