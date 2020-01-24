function waterRetention(arr) {
    const len = arr.length
    if (len < 2) {
      return 0
    }
  
    let left = []
    let right = []
    left[0] = arr[0]
    right[len - 1] = arr[len - 1]
    
    for (i = 1; i < len; i++) {
      left[i] = Math.max(left[i - 1], arr[i])
      right[len - i - 1] = Math.max(right[len - i], arr[len - i - 1])
    }
  
    let water = 0
    for (i = 0; i < len; i++) {
      water += Math.min(left[i], right[i]) - arr[i]
    }
    return water
}
