"use strict";

// Libraries
const { constants, createHash, createCipheriv, publicEncrypt } = require("crypto");

// App Variables
var publicKey = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbcu5SxnaX7kKQlVrZGqUhcs90\nlM5sv9cRxM527+nvrUoVEXTndBZZRLqXttcpNNbwTFPBrvMLc2x8ro+yY4Zw77ic\n2060DU6mJk+jFX5xHG0nec4sxBRtDMevei1+XexHCGLvuBvFQTSMuwF287dbDYQr\nNv/uxGBwplF/QzD4gwIDAQAB\n-----END PUBLIC KEY-----";
var remote = "remote-android";
var appVersion = "7.19.0";

function reversePassword(password) {
    return (password === "") ? "" : reversePassword(password.substr(1)) + password.charAt(0);
}

function createSignature(username, password) {
    password = publicEncrypt({ key: publicKey, padding: constants.RSA_NO_PADDING }, Buffer.concat([Buffer.alloc(128 - Buffer.from(reversePassword(password)).length), Buffer.from(reversePassword(password))])).toString("hex");

    var cipher = createCipheriv("aes-128-cbc", "db948dc801ca4f91", "7A2898A8CF071B71");
    var signature = cipher.update(`${createHash("md5").update(`${remote}-#-${appVersion}-#-${username}##${password}`).digest("hex")}-#-${Date.now()}`, "utf8", "base64");

    return [password, signature += cipher.final("base64")];
};

var signature = createSignature("username", "password");

console.log({
    "encryptedPassword": signature[0],
    "signature": signature[1]
});
