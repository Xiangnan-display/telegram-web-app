// function getUserInfo() {
//     const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
//     const user = window.Telegram.WebApp.initDataUnsafe.user;
//     if (user) {
//       // 如果用户信息存在，则返回用户信息
//       return {
//         query_id: initDataUnsafe.query_id,
//         user_id: user.id,
//         first_name: user.first_name,
//         last_name: user.last_name,
//         allows_write_to_pm: user.allows_write_to_pm,
//         hash: initDataUnsafe.hash,
//         auth_date: initDataUnsafe.auth_date
//       };
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

function getUserInfo() {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
        try {
            return JSON.parse(userInfoString);
        } catch (error) {
            console.error("Error parsing user info from localStorage", error);
            return null;
        }
    }
    return null;
}

(function() {
    window.onload = function() {
        try {
            const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
            const user = initDataUnsafe.user;
            if (user && user.id) {
                let userInfo = {
                    query_id: initDataUnsafe.query_id,
                    user_id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    allows_write_to_pm: user.allows_write_to_pm,
                    hash: initDataUnsafe.hash,
                    auth_date: initDataUnsafe.auth_date
                };

                alert("用户名称：" + user.first_name);

                // 将用户信息转换为 JSON 字符串以便存储
                const userInfoString = JSON.stringify(userInfo);
                
                // 存储到 localStorage
                localStorage.setItem('userInfo', userInfoString);
            } else {
                // 如果用户信息不存在，则显示未登录信息
                alert("未登录授权信息");
            }
        } catch (error) {
            console.error("Error initializing user data", error);
            alert("初始化用户数据时出错");
        }
    };
})();
