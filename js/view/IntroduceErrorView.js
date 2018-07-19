class IntroduceErrorView extends View{

	constructor(element) {

		super(element);
	}

	template(model) {

		return model.text ? `<p class="alert alert-info"" role="alert">${model.text}</p>`: `<p></p>`;
	}

}