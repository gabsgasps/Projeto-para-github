class ApresentaErroView extends View{

	constructor(elemento) {

		super(elemento);
	}

	template(model) {

		return model.mensagem ? `<p class="alert alert-info"" role="alert">${model.mensagem}</p>`: `<p></p>`;
	}

}