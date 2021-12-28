#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

typedef struct no{
	int valor;
	int alt;
	struct no *esq;
	struct no *dir;
}no;
 //struct certo

typedef struct arvore_avl {
	struct no *raiz;
} arvore_avl;
//struct certo


arvore_avl *cria_arvore()
{
	arvore_avl *arvore = NULL;
	arvore = (arvore_avl *) malloc(sizeof (arvore_avl));

	arvore->raiz = NULL;
	return arvore;
}//Criando arvore
int cont=0;


//verificação da altura correta
int alt( no *node ) { 
    int esq=0, dir=0;
    if ( node == NULL ) return -1;
    if(node->esq!=NULL) esq = alt ( node->esq );
    if(node->dir!=NULL) dir = alt ( node->dir );
	node->alt = esq-dir;
    if ( esq > dir )
        return esq + 1;
    else
        return dir + 1;
}

//declaração de variavel
no* simplesdireita(no *a){
	no *b = a->esq;
	a->esq=b->dir; 
	b->dir=a;
	return (b);
	
}

	//declaração de variavel
no* simplesesquerda(no *a){
	no *b = a->dir;
	a->dir = b->esq; 
	b->esq = a;
	return (b);

}

//declaração de variavel e ajuste na logica
no* dupladireita(no *a){
	no* b = a->esq;
	no* c = b->dir;
	
	b->dir = c->esq;
	a->esq = c->dir;
	c->esq = b;
	c->dir = a;
	
	return (c);
	
}

//declaração de variavel e ajuste na logica
no* duplaesquerda(no *a){
    no *b = a->dir;
    no *c = b->esq;
    
    a->dir = c->esq;
    b->esq = c->dir;
	c->esq = a;
	c->dir = b;
	
	return (c);
	
}


//faltando coisas.
no* balanceamento (no *node){ 

	no *atual, *novaRaiz;
	
	
	if( node->esq )
		node->esq  = balanceamento( node->esq  );
	if( node->dir ) 
		node->dir = balanceamento( node->dir );

	alt(node);	
	if (node->alt > 1){
		if (node->esq->alt <= -1) 
			novaRaiz=dupladireita(node); 
	}
	else if (node->alt < -1) 
	{
		if (node->dir->alt >= 1) 
			novaRaiz=duplaesquerda(node); 
		else
				novaRaiz=simplesesquerda(node); 
	}
	else
	 	novaRaiz = node;
	 	
	return novaRaiz;		
}


//ajustado a logica e colocado os ponteiros
no *cria_no() {
  no* novo_no = (no *) malloc(sizeof(no));
	if(novo_no == NULL)
		return NULL;
  
	novo_no->dir = NULL;
	novo_no->esq = NULL;
  return novo_no;
}



//em partes correto
void inserir(arvore_avl *arvore, int i){
	no *novo=NULL, *aux=NULL, *pai=NULL;
	if (arvore->raiz==NULL){	
		novo = cria_no();
    novo->valor = i;
		arvore->raiz = novo;
		cont++;

	}
	 
	else {
		aux = arvore->raiz;
		novo = cria_no();
		novo->valor = i;

		do {
      pai = aux;
			if(novo->valor == aux->valor) {
				free(novo);
			}
			else if(novo->valor < aux->valor) {
				aux = aux->esq;
			}
			else {
				aux = aux->dir;
			}
		} while(aux!=NULL);

		if(novo->valor < pai->valor) {
			pai->esq = novo;
			cont++;
		}
		else { 
			pai->dir = novo;
			cont++;
		}
	}
	alt(arvore->raiz); 
	no *novaRaiz = balanceamento(arvore->raiz);
	arvore->raiz = novaRaiz;	
	
}


//ajustado e verificado
int procuraMenorDireita(no* node, no* pai){
	no *menor=NULL, *aux=NULL;
	while(node !=NULL)
	{
		menor = node;
		node = node->esq;
	}
	if(aux==NULL) 
		pai->dir=menor->dir;
	else
		aux->esq=NULL;
 	return menor->valor;
}


no *remover (arvore_avl *arvore, int valor) //acrescentado if que faltava resto correto
{
	no *filho=NULL, *pai=NULL;
	if (arvore == NULL)
    return NULL;
   else { // Percorrendo ate chegar no valor do elemento que quer deletar 
		filho = arvore->raiz;
		while (filho!=NULL && filho->valor!=valor) { 
			pai=filho;
			if (filho->valor > valor) { 
				filho=filho->esq;
			}
			else if (filho->valor < valor) { 
				filho=filho->dir;
			}
		}
		if((filho->esq == NULL) || (filho->dir == NULL)) { 
      no *aux = filho->esq ? filho->esq : filho->dir;
								
			if (aux==NULL) {
				if(arvore->raiz == filho) {
					arvore->raiz = NULL;
				}
				else if(filho->valor < pai->valor) {
					pai->esq = NULL;
				}
				else {
					pai->dir = NULL;
				}
			}
			else {
				if(arvore->raiz == filho) {
					arvore->raiz = aux;
					free(filho);	
				}
				else if(filho->valor < pai->valor) {
					pai->esq = aux;
					free(filho);
				}
				else {
					pai->dir = aux;
					free(filho);
				}
			}
		}
		else { //No tem 2 filhos
			int menorDireita = procuraMenorDireita(filho->dir,filho);
			filho->valor = menorDireita;
		}
	}
	if (arvore->raiz) return arvore->raiz;

	else return NULL;
}

//criado para mostrar
void mostra(no *node) {
  if (node == NULL) return;
  printf(" %d ", (node->valor));
  printf("\n");
  mostra(node->esq);
  mostra(node->dir);

}

main(){
	int i, vet[7]={0,2,3,4,5,6,7};
	arvore_avl *arvore=NULL;
	arvore = cria_arvore();
	mostra(arvore->raiz);
  	for(i=0; i<=6; i++){
		inserir(arvore, vet[i]);
		//if(arvore->raiz!=NULL)

	}
		
		mostra(arvore->raiz);
		printf("\n");
		
		for(int i=0;i<=6;i++)
	{

		arvore->raiz=remover(arvore, vet[i]);
		if(arvore->raiz){
			alt(arvore->raiz);
			arvore->raiz = balanceamento(arvore->raiz);
			//if(arvore->raiz->esq!=NULL)
			//if(arvore->raiz->dir!=NULL)
		}
		mostra(arvore->raiz);
		printf("\n");
		if(arvore->raiz == NULL) free(arvore);
	}
	}
	


