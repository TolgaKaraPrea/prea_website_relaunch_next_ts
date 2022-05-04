const jest = require("jest");

let mockImage = jest.genMockFromModule("next/image");

const image = {
  __esModule: true,
  default: () => {
    return "Next image stub";
  }
};

mockImage = image;

module.exports = mockImage;
