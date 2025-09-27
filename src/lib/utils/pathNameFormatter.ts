const pathNameFormatter = (pageName: string): string => {
  if (pageName == "" || pageName == "/") return "Articles";
  const mainPageName = pageName.split("/")[2];
  return mainPageName.charAt(0).toUpperCase() + mainPageName.slice(1);
};

export default pathNameFormatter;
