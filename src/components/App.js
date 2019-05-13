import React, {Component} from 'react';
import SectionDay from './sectionDay/SectionDay';
import SectionWeek from './sectionWeek/SectionWeek';
import './App.scss'


class App extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        //Specifies the background color depending on the state of the application.
        let background = {backgroundImage: 'linear-gradient(#689FD7, #DCC1B7)'};

        return (
            <div className='container-app' style={background}>
                <SectionWeek/>
                <SectionDay/>
            </div>
        );
    };
};

export default App;