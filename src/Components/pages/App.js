import React, {Component} from 'react';
import Header from '../uiComponents/Header';
import Sidebar from '../uiComponents/Sidebar';
import TweetForm from '../uiComponents/TweetForm';
import TweetList from '../uiComponents/TweetList';
import userAccounts from '../../utils/accounts';
import Modal from '../uiComponents/Modal';



class App extends Component{
  state = {
    users: ["Kanye West","Jay-Z","Rihanna","Kid Cudi"],
    accounts: {},
    userId: '', 
    tweets:[],
    loading: false,
    modal: false
  }
  prevAccountsId= 4;

  componentDidMount(){
    console.log('MOUNTED'); 
    const site = this.props.history.location.pathname.replace('/user/', '').replace('/','');
    
    this.setState({
      accounts: userAccounts,
      userId: site
    });
  }
  
  getAccount = (e) => {
    let userName = '';
    let accountName = '';
    const userAccounts = this.state.accounts;
    const userAccount = this.state.userId;
    

    Object.keys(userAccounts).forEach( (key, index) => {
      // console.log(userAccounts[key].name);
      if( userAccounts[key].name === userAccount){
        userName = key;
        accountName = this.state.accounts[userName];
        
      } else {
        //run add account
      }
    });
    
    
    return accountName;
  }

  getUserTweets = () => {
    const tweets = this.getAccount().tweets || [];
    const tweetList = tweets.map( (tweet, index) => (
      tweet.text)
    );
    return tweetList;
  }
  deleteTweet = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  modalDismiss = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  } 
  render (){    
    const {modal} = this.state.modal;
    const accountName = this.getAccount();

    return (     
      <div className="container __app">
        <Header />
        <section className="container __content">
          <div className="col">
            <Sidebar info={accountName} />
          </div>
          <div className="col __full">
            <TweetForm  {...accountName} />       
            <TweetList delete={this.deleteTweet} modal={modal} {...accountName} userTweets={this.getUserTweets()}/>             
          </div>
          <Modal modal={this.state.modal} dismiss={this.modalDismiss} /> 
        </section>
      </div>
    );
  }
}

export default App;
