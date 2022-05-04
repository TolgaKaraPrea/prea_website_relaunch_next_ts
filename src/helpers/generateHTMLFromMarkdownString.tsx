function lookupMDTable(mdstring: string) {
  const amount = mdstring.split("#").filter(a => a.length === 0).length;

  switch (amount) {
    case 0:
      return <p>{mdstring}</p>;
    case 1:
      return <h1>{mdstring.split("#")[1]}</h1>;
    case 2:
      return <h2>{mdstring.split("##")[1]}</h2>;
    case 3:
      return <h3>{mdstring.split("###")[1]}</h3>;
    case 4:
      return <h4>{mdstring.split("####")[1]}</h4>;
    case 5:
      return <h5>{mdstring.split("#####")[1]}</h5>;
    case 6:
      return <h6>{mdstring.split("######")[1]}</h6>;
    default:
      return <p>{mdstring}</p>;
  }
}

export const generateHTMLFromMarkdownString = content => {
  if (content === null) return null;
  let result = JSON.parse(content);
  result = {
    researchTitle: lookupMDTable(result.research00Title),
    researchAbstract: lookupMDTable(result.research01Abstract),
    research0200Executive: lookupMDTable(result.research0200Executive),
    research0201Executive: lookupMDTable(result.research0201Executive),
    research020101Executive: lookupMDTable(result.research020101Executive),
    research02010101Executive: lookupMDTable(result.research02010101Executive),
    research02010102Executive: lookupMDTable(result.research02010102Executive),
    research02010103Executive: lookupMDTable(result.research02010103Executive),
    research0202Executive: lookupMDTable(result.research0202Executive),
    research020201Executive: lookupMDTable(result.research020201Executive),
    research02020101Executive: lookupMDTable(result.research02020101Executive),
    research02020102Executive: lookupMDTable(result.research02020102Executive),
    research02020103Executive: lookupMDTable(result.research02020103Executive),
    research0203Executive: lookupMDTable(result.research0203Executive),
    research020301Executive: lookupMDTable(result.research020301Executive),
    research02030101Executive: lookupMDTable(result.research02030101Executive),
    research02030102Executive: lookupMDTable(result.research02030102Executive),
    research02030103Executive: lookupMDTable(result.research02030103Executive),
    research0204Executive: lookupMDTable(result.research0204Executive),
    research02040101Executive: lookupMDTable(result.research02040101Executive),
    research0300Analysis: lookupMDTable(result.research0300Analysis),
    research0301Analysis: lookupMDTable(result.research0301Analysis),
    research030101Analysis: lookupMDTable(result.research030101Analysis),
    research030102Analysis: lookupMDTable(result.research030102Analysis),
    research0400Methods: lookupMDTable(result.research0400Methods),
    research0401Methods: lookupMDTable(result.research0401Methods),
    research040101Methods: lookupMDTable(result.research040101Methods),
    research040102Methods: lookupMDTable(result.research040102Methods),
    research040201Methods: lookupMDTable(result.research040201Methods),
    research040202Methods: lookupMDTable(result.research040202Methods),
    research0403Methods: lookupMDTable(result.research0403Methods),
    research040301Methods: lookupMDTable(result.research040301Methods),
    research0500Summary: lookupMDTable(result.research0500Summary),
    research050101Summary: lookupMDTable(result.research050101Summary),
    research050102Summary: lookupMDTable(result.research050102Summary)
  };

  return result;
};
