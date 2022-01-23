class User {
    constructor(jsonData) {
        let userData = jsonData ? JSON.parse(jsonData) : null;
        this.FirstName = userData?.firstName ?? "";
        this.LastName = userData?.lastName ?? "";
        this.UserId = userData?.userId ?? "";
        this.Token = userData?.token ?? "";
    }
}

export default User;