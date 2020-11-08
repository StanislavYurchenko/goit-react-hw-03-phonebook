import React from 'react';

function Filter({ filter, onChange }) {
  return (
    <>
      <div>Find contacts by name</div>
      <input onChange={onChange} value={filter} name='filter' type='text' />
    </>
  )
}

export default Filter;