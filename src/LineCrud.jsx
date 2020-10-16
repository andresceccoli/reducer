import React from "react";
import {Row, Table, Col} from "reactstrap";

const LineCrud = () => {
  

  return (
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
          </Table>
        </Col>
      </Row>
  );
};

export default LineCrud;