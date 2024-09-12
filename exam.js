function Mission1(arr){
    return arr.filter(num => num %2 === 0)
}

function Mission2(str){
    return str.split(" ").filter(word => word.length === 4).length
}

function Mission3(matriza){
    return matriza.flat()
}
function Mission6(index){
    let a = 1
    let b = 0
    for (let i =0; i<index ; i++){
        if(i%2 === 0){
            a += b
        }
        else{
            b += a
        }
    }
    return index? Math.max(a, b) : 0
    
}


console.log(Mission1([1,2,3,4,5,6,7]))
console.log(Mission2("sdfe sdfewfs ddfe dfefd dede"))
console.log(Mission3([[1,2,3],[4,5,6],[6,7,8]]))
console.log(Mission6(9))

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission6
}