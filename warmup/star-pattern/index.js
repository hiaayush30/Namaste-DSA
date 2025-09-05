n = 5;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row += "* "
    }
    console.log(row)
}
console.log("----------------------")

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "* "
    }
    console.log(row)
}
console.log("----------------------")

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += (j + 1) + " "
    }
    console.log(row)
}
console.log("----------------------")

for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row += i + " "
    }
    console.log(row)
}
console.log("----------------------")

for (let i = n; i > 0; i--) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row += j + " "
    }
    console.log(row)
}
console.log("----------------------")

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j <= n - 1 - i; j++) {
        row += "  "
    }
    for (let k = 0; k <= i; k++) {
        row += "* "
    }
    console.log(row)
}

console.log("----------------------")

for (let i = 0; i < n; i++) {
    let row = ""
    let curr = 1
    for (let j = 0; j <= i; j++) {
        row += curr + " "
        curr = curr == 1 ? 0 : 1
    }
    console.log(row)
}

console.log("----------------------")

let curr = 1
for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row += curr + " "
        curr = curr == 1 ? 0 : 1
    }
    console.log(row)
}
