
(function() {
    onload = function () {
        // 获取用户信息并显示
        const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
        const user = window.Telegram.WebApp.initDataUnsafe.user;
        if (user) {
            alert("用户信息",JSON.stringify(initDataUnsafe))
            // 如果用户信息存在，则显示用户信息
            // const userInfoElement = document.getElementById('user-info');
            // userInfoElement.innerHTML = `

            //     <p>query_id: ${initDataUnsafe.query_id}</p>

            //     <p>用户ID: ${user.id}</p>
            //     <p>First Name: ${user.first_name}</p>
            //     <p>Last Name: ${user.last_name}</p>
            //     <p>用户是否允许机器人发送私信的布尔值: ${user.allows_write_to_pm}</p>
            //     <p>hash值: ${initDataUnsafe.hash}</p>
            //     <p>auth_date授权日期的时间戳: ${initDataUnsafe.auth_date}</p>

            // `;
        } else {
            // 如果用户信息不存在，则显示未登录信息
            alert("未登录授权信息")
        }
    };
})();