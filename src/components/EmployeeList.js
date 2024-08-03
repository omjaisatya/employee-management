import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Container, Modal } from "react-bootstrap";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const projectId = "66aa1f96440310e3620e0930";
  const environmentId = "66aa1f96440310e3620e0931";
  const limit = 10;
  const offset = 0;

  useEffect(() => {
    const getEmployeeList = async () => {
      try {
        const response = await axios.get(
          `https://free-ap-south-1.cosmocloud.io/development/api/crud?limit=${limit}&offset=${offset}`,
          {
            headers: {
              projectId: projectId,
              environmentId: environmentId,
            },
          }
        );
        const data = response.data.data;
        setEmployees(data);
      } catch (error) {
        console.log(error);
      }
    };

    getEmployeeList();
  }, []);

  const deleteEmployee = async (empId) => {
    console.log("Deleting employee with ID:", empId);
    try {
      const response = await axios.delete(
        `https://free-ap-south-1.cosmocloud.io/development/api/crud/${empId}`,
        {
          headers: {
            projectId: "66aa1f96440310e3620e0930",
            environmentId: "66aa1f96440310e3620e0931",
          },
          data: {},
        }
      );

      setShowModal(false);

      console.log("Delete response:", response.data);
      setEmployees(employees.filter((employee) => employee._id !== empId));
    } catch (error) {
      console.log("ERROR MESSAGE", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Employees</h1>
      {employees.length === 0 ? (
        <p className="text-danger">No Employees in the system.</p>
      ) : (
        <ul className="list-group">
          {employees.map((employee) => (
            <li
              key={employee._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <Link
                to={`/employee/${employee._id}`}
                className="text-decoration-none"
              >
                <span className="text-dark">Name:</span>
                {employee.name}, <span className="text-dark">ID:</span>(
                {employee._id})
              </Link>

              <Container style={{ display: "flex" }}>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => setShowModal(true)}
                >
                  DELETE
                </button>
              </Container>
              {/*  */}
              <Modal
                show={showModal}
                onHide={() => {
                  setShowModal(false);
                }}
                centered
              >
                <Modal.Header closeButton={true}>
                  <Modal.Title>Are you sure you want to delete?</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                  <div className="mx-auto">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setShowModal(false);
                      }}
                      className="m-1"
                    >
                      No
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteEmployee(employee._id)}
                      className="ml-2"
                    >
                      Yes
                    </Button>
                  </div>
                </Modal.Footer>
              </Modal>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add-employee" className="btn btn-primary mt-4">
        Add Employee
      </Link>
    </div>
  );
}

export default EmployeeList;
