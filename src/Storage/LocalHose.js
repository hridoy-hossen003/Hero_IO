const getAppFromLS = () => {
  const storedAppString = localStorage.getItem("apps");

  if (storedAppString) {
    const storedApp = JSON.parse(storedAppString);
    return storedApp;
  }
  return [];
};

const saveAppToLocalStorage = (apps) => {
  const stringifyApp = JSON.stringify(apps);
  localStorage.setItem("apps", stringifyApp);
};

const addAppToLocalStorage = (id) => {
  const apps = getAppFromLS();
  apps.push(id);

  saveAppToLocalStorage(apps);
};


const removeFromLocalStorage = id => {
  const apps = getAppFromLS();
  const filteredApp = apps.filter(app => app != id)
  saveAppToLocalStorage(filteredApp)
}


export {getAppFromLS as getApps , addAppToLocalStorage as addApps , removeFromLocalStorage as removeApp}
