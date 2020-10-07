import * as React from 'react';
import Questions from './Questions'
import Boolean from './Boolean'

export const App = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Lucid</h1>
        <h2>Welcome to UI Team code assessment!</h2>
        <Questions />
    </div>
);
