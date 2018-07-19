class View{

	constructor(element) {

		this._element = element;
	}

	template(b) {

		throw new Error('Necessário a cria do método template');
	}
	update(b) {

		this._element.innerHTML = this.template(b);
	}
}