import './App.css';
import Button from '@material-ui/core/Button';
import React from 'react';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person : {
        fullName: "Mohamed BOULARAS",
        bio: "Responsable commercial depuis quelques années, je m’intéresse au monde de l’entreprenariat, j’ai trouver cette intérêt depuis ma première expérience dans le monde professionnel Dans mon quotidien, mes moteurs sont les rencontres et la découverte de nouveaux univers auxquels je peux donner vie à travers mes créations.",
        imgSrc: "./Images/Photodeprofile.jpg",
        profession: "Responsable Commercial",
      },
      Show: true,
      Counter: 0,

    };
  }

  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)

}
render () {
  return (
    <div className="App" style={{display:"grid", placeItems: "center", alignItems:'center', justifySelf:'center',width:"100%", height:"100vh", backgroundColor:"#5faaa8"}} >
        <Button onClick={()=>this.setState({show:!this.state.show})} variant="contained" color="secondary">
            Click Me
        </Button>
        <span>{this.state.Counter}</span>
        My profile
      {this.state.show?
      <div style={{backgroundColor: "#dbc7ba", border: "5px solid #3b6978", borderRadius: "10px", height: "400px", width: "300px", borderOpacity: "0.1"}}>
         <img src={this.state.Person.imgSrc} style={{hight: "70px", width: "110px", borderRadius:"50%",  transform: "rotate(90deg)", marginTop: "20px"}} alt="Photo de profile" />
         <h1 style={{fontFamily: 'Sukhumvit Set', fontSize: 'Medium', color: ''}}>{this.state.Person.fullName}</h1>
         <p style={{color: '#7c7c7b', fontSize: "13px", paddingLeft: "10px", paddingRight: "10px"}}>{this.state.Person.bio}</p>
         <h4 style={{paddingTop: "10px"}}>{this.state.Person.profession}</h4>
        </div>
        :null
      }
    </div>
  );
}
}

export default App;