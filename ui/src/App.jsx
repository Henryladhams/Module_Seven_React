// import Labs from "./containers/Labs";
import { Container } from "@mui/material";
import "./App.css";
import AppRoutes from "./AppRoutes";
import HeaderNavbar from "./components/HeaderNavBar";
import { UserProvider } from "./stores/userStore";


function App() {
  // VARIABLES/STATE

  // FUNCTIONS/SIDE EFFECT

  // RETURN OF OUR VISUAL STUFF
  return (
    <>
    <UserProvider username={"Default User"}>
      <HeaderNavbar />
      <Container
        sx={{
          display: "flex",
          height: "90vh",
        }}
      >
        <AppRoutes />
      </Container>
    </UserProvider>
    </>
  );
}

export default App;
