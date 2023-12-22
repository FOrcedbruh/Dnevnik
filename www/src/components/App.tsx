import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout/Layout";
import CreateGoalPage from "./pages/CreateGoalPage/CreateGoalPage";
import Goal from "./pages/Goal/Goal";
import Congratulations from "./pages/Congratulations/Congratulations";

const App: React.FC = () => {



    return (
         <section className="wrapper">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/Create_goal" element={<CreateGoalPage />}/>
                    <Route path="/:id" element={<Goal />}/>
                    <Route path="/Congratulations/:id" element={<Congratulations />}/>
                </Route>
            </Routes>
         </section>
    )
}

export default App;