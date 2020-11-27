import React from "react";
const { shallow } = require("enzyme");
const { ContactModal } = require("../../components/ContactModal");

describe("Pruebas en <ContactModal/>", () => {
  const show = "";
  const handleClose = () => {};
  const wrapper = shallow(
    <ContactModal show={show} handleClose={handleClose} />
  );
  test("Debe mostrar el componente correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe postear la información con submit", () => {
    wrapper.simulate("submit", { preventDefault() {} });
  });
});
