import React from 'react';
// import { AppConsumer } from '../../Context/AppContext';

const TweetForm = (props) => {
  
  const tweetRef = React.createRef();
  
  
  const submitTweet = (e) => {
    e.preventDefault();    
    const tweetValue = tweetRef.current.value;
    console.log(tweetValue);
    tweetRef.current.value = '';
  }
  const handleChange = (e) => {    
    e.preventDefault();
    // console.log(tweetRef.current.value);
  }
  return (
        <div className="tweetForm">
          <div className="user __img">
            <span className="avatar __sm">
              <img src={process.env.PUBLIC_URL + '/images/' + props.image} alt={props.name} /> 
            </span>
          </div>   
          <form className="form __tweet" onSubmit={submitTweet}>
            <input className="clear" type="text" 
            ref={tweetRef}
            name="tweet"
            onChange={handleChange}
            placeholder="What's happening?"
            defaultValue="What's happening?"
            />
            <button type="submit" className="btn form"> Post </button>
          </form>   
        </div>
 
  )
}

export default TweetForm;
