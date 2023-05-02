import React from 'react';

export const LandingPage: React.FC = () => {

return (
    <div>
        <header className="header">
            <h3>About Me</h3>
            <h3>Programming Experience</h3>
            <h3>Fun Facts!</h3>
        </header>
        
        <div className="landingPageContainer">
            <div className="landingPageBox">
                <h1>Hello!</h1>
            </div>
        </div>
    </div>
    );
}

export default LandingPage;