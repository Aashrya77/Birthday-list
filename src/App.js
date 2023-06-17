import './App.css';
import data from './data'
import List from './List'
import React from 'react'

function App() {
  const [people, setPeople] = React.useState(data)

  return (
    <body>
      <section>
        <div className="main">
          <h1>{people.length} Birthdays Today</h1>
          <List people={people} />
          <button className="btn" onClick={() => setPeople([])}>
            Clear All
          </button>
        </div>
      </section>
    </body>

  )

}

export default App;
