import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './update.css';
import * as actions from "../Action/Add";
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import { green } from '@material-ui/core/colors';
import Modal from 'react-modal';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
// import * as Window  from "./UpdateWindow";
import userValidator from "../Validations/AddUser";

export default class Update extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors :{},
            AllRelation: [],
            showModal: false,
            Name : "",
      Relation :"",
      With : " ",
      Arr:[]
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    // this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
     
    this.setState({ showModal: true });
  }
  onChange = e => {
    console.log("xxxxxxxxxxx");
    this.setState({ [e.target.id]: e.target.value});
    
    
  };
  

  // handleCloseModal () {
  //   this.setState({ showModal: false });
  // }

// onClick() {
//   console.log("ooooooooooooooooo");
//     Window.UpdateWindow(); 
//   };


  componentDidMount ()
    {
        actions.getAllRelationAction().then(relation => {
      this.setState({
        AllRelation : relation
      })
     

    });
    }
 
// update
// onUpdateClick = (_id) => {
    // console.log("llllllllllllllllllllllllllllll");
    // console.log(_id);
    //     console.log("llllllllllllllllllllllllllllll");

  //   const updateUser = {
  //     _id : _id,
  //     Name: this.state.Name,
  //     Relation: this.state.Relation,
  //     With: this.state.With
  //   };
    
  //   // var UserData = userValidator({
  //   //   Name: this.state.Name,
  //   //   Relation: this.state.Relation,
  //   //   With: this.state.With
  //   // });
  //   // if(UserData.isValid) {
  //   actions.updateRelationAction(updateUser);
  //     // alert("Updated sucessfully")
  //     // this.props.history.push("/");
  //   console.log("qqqqqqqqqqq");
  //   // } else {
  //   //   this.setState({ errors: UserData.errors });
  //   // }
  // };


    render() {
         actions.getAllRelationAction().then(relation => {
      this.setState({
        AllRelation : relation
      })
     

    });
            const { AllRelation } = this.state;
            // const { errors } = this.state;
            // const {Arr} = this.state;
            
        return (
            <div>
          <TableContainer component={Paper}>
                <Table class="table" aria-label="simple table">
                <TableHead color="pink">
          <TableRow class="tablerow">
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell align="center" >Name</TableCell>
            <TableCell align="center" color="pink">Relation</TableCell>
            <TableCell align="center" color="pink">With whome?</TableCell>
            {/* <TableCell align="center">Update</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {AllRelation.map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="center">{row.Name}</TableCell>
              <TableCell align="center">{row.Relation}</TableCell>
              <TableCell align="center">{row.With}</TableCell>
              {/* <TableCell align="center"><Button color="secondary" onClick={this.handleOpenModal(row._id)}><UpdateIcon color="secondary" />
              <div>
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
                    > */}

                      {/* <form className="root">
                        <div class="alert">
                          <Button color="secondary"  onClick={this.handleCloseModal}>X</Button>
                          </div>
                        
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
                              {/* <span style={{color:'red' }}>
                                    {errors.Relation}
                                  </span> 
                          <h1>of</h1> 
                          
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
                              {/* <span style={{color:'red' }}>
                                    {errors.With}
                                  </span> 
                          <div class ="formRoot">
                          
                          <Button variant="outlined" color="secondary"  >
                            Add
                          </Button>
                          </div>
                      </form>
                  </Modal> </div> */}
            {/* </Button> */}
            {/* </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
  );
    }
}






//  <List class="root">
//          {this.state.Arr.map(listitem => (
//             <ListItem >
//               <h1>Hello1</h1>
//               {listitem}
//             </ListItem>
//             ))}
            
//           </List>


// onClick={this.onUpdateClick(row._id)}


{/* <TableContainer component={Paper}>
                <Table class="table" aria-label="simple table">
                <TableHead color="pink">
          <TableRow class="tablerow">
            {/* <TableCell>Dessert (100g serving)</TableCell> 
            <TableCell align="center" >Name</TableCell>
            <TableCell align="center" color="pink">Relation</TableCell>
            <TableCell align="center" color="pink">With whome?</TableCell>
            <TableCell align="center">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {AllRelation.map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> 
              <TableCell align="center">{row.Name}</TableCell>
              <TableCell align="center">{row.Relation}</TableCell>
              <TableCell align="center">{row.With}</TableCell>
              <TableCell align="center"><Button color="secondary" onClick={this.handleOpenModal}><UpdateIcon color="secondary" />
              <div>
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
                              {/* <span style={{color:'red' }}>
                                    {errors.Name}
                                  </span> 
                          <h1>is</h1>
                          
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
                              {/* <span style={{color:'red' }}>
                                    {errors.Relation}
                                  </span> 
                          <h1>of</h1> 
                          
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
                              {/* <span style={{color:'red' }}>
                                    {errors.With}
                                  </span> 
                          <div class ="formRoot">
                          
                          <Button variant="outlined" color="secondary" onClick={this.onUpdateClick(row._id)} >
                            Add
                          </Button>
                          </div>
                      </form>
                  </Modal> </div>
            </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}