import React from 'react';
import {gql, useMutation} from '@apollo/client';

function ScriptsPage() {
    const CREATE_SCRIPT_TAG_QUERY = gql`mutation {
        scriptTagCreate(input: {
            cache: false,
            displayScope: ALL,
            src: "https://drive.google.com/uc?export=view&id=1xd7IKlDEuhylHf7Eo2RfKeMZ7tBYux9H"
        }) {
        
        }
    }`

    return <div>This is the scripts Page!!!!!!!</div>;
}

export default ScriptsPage;
