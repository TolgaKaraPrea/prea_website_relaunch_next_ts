export const generateSlugByFullName = employeeFullName => {
  return employeeFullName
    .split(" ")
    .map(name => name.toLowerCase())
    .join("-");
};
