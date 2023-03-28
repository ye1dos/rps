import React, {useState} from "react";
import Header from "./components/Header";
import Game from "./pages/Game";
import Footer from "./components/Footer";
import {Title} from "./components/Title";
import Playground from "./components/PlayGround";
import {Profile} from "./components/Profile";
import {Message} from "./components/Message";
import PlayButton from "./components/PlayButton";

import Web3 from "web3";
import ResetButton from "./components/ResetButton";
const abi = [
    {
        "inputs": [],
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "bet",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "payout",
                "type": "uint256"
            }
        ],
        "name": "GameResult",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "getContractBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "enum RockPaperScissors.Choice",
                "name": "playerChoice",
                "type": "uint8"
            }
        ],
        "name": "play",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];
const adr = '0xC1c011e0F4BB30217a870C891Cafa4ecd2f2c8f5';

function App() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [betAmount, setBetAmount] = useState(0);
    const [contract, setContract] = useState(null);
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [result, setResult] = useState(null);
    async function connectToMetamask() {
        if (window.ethereum) {
            try {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);
                setWeb3(web3);
                const contract = new web3.eth.Contract(
                    abi,
                    adr,
                );
                setContract(contract);
            } catch (error) {
                console.error(error);
            }
        }
    }
    // async function getContractBalance() {
    //     if (!contract) {
    //         console.error("Contract not loaded");
    //         return;
    //     }
    //     try {
    //         const balance = await contract.methods.getContractBalance().call();
    //         console.log(`Contract balance is ${balance} wei`);
    //         return balance;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    async function play() {
        const weiAmount = web3.utils.toWei(betAmount.toString(), "ether");
        try {
            await contract.methods.play(playerChoice).send({ from: account, value: weiAmount, gas: 3000000 });
            const payout = await contract.methods.getContractBalance().call();
            setResult(`You won ${2 * payout / 10 ** 18} ETH!`);
        } catch (error) {
            console.error(error);
        }
    }
    function reset() {
        setPlayerChoice(null);
        setBetAmount(0);
        setResult(null);
    }
  return (
      <>
          <Header
            connectToMetamask={connectToMetamask}
            account={account}
          />
          <div className="App">
              <Title />
              {account && <p>Connected to Metamask with account {account}</p>}
              {contract && (
                  <Playground>
                      <Profile>
                          <Game
                              contract={contract}
                              playerChoice={playerChoice}
                              setPlayerChoice={setPlayerChoice}
                              setBetAmount={setBetAmount}
                          />
                      </Profile>
                      <div>
                          <PlayButton play={play} />
                      </div>
                      <div className="pt-3">
                          <ResetButton reset={reset} />
                      </div>
                      <div>
                          <Message result={result}/>
                      </div>
                  </Playground>
              )
              }
          </div>
          <Footer />
      </>
  );
}

export default App;