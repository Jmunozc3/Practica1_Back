

function quickSort(array: number[]): number[] { 
    
  if (array.length <= 1) { 
      return array; 
  } 
  
  const piv: number = array[0]; 
  
  const izquierda = array.filter((p) => p < piv); 
  
  const derecha = array.filter((p) => p > piv); 

  return [...quickSort(izquierda), piv, ...quickSort(derecha)];

} 

const numeros: number[] = [27,39,68,45,2,43,12,5]; 
const quick=quickSort(numeros);
console.log(quick);