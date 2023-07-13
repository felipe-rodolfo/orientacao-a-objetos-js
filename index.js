import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteDoRicardo = new ContaCorrente();
contaCorrenteDoRicardo.agencia = 1001
contaCorrenteDoRicardo.saldo = 1000;
contaCorrenteDoRicardo.depositar(115)
const valorSacado = contaCorrenteDoRicardo.sacar(45);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteDoRicardo.transferir(10, conta2);
console.log(conta2);
console.log(conta2.cliente);
console.log(conta2.saldo);
