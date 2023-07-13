export class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this.saldo <= valor)
            return;

        this.saldo -= valor;
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