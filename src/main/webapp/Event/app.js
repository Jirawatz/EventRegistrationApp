import Customer from "./customer";

const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
  return (
      <div>
        <HashRouter>
          <Route path="/" exact={true}>
            <Customer/>
          </Route>
        </HashRouter>
      </div>
  );
}

export default App;
