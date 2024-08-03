import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

function EmployeeDetail() {
  const [employee, setEmployee] = useState(null);
  const projectId = "66aa1f96440310e3620e0930";
  const environmentId = "66aa1f96440310e3620e0931";
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  console.log(`Fetching employee details for ID: ${id}`);

  useEffect(() => {
    axios
      .get(`https://free-ap-south-1.cosmocloud.io/development/api/crud/${id}`, {
        headers: {
          projectId: projectId,
          environmentId: environmentId,
        },
        data: {},
      })
      .then((response) => {
        console.log("API response:", response.data);
        setEmployee(response.data);
      })
      .catch((error) => console.log("Fetch error while receiving data", error));
  }, [id]);

  if (!employee)
    return (
      <Container>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Back
        </Button>
        <p className="text-danger">Loading...</p>
      </Container>
    );

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h1>Employee Details</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <span className="d-flex flex-row align-items-center">
            <h5 className="text-info">Name:</h5>
            <h5>{employee.name}</h5>
          </span>
          <p>
            <span className="text-info fw-bold">ID:</span>
            <span>{employee._id}</span>
          </p>
          <p>
            <span className="text-info fw-bold">Address:</span>
            <span>{employee.address}</span>
          </p>
          <p>
            <span className="text-info fw-bold">Contact:</span>
            <span>{employee.contact}</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default EmployeeDetail;
