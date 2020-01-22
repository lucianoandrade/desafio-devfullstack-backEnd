function indexAlvo (arr, alvo) {
    let search = arr.find((item) => {       
        for (i = 0; i < arr.length; i++) {       
            if(item === alvo - arr[i]) {
                return true
            }
        }
    })
   return arr.indexOf(search) === -1 ? "Index não encontrado" : [arr.indexOf(search), arr.indexOf(alvo - search)]
}
