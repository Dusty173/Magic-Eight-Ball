const random = (arr) => {   
    let randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}

export { random };