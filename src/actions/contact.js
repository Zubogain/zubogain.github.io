import fetch from "isomorphic-unfetch";

export const CONTACT_FORM_REQUEST = "CONTACT_FORM_REQUEST";

export const contactSetRequest = ({ isError, isResponse, prevIsResponse }) => ({
    type: CONTACT_FORM_REQUEST,
    payload: { isError, isResponse, prevIsResponse },
});

export const asyncContactRequest = ({ name, email, subject, message }) => async (dispatch) => {
    let status;

    dispatch(contactSetRequest({ message: "", isResponse: true, prevIsResponse: false }));

    const response = await fetch("https://ce6o270nf8.execute-api.us-east-1.amazonaws.com/Prod/email", {
        method: 'POST',
        body: JSON.stringify({ name, email, subject, message })
    });

    status = response.status;

    const data = await response.json();

    console.log(data);

    setTimeout(() => dispatch(contactSetRequest({ isError: data.message == "ok", isResponse: false, prevIsResponse: true })), 2500);
};
