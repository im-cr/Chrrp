import React from 'react';
import remove from '../../assets/i/remove.svg';

const TweetItem = (props) => {

  return (
    <div className="tweetItem">
      
      <span className="tweetOption" onClick={props.delete}>
        <span className="tweetMenu"></span>
        <span className="tweetsubMenu"><img src={remove} alt={props.name} />Delete</span>
      </span>

      <div className="user __img">
        <span className="avatar __sm">
          <img src={process.env.PUBLIC_URL + '/images/' + props.image} alt={props.name} />   
        </span>
        <p>{props.name}<span>{props.time}</span></p>
      </div>
      <div className="user __tweet">
        <p className="tweet __text">{props.text}</p>
      </div>
    </div>
  )
}

export default TweetItem;
