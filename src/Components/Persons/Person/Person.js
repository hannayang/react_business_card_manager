import React from 'react'; 
import './Person.css'; 

const person = (props) => {
  const remarksEditorShowOrHide = props.editing === true ? 'show-editing' : 'show-view'; 

  return (
    <div className='person'>
      <h3 className='name'> {props.name} </h3>
      <div className='delete' onClick={props.deleteClicked}> <i className="fas fa-user-slash"></i> </div>
      <p className='title'> {props.title} @ {props.company} </p>
      <p className='email'> <i className="fas fa-envelope-open-text"></i> <a href={'mailto:' + props.email} target='blank'> {props.email} </a></p>
      <div className={remarksEditorShowOrHide}>
        <p className='remarks-view'> 
          <i className="fas fa-comment"></i> {props.remarks} <i onClick={props.editClicked} class="fas fa-edit"></i>
        </p>
        <p className='remarks-editing'>
          <textarea type='text' value={props.remarks} onChange={props.changed} />
          <i onClick={props.submitClicked} className="fas fa-check-square"></i> 
        </p>
      </div>
    </div>
  )
}; 

export default person; 