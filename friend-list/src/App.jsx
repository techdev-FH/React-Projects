import React from "react"
import './App.css';

const Person = (props) => {
  
  const { img, name, job } = props;
  // const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="Profile" />
      <div>
        <h4>Name : {name}</h4>
        <h4>Job : {job}</h4>
      </div>
    </div>
  )
}

const PersonList = () => {

  const people = [
    { img: 22, name: 'Mouad', job: 'Developer' },
    { img: 34, name: 'Said', job: 'UI/UX Designer' },
    { img: 56, name: 'Hamza', job: 'Data Analyst' }
  ]

  return (
    <section>
      {people.map((person,index)=>{
        
        return (
          <Person {...person} key={index} />
        )
      })}
     
    </section>
  )
}
const App = () => {
  return <>
    <PersonList />
  </>
}

export default App
