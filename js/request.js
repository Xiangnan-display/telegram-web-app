
var urlkeyword = window.location.href.split('?')[1].split('&') //'7082085359'
var axiosParam = {}
console.log(urlkeyword)
for (let i = 0; i < urlkeyword.length; i++) {
    var item = urlkeyword[i].split('=')
    var key = item[0]
    var value = item[1]
    axiosParam[key] = value
}

//消耗当天挑战次数
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

//查询当天挑战次数
var getChallengeCount = function(){
    axios.get('http://herometa.io//web-hook/find/challenge?userId=' + axiosParam.telegramUserId, {
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

//查询积分
var getPoints = function(){
    axios.get('http://herometa.io/web-hook/find/integration?userId=' + axiosParam.telegramUserId, {
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