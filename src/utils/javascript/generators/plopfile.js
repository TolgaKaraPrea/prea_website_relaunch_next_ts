/*IMPORTANT This file needs to be javascript*/
const PageController = require("./controllers/pageController");
const ComponentController = require("./controllers/componentController");
// const TemplateController = require('./controllers/templateController');
const ConstantController = require("./controllers/constantController");
const ContentController = require("./controllers/contentController");

module.exports = function (plop) {
  // controller generator
  plop.setWelcomeMessage(`
    ⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻
     Welcome to PREA Website Generator   
    ⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻
  `);

  PageController(plop);
  ComponentController(plop);
  ConstantController(plop);
  ContentController(plop);
  // TemplateController(plop);
};
