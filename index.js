const numInput = document.querySelector('.num_input')
const strInput = document.querySelector('.str_input')
const numOutput = document.querySelector('.js-number-output')
const strOutput = document.querySelector('.js-string-output')
const weiInput = document.querySelector(".wei_input")
const decInput = document.querySelector(".dec_input")
const weiOutput = document.querySelector(".js-wei-output")
const convertWeiButton = document.querySelector(".convert_wei_btn")


const decimalFormatter = new Intl.NumberFormat("en-us", {
    style: "decimal",
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 4,
})
const limitDecimals = (value) => {
    let res = decimalFormatter.format(value)
    return res
}

function tokenValue(value, decimals) {
    let res = value / Math.pow(10,decimals)
    return res
}
function tokenValueTxt(value, decimals) {
    weiOutput.textContent = `${limitDecimals(tokenValue(value, decimals))}`
}
function hexStringToDecimal(hexString) {
    num = parseInt(hexString, 16)
    return num
}
function decimalToHexString(decimal) {
     hex = "0x" + decimal.toString(16)
     return hex
}

function formSubmitted(e) {
    e.preventDefault()
    let wv = weiInput.value
    let dv = decInput.value
    tokenValueTxt(wv,dv)
}

convertWeiButton.addEventListener("click", formSubmitted)
weiInput.addEventListener("change", () => {
    const weiValue = weiInput.value
    return weiValue
})
decInput.addEventListener("change", () => {
    const decValue = decInput.value
    return decValue
})
strInput.addEventListener("change", () => {
    const str = strInput.value
    const dec = hexStringToDecimal(str)
    numOutput.textContent = `hex ${str} is decimal ${dec}`
})
numInput.addEventListener("change", () => {
    const dec = parseFloat(numInput.value)
    const str = decimalToHexString(dec)

    if (isNaN(dec)) {
        strOutput.textContent = `You need to enter a number to convert!`
    } else {
        strOutput.textContent = `decimal ${dec} is hex ${str}`
    }    
})