
const Header = (props) => {

    return <div className="header">
        <div className="caption">winx club</div>
        <div className="scoreboard">
            <div className="currentScore">current score:<span>{props.currentScore}</span>

            </div>
            <div className="bestScore">
                best score:<span>{props.bestScore}</span>

            </div>
        </div>
    </div>
}
export default Header;