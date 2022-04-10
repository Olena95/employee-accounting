import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../emloyees-list/employyes-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {
  const data = [
    { name: "John S.", salary: 800, increase: false },
    { name: "Alex W.", salary: 3000, increase: true },
    { name: "Carl G.", salary: 5000, increase: false },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
