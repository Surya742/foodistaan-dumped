import { Button } from '@material-ui/core';
import TopMostNav from './components/TopMostNav';
import Navbar from './components/Navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FindFoodButton from './components/FindFoodButton';
import boy from './assests/boy.svg';


const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "50%",
    paddingTop: "8em",
    color: "#2b2580",
  },
  headline: {
    fontWeight: "bold",
    textAlign: "center"
  },
  bottomhead: {
    marginTop: "3em"
  },
  bottomline: {
    textAlign: "center",
  },
  findfoodbutton: {
    marginTop: "3rem",
    textAlign: "center"
  },
  boy: {
    position: "absolute",
    top: "10.3em",
    right: "5rem"
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <TopMostNav />
      <Navbar />

      <div className={classes.heading}>
        <Typography variant="h3" gutterBottom className={classes.headline}>
          We provide
        </Typography>
        <Typography variant="h3" gutterBottom className={classes.headline}>
          the taste of life
        </Typography>
        <div className={classes.bottomhead}>
          <Typography variant="h5" gutterBottom className={classes.bottomline}>
            Phone lagao, Khana mangao!
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.bottomline}>
            Order Tiffin From Favourite
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.bottomline}>
            Restaurants Near You. Happiness Is
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.bottomline}>
            Homemade #Tiffin
          </Typography>
        </div>

        <div className={classes.findfoodbutton}>
          <FindFoodButton />
        </div>
        
      </div>

      <div className={classes.boy}>
        <img src={boy} alt="deliveryboy" />
      </div>
    </div>
  );
}

export default App;
