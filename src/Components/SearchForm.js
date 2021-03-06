import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { fetchData } from './Actions';
import { connect } from 'react-redux';
import '../Css/Restaurant.css';

class SearchRestaurants extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            city: '',
            error: '',
            refine: ''
        }
    }

    onRefineChange = event => {
        this.setState({
            refine: event.target.value
        })
    }

    onChange = event => {
        this.setState({
            city: event.target.value
        })
    };

    onFormSubmit = event => {
        event.preventDefault();

        if (!this.state.city) {
            this.setState({error: 'Please enter a city name'})
        } else {
            this.setState({ error: ''})
            this.props.fetchData(this.state.city, this.state.refine);
        }
    };

    render() {
        return (
            <Row>
              <Col>
                <Form onSubmit={this.onFormSubmit} className="form">
                    <FormGroup className="form1">
                        <Label className="names-1" for="cityName">City-Name</Label>
                            <Input
                                type="text"
                                name="cityName"
                                className="Search"
                                placeholder="City"
                                onChange={this.onChange}
                                value={this.state.city}   
                            />
                    </FormGroup>

                    <FormGroup className="form2">
                        <Label className="names-2" for="refine">Address or PostalCode</Label>
                            <Input
                                type="text"
                                name="refine"
                                className="Search"
                                placeholder="Restaurant Name or postalCode"
                                onChange={this.onRefineChange}
                                value={this.state.refine}
                            />
                    </FormGroup>

                    <Button
                      className="Button" color="primary">
                        Search
                    </Button>
                    {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
                </Form>
            </Col>
          </Row>
        );
    }
};

const mapStatetoProps = (state) => {
    return {
      city: state.restaurantReducer.city,
    } 
}
  
export default connect(mapStatetoProps, { fetchData })(SearchRestaurants);