import React, {Component} from 'react';
import { connect, dispatch } from 'react-redux';
import './LangButton.scss';

class LangButton extends React.Component {
    constructor(props) {
        super(props);
        this.lang = this.lang.bind(this);
    };

    /**
     * The method changes the current value of props.lang to reverse
     */
    lang() {
        const data = {
            lang: !this.props.lang
        };

        this.props.dispatch({
            type: "LANG",
            data
        });
    };

    render () {
        const lang = this.props.lang ? 'RU' : 'EN';
        return (
            <div className='container-lang-button'>
                <button onClick={this.lang}>{lang}</button>
            </div>
        );
    };
};

export default connect() (LangButton);