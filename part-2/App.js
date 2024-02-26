/** App should render the tweets */

const App = () => {
     return (
          <div>
               <Tweet
                    username="ash_is_the_best"
                    name="Ash Ketchum"
                    date={new Date().toDateString()}
                    message="I love Pkachu!"
               />
               <Tweet
                    username="misty123"
                    name="Misty"
                    date={new Date().toDateString()}
                    message="Water Pokemon are the best!"
               />
               <Tweet
                    username="TeamRocket000"
                    name="Team rocket"
                    date={new Date().toDateString()}
                    message="Prepare for trouble! And make it double!"
               />
          </div>
     );
}
