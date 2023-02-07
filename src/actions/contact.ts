import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { IContactForm, IContactState } from "interfaces/contact";
import fetch from "isomorphic-unfetch";

export const CONTACT_FORM_REQUEST = "CONTACT_FORM_REQUEST";

const API_URL = "https://ce6o270nf8.execute-api.us-east-1.amazonaws.com/Prod";

export const contactSetRequest = ({ isError, isResponse, prevIsResponse }: IContactState) => ({
    type: CONTACT_FORM_REQUEST,
    payload: { isError, isResponse, prevIsResponse },
});

export const asyncContactRequest = ({ name, email, subject, message }: IContactForm) => async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch(contactSetRequest({ isError: false, isResponse: true, prevIsResponse: false }));

    try {
        const response = await fetch(`${API_URL}/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, message })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }

        dispatch(contactSetRequest({ isError: false, isResponse: false, prevIsResponse: true }));
    } catch (error) {
        console.error(error);
        dispatch(contactSetRequest({ isError: true, isResponse: false, prevIsResponse: true }));
    }
};
