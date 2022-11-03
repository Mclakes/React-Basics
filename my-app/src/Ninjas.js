import React, {Component} from 'react';
// import ReactDOM from 'react-dom/client'; 

class Ninjas extends Component {
    render() {
        console.log(this.props);
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(ninja => {
            return (
                <div className= "ninja">
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>
                </div>
            )
        })
        return (
            <div className='ninja-list'>
                {ninjaList}
            </div>
        )
    }
}

export default Ninjas;