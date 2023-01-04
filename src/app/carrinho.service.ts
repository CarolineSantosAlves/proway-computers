import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
   this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]'); //caso ele não consiga achar o que tem dentro do carrinho, vai pegar uma string vazia
   return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoId: Number){
    this.itens = this.itens.filter(item => item.id !== produtoId) //o filter vai percorrer todo o vetor de itens, vamos filtrar o item onde o produto id é diferente do que estamos recebendo para deletar apenas o item que recebemos
    localStorage.setItem('carrinho', JSON.stringify(this.itens)); //sobre escrevando os novos itens que acabei de adicionar ao carrinho
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
