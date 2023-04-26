import React from 'react';
import {useState} from 'react';

export const LandingPage: React.FC = () => {
    const [visible, setVisible] = useState(false);

    return(
        <h1>Hello!</h1>
    );
}

export default LandingPage;