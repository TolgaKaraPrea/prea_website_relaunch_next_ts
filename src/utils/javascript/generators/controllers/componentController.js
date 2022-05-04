module.exports = function ComponentController(plop) {
  // controller generator
  plop.setGenerator("🈹 Component", {
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
        message: "🍱 Select the Type of the Component"
      },
      {
        type: "input",
        message: "What is the name of your Component",
        name: "componentName"
      },
      {
        type: "confirm",
        message: "Do you need inside the Component a component directory?",
        name: "isNestedComponentDir"
      },
      {
        type: "confirm",
        message: "Do you need inside the Component a assets directory?",
        name: "isNestedAssetsDir"
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
          templateFile: `../generators/templates/component_index_tsx.hbs`
        },
        {
          type: "add",
          path: `${targetPath}/${componentName}/style.ts`,
          templateFile: `../generators/templates/component_style.hbs`
        },
        {
          type: "append",
          path: `${targetPath}/index.ts`,
          templateFile: `../generators/templates/component_index_ts.hbs`
        }
      );

      if (action.isNestedComponentDir) {
        actionsArr.push({
          type: "add",
          path: `${targetPath}/${componentName}/components/index.ts`,
          templateFile: `../generators/templates/component_nested_component_dir_index.hbs`
        });
      }

      if (action.isNestedAssetsDir) {
        actionsArr.push({
          type: "add",
          path: `${targetPath}/${componentName}/assets/index.ts`,
          templateFile: `../generators/templates/component_nested_assets_dir_index.hbs`
        });
      }

      return actionsArr;
    }
  });
};
