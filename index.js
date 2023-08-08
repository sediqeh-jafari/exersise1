
// the ansers is under the questions in " "//   :)


typeof ''
"string" 
typeof 'hadi'
"string" 

typeof 'true'
"string" 

typeof true
"Boolean"

typeof function () {}
"objact"

typeof (() => {})
"objact"

typeof 10
"number"

typeof undefined
"undefined"
typeof null 
"object"


typeof typeof 'anything'
"undefined"

typeof { name: 'hadi' }
"object"

typeof NaN
"Number"

typeof new Date()
"object"

typeof class foo {}
"function"

typeof Math
"object"


Boolean(undefined)
Boolean(null)
Boolean(false)
Boolean(10)
Boolean(-1)
Boolean(+0)
Boolean(-0)
Boolean(0)
Boolean(NaN)
Boolean('')
Boolean('hadi')

// از اول تا اینجا همه فالس
"false"

Boolean(function () {})
Boolean({ name: 'hadi' })
"true"

Number(undefined)
"NaN"

Number(null)
"0"
Number(false)
"0"
Number(true)
"1"
Number(10)
"10"
Number(+0)
"+0"
Number(-0)
"-0"

Number('')
"Number"

Number('hadi')
"Number"

Number('true')
"Number"

Number(NaN)
"Number"

Number(function () {})
"Number"

Number({ name: 'hadi' })
"Number"



String(null)
"null"
String(undefined)
"undefined"
String(false)
"false"
String(true)
"true"
String(10)
"10"
String(NaN)
"NaN"
String(function() {})
"function() {}"
String({ name: 'hadi' })
"{ name: 'hadi' }"

String(BigInt(10000000000000000000000000000000000))
"BigInt(10000000000000000000000000000000000)"


10 + 2
"12"
10 + '2'
"102"

10 + '2' + 10
"10210"
10 + 10 + '2'
"22"
10 + ''
"10"
null + ''
"null"

undefined + ''
"undefined"

null + undefined
"NaN"

undefined + undefined
"NaN"

null + null
"0"

true + 10
"11"

false + 11
"11"

