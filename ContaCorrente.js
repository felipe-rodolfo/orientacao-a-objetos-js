export class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor){
        if(this.saldo <= valor)
            return;

        this.saldo -= valor;
        return valor;
    }

    depositar(valor){
        if(this.#saldo < 0 )
            return;

        this.#saldo += valor;
    }
}