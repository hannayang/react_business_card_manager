import React, { Component } from 'react';
import './App.css';
import Person from '../Components/Persons/Person/Person'; 

const persons = [{ 
  id: '001', 
  name: 'Hanni Michael', 
  title: 'Front-end engineer', 
  company: 'freeCodeCamp', 
  email: 'hannimichael@gmail.com',
  remarks: 'Met at the Coding Conference. With 8 years experience.', 
  editing: false, 
}, { 
  id: '002', 
  name: 'Leon Cheung', 
  title: 'Full-stack developer', 
  company: 'ABC Co.', 
  email: 'leoncheung@gmail.com', 
  remarks: 'A reliable web development freelancer based in Santiego.', 
  editing: false, 
}, { 
  id: '003', 
  name: 'Hans Lee', 
  title: 'Constructor', 
  company: 'XKD Construction Co.', 
  email: 'hanslee@gmail.com', 
  remarks: 'Met at the Construction Conference.', 
  editing: false, 
}, { 
  id: '004', 
  name: 'Clare Green', 
  title: 'Film producer', 
  company: 'Telsee Movie Production', 
  email: 'claregreen@gmail.com', 
  remarks: 'Worked together on the Cartoon Movie Project.', 
  editing: false, 
}, { 
  id: '005', 
  name: 'Tim White', 
  title: 'Javascript coach', 
  company: 'Huiwen Coding School', 
  email: 'timwhite@gmail.com', 
  remarks: 'JS coach for startups.', 
  editing: false, 
}, { 
  id: '006', 
  name: 'Stephan Cook', 
  title: 'CSS coach', 
  company: 'Huiwen Coding School', 
  email: 'stephancook@gmail.com', 
  remarks: 'CSS coach for startups.', 
  editing: false, 
}, { 
  id: '007', 
  name: 'Nick Thompson', 
  title: 'Business analyst', 
  company: 'Commercial Bank', 
  email: 'nickthompson@gmail.com', 
  remarks: 'Worked on ABC project.', 
  editing: false, 
}, { 
  id: '008', 
  name: 'Helen Porter', 
  title: 'Magician', 
  company: 'Magic Co', 
  email: 'helenporter@gmail.com', 
  remarks: 'Invited for annual dinner performance and was well-received.', 
  editing: false, 
}, { 
  id: '009', 
  name: 'Dereck Tong', 
  title: 'Dentist', 
  company: 'Big Smile Clinic', 
  email: 'derecktong@gmail.com', 
  remarks: 'Family doctor\'s referral.', 
  editing: false, 
}, { 
  id: '010', 
  name: 'Lynn Luck', 
  title: 'Daycare teacher', 
  company: 'Happy Faces Daycare', 
  email: 'lynnluck@gmail.com', 
  remarks: 'My kid\'s daycare teacher.', 
  editing: false, 
}, { 
  id: '011', 
  name: 'Timon Blaire', 
  title: 'Hardware engineer', 
  company: 'Solutions Co.', 
  email: 'timonblaire@gmail.com', 
  remarks: 'Worked together on XIL project.', 
  editing: false, 
}, { 
  id: '012', 
  name: 'Amy Fu', 
  title: 'tech recruiter', 
  company: 'Axiom One', 
  email: 'amyfu@gmail.com',
  remarks: 'Contracted headhunter for tech recruitment.', 
  editing: false, 
}, { 
  id: '013', 
  name: 'Hannah Lee', 
  title: 'Constructor', 
  company: 'AXI Construction Co.', 
  email: 'hannahlee@gmail.com', 
  remarks: 'Met at AXI Construction Conference.', 
  editing: false, 
}, { 
  id: '014', 
  name: 'Clara Green', 
  title: 'Editor', 
  company: 'Telsee Movie Production', 
  email: 'claragreen@gmail.com', 
  remarks: 'Worked together on the Cartoon Movie Project.', 
  editing: false, 
}, { 
  id: '015', 
  name: 'Tom White', 
  title: 'Javascript expert', 
  company: 'Huiwen Coding School', 
  email: 'tomwhite@gmail.com', 
  remarks: 'JS coach for startups.',
  editing: false,
}, { 
  id: '016', 
  name: 'Stephanie Cook', 
  title: 'CSS coach', 
  company: 'Huiwen Coding School', 
  email: 'stephaniecook@gmail.com', 
  remarks: 'CSS coach for startups.', 
  editing: false, 
}, { 
  id: '017', 
  name: 'Nikki Thompson', 
  title: 'Financial analyst', 
  company: 'Industrial and Commerce Bank', 
  email: 'nikkithompson@gmail.com', 
  remarks: 'Worked on ABC project.', 
  editing: false, 
}, { 
  id: '018', 
  name: 'Henry Porter', 
  title: 'Musician', 
  company: 'Bluebird Co', 
  email: 'henryporter@gmail.com', 
  remarks: 'Invited for annual dinner performance and was well-received.', 
  editing: false, 
}, { 
  id: '019', 
  name: 'Daniel Hans', 
  title: 'Family doctor', 
  company: 'Wellness Clinic', 
  email: 'danielhans@gmail.com', 
  remarks: 'Family doctor second choice.', 
  editing: false, 
}, { 
  id: '020', 
  name: 'Lucy Stone', 
  title: 'Administrator', 
  company: 'Happy Faces Daycare', 
  email: 'lucystone@gmail.com', 
  remarks: 'My kid\'s daycare admin.', 
  editing: false, 
}, { 
  id: '021', 
  name: 'Lily Smith', 
  title: 'Administrator', 
  company: 'Office Manager Co.', 
  email: 'lilysmith@gmail.com', 
  remarks: 'Oursourced office manager.', 
  editing: false, 
}]

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      persons: persons, 
      showPersons: false,  
    } 
    this.remarksInputHandler = this.remarksInputHandler.bind(this); 
    this.deletePersonHandler = this.deletePersonHandler.bind(this); 
    this.togglePersonsHandler = this.togglePersonsHandler.bind(this); 
    this.remarksEditorHandler = this.remarksEditorHandler.bind(this); 
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
    const filteredPersons = this.state.persons.filter(p => {
      return p.id !== id; 
    }); 
    this.setState({
      persons: filteredPersons, 
    })
  }; 

  togglePersonsHandler() {
    this.setState({
      showPersons: !this.state.showPersons, 
    })
  }; 

  getExtendedState(state) {
    return {
      showOrHideButtonName: state.showPersons === true ? 'HIDE CARDS' : 'SHOW CARDS', 
      showOrHideClasses: state.showPersons === true ? ['show-persons'] : ['hide-persons', 'button-with-bottom-margin'], 
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
      <div className="App">
        <h2> Business Cards Manager </h2>
      <div className='currentNum'>
        <h3> Current number of contacts: <span className={extendedState.currentNumStyle}>{extendedState.currentNumOfContacts}</span> </h3>
      </div>
        <button className={extendedState.showOrHideClasses[1]} onClick={this.togglePersonsHandler}> {extendedState.showOrHideButtonName} </button>
        <div className={extendedState.showOrHideClasses[0]}>
          {this.renderPersons(this.state.persons)}
        </div>
      </div>
    );
  }; 
}; 

export default App;
