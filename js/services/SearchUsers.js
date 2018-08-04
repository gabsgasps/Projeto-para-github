class SearchUsers{

	_filterError(res) {
		
		if (!res.ok) throw new Error(res.statusText);
		return res;
	}
	get(valueCamp){

		return fetch(`https://api.github.com/search/users?q=${valueCamp}`)
			.then(res => this._filterError(res))
			.then(res => res.json());
		
	}


	getusuarioIndividual(url) {

		return fetch(url)
			.then(res => this._filterError(res))
			.then(res => res.json());
	}
}