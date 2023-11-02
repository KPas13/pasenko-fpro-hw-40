import React from "react";

import './smile-election.css'

import SmileList from '../SmilesList/SmileList';

class SmileElection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { smiles, increaseCounter, showResult, smileWinner } = this.props;
        return (
            <div className='container'>
                <div className='main-container'>
                    {smiles.map(item => (
                        <div className='smile-container'>
                            <div className='smile-block'>
                                <span>{item?.smile}</span>
                                <span>{item?.counter}</span>
                                <button className='voiceBtn' onClick={() => increaseCounter(item.id)}>Voice for Emoji</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='resultBtn' onClick={() => showResult()}>Show Result</button>
                {smileWinner.length > 0 && (
                    <div className='emoji-container'>
                        <span>The winner is: {smileWinner.map(winner => winner.emoji).join(', ')}</span>
                    </div>
                )}
            </div>
        );
    }


}

export default SmileElection;