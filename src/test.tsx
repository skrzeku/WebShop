import React, {FC, ReactChild} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage'
import PropTypes from 'prop-types';

interface IMovieProps {
    title: string;
    platform: string[];
    duration?: number
}
interface IChild {

    //It Means ReactText or ReactElement / ReactNode is the
    //type React Node = ReactChild \ boolean \ null \ undefined;
    //type ReactChild = ReactElement \ ReactText;
    //type ReactText = string \ number
    children: ReactChild
}

const MoviePropTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.number,
    platform: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};



const Movie: FC<IMovieProps> = ({children}) => {

    return(<div>
        ...
    </div>)
};

Movie.propTypes = MoviePropTypes;



class Movie2 extends React.Component<IMovieProps> {
    static propTypes = MoviePropTypes;
}




const test:React.FC = ()=> {
    return(<div>

        <Movie platform={['netflix']} title={"Lort of the ring"} />
    </div>)
}







export default test;