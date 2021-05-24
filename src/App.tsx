import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { Create } from "./pages/create";
import { View } from "./pages/view";
import { globalTheme } from "./theme/global";
import { NotesProvider } from "./context/global";
function App() {
  return (
    <BrowserRouter>
      <NotesProvider>
        <ThemeProvider theme={globalTheme}>
          <Switch>
            <Route exact path="/">
              <View />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </ThemeProvider>
      </NotesProvider>
    </BrowserRouter>
  );
}

export default App;
