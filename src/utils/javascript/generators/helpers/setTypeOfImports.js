//! important
// the component which you want ot add to template should includes the LocationPath part in name of key. / like / name: layoutLocationPath

const setTypeOfImports = action => {
  const commonImports = [];
  const arrOfComponents = [];
  const arrModulesImports = [];
  const arrLayoutImports = [];
  const arrAtomsImports = [];

  for (let key in action) {
    if (key.includes("LocationPath")) {
      const dropPathForName = action[key].split("/");
      const dropPathForImport = action[key].split("src");
      const getName = dropPathForName[dropPathForName.length - 1];
      const getImport = dropPathForImport[dropPathForImport.length - 1].slice(1);

      arrOfComponents.push({
        name: getName,
        path: getImport
      });
    }
  }

  const setModulesImports = arrOfComponents.reduce((acc, value) => {
    if (value.path.includes("modules")) acc.push(value.name);
    return acc;
  }, []);

  const setLayoutImports = arrOfComponents.reduce((acc, value) => {
    if (value.path.includes("layout")) acc.push(value.name);
    return acc;
  }, []);

  const setAtomsImports = arrOfComponents.reduce((acc, value) => {
    if (value.path.includes("atoms")) acc.push(value.name);
    return acc;
  }, []);

  setModulesImports.length > 0 &&
    arrModulesImports.push({
      name: setModulesImports.length > 1 ? setModulesImports : setModulesImports[0],
      path: "components/modules"
    });

  setLayoutImports.length > 0 &&
    arrLayoutImports.push({
      name: setLayoutImports.length > 1 ? setLayoutImports : setLayoutImports[0],
      path: "components/layout"
    });

  setAtomsImports.length > 0 &&
    arrAtomsImports.push({
      name: setAtomsImports.length > 1 ? setAtomsImports : setAtomsImports[0],
      path: "components/atoms"
    });

  commonImports.push(...arrModulesImports, ...arrLayoutImports, ...arrAtomsImports);

  return { commonImports, arrOfComponents };
};

module.exports = setTypeOfImports;
