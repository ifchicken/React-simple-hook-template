import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  // useStae return 2 element arr current val and update func
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UserList />
      <div>
        {/* <button onClick={() => this.setState({ resource: 'posts' })}>Posts</button> */}
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource}/>
    </div>
  );

}

export default App;

// use hook to replace class
