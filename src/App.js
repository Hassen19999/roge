import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  return (
    <div>
      <h1>ToDo Application</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;