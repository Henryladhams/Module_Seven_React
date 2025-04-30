import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
const PageThree = () => {
  // NOTE VARIABLES/STATE
  const { currentUser } = useContext();
  const { id } = useParams(); //

  // NOTE FUNCTIONS/SIDE EFFECT
  const displayUserGreeting = () => {
    if (currentUser) {
      return `Hello ${currentUser.name}`;
    } else {
      return "Hello Guest";
    }
  };
  // NOTE RETURN OF OUR VISUAL STUFF
  return (
    <Box>
      <Typography variant="h4">PageThree</Typography>
    </Box>
  );
};
export default PageThree;
