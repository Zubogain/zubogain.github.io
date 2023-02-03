// Import putItemHandler function from put-item.mjs 
import { Handler } from '../../../src/handler.mjs';

// This includes all tests for Handler() 
describe('Test Handler', function () {

    // This test invokes Handler() and compare the result  
    it('Send an email', async () => {

        const event = {
            httpMethod: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Allow-Origin': undefined,
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: '{"name": "name_name", "email": "email@email.com", "subject": "subject_subject", "message": "message_message"}'
        };

        // Invoke Handler() 
        const result = await Handler(event);

        const expectedResult = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Allow-Origin': undefined,
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: JSON.stringify({ message: "ok" })
        };

        // Compare the result with the expected result 
        expect(result).toEqual(expectedResult);
    });

    it('Sending an email message with an invalid name', async () => {

        const event = {
            httpMethod: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Allow-Origin': undefined,
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: '{"name": "n", "email": "email@email.com", "subject": "subject_subject", "message": "message_message"}'
        };

        // Invoke Handler() 
        const result = await Handler(event);

        const expectedResult = {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Allow-Origin': undefined,
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: JSON.stringify({ message: "the name must be longer than 1 characters" })
        };

        // Compare the result with the expected result 
        expect(result).toEqual(expectedResult);
    });

    it('Send an email with an invalid email address', async () => {

        const event = {
            httpMethod: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Allow-Origin': undefined,
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: '{"name": "name", "email": "email@email.", "subject": "subject_subject", "message": "message_message"}'
        };

        // Invoke Handler() 
        const result = await Handler(event);

        const expectedResult = {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Allow-Origin': undefined,
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: JSON.stringify({ message: "unsupported email address type" })
        };

        // Compare the result with the expected result 
        expect(result).toEqual(expectedResult);
    });

    it('Sending an email with an invalid subject line', async () => {

        const event = {
            httpMethod: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Allow-Origin': undefined,
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: '{"name": "name", "email": "email@email.com", "subject": "subj", "message": "message_message"}'
        };

        // Invoke Handler() 
        const result = await Handler(event);

        const expectedResult = {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Allow-Origin': undefined,
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: JSON.stringify({ message: "the subject must be longer than 5 characters" })
        };

        // Compare the result with the expected result 
        expect(result).toEqual(expectedResult);
    });

    it('Sending an email with an invalid message', async () => {

        const event = {
            httpMethod: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Allow-Origin': undefined,
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: '{"name": "name", "email": "email@email.com", "subject": "subject_subject", "message": "mess"}'
        };

        // Invoke Handler() 
        const result = await Handler(event);

        const expectedResult = {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Headers': 'application/json',
                'Access-Control-Allow-Origin': undefined,
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: JSON.stringify({ message: "the message must be longer than 5 characters" })
        };

        // Compare the result with the expected result 
        expect(result).toEqual(expectedResult);
    });
});
