import React, { Component } from 'react';
import Person from '../Persons/Person/Person'; 
import './Persons.css'

class Persons extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      persons: props.persons, 
    } 
    this.remarksInputHandler = this.remarksInputHandler.bind(this); 
    this.deletePersonHandler = this.deletePersonHandler.bind(this); 
    this.remarksEditorHandler = this.remarksEditorHandler.bind(this); 
    this.remarksSubmitHandler = this.remarksSubmitHandler.bind(this); 
  }; 

  remarksInputHandler(event, id) {
    const person = this.state.persons.find(p => {
      return p.id === id; 
    }); 
    person.remarks = event.target.value; 
    this.setState({
      persons: this.state.persons, 
    })
  }; 

  remarksEditorHandler(id) {
    const person = this.state.persons.find(p => {
      return p.id === id; 
    })
    person.editing = true; 
    this.setState({
      persons: this.state.persons,
    })
  }; 

  remarksSubmitHandler(id) {
    const person = this.state.persons.find(p => {
      return p.id === id;
    })
    person.editing = false; 
    this.setState({
      persons: this.state.persons, 
    })
  }

  deletePersonHandler(id) {
    const person = this.state.persons.find(p=> {
      return p.id === id;
    }) 
    const toDelete = window.confirm('Are you sure to delete ' + person.name +'?'); 
    if(toDelete === false) {
      return; 
    } 
    const filteredPersons = this.state.persons.filter(p => {
      return p.id !== id; 
    }); 
    this.setState({
      persons: filteredPersons, 
    })
  }; 

  getExtendedState(state) {
    return {
      currentNumOfContacts: state.persons.length, 
      currentNumStyle: state.persons.length >= 10 ? 'green' : state.persons.length > 3 ? 'red' : 'purple', 
    }
  }

  renderPersons(persons) {
    return persons.map((person) => {
      return (
        <Person 
          name = {person.name}
          title = {person.title}
          company = {person.company}
          email = {person.email}
          remarks = {person.remarks}
          editing = {person.editing}
          changed = {(event) => this.remarksInputHandler(event, person.id)}
          deleteClicked = {() => this.deletePersonHandler(person.id)} 
          editClicked = {() => this.remarksEditorHandler(person.id)}
          submitClicked = {() => this.remarksSubmitHandler(person.id)}
          />
      )}
    )
  }

  render () {
    const extendedState = this.getExtendedState(this.state); 
    return (
      <div>
        <div className='currentNum'>
            <h3> Current number of contacts: <span className={extendedState.currentNumStyle}>{extendedState.currentNumOfContacts}</span> </h3>
        </div>
        <div className='persons'>
            {this.renderPersons(this.state.persons)}
        </div>
      </div>
    );
  };
}

export default Persons; 