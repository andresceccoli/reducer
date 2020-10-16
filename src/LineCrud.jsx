import React from "react";
import {Row, Table, Col, Button} from "reactstrap";

const LineCrud = () => {


  return (
      <div className="m-3">
        <Row className="mb-2">
          <Col xs={12} className="d-flex justify-content-end">
            <Button color="primary">Add</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Color</th>
                  <th className="d-none d-md-table-cell">
                    Stroke
                  </th>
                  <th>
                    Order
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
  );
};

export default LineCrud;