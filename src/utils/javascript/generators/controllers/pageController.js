const getDirectories = require("../helpers/getDirectories");
const inquirerFileTreeSelection = require("inquirer-file-tree-selection-prompt");
const path = require("path");
const getFormattedFileName = require("../helpers/getFormattedFileName");
const getFormattedRouteName = require("../helpers/getFormattedRouteName");
const getFormattedLowerName = require("../helpers/getFormattedLowerName");

module.exports = function PageController(plop) {
  plop.setPrompt("file-tree-selection", inquirerFileTreeSelection);
  const targetPath = "pages";
  let finalPath = "pages";
  // controller generator
  plop.setGenerator("📃 Page", {
    description: "Create a Page, Template & Translation File and connect them.",
    prompts: [
      {
        type: "confirm",
        name: "isRoot",
        message: "Is the Page in the root of pages",
        default: false
      },
      {
        when: data => !data.isRoot,
        type: "file-tree-selection",
        name: "locationPath",
        message: "Where do you want to schnuppern?",
        root: "./src/pages",
        multiple: false,
        onlyShowDir: true,
        transformer: input => {
          const name = input.split(path.sep).pop();
          if (name !== "_ah" && name !== "api") {
            return name;
          }
          return "❌ " + name;
        },
        enableGoUpperDirector: true,
        hideRoot: true,
        pageSize: 10
      },
      {
        type: "input",
        name: "pageName",
        message: `What is the name of the 📃 Page (route format eg. /who-we-are)`
      },
      {
        type: "confirm",
        name: "hasApollo",
        message: "Do you need a connection to the Apollo Provider?",
        default: false
      },
      {
        type: "confirm",
        name: "isDynamicRoute",
        message: "Is it a dynamic route?",
        default: false
      },
      {
        type: "confirm",
        name: "hasStaticProps",
        message: "Do you need getStaticProps?",
        default: false
      },
      {
        when: data => !data.hasStaticProps,
        type: "confirm",
        name: "hasServerProps",
        message: "Do you need getServerSideProps?",
        default: false
      },
      {
        type: "confirm",
        name: "isDarkMode",
        message: "💅 Is Dark Mode",
        default: false
      },
      {
        type: "confirm",
        name: "hasSubNavigation",
        message: "🈹 Do you need a Sub Navigation?",
        default: false
      },
      {
        /*TODO This we can also take from the path and then check if we have items if not that we can add there*/
        when: data => data.hasSubNavigation,
        type: "list",
        choices: [
          { name: "Our Mission", value: "ourMission" },
          { name: "Cloud", value: "cloud" },
          { name: "Imprint", value: "imprint" },
          { name: "Goverment", value: "goverment" }
        ],
        name: "subNavParent",
        message: "Select the Subnavigation Parent",
        default: false
      }
    ],
    actions: action => {
      const actionsArr = [];
      const targetPagePath = `../../src/pages/`;
      const targetContentPath = `../../src/pages/`;
      const contentPath = "";
      /*TODO Tolga, I fixed function, please review*/
      const formattedPageName = getFormattedFileName(action.pageName, "Page");
      const formattedContentName = getFormattedFileName(action.pageName, "Content");
      const formattedLowerName = getFormattedLowerName(action.pageName);
      const formattedRouteName = getFormattedRouteName(action.pageName);

      if (action.isRoot) {
        /*TODO Skip if Exists needs to be true just for testing purposes we do it*/
        actionsArr.push({
          type: "add",
          path: `${targetPagePath}/${formattedRouteName}/index.tsx`,
          templateFile: `../templates/page_index_tsx.hbs`,
          skipIfExists: false,
          data: {}
        });
      } else {
        actionsArr.push({
          type: "add",
          path: `${action.locationPath}/${formattedRouteName}/index.tsx`,
          templateFile: `../templates/page_index_tsx.hbs`,
          skipIfExists: false,
          data: {
            formattedPageName,
            formattedContentName,
            formattedLowerName
          }
        });
      }

      return actionsArr;
    }
  });
};
