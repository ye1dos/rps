import "./User.css";

export const User = ({ playerChoice, children }) => {
    function defineChoice() {
        switch(playerChoice) {
            case 1: return "Rock";
            case 2: return "Paper";
            case 3: return "Scissors";
            default: return "Not chosen";
        }
    }
  return (
    <div className="user-card">
      <div className="choice-grid">{children}</div>
      <h4>
        {playerChoice
            ? `Your choice: ${defineChoice()}`
            : "Pick one!"
        }
      </h4>
    </div>
  );
};
