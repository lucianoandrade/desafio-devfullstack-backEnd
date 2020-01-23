function confereBalanced (caracteres) {
    const brackets = [['(', ')'], ['[', ']'], ['{', '}'] ];
    let box = [];
    let success = true;

    caracteres.split('').forEach(c => {
        brackets.forEach(b => {
            if(c == b[0]) {
                box.push(b[0])
            }
            else if (c == b[1]) {
                if(box.pop() !== b[0]){
                    success = false;
                }
            }
        })
    })

    if(success && box.length === 0) {
        return "SIM!";
      }
      else {
        return "NAO!";
      }
}
