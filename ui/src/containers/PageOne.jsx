import { Typography, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
const PageOne = () => {
  // NOTE VARIABLES/STATE
  // NOTE FUNCTIONS/SIDE EFFECT
  // NOTE RETURN OF OUR VISUAL STUFF
  return (
    <Box>
      <h1>Posts</h1>
      <Outlet />
    </Box>
  );
};
export default PageOne;