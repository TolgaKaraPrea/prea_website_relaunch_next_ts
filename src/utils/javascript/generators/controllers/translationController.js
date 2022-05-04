module.exports = function ComponentController(plop) {
  // controller generator
  plop.setGenerator("🌎 Translations", {
    description: "Create a Component quickly with the necessary Gluing",
    prompts: [
      {
        type: "list",
        choices: [
          { name: "animations", value: "animations" },
          { name: "atoms", value: "atoms" },
          { name: "layout", value: "layout" },
          { name: "modules", value: "modules" },
          { name: "organisms", value: "organisms" }
        ],
        name: "componentType",
        message: "Select the Type of the Component"
      },
      {
        type: "input",
        message: "What is the name of your Component",
        name: "componentName"
      }
    ],
    actions: action => {
      const actionsArr = [];
      const targetPath = `../src/components/${action.componentType}`;
      const componentName = action.componentName;

      actionsArr.push(
        {
          type: "add",
          path: `${targetPath}/${componentName}/index.tsx`,
          templateFile: `../generators/templates/component_index.hbs`
        },
        {
          type: "add",
          path: `${targetPath}/${componentName}/style.ts`,
          templateFile: `../generators/templates/component_style.hbs`
        }
      );

      return actionsArr;
    }
  });
};
