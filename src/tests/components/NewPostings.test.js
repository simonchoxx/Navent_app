import React from "react";
import { NewPostings } from "../../components/NewPostings";
const { shallow } = require("enzyme");

describe("Pruebas en <NewPostings />", () => {
  const wrapper = shallow(<NewPostings />);
  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar el input correctamente", () => {
    const input = wrapper.find("input").at(0);
    const value = "Hola mundo";

    input.simulate("change", { target: { value } });
  });
});
