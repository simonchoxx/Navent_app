import { postings } from "../data/mockedPostings.js";

export const getPosts = (toggle, radio, busq) => {
  if (toggle === 1) {
    return postings.filter((elem) =>
      elem.posting_location.address.toLowerCase().includes(busq)
    );
  } else {
    if (Number(radio) !== 4) {
      return postings.filter(
        (elem) => elem.operation_type.operation_type_id === Number(radio)
      );
    } else {
      return postings;
    }
  }
};
