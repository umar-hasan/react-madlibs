function addCommas(num) {
    let output = ""
    let n = Math.abs(num)

    if (Math.abs(num % 1) > 0) {
        output = output.concat(".", (n.toString()).replace(new RegExp("[0-9]+\."), ""))
        n = Math.floor(n)
    }

    while (n > 0) {
        let beforeComma = n / 1000
        let afterComma = n % 1000
        if (Math.floor(beforeComma) > 0) {
            if (afterComma < 100) {
                output = ",".concat(Math.floor(afterComma / 100).toString(), Math.floor(afterComma / 10).toString(), Math.floor(afterComma % 1).toString(), output)
            }
            else {
                output = ",".concat(afterComma.toString(), output)
            }
            
        }
        else {
            output = n.toString().concat(output)
        }
        n = Math.floor(n / 1000)
    }

    if (num < 0) {
        output = "-".concat(output)
    }

    return output
}

module.exports = addCommas;