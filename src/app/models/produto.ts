export class Produto {
  id: number;
  nome:string;
  valor:number;
  imagem:string;

  constructor(id:number, nome:string, valor:number, imagem:string){
    this.id = id;
    this.nome = nome;
    this.valor= valor;
    this.imagem= imagem;
  }
}

