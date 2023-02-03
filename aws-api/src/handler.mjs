import { SESClient, SendTemplatedEmailCommand } from "@aws-sdk/client-ses";

const toEmail = process.env.TO_EMAIL;
const sourceEmail = process.env.SOURCE_EMAIL;
const allowOrigin = process.env.ALLOW_ORIGIN;

const headers = {
    "Access-Control-Allow-Headers": "application/json",
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "OPTIONS,POST"
}

const isEmailValid = (email) => {
    const regExp =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
};

const isTextValid = (text, length = 5) => {
    text = text.trim();
    return text.length > length;
};

const createSendEmailCommand = ({ name, email, subject, message }) => {
    return new SendTemplatedEmailCommand({
        Destination: { ToAddresses: [toEmail] },
        TemplateData: JSON.stringify({ name, email, subject, message }),
        Source: sourceEmail,
        Template: "ses-about-me-contact-form-template",
    });
};

export const Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }

    const sesClient = new SESClient();

    console.info('received:', event);

    const body = JSON.parse(event.body);
    const params = {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message
    };

    if (!isTextValid(params.name, 1)) {
        return { statusCode: 400, headers: headers, body: JSON.stringify({ message: "the name must be longer than 1 characters" }) }
    }

    if (!isEmailValid(params.email)) {
        return { statusCode: 400, headers: headers, body: JSON.stringify({ message: "unsupported email address type" }) }
    }

    if (!isTextValid(params.subject)) {
        return { statusCode: 400, headers: headers, body: JSON.stringify({ message: "the subject must be longer than 5 characters" }) }
    }

    if (!isTextValid(params.message)) {
        return { statusCode: 400, headers: headers, body: JSON.stringify({ message: "the message must be longer than 5 characters" }) }
    }



    const sendEmailCommand = createSendEmailCommand(params);

    try {
        await sesClient.send(sendEmailCommand);

        return {
            statusCode: 200, headers: headers, body: JSON.stringify({ message: "ok" })
        }
    } catch (e) {
        console.error("Failed to send email:", e);
        return {
            statusCode: 500, headers: headers, body: JSON.stringify({ message: e.message })
        }
    }

};
