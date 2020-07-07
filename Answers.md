1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

## A). I've spent almost 16 hours on this assignment to meet all the required criteria . I would like to add more refining option, some styling like how cards look and few effects to get a better user Experience.

2.What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

## A) The best feature of writing the code with jsx in react is that we can build different reusable components which contains both HTML syntax and logic.below is the snippet of syntax where you can see both the HTML syntax and the js Logic about returning the total restaurents.

    <div>
        <Container>
          <SearchRestaurants />
          {this.props.loading ? <p>Loading</p> : null }
          <p className='total'>Total items: { this.props.refine ? this.props.restaurants.length : this.props.total }</p> 
          <RestaurantList restaurants={this.props.restaurants} />
        </Container>
      </div>
  
3.What were the more challenging parts of this assignment for you?
## A) The part that challenged me the most in this assingment is setting the new state with reducers based upon the users action. 

4.	How would you track down a performance issue in production? Have you ever had to do this?
## A) we can track down a performance issue in production when we do a unit test in different browsers and find out performance issues and try solving them. I personally do this everytime when i finish coding my task and before pushing my code to QA team. Redux can also be used to track application performance real-time.


5.	How would you improve the API that you just used?
## A) I would improve it by adding additional information about the restaurant like its cuisine type, keeping it  more light enough to work it faster even after improving it.

6.	Please describe yourself using JSON.
## A) {"firstname": "Tej Kiran","lastname": "jasti","age": "24","email": "tejjasti@gmail.com","phone": "51947607","city": "Toronto","province": "Ontario","passions": ["gaming","codingchallenges","longdrives"}

