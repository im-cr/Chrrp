import React  from 'react';
// import { AppConsumer } from '../../Context/AppContext';
import TweetItem from './TweetItem';



const TweetList = (props) => {
  
  const tweets = props.userTweets || [];

  return(
    <section className="tweetList"> 
      {
        tweets.map( (tweet,index) => (
          <TweetItem key={index} text={tweet} name={props.name} time={tweet.time} delete={props.delete} image={props.image} />
        ))
      }
      
    </section>
  );

};

export default TweetList;
