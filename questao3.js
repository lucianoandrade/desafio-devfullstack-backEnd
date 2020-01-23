function simularLucro (pricesDay){  
    let lucro = 0
    let low = pricesDay[0]
  
    for (i = 0; i < pricesDay.length; i++) {
      if (pricesDay[i] <= low){
        low = pricesDay[i]
      } else {
        lucro = Math.max((pricesDay[i] - low), lucro)
      }
    }
    if (pricesDay.length <= 1) {
        return 0
    } else {
        return lucro
    }
  }