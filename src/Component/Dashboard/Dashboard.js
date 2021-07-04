import React, { Component } from 'react'
import axios from 'axios';
import { Table, Card, CardText, CardBody, } from 'reactstrap';

import "./Dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api_data: []
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData = async () => {
        let url = "https://api.sampleapis.com/futurama/characters";
        let headers = {
            "Content-Type": "application/json",
        };
        axios.get(url, {
          headers: headers
        })
          .then(response => {
            this.setState({
                api_data: response.data
            })
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
            // console.log(localStorage.getItem('access'));
          });
    };

    render(){
        const { api_data } = this.state;
        return(
            <div className="container">
                <Card className="main-div">
                    <CardBody>
                        <Table hover className="table-data">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Middle Name</th>
                                    <th>Last Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    api_data.map(row => {
                                        if(row.hasOwnProperty("name") &&  row.hasOwnProperty("images")) {
                                            return(
                                                <tr className="data-row">
                                                    <th scope="row">{row.id}</th>
                                                    <td>{row.name.first}</td>
                                                    <td>{row.name.middle}</td>
                                                    <td>{row.name.last}</td>
                                                    <td>{row.age}</td>
                                                    <td>{row.gender}</td>
                                                    <td>
                                                        <img src={row.images.main} style={{borderRadius:'50%', width:'60px', height:'60px'}}></img>
                                                    </td>
                                                    
                                                </tr>
                                            )
                                        } else if(row.hasOwnProperty("name")) {
                                            return(
                                                <tr className="data-row">
                                                    <th scope="row">{row.id}</th>
                                                    <td>{row.name.first}</td>
                                                    <td>{row.name.middle}</td>
                                                    <td>{row.name.last}</td>
                                                    <td>{row.age}</td>
                                                    <td>{row.gender}</td>
                                                    <td>
                                                        {/* {row.images.main} */}
                                                    </td>
                                                    
                                                </tr>
                                            )
                                        }
                                        
                                        
                                    })
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                    
                    
                </Card>
            </div>
            
        )
    }
}

export default Dashboard;