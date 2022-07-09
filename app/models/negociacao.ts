 export class Negociacao {
    _data;
    _quantidade;
    _valor;

    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //get, para acessa os atributos privador
    get data(){
        return this.data;
    }
    get volume(){
        return this._quantidade * this._valor;
    }
}