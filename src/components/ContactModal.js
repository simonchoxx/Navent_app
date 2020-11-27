import React from "react";
import { Modal, Button, Form as Formu } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
var regMail = [];
export const ContactModal = ({ show, handleClose }) => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
  };

  // Notificación exitosa.
  const notify = () => {
    toast.success("Datos enviados con exito!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2500,
      delay: 500,
    });
  };

  // Notificación de error.
  const notifyError = () => {
    toast.error("El email ingresado ya fue registrado.", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2500,
    });
  };

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    addMail(values.email) ? onFormSubmitted() : notifyError();
  };

  //Agrega el mail ingresado al array si no existe, si existe devuelve mensaje de error.
  const addMail = (mail) => {
    if (!regMail.includes(mail)) {
      regMail.push(mail);
      return true;
    } else {
      return false;
    }
  };

  const onFormSubmitted = () => {
    handleClose();
    notify();
  };

  const validationSchema = yup.object({
    name: yup.string().required("Campo requerido"),
    phone: yup.number().required("Campo requerido"),
    email: yup
      .string()
      .email("Ingrese un mail válido")
      .required("Campo requerido"),
  });

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <Modal.Header closeButton>
                <Modal.Title>Formulario de contacto</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formu.Group controlId="formGroupEmail">
                  <Formu.Label>Nombre</Formu.Label>
                  <Formu.Control
                    type="text"
                    name="name"
                    size="sm"
                    placeholder="Ingrese su nombre"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name ? (
                    <Formu.Text className="text-danger">
                      {formik.errors.name}
                    </Formu.Text>
                  ) : null}
                </Formu.Group>
                <Formu.Group controlId="formGroupEmail">
                  <Formu.Label>Teléfono</Formu.Label>
                  <Formu.Control
                    type="number"
                    name="phone"
                    size="sm"
                    placeholder="Ingrese su télefono"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                  <Formu.Text id="passwordHelpBlock" muted>
                    Por favor, ingresar el teléfono sin el 0 y sin el 15.
                    Ejemplo: 2216493618.
                  </Formu.Text>
                  {formik.errors.phone ? (
                    <Formu.Text className="text-danger">
                      {formik.errors.phone}
                    </Formu.Text>
                  ) : null}
                </Formu.Group>
                <Formu.Group controlId="formGroupEmail">
                  <Formu.Label>Email</Formu.Label>
                  <Formu.Control
                    type="text"
                    name="email"
                    size="sm"
                    placeholder="Ingrese su email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <Formu.Text className="text-danger">
                      {formik.errors.email}
                    </Formu.Text>
                  ) : null}
                </Formu.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose} size="sm">
                  Cancelar
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  size="sm"
                  disabled={
                    !(formik.isValid && formik.dirty) || formik.isSubmitting
                  }
                >
                  Enviar
                </Button>
              </Modal.Footer>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};
