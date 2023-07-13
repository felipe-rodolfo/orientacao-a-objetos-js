import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    _saldo = 0;

    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
    }

    set cliente(novaValor){
        if(novaValor instanceof Cliente){
            this._cliente = novaValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(this._saldo <= valor)
            return;

        this._saldo -= valor;
        return valor;
    }

    depositar(valor){
        if(this._saldo < 0 )
            return;

        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}