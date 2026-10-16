export type Product = {id:string;name:string;description:string;price:number;size:string;emoji:string;popular?:boolean;featured?:boolean};
export type Extra = {id:string;name:string;price:number};
export const store = {
  name:'Açaí Royal', phone:'', // CONFIGURE: DDI + DDD + número, somente dígitos. Ex.: 5551999999999
  address:'Endereço da loja a definir', hours:'Todos os dias • horário a definir',
  minOrder:0, currency:'BRL', instagram:'',
  delivery:true, pickup:true,
  // Sem horários definidos, o site não afirma que a loja está aberta.
  acceptingOrders:true,
};
export const products:Product[] = [
  {id:'tradicional',name:'Royal Tradicional',description:'Açaí cremoso, banana e granola.',price:13.9,size:'300 ml',emoji:'🍇',popular:true},
  {id:'especial',name:'Royal Especial',description:'Açaí, morango, leite em pó e leite condensado.',price:22.9,size:'500 ml',emoji:'🍓',featured:true},
  {id:'premium',name:'Royal Premium',description:'Açaí, creme de avelã, paçoca e morango.',price:29.9,size:'700 ml',emoji:'👑',popular:true},
  {id:'duplo',name:'Combo Royal Duplo',description:'Dois copos de 500 ml para dividir.',price:39.9,size:'Combo',emoji:'💜'},
  {id:'kids',name:'Royal Kids',description:'Um copinho perfeito para qualquer hora.',price:10.9,size:'200 ml',emoji:'🥄'},
  {id:'familia',name:'Royal Família',description:'Açaí para compartilhar com sua turma.',price:49.9,size:'1 litro',emoji:'✨'},
];
export const extras:Extra[] = [
  {id:'banana',name:'Banana',price:0},{id:'granola',name:'Granola',price:0},{id:'morango',name:'Morango',price:2.5},
  {id:'leite',name:'Leite em pó',price:2},{id:'pacoca',name:'Paçoca',price:1.5},
  {id:'condensado',name:'Leite condensado',price:2},{id:'avelã',name:'Creme de avelã',price:4.5},{id:'choc',name:'Chocolate',price:3},
];
export const neighborhoods=[
  {name:'Centro',fee:5},{name:'Harmonia',fee:7},{name:'Mathias Velho',fee:8},{name:'São José',fee:9},{name:'Outro bairro (consultar)',fee:0,consult:true},
];
export const promotions = [
  {title:'Dose dupla de felicidade',subtitle:'Combo Royal Duplo',tag:'Para compartilhar',productId:'duplo'},
  {title:'O favorito da casa',subtitle:'Royal Especial',tag:'Mais pedido',productId:'especial'},
];
export const formatMoney=(v:number)=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v);
