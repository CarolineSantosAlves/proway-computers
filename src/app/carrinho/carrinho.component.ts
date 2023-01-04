import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = []; //propriedade que vai ser o carrinho em si e vamos a interface
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService, //vamosinjetar o serviço de carrinho
    private router: Router
  ){}

  ngOnInit(): void { // vou popular a propriedade quando inicializar o componente
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removeProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }

  comprar(){
    alert('Parabens, você finalizoua a sua compra!')
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }
}
