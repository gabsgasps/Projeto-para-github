class IntroducedErrorView extends View{

	constructor(element) {

		super(element);
	}

	template(model) {

		return model.mensagem ? `<p class="alert alert-info"" role="alert">${model.mensagem}</p>`: `<p></p>`;
	}

}