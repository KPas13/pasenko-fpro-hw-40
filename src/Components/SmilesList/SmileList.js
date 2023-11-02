import React from "react";

import './smile-list.css'


import SmileElection from "../SmilesElection/SmileElection";


class SmileList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles: [
                {
                    id: 1,
                    smile: '❤️',
                    counter: 0,
                },
                {
                    id: 2,
                    smile: '🦄',
                    counter: 0,
                },
                {
                    id: 3,
                    smile: '😎',
                    counter: 0,
                },
                {
                    id: 4,
                    smile: '🐉',
                    counter: 0,
                },

            ],
            smileWinner: [{
                emoji: '',
            }]
        }

        this.increaseCounter = this.increaseCounter.bind(this);
        this.showResult = this.showResult.bind(this);
    }


    increaseCounter(SmileId) {
        this.setState(item => {
            const selectedEmoji = item.smiles.map(item => {
                if (item.id === SmileId) {
                    return { ...item, counter: item.counter + 1 };
                }
                return item;
            });

            return { smiles: selectedEmoji };
        });
    }


    showResult() {
        let maxAmount = 0;
        let winners = [];

        this.state.smiles.forEach(item => {
            if (item.counter > maxAmount) {
                maxAmount = item.counter;
                winners = [item];
            } else if (item.counter === maxAmount) {
                winners.push(item);
            }
        });

        this.setState({ smileWinner: winners.map(winner => ({ emoji: winner.smile })) });
    }




    render() {
        return (
            <div className='smile-container'>
                <SmileElection
                    smiles={this.state.smiles}
                    smileWinner={this.state.smileWinner}
                    increaseCounter={this.increaseCounter}
                    showResult={this.showResult}
                />
            </div>
        )
    }
}

export default SmileList;