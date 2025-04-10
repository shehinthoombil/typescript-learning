let a = [3, 6, 3, 5, 7, 3, 9, 4];
let b = [];

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length - 1; j++) {
        if (a[i] == a[j]) {
            b.push(a[i])
        }
    }
    console.log(b);
    return b
    
}
