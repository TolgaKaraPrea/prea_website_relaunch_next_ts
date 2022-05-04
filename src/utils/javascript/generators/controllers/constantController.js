module.exports = function ConstantController(plop) {
  // controller generator
  /*TODO Make this a bit more advanced*/

  plop.setGenerator("📒 Constant", {
    description: "Add constant file to a list to a Constant Folder",
    id: "template",
    name: "template",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "constant file name, please"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/constant/{{name}}.ts"
      }
    ]
  });
};
