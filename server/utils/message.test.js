var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage("me", "Hey there!");

        expect (typeof message.createdAt).toBe('number');
        expect (message).toMatchObject({from: "me", text: "Hey there!"});
    });
});