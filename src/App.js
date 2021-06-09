import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PrevResults from "./components/PrevResults";
import NewForm from "./components/NewForm.jsx";
import EditForm from "./components/EditForm.jsx";
import Output from "./components/Output.jsx";
import { useState } from "react";
import { getProject } from "./api";

function App() {
  const [editForm, setEditForm] = useState({});

  const fetchProject = async (id) => {
    const res = await getProject(id);
    console.log(res.fields);
    setEditForm(res.fields);
  };

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/pr/" exact>
          <PrevResults />
        </Route>
        <Route path="/edit/pr/:id" exact>
          <EditForm
            type={"filledForm"}
            fetchProject={fetchProject}
            editForm={editForm}
            setEditForm={setEditForm}
          />
          <Output editForm={editForm} />
        </Route>
        <Route path="/new" exact>
          <EditForm
            type={"newForm"}
            editForm={editForm}
            setEditForm={setEditForm}
          />
          <Output editForm={editForm} />
          {/* <NewForm editForm={editForm} setEditForm={setEditForm} /> */}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
