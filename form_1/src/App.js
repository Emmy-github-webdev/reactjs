import React, {useState} from 'react';
import './App.css';

function App() {

  const [formInput, setFormInput] = useState({
    fName: "",
    lName: ""
  })
  const [formList, setFormList] = useState([])

  const changeHandler = (e) => {
    e.preventDefault();
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
    if(formInput){
      setFormList((list) => [...list, formInput])
      setFormInput("")
    }
  }
  return (
    <div className="App">
      <h1>Form 1</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='First Name'
        onChange={changeHandler}
        name="fName"
        />
        <input 
        type="text" 
        placeholder='Last Name'
        onChange={changeHandler}
        name="lName"
        />
        <button type='submit' >Submit</button>
      </form>

{/* Display the data as soon as submit button is clicked */}
      {formList.map((form, i) => {
        return (
          <ul key={i}>
            <li>{form.fName}  {form.lName}</li>
          </ul>
        )
      })}
    </div>
  );
}

export default App;
