var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage("me", "Hey there!");

        expect (typeof message.createdAt).toBe('number');
        expect (message).toMatchObject({from: "me", text: "Hey there!"});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var latitude = 15;
        var longitude = 19;
        var messageLocation = generateLocationMessage("me", latitude, longitude);

        expect (typeof messageLocation.createdAt).toBe('number');
        expect (messageLocation).toMatchObject({from: "me", url: `https://www.google.com/maps?q=${latitude}, ${longitude}`});
    });
});