import React from 'react';


const UserImg = (props) => {

  //destructure app state
  const {name, desc, image} = props;
  return (
    
    <div className="user __wrap">
      <div className="user __img">
        <span className="avatar">
          <img src={process.env.PUBLIC_URL + '/images/' + image} alt={name} />          
        </span>
        <h2 className="title">{name}</h2>
      </div>
      <p className="user __desc">{desc}</p>
    </div>
  )
}

export default UserImg;
