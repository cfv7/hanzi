import React from 'react';
import * as Cookies from 'js-cookie';
import './question-page.css';

export default class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        fetch('/api/questions', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(questions =>
            this.setState({
                questions
            })
        );
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.input.value);
        this.compareValues(this.input.value);
    }
    compareValues(input){
        let value = input.toLowerCase();
        // compares the input value with the character meaning.
        // if values match update correct number counter
        // if valus do not match update incorrect number counter 
    }
    displayFeedback(){
    }

    render() {
        const questions = this.state.questions.map((question, index) =>
            <li key={index}>{question}</li>
        );

        return (
            <div className="question-container"> 
                <ul className="question-list">
                    <h2>Quiz Questions</h2>
                    <div className="card-container">
                        <img alt="character-card" className="dummy-card"/>
                        <h4 className="card-value">卡</h4>
                    </div>
                    <form onSubmit={e=> this.handleSubmit(e)}>
                        <input placeholder="meaning" ref={input => this.input = input}/>
                        <input type="submit"/>
                    </form>
                    {questions}
                </ul>
            </div>
        );
    }
}
