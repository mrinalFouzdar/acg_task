import "./App.css";
import PartsDetails from "./components/PartsDetails";
import TopMachineEfficientChart from "./components/TopMachineEfficientChart";
import { Col, Container, Row } from "react-bootstrap";
import MachineAnalysisChart from "./components/MachineAnalysisChart";
import OverallOEETrackerComponent from "./components/OverallOEETrackerComponent";

function App() {
  return (
    <Container className=" mt-5 d-flex flex-column justify-content-around">
      <Row className="mb-4">
        <Col md={12} lg={6} className="mb-md-4 mb-0">
          <PartsDetails />
        </Col>
        <Col md={12} lg={6} className="mb-md-4 mb-0">
          <OverallOEETrackerComponent />
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <MachineAnalysisChart />
        </Col>
        <Col md={12} lg={6}>
          <TopMachineEfficientChart />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
