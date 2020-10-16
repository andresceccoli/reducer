import React, {useCallback, useState} from "react";
import {Row, Table, Col, Button} from "reactstrap";
import {Form, Formik, Field} from "formik";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import {nanoid} from "nanoid";

const LineCrud = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState();

  const onAdd = useCallback(() => {
    setItem({
      key: '', color: '', stroke: 0
    });
  }, []);

  const onSave = useCallback(item => {
    if (!item.id) {
      item.id = nanoid();
      setList([...list, item]);
    } else {
      const index = list.findIndex(i => i.id === item.id);
      const newList = [...list];
      newList[index] = item;
      setList(newList);
    }
    setItem(undefined);
  }, [list]);

  const onCancel = useCallback(() => setItem(undefined), []);

  const onEdit = useCallback(id => {
    const i = list.find(item => item.id === id);
    setItem(i);
  }, [list]);

  const onUp = useCallback(id => {
    const i = list.findIndex(item => item.id === id);
    if (i > 0) {
      const a = list[i];
      const b = list[i - 1];
      const newList = [...list];
      newList[i] = b;
      newList[i - 1] = a;
      setList(newList);
    }
  }, [list]);

  const onDown = useCallback(id => {
    const i = list.findIndex(item => item.id === id);
    if (i < list.length - 1) {
      const a = list[i];
      const b = list[i + 1];
      const newList = [...list];
      newList[i] = b;
      newList[i + 1] = a;
      setList(newList);
    }
  }, [list]);

  const onDelete = useCallback(id => {
    if (window.confirm('Desea eliminar?')) {
      const i = list.findIndex(item => item.id === id);
      if (i >= 0 && i < list.length) {
        const newList = [...list];
        newList.splice(i, 1);
        setList(newList);
      }
    }
  }, [list]);

  return (
      <div className="m-3">
        <Row className="mb-2">
          <Col xs={12} className="d-flex justify-content-end">
            <Button color="primary" onClick={onAdd}>Add</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={5}>
            <Table>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Color</th>
                  <th className="d-none d-lg-table-cell">
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
                    <td className="d-none d-lg-table-cell">{i.stroke}</td>
                    <td>
                      <Button outline className="mr-1" onClick={() => onUp(i.id)}><i className="fas fa-chevron-up"/></Button>
                      <Button outline className="mr-1" onClick={() => onDown(i.id)}><i className="fas fa-chevron-down"/></Button>
                      <Button outline className="mr-1" onClick={() => onEdit(i.id)}><i className="fas fa-edit"/></Button>
                      <Button outline color="danger" onClick={() => onDelete(i.id)}><i className="fas fa-trash-alt" /></Button>
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
                      onSave(values);
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
                      <Button type="submit" color="primary"
                              className="mr-1" disabled={isSubmitting}>Save</Button>
                      <Button disabled={isSubmitting} onClick={onCancel}>Cancel</Button>
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