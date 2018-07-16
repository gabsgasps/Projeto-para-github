class View{

	constructor(elemento) {

		this._elemento = elemento;
	}

	template(b) {

		throw new Error('Necessário a cria do método template');
	}
	update(b) {

		this._elemento.innerHTML = this.template(b);
	}
}