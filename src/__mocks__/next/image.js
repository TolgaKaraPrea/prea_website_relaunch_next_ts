import jest from "jest";
let mockImage = jest.genMockFromModule("next/image");

const image = {
  __esModule: true,
  default: () => {
    return "Next image stub"; // whatever
  }
};

mockImage = image;

module.exports = mockImage;
