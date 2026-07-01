import {  Component } from 'react';
class Game extends Component{
    constructor(props){
        super(props)
        this.state = {
            player: null,
            computer: null,
            player_value:0,
            computer_value:0,
        }
    }
    logic = (player_value, computer_value) =>{
        if (player_value === computer_value){
            return 0
        }
        else if((player_value === 'ROCK' && computer_value === 'SCISSORS') ||
                (player_value === 'PAPER' && computer_value === 'ROCK') ||
                (player_value === 'SCISSORS' && computer_value === 'PAPER')){
                    return 1
                }
        else{
            return -1
        }
    }
    decision = (player_choice) =>{
        const choices = ['ROCK', 'PAPER', 'SCISSORS']
        let player_value = player_choice
        let computer_value = choices[Math.floor(Math.random()*choices.length)]
        let result = this.logic(player_value, computer_value)
        if (result === 1){
            this.setState({player: player_value, computer: computer_value, player_value: this.state.player_value + 1})
        }
        else if(result === -1){
            this.setState({player:player_value, computer:computer_value, computer_value:this.state.computer_value + 1})
        }
        else{
            this.setState({player:player_value, computer:computer_value})
        }
    }
    render(){
        const {playerVal, computerVal, playerScore, compScore} = this.state;
        return(
            <div className="container">
                <h1>Welcome to Rock, Paper, Scissors Game</h1>
                <div >
                    <button onClick={()=>this.decision("ROCK")}>
                        <i className={`fas fa-hand-rock`} /> Rock
                    </button>
                    <button onClick={()=>this.decision("PAPER")}>
                        <i className={`fas fa-hand-paper`} /> Paper
                    </button>
                    <button onClick={()=>this.decision("SCISSORS")}>
                        <i className={`fas fa-hand-scissors`} />  Scissors 
                    </button>
                </div>
                <div className="content">
                    <p>Your choice: {playerVal}</p>
                    <p>Computer's choice: {computerVal}</p>
                    <h2>Your Score:{playerScore}</h2>
                    <h2>Computer Score: {compScore}</h2>
                </div>
            </div>
        )
    }
}
export default Game;