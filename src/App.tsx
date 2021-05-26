import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Create } from "./pages/Create";
import { View } from "./pages/View";
import { GlobalThemeProvider } from "./theme/GlobalTheme";
import { NotesProvider } from "./context/NotesContext";
import { Layout } from "./components/Layout";
function App() {
  return (
    <NotesProvider>
      <GlobalThemeProvider>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Layout>
            <Switch>
              <Route exact path="/">
                <View />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </Switch>
          </Layout>
        </HashRouter>
      </GlobalThemeProvider>
    </NotesProvider>
  );
}

export default App;
