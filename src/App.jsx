import Container from "./components/container/Container";
import Navbar from "./components/navbar/navbar";
import { Routes } from "./components/routes/Routes";

export default function App() {
  return (
    <Container>
      <Navbar />
      <Routes />
    </Container>
  );
}
