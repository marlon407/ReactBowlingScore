import React from 'react'

export default class Game extends React.Component{
  constructor(){
    super();
    this.state = { currentRound: 1, isFirst: true, score: new Array(10) };
  }

  setPinsDown(){
    let {currentRound, isFirst, score, numPinsDown} = this.state;
    if(!numPinsDown) return;
    if(isFirst){
      score[currentRound-1] = { first: numPinsDown, second: 0, roundScore: numPinsDown, spare: false, strike: false };
      if(numPinsDown === 10){
        score[currentRound-1].strike = true;
        currentRound += 1;
      }else{
        isFirst = false;
      }
    }else{
      const roundScore = score[currentRound-1].first + numPinsDown
      score[currentRound-1].second = numPinsDown;
      score[currentRound-1].roundScore = roundScore;
      if(roundScore === 10) score[currentRound-1].spare = true;
      currentRound += 1;
      isFirst = true;
    }
    this.setState({currentRound, isFirst:isFirst, score, numPinsDown:''});
  }

  changeText(e){
    if(e.target.value > 10) return;
    this.setState({numPinsDown: parseInt(e.target.value)});
  }

  render() {
    let finalScore = 0;
    let score = this.state.score.map((item, index)=>{
      if(index > 0 && (this.state.score[index-1].spare|| this.state.score[index-1].strike)){
        finalScore += item.roundScore*2
      }else if(index > 1 && this.state.score[index-2].strike){
        finalScore += item.roundScore*2
      }else{
        finalScore += item.roundScore
      }
      return(
        <div key={index}><p>Round: {index+1}</p>
          <span> First: {item.first}</span>
          <span> -- Second: {item.second}</span>
          <span> -- Round Score: {item.roundScore}</span>
        </div>
      )
    });
    const gameOver = this.state.currentRound > 10;
    return (
      <div className="App">
        <div className="App-header">
          <h2>{gameOver? "Game Over":"Round: "+this.state.currentRound}</h2>
        </div>
        <div className="App-intro">
          <input type="number" value={this.state.numPinsDown} onChange={this.changeText.bind(this)} placeholder="Set pins down"/>
          <button disabled={gameOver} onClick={this.setPinsDown.bind(this)}>OK</button>
          {score}
          <p> finalScore: {finalScore}</p>
        </div>
      </div>
    )
  }
}
