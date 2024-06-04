
var urlkeyword = window.location.href.split('?')[1].split('&') //'7082085359'
var axiosParam = {}
console.log(urlkeyword)
for (let i = 0; i < urlkeyword.length; i++) {
    var item = urlkeyword[i].split('=')
    var key = item[0]
    var value = item[1]
    axiosParam[key] = value
}
var consumeC = function(){
    axios.get('http://herometa.io/web-hook/consume/challenge?userId=' + axiosParam.telegramUserId, {
        headers: { 'token': axiosParam.token },
        withCredentials: false
    })
        .then(res => {
            //alert(0)
        })
        .catch(error => {
            //alert(error)
        })
}
