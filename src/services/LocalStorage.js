const UserInLocalStorage = {
    userStorageKey: 'user',
    get: function () { return localStorage.getItem(this.userStorageKey) },
    set: function (newValue) { return localStorage.setItem(this.userStorageKey, newValue) },
    remove: function () { return localStorage.removeItem(this.userStorageKey) }
}

export default UserInLocalStorage;
