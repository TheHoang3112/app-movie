import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log(location.state);
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className='Detail'>
                    <h3>{location.state.title}</h3>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <p>{location.state.summary}</p>
                </div>
            )
        }
        else {
            return null;
        }
    }
}
export default Detail;