import React from 'react';
import ReactDOM from 'react-dom';
import Red1 from './img/1.gif'
import Red2 from './img/2.png'
import Red3 from './img/3.png'
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <div>
                    Hello i am Red Butt guy Again!!!
                </div>
            </UserCard>
            <UserCard>
            <SingleComment name='Red Guy' 
             date='Todat at 5:00pm' 
             text='I am Red Ass Devil'
             picture= {Red1}/>
             </UserCard>
             <br></br>
             <UserCard>
            <SingleComment name='Baboon' 
            date=' Today at 5:20pm'
            text='I R Baboon'
            picture={Red3} />
            </UserCard>
            <br></br>
            <UserCard>
            <SingleComment name='Weasol'
             date='Today at 5:25pm'
             text='I am Weasol'
             picture={Red2} />
        </UserCard>
            </div>
       
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)