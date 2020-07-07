import React from 'react';
import { Row, Col } from 'reactstrap';
import RestaurantCard from './RestaurantMenu';
import '../Css/App.css';

const RestaurantList = props => {
  return(
    <div className='view'>
      <Row>
      { props.restaurants && props.restaurants.length > 0 ? 
      props.restaurants.map(restaurant => {
        return (
          <Col class='cardList' key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </Col>
        )
      }) : 'Refine your favorite restaurants Here' }
      </Row>
    </div>
  );
}

export default RestaurantList;