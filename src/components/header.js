
const Header = (props) => {

    return <div className="header">
        <div className="description">
        <div className="caption">wınx club</div>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
        </div>
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