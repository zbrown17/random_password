function generatePassword() {
    var length = 8;
    var letters = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var result = "";
    for (var i = 0, n = letters.length; i < length; ++i) {
        result += letters.charAt(Math.floor(Math.random() * n));
    }
    return result;
}
console.log(generatePassword())