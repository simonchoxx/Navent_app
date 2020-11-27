import React from "react";
import { InitialScreen } from "../../components/InitialScreen";
const { shallow } = require("enzyme");

describe("Pruebas en <InitialScreen/>", () => {
  test("Debe mostrar el componente correctamente ", () => {

    const wrapper = shallow(<InitialScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
