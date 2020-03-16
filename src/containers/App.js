import React, { Fragment } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

//Search box. In order for the search box to work, we need to know about 'State'. State simply means the description of your app. A state is an object which describes your application. Currently our state consists of the Robots object and the cardlist. State is able to change. We can change the value of the search box, the value of input which will then change the state. The state which describes the application is our robots and whatever is entered in the search box. 'Props' are simply things that come out of state. So a parent feeds state into a child component, as as soon as the child receives the state it becomes a property. The child element can never change the property.//

class App extends React.Component {
    //Here we are declaring a constructor which tells the program the current state://
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
           return response.json();
        }).then(users => {
            this.setState({robots: users});
        })
        
    }
    //Everything in the constructor is now the state, this tells the program what can change or be manipulated. If we want to access the current state, we can use 'this.state.(component). For example, this.state.robots//

    //Now we want to create a function that will allow the search box to work://

    //We tell the onSearchChange function to set the state from the searchfield as whatever is typed in//
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })

    return(
        <Fragment>
        <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/> 
        <Scroll>
        <CardList robots={filteredRobots} />
        </Scroll>
        </div>
        </Fragment>
    ) 
    }
};

export default App;