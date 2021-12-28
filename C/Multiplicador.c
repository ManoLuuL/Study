#include <stdio.h>
#include <stdlib.h>

int resultado(int x){
   int multiplicador;
   multiplicador=0;
   int resfinal;
   while (multiplicador<=10) {
      resfinal = x * multiplicador;
      printf("\n%d vezes %d é igual a %d",x,multiplicador,resfinal);
      multiplicador++;
   }
}

int main () {
    int valor;
   printf("\nDigite um número para ver a sua tabuada: ");
   scanf("%d",&valor);
   if (valor==0) printf ("Que tal digitar um número da próxima vez?");
   else resultado (valor);
   return 0;
   }