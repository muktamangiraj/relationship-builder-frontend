import './home.css';
import "react-confirm-alert/src/react-confirm-alert.css";
import React, { Component } from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import * as actions from "../Action/Add";
import userValidator from "../Validations/AddUser";


export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      Name : "",
      Relation :"",
      With : " ",
      errors :{}
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

   handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  onChange = e => {
    console.log("xxxxxxxxxxx");
    this.setState({ [e.target.id]: e.target.value});
  };
  
  //ONSUBMIT ADD

  addSubmit = (e) => {
    console.log("sssssssssssssssssssssss");
    console.log(this.state);
      console.log("sssssssssssssssssssssss");

    e.preventDefault();
    const newUser = {
      Name: this.state.Name,
      Relation: this.state.Relation,
      With: this.state.With
    };
    console.log(newUser);
    
    var UserData = userValidator({
      Name: this.state.Name,
      Relation: this.state.Relation,
      With: this.state.With
    });
    console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
  // console.log(UserData.isvalid)
    // console.log(validationData);
    if(UserData.isValid) {
      actions.addUserAction(newUser);
      alert("Added sucessfully")
      this.props.history.push("/");
    
    } else {
      this.setState({ errors: UserData.errors });
    }
  };

  // Update

  onUpdateClick = () => {
    console.log("qqqqqqqqqqq");
    this.props.history.push("/update");
  };

  // On Show Click
  onShowClick = () => {
    console.log("qqqqqqqqqqq");
    this.props.history.push("/show");
  };

 
  // Render

  render() {
    const { errors } = this.state;
    return (
      <body>
        <div>
          {/* <Helmet> */}
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        {/* </Helmet> */}
          <div class = "header" class = "rcorners3">
            <h1 class = "hraderText">Relationship Builder</h1>
          </div>
         {/* nav bar */}
        </div>
        <div class="">
          <div class="row">
            <div class="column side">
              <img src={`${process.env.PUBLIC_URL}/assets/images/Relation.png`} class="image" alt="Title"></img>
            </div>
          </div>
  
          <div class="column middle">
          {/* <div class="btn-group"> */}
            <div class="container" >
                <img src={`${process.env.PUBLIC_URL}/assets/images/AddUser.jpg`} alt="Add user"></img>
                <button class="btn"
                  // class="button"
                  type="button"
                  onClick={this.handleOpenModal}>Add User</button>
                  <Modal 
                    
                    isOpen={this.state.showModal}
                    // isClose={this.state.showModel}
                    contentLabel="Inline Styles Modal Example"
                    style={{
                      overlay: {
                      backgroundColor: 'papayawhip'
                      },
                      content: {
                        color: 'lightsteelblue'
                      }
                    }}
                    >

                      <form className="root">
                        <div class="alert">
                          <Button color="secondary"  onClick={this.handleCloseModal}>X</Button>
                          </div>
                        {/* <TextField  id="outlined-basic" label="Name" variant="outlined" onChange ={this.onAddChange}/> */}
                        <input
                                rows="5"
                                cols="5"
                                name="textarea"
                                id="Name"
                                onChange={this.onChange}
                                value={this.state.Name}
                                type="text"
                                placeholder="Enter Name"
                                class="form-control"
                              ></input>
                              <span style={{color:'red' }}>
                                    {errors.Name}
                                  </span>
                          <h1>is</h1>
                          {/* <TextField id="outlined-basic" label="Relation" variant="outlined" onChange ={this.onAddChange} /> */}
                          <input
                                rows="5"
                                cols="5"
                                name="textarea"
                                id="Relation"
                                onChange={this.onChange}
                                value={this.state.Relation}
                                type="text"
                                placeholder="Enter Relation"
                                class="form-control"
                              ></input>
                              <span style={{color:'red' }}>
                                    {errors.Relation}
                                  </span>
                          <h1>of</h1> 
                          {/* <TextField  id="outlined-basic" label="With" variant="outlined"  onChange ={this.onAddChange} /> */}
                          <input
                                rows="5"
                                cols="5"
                                name="textarea"
                                id="With"
                                onChange={this.onChange}
                                value={this.state.With}
                                type="text"
                                placeholder="Enter With"
                                class="form-control"
                              ></input>
                              <span style={{color:'red' }}>
                                    {errors.With}
                                  </span>
                          <div class ="formRoot">
                          <Button variant="outlined" color="secondary" onClick={this.addSubmit} >
                            Add
                          </Button>
                          </div>
                      </form>
                  </Modal>
            </div>

            <div class="container">
                <img src={`${process.env.PUBLIC_URL}/assets/images/edit.png`} alt="edit user"></img>
                <button class="btn"
                  
                  type="button"
                  onClick={this.onUpdateClick}>Show All</button>
            </div>

            <div class="container">
                <img src={`${process.env.PUBLIC_URL}/assets/images/Display.jpg`} alt="show user"></img>
                <button class="btn"
                  // class="button"
                  type="button"
                  onClick={this.onShowClick}>Show User</button>
            </div> 
            
          </div>
        </div>
      
      </body>
    );
  }
}


