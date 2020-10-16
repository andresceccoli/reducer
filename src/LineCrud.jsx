import React, {useState} from "react";
import {Row, Table, Col, Button} from "reactstrap";
import {Form, Formik, Field} from "formik";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";

const LineCrud = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState();


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
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
              {list && list.map(i => (
                  <tr key={i.id}>
                    <td>{i.key}</td>
                    <td><div style={{width: 24, height: 24, backgroundColor: i.color}}/></td>
                    <td className="d-none d-md-table-cell">{i.stroke}</td>
                    <td>
                      <Button outline className="mr-1"><i className="fas fa-chevron-up"/></Button>
                      <Button outline className="mr-1"><i className="fas fa-chevron-down"/></Button>
                      <Button outline color="danger"><i className="fas fa-trash-alt" /></Button>
                    </td>
                  </tr>
              ))}
              </tbody>
            </Table>
          </Col>
          <Col xs={12} md={7}>
            {item &&
            <Formik initialValues={item}
                    onSubmit={(values, { setSubmitting }) => {
                      console.log(values);
                      setSubmitting(false);
                    }}>
              {({ isSubmitting}) =>
                  <Form>
                    <FormGroup>
                      <Label for="key">Key</Label>
                      <Field name="key" as={Input}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="color">Color</Label>
                      <Field name="color" type="color" as={Input}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="stroke">Stroke</Label>
                      <Field name="stroke" type="number" as={Input}/>
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-end">
                      <Button type="submit" color="primary" className="mr-1" disabled={isSubmitting}>Save</Button>
                      <Button disabled={isSubmitting}>Cancel</Button>
                    </FormGroup>
                  </Form>
              }
            </Formik>
            }
          </Col>
        </Row>
      </div>
  );
};

export default LineCrud;