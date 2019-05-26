import React, {Component} from 'react';
import { connect} from 'react-redux';
import { getCityName } from './../../../actions/actions';

import './Search.scss';

class Search extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.enterKeySend = this.enterKeySend.bind(this);
    };    

    /**
     * Store the user-entered value in the state value
     */
    handleChange() {
        this.setState({value: event.target.value});        
    };

    /**
     * We save the value of the state value in the local storage, and also transfer the value to the reducer
     * Reset the state value
     */
    handleSend() {
        localStorage.setItem('city', 'q=' + this.state.value);
        this.props.dispatch(getCityName('q=' + this.state.value));
        this.setState({value:''});
    };

    enterKeySend(event) {
        if (event.keyCode === 13) {
            this.handleSend();
        };
    };

    componentDidMount() {
        document.addEventListener('keydown', this.enterKeySend, false);
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.enterKeySend, false);
    };    

    render() {        
        const placeholder = this.props.lang ? 'Enter the name of the city or zip code' : 'Введите название города или почтовый индекс';
        const errorMessage = this.props.lang ? 'Enter a valid city or zip code' : 'Введите правильное название города';
        const renderPlaceholder = this.props.error ? errorMessage : placeholder;
        const errorClassName = this.props.error ? 'search-error-info' : '';
        return(
            <div className='container-search'>
                <input type="text" placeholder={renderPlaceholder} onChange={this.handleChange} 
                       value={this.state.value} className={errorClassName}/>
                <button onClick={this.handleSend}>➜</button>
            </div>
        );
    };
};

export default connect() (Search);