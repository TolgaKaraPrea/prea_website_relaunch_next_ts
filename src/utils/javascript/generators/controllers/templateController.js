module.exports = function PageController(plop) {
  // controller generator

  plop.setGenerator("🍱 Modify Content in Template", {
    description: "Add Components to a list to a Content Page",
    id: "template",
    name: "template",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "controller name please"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../../src/{{name}}.js",
        templateFile: "../templates/component_index_tsx.hbs"
      }
    ]
  });
};
