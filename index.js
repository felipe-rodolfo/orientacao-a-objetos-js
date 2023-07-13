import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteDoRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteDoRicardo.depositar(115)

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteDoRicardo.transferir(10, conta2);
console.log(contaCorrenteDoRicardo.cliente);