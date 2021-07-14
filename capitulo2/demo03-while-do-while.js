//enquanto não mudar, não para! 
let termoParada = true
let contador = 0 
console.log("termoParada é ", termoParada)
while(termoParada) {
  termoParada = contador < 10
  if (contador % 2 === 0) {
      console.log(contador, " - este número é par")
  }
  contador += 1
  //contador = contador + 1 

}

//do ... while executa primeiro e verifica depois
//while verifica primeiro e depois executa

do {
    console.log("Aqui só roda uma vez, pois termoParada agora é ", termoParada)
} while(termoParada)

while (termoParada) {
    console.log("nem vai rodar pq termoParada é false")
}
