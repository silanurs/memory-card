import React, {useState} from 'react';
const Header = () => {
    return <div className="header">
        <div className="caption">winx club</div>
        <div className="scoreboard">
            <div className="currentScore">current score:<span>0</span>

            </div>
            <div className="bestScore">
                best score:<span>0</span>

            </div>
        </div>
    </div>
}
export default Header;