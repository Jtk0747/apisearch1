import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import '../Css/App.css';


const RestaurantCard = props => {
  const restaurant = props.restaurant;

  return(
    <div className='row'>
      <Card className='cards'>
        <CardImg src={restaurant.image_url} alt={ restaurant.name } />
        <CardBody>
          <CardTitle><strong>{ restaurant.name }</strong></CardTitle>
          <CardSubtitle>{ restaurant.address }, 
          { restaurant.city } </CardSubtitle>
          <CardText>Price: { restaurant.price }</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default RestaurantCard;