import React from 'react';
import useResources from './useResources';


const ResourceList = ({ resource }) =>  {
  const resources = useResources(resource);

  return (
    <ul>
      { resources.map(record => <li key={record.id}> {record.title}</li>) }
    </ul>
  );

}

export default ResourceList;

// useEffect has same func as componentDidMount and Didupdate
// is the 2nd params [] in useEffect is diff as prev, useEffect execute
// if want useEffect one time -> []
// if want useEffect everytime -> dont use 2nd params, in this case would have infinite get
