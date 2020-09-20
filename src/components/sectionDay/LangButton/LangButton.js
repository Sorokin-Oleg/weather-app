import React, { Component } from "react";
import { connect } from "react-redux";
import { switchLang } from "./../../../actions/actions";

import "./LangButton.scss";

class LangButton extends Component {
  /**
   * The method changes the current value of props.lang to reverse
   */
  changelang = () => {
    this.props.dispatch(switchLang(!this.props.lang));
    localStorage.setItem("lang", !this.props.lang);
  };

  render() {
    const lang = this.props.lang ? "RU" : "EN";
    return (
      <div className="container-lang-button">
        <button onClick={this.changelang}>{lang}</button>
      </div>
    );
  }
}

export default connect()(LangButton);
