 //Specifies the background color depending on the state of the application. 
export const currentBackground = (props) => {
    switch (props) {
        case '01d':
            return {backgroundImage: 'linear-gradient(#5D85C3, #DCC1B7)'};
        case '01n':
            return {backgroundImage: 'linear-gradient(#233D4F, #5E6B84)'};
        case '02d':
        case '02n':
            return {backgroundImage: 'linear-gradient(#80A8CF, #C1C2D9)'};
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            return {backgroundImage: 'linear-gradient(#5580B1, #B3AAC2)'};
        case '09d':
        case '10d':
            return {backgroundImage: 'linear-gradient(#31516D, #7596C5)'};
        case '11d':             
            return {backgroundImage: 'linear-gradient(#253948, #5F7C9C)'};
        case '13d':
            return {backgroundImage: 'linear-gradient(#4773B2, #D4BBD1)'};
        case '50d': 
            return {backgroundImage: 'linear-gradient(#5B6063, #878D93)'};
            
        default:
            return {backgroundImage: 'linear-gradient(#5D85C3, #DCC1B7)'};
    };
};