import React from 'react';

export const LandingPage: React.FC = () => {

return (
    <div>
        <header className="header">
            <h4>About Me</h4>            
            <h4>Programming </h4>
            <h4>Fun Facts!</h4>
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