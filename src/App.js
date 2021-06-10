import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PrevResults from "./components/PrevResults";
import Form from "./components/Form.jsx";
import Output from "./components/Output.jsx";
import { useState } from "react";
import { getProject } from "./api";

function App() {
  const [formData, setFormData] = useState({});

  const fetchProject = async (id) => {
    const res = await getProject(id);
    // console.log(res.fields);
    setFormData(res.fields);
  };

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/pr/" exact>
          <PrevResults />
        </Route>
        <Route path="/edit/pr/:id" exact>
          <div className="form-output-wrapper">
            <Form
              type={"filledForm"}
              fetchProject={fetchProject}
              formData={formData}
              setFormData={setFormData}
            />
            <Output formData={formData} />
          </div>
        </Route>
        <Route path="/new" exact>
          <div className="form-output-wrapper">
            <Form
              type={"newForm"}
              formData={formData}
              setFormData={setFormData}
            />
            <Output formData={formData} />
          </div>
          {/* <NewForm editForm={editForm} setEditForm={setEditForm} /> */}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
