class Cipher {

    constructor(keyString = this.generateKey()) {
        this.key = this.validateKey(keyString);
    }

    /* TODO: Refactor encode and decode */
    encode(plainText) {
        const mKey = this.getKeyForMessage(plainText, this.key);
        let encryptedArray = [...plainText].map((char, index) => this.getCharFromCode((char.charCodeAt(0) - 97) + (mKey.charCodeAt(index) - 97)));
        return encryptedArray.join('');
    }

    decode(encryptedMessage) {
        const mKey = this.getKeyForMessage(encryptedMessage, this.key);
        let decodedArray = [...encryptedMessage].map((char, index) =>  this.getCharFromCode((char.charCodeAt(0) - 97) - (mKey.charCodeAt(index) - 97)));
        return decodedArray.join('');
    }

    /* Generate a lowercase alphabetical key of length 100 */
    generateKey() {
        return [...Array(100)].map(this.getRandomKeyChar).join('');
    }

    /* Generate a random lowercase alphabet */
    getRandomKeyChar() {
        return String.fromCharCode( 97 + Math.floor(Math.random() * 26));
    }

    validateKey(keyString) {
        if(!keyString.match(/^[a-z]+$/)) {
            throw new Error('Bad key');
        }
        return keyString;
    }

    getCharFromCode(charCode) {
        charCode = charCode % 26;
        charCode = charCode < 0 ? charCode + 26 : charCode;
        return String.fromCharCode(charCode + 97);
    }

    /* Augment key length to be greater than message length */
    getKeyForMessage(message, key) {
        let mKey = key;
        while (message.length > mKey.length) {
            mKey += mKey;
        }
        return mKey;
    }

}

export default Cipher;