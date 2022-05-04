const path = require("path");
const inquirerFileTreeSelection = require("inquirer-file-tree-selection-prompt");
const getFormattedRouteName = require("../helpers/getFormattedRouteName");
const getFormattedFileName = require("../helpers/getFormattedFileName");
const setTypeOfImports = require("../helpers/setTypeOfImports");
const Handlebars = require("handlebars");

module.exports = function ContentController(plop) {
  plop.setPrompt("file-tree-selection", inquirerFileTreeSelection);

  plop.setGenerator("📔 Content template", {
    description: "Create Template with default components(header, layout, cards)",
    id: "template",
    name: " content template",
    prompts: [
      {
        type: "confirm",
        name: "isRootOfContent",
        message: "Is the Content template in the root of content folder?"
      },
      {
        when: data => !data.isRootOfContent,
        type: "file-tree-selection",
        name: "locationPath",
        message: "Where do you want to create folder?",
        root: "./src/content",
        multiple: false,
        onlyShowDir: true,
        transformer: input => input.split(path.sep).pop(),
        enableGoUpperDirector: true,
        hideRoot: true,
        pageSize: 10
      },
      {
        type: "input",
        name: "contentName",
        message: "Content folder name, please"
      },
      {
        type: "confirm",
        name: "addImportsOfAtoms",
        message: "Do you want to add main atoms component?",
        default: true
      },

      {
        type: "confirm",
        name: "hasHeader",
        message: "Would you want to add specific Header?",
        default: true
      },
      {
        when: data => data.hasHeader,
        type: "file-tree-selection",
        name: "headerLocationPath",
        message: "What header do you want to add?",
        root: "./src/components/modules/Header",
        multiple: false,
        onlyShowDir: true,
        transformer: input => input.split(path.sep).pop(),
        enableGoUpperDirector: true,
        hideRoot: true,
        pageSize: 10
      },
      {
        type: "confirm",
        name: "hasLayout",
        message: "Would you want to add specific Layout?",
        default: true
      },
      {
        when: data => data.hasLayout,
        type: "file-tree-selection",
        name: "layoutLocationPath",
        message: "What layout do you want to add?",
        root: "./src/components/layout",
        multiple: false,
        onlyShowDir: true,
        transformer: input => input.split(path.sep).pop(),
        enableGoUpperDirector: true,
        hideRoot: true,
        pageSize: 10
      },
      {
        type: "confirm",
        name: "hasQuote",
        message: "Would you want to add specific Quote?",
        default: true
      },
      {
        when: data => data.hasQuote,
        type: "file-tree-selection",
        name: "quoteLocationPath",
        message: "What quote do you want to add?",
        root: "./src/components/modules",
        multiple: false,
        onlyShowDir: true,
        transformer: input => input.split(path.sep).pop(),
        enableGoUpperDirector: true,
        hideRoot: true,
        pageSize: 10
      },
      {
        type: "confirm",
        name: "hasCards",
        message: "Would like you add specific Cards?"
      },
      {
        when: data => data.hasCards,
        type: "file-tree-selection",
        name: "cardLocationPath",
        message: "What card do you want to add?",
        root: "./src/components/modules/Card",
        multiple: false,
        onlyShowDir: true,
        transformer: input => input.split(path.sep).pop(),
        enableGoUpperDirector: true,
        hideRoot: true,
        pageSize: 10
      }
    ],
    actions: action => {
      const actionsArr = [];
      const targetPagePath = action.locationPath || "../src/content/";
      const formattedFileName = getFormattedFileName(action.contentName, "Content");
      const formattedRouteName = getFormattedRouteName(action.contentName);
      const { commonImports, arrOfComponents } = setTypeOfImports(action);
      /*TODO refactor the Logic of Components*/
      if (action.isRootOfContent) {
        actionsArr.push({
          type: "add",
          path: `${targetPagePath}/${formattedRouteName}/index.tsx`,
          templateFile: `../generators/templates/content_index_tsx.hbs`,
          skipIfExists: false,
          data: {
            formattedFileName,
            commonImports,
            arrOfComponents
          }
        });
      } else {
        actionsArr.push({
          type: "add",
          path: `${targetPagePath}/${formattedRouteName}/index.tsx`,
          templateFile: `../generators/templates/content_index_tsx.hbs`,
          skipIfExists: false,
          data: {
            formattedFileName,
            commonImports,
            arrOfComponents
          }
        });
      }

      return actionsArr;
    }
  });
};
