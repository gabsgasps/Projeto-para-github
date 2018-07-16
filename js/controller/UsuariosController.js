class UsuariosController{

	constructor() {

		let $ = document.querySelector.bind(document);

		this._nome = document.querySelector("#q");

		this._tabela = new TabelaUsuarios($(".tabela"));

		this._filtraUsuarios = new FiltraUsuarios();

		this._graficoView = new GraficoView($(".line-chart"));

		this._apresentaErro = new ApresentaErroView($(".apresentaErro"));

		this._mensagem = new Mensagem();
	}

	busca(event){

		event.preventDefault();

		this._filtraUsuarios
			.importaUsuarios()
			.then(resposta => {

				this._validaCampo(resposta);
				
				this._tabela.update(resposta);
		 		this._montaGrafico();
		 		
		 			this._nome.value = '';
			})
			.catch(e => console.log(e));
	}

	_montaGrafico(){

		let usuarios = [];
		//Usa o textContent das td's para 
			//fazer requisições das informações 
				//de cada usuario Individualmente 
		//Passando-os para a view do gráfico 
		document.querySelectorAll(".lista")
			.forEach(usersNomes => 
				this._filtraUsuarios
					.importaUsuarioIndidual(usersNomes.textContent)
					.then(informacoesUsuarios => {

						usuarios.push(informacoesUsuarios)
						this._graficoView.update(usuarios)
					})
					.catch(e => console.log(e))
			)
	}

	imagem() {

		this._filtraUsuarios.importaUsuarios()
			.then(usuarios => this._areaUsuario.update(usuarios))
			.catch(e => console.log(e));

	}

	linkUsuario(usuario) {

		sessionStorage.setItem('usuarios', usuario);

		window.location.href = 'usuarioInterno.html';

	}

	_validaCampo(resposta) {
		if (resposta.items.length === 0) {

			this._mensagem.mensagem ='Usuário não existe ou é inválido';
			this._apresentaErro.update(this._mensagem);
			this._nome.value = '';
			return;
		}else{
			this._mensagem.mensagem ='';
			this._apresentaErro.update(this._mensagem);

		}
	}

}