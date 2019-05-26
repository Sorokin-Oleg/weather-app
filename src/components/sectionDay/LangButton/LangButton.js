import React, {Component} from 'react';
import { connect } from 'react-redux';
import { switchLang } from './../../../actions/actions';
import './LangButton.scss';

class LangButton extends React.Component {
    constructor(props) {
        super(props);
        this.Changelang = this.Changelang.bind(this);
    };

    /**
     * The method changes the current value of props.lang to reverse
     */
    Changelang() {
        let bool = !this.props.lang;
        this.props.dispatch(switchLang(bool));
    };

    render () {
        const lang = this.props.lang ? 'RU' : 'EN';
        return (
            <div className='container-lang-button'>
                <button onClick={this.Changelang}>{lang}</button>
            </div>
        );
    };
};

export default connect() (LangButton);