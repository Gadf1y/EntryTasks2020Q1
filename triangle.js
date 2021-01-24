function printTriangle(size=5) {
    let
        s,
        i,
        hash = '',
        spaces = '';

    for (s = 0; s< size-1; s++){
        spaces += ' ';
    }
    for(i = 0; i< size; i++){
        hash += '# ';
        console.log(spaces, hash);
        spaces = spaces.substring(0, spaces.length - 1);
    }

}
printTriangle();