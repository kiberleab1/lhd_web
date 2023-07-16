// import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./Component/PrivateRoute";
import { useSelector } from "react-redux";
//navs
import CollapsibleExample from "./Component/Layouts/RootLayout";

import SubLayout from "./Component/Layouts/subLayout";

const Index = lazy(() => import("./Component/Pages/Index"));
const Home = lazy(() => import("./Component/Pages/Home/Home"));
const About = lazy(() => import("./Component/Pages/About/About"));
const Services = lazy(() => import("./Component/Pages/Services/Services"));
const EditService = lazy(() =>
  import("./Component/Pages/EditServices/Edit_page")
);
const Experience = lazy(() =>
  import("./Component/Pages/Experience/Experience")
);
const EditExp = lazy(() => import("./Component/Pages/EditExperiance/EditFile"));
const EditResearchid = lazy(() =>
  import("./Component/Pages/Edit_research/edit_Research")
);
const EditTestimones = lazy(() =>
  import("./Component/Pages/Edit_Testimonies/EditTestimones")
);
//clint
const EditClintFile = lazy(() =>
  import("./Component/Pages/EditClient/editClintFile")
);
const ClientsInEthiopia = lazy(() =>
  import("./Component/Pages/Clients/Clients_in_ethiopia")
);
const ClientsInOthers = lazy(() =>
  import("./Component/Pages/Clients/ClientsInOthers")
);
const Email = lazy(() => import("./Component/Pages/Clients/Email"));
//Team
const SelectingOneTeam = lazy(() =>
  import("./Component/Pages/Edit_Team/editTeam")
);
//contact
const Contact = lazy(() => import("./Component/Pages/Contact/Contact"));
const New = lazy(() => import("./Component/Pages/New/new"));
const Add = lazy(() => import("./Component/Pages/Add/Add"));
//Vaccancy
const Vaccancy = lazy(() => import("./Component/Pages/Vaccancy/Vaccancy"));
const ApplyVaccancy = lazy(() =>
  import("./Component/Pages/Vaccancy/ApplyVaccancy")
);
const VaccEdit = lazy(() =>
  import("./Component/Pages/EditVaccancy/vaccEditFile")
);
//EditAbout
const EditAbout = lazy(() => import("./Component/Pages/EditAbout/EditAbout"));
//edit Clint
const EditClient = lazy(() =>
  import("./Component/Pages/EditClient/EditClient")
);
const EditContact = lazy(() =>
  import("./Component/Pages/EditContact/EditContact")
);
const EditExperiance = lazy(() =>
  import("./Component/Pages/EditExperiance/EditExperiance")
);
const EditHome = lazy(() => import("./Component/Pages/EditHome/EditHome"));
const EditServices = lazy(() =>
  import("./Component/Pages/EditServices/Edit_Services")
);
const EditVaccancy = lazy(() =>
  import("./Component/Pages/EditVaccancy/Edit_Vaccancy")
);

// Login
const Login = lazy(() => import("./Component/Pages/Login_Register/Login"));
const RegisterAdmin = lazy(() =>
  import("./Component/Pages/Login_Register/RegisterAdmin")
);
// error
const Error1 = lazy(() => import("./Component/Pages/Error1/Error1"));

