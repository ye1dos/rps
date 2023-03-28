import React from "react";
import {User} from "../components/User";
import {Choice} from "../components/Choice";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
function Game({ playerChoice, setPlayerChoice, setBetAmount}) {
    return (
        <div class="d-flex flex-column align-items-center">
            <div>
                <input
                    className="form-control border-0 shadow-none mb-3"
                    type="number"
                    placeholder="Bet amount in ETH"
                    onChange={(e) => setBetAmount(e.target.value)}
                />
            </div>
            <User playerChoice={playerChoice}>
                <Choice choiceIcon={rock} onClick={() => setPlayerChoice(1)}/>
                <Choice choiceIcon={paper} onClick={() => setPlayerChoice(2)}/>
                <Choice choiceIcon={scissors} onClick={() => setPlayerChoice(3)}/>
            </User>
        </div>
    );
}

export default Game;