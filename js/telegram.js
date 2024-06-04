//  function getUserInfo() {
//     const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
//     const user = window.Telegram.WebApp.initDataUnsafe.user;
//     if (user) {
//         const userInfo = {
//             query_id: initDataUnsafe.query_id,
//             user_id: user.id,
//             first_name: user.first_name,
//             last_name: user.last_name,
//             allows_write_to_pm: user.allows_write_to_pm,
//             hash: initDataUnsafe.hash,
//             auth_date: initDataUnsafe.auth_date
//           };
//           const userInfoString = JSON.stringify(userInfo);  
                
//                       // 存储到 localStorage  
//                       localStorage.setItem('userInfo', userInfoString);  
//       // 如果用户信息存在，则返回用户信息
//       return userInfo
//     } else {
//       // 如果用户信息不存在，则返回未登录信息
//       return {
//         query_id: null,
//         user_id: null,
//         first_name: null,
//         last_name: null,
//         allows_write_to_pm: null,
//         hash: null,
//         auth_date: null
//       };
//     }
//   }

//   function getUserInfo(){
//     const userInfoString = localStorage.getItem('userInfo');  
//     if (userInfoString) {  
//         return JSON.parse(userInfoString);  
//     }  
//     return null;  
//     }

( function() {
    onload = function () {
        // 获取用户信息并显示
        const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
        const user = window.Telegram.WebApp.initDataUnsafe.user;
        let userInfo = {
                    query_id: initDataUnsafe.query_id,
                    user_id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    allows_write_to_pm: user.allows_write_to_pm,
                    hash: initDataUnsafe.hash,
                    auth_date: initDataUnsafe.auth_date
                  }
        if (user) {
            alert("用户名称2："+userInfo.first_name)
            const userInfo = {
                query_id: initDataUnsafe.query_id,
                user_id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                allows_write_to_pm: user.allows_write_to_pm,
                hash: initDataUnsafe.hash,
                auth_date: initDataUnsafe.auth_date
              };
              const userInfoString = JSON.stringify(userInfo);  
                    
            // 存储到 localStorage  
            localStorage.setItem('userInfo', userInfoString);  
  
        } else {
            // 如果用户信息不存在，则显示未登录信息
            alert("未登录授权信息11")
        }
    };
})();