function App() {
  const toKnowRole = useSelector((state) => state.userRole);
  const incomingRole = JSON.stringify(toKnowRole.todoReducer[0]);
  const adminRole = JSON.stringify({ text: "admin" });
  function getUrl() {
    if (
      (window.location.href === "http://localhost:3000/RegisterAdmin" &&
        window.location.href === "http://localhost:3000/login") ||
      incomingRole === adminRole
    ) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <BrowserRouter>
      {getUrl() ? <SubLayout /> : <CollapsibleExample />}
      <Suspense
        fallback={
          <div className="d-flex justify-content-center  text-primary">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/Admin/EditAbout" element={<EditAbout />} />
            <Route path="/Admin/editClient" element={<EditClient />} />
            <Route path="/Admin/EditContact" element={<EditContact />} />
            <Route path="/Admin/EditExperiance" element={<EditExperiance />} />
            <Route path="/Admin/Home" element={<EditHome />} />
            <Route path="/Admin/EditService" element={<EditServices />} />
            <Route path="/Admin/EditVaccancy" element={<EditVaccancy />} />
            <Route path="/Admin/Register" element={<RegisterAdmin />} />
            <Route path="/one/testmonial/:id" element={<EditTestimones />} />
            <Route
              path="/Admin/select/one/:id"
              element={<SelectingOneTeam />}
            />
            <Route path="/edit/service/:id" element={<EditService />} />
            <Route path="/experiance/edit/:id" element={<EditExp />} />
            <Route path="/edit/exp/one/:id" element={<EditResearchid />} />
            <Route path="/edit/clints/:id" element={<EditClintFile />} />
            <Route path="/vacc/editv/:id" element={<VaccEdit />} />
          </Route>
          <Route path="" element={<Index />} />
          <Route path="/lhd/Home" element={<Home />} />
          <Route path="/lhd/About" element={<About />} />
          <Route path="/lhd/Service" element={<Services />} />
          <Route path="/lhd/Experiance" element={<Experience />} />
          {/* <Route path="" element={<Clients />} /> */}
          <Route path="/lhd/ClientEthiopia" element={<ClientsInEthiopia />} />
          <Route path="/lhd/ClientOther" element={<ClientsInOthers />} />
          <Route path="/lhd/Emails" element={<Email />} />

          <Route path="/lhd/Contact" element={<Contact />} />

          <Route path="/lhd/Vaccancy/apply/:id" element={<ApplyVaccancy />} />

          <Route path="/login" element={<Login />} />

          <Route path="/lhd/Vaccancy" element={<Vaccancy />} />

          <Route path="*" element={<Error1 />} />
          <Route path="/help" element={<SubLayout />}>
            <Route path="help/faq" element={<New />} />
            <Route path="help/fas" element={<Add />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes path="" element={url ? <CollapsibleExample /> : <SubLayout />}>
//       <Route path="" element={<Index />} />
//       <Route path="/lhd/Home" element={<Home />} />
//       <Route path="/lhd/About" element={<About />} />
//       <Route path="/lhd/Service" element={<Services />} />
//       <Route path="/lhd/Experiance" element={<Experience />} />
//       {/* <Route path="" element={<Clients />} /> */}
//       <Route path="/lhd/ClientEthiopia" element={<ClientsInEthiopia />} />
//       <Route path="/lhd/ClientOther" element={<ClientsInOthers />} />
//       <Route path="/lhd/Emails" element={<Email />} />
//       {/* Contact */}
//       <Route path="/lhd/Contact" element={<Contact />} />
//       {/* vacancy */}
//       <Route path="/lhd/Vaccancy" element={<Vaccancy />} />
//       <Route path="/lhd/Vaccancy/apply/:id" element={<ApplyVaccancy />} />
//       <Route path="/Admin/EditAbout" element={<EditAbout />} />
//       <Route path="/Admin/EditClint" element={<EditClient />} />
//       <Route path="/Admin/EditContact" element={<EditContact />} />
//       <Route path="/Admin/EditExperiance" element={<EditExperiance />} />
//       <Route path="/Admin/EditHome" element={<EditHome />} />
//       <Route path="/Admin/EditService" element={<EditServices />} />
//       <Route path="/Admin/EditVaccancy" element={<EditVaccancy />} />
//       {/* login */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/RegisterAdmin" element={<RegisterAdmin />} />
//       {/* error */}
//       <Route path="*" element={<Error1 />} />
//       <Route path="/help" element={<SubLayout />}>
//         <Route path="help/faq" element={<New />} />
//         <Route path="help/fas" element={<Add />} />
//       </Route>
//     </Routes>
//   )
// );
