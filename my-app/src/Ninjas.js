import React  from 'react';
// import ReactDOM from 'react-dom/client';  
const Ninjas = (props) =>  {    
    // console.log(this.props);
    const { ninjas } = props;
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className= "ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
        )
    })
    return (
        <div className='ninja-list'>
            { ninjaList }
        </div>
    )    
}

export default Ninjas;