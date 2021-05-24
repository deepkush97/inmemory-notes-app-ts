import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { Create } from "./pages/create";
import { View } from "./pages/view";
import { globalTheme } from "./theme/global";
import { NotesProvider } from "./context/global";
import { Layout } from "./components/Layout";
function App() {
  return (
    <NotesProvider>
      <ThemeProvider theme={globalTheme}>
        <BrowserRouter>
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
        </BrowserRouter>
      </ThemeProvider>
    </NotesProvider>
  );
}

export default App;
