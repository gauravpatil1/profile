import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){

    this.setState({resumeData: {
                                "main": {
                                  "name":"Gaurav Vilas Patil",
                                  "occupation":"Software Engineer",
                                  "description":"currently working as Senior Project Technical Assistant in IIT, Bombay",
                                  "image":"profilepic.jpg",
                                  "bio":"currently working as Senior Project Technical Assistant in IIT, Bombay",
                                  "contactmessage":"Email me for further communication",
                                  "email": "patilgaurav309@gmail.com",
                                  "phone": "9975179579",
                                  "address":{
                                    "street":"(Your Street)",
                                    "city":"Mumbai",
                                    "state":"Maharashtra",
                                    "zip": "(Your Zip/Postal Code)"
                                  },
                                  "website": "#",
                                  "resumedownload":"#",
                                  "social":[
                                    {
                                      "name":"facebook",
                                      "url":"http://facebook.com/technocrat.me",
                                      "className":"fa fa-facebook"
                                    },
                                    {
                                      "name":"twitter",
                                      "url":"http://twitter.com/__gauravpatil",
                                      "className":"fa fa-twitter"
                                    },
                                    {
                                      "name":"linkedin",
                                      "url":"https://in.linkedin.com/in/gauravvilaspatil",
                                      "className":"fa fa-linkedin"
                                    },
                                    {
                                      "name":"instagram",
                                      "url":"http://instagram.com/__gauravpatil",
                                      "className":"fa fa-instagram"
                                    },
                                    {
                                      "name":"github",
                                      "url":"http://github.com/gauravpatil1",
                                      "className":"fa fa-github"
                                    }
                                  ]
                                },
                                "resume":{
                                  "skillmessage":"Enthusiastic to learn new skillset or solve challenging problems",
                                  "education":[
                                    {
                                      "school":"Shri Guru Gobind Singhji Institute of Engineering and Technoogy, Nanded",
                                      "degree":"Bachelor of Technoogy in Information Technoogy",
                                      "graduated":"May 2017",
                                      "description":""
                                    },
                                    {
                                      "school":"Jawahar Navodaya Vidyalaya",
                                      "degree":"Junior College",
                                      "graduated":"May 2012",
                                      "description":""
                                    }
                                  ],
                                  "work":[
                                    {
                                      "company":"Indian Institute of Technoogy, Bombay",
                                      "title":"Senior Project Technical Assistant/ Jr. Software Engineer",
                                      "years":"February 2018 - Present",
                                      "description":""
                                    }
                                  ],
                                  "skills":[
                                    {
                                      "name":"Git",
                                      "level":"70%"
                                    },
                                    {
                                      "name":"Kotlin",
                                      "level":"70%"
                                    },
                                    {
                                      "name":"ReactJs",
                                      "level":"60%"
                                    },
                                    {
                                      "name":"React Native",
                                      "level":"70%"
                                    },
                                    {
                                      "name":"Python",
                                      "level":"80%"
                                    },
                                    {
                                      "name":"Java",
                                      "level":"70%"
                                    },
                                    {
                                      "name":"Docker",
                                      "level":"60%"
                                    }
                                  ]
                                },
                                "portfolio":{
                                  "projects": [
                                    {
                                      "title":"Indian Culture, Ministry of Culture",
                                      "category":"Android app",
                                      "image":"indianculture.jpg",
                                      "url":"https://indianculture.gov.in"
                                    },
                                    {
                                      "title":"KVS Online Admission",
                                      "category":"Android app",
                                      "image":"kvs.jpg",
                                      "url":"https://play.google.com/store/apps/details?id=com.kvsadmissions&hl=en_US"
                                    }
                                  ]
                                },
                                "testimonials":{
                                  "testimonials":[
                                    {
                                      "text":"Hard Working",
                                      "user":"Gaurav"
                                    },
                                    {
                                      "text":"Team Player",
                                      "user":"Gaurav"
                                    }
                                  ]
                                }
                              }})

    // $.ajax({
    //   url:'https://raw.githubusercontent.com/gauravpatil1/profile/master/public/resumeData.json',
    //   dataType:'json',
    //   cache: false,
    //   success: function(data){
    //     this.setState({resumeData: data});
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log(err);
    //     alert(err);
    //   }
    // });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
