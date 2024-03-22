
class Cont{
    // constructor(){
    //     document.write(`Hi Guys`)
    // }

    //  --------------part 1

    // sub(){
    //     document.write(`<br>Read to learn`)
    // }
    // constructor(a,b){
    //     document.write(`<br>${a}${b}`)
    // }
    // add(a,b){
    //     document.write(`<br>${a}${b}`)
    // }

    constructor(n,i,r){
        this.n=n
        this.i=i
        this.r=r
    }

    get(){
        return `<br> ${this.n},${this.i},${this.r}`
    }

    // get(a,b){
    //     return `${a+b}`

    // }
}

// ----------------- part - 1

// let check = new Cont("Hussain","kani")
// check.sub()
// check.add(2,3)

let final = new Cont("kani","22",66)
let col = final.get()

document.write(col)
// document.write(final.get(1,2))


//