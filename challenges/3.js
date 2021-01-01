let i = 0
const repeatCode = setInterval(function(){
    i = i + 1
    console.log('This function shows every 2 seconds and has shown for ' + i + ' times')
}, 2000)


setTimeout(function(){
    clearInterval(repeatCode)
}, 10000)