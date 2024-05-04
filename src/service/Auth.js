module.exports = {
    getUser: function () {
        const user = sessionStorage.getItem('user');
        if (user === 'undefined' || !user) {
            return null;
        } else {
            return JSON.parse(user);
        }
    },

    setUserSession: function (user_id, user_name) {
        const user = { user_id, user_name }; // Create an object with username and useremail
        sessionStorage.setItem('user_id', JSON.stringify(user.user_id));
        sessionStorage.setItem('user_name', JSON.stringify(user.user_name)); // Store the object in sessionStorage
    },

    resetUserSession: function () {
        sessionStorage.removeItem('user');
    }
}