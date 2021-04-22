import React from 'react';
import * as contentful from 'contentful';

const client = contentful.createClient({
    space: 'q9wagk5qt0q4',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '5T-ZwgP8VsnmrSsRou23CFig1ej2wFerryDEJKCniJg',
});

client.getEntries().then(console.log);

export default () => (
    <div style={{ textAlign: 'center' }}>
        <h1>Welcome to React-Static</h1>
    </div>
);
