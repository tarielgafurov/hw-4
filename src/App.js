import './App.css';
// import ExpenseForm from './components/expense-form/ExpenseForm';
import { Expenses } from './components/expenses/Expenses';
import Header from './layout/header/Header';

const data = [
  {
    title: "phone",
    price: 2000,
    date: new Date()
  },
  {
    title: "TV",
    price: 3000,
    date: new Date()
  }
]

function App() {


  return (
    <div className="App">
      <Header/>
      {/* <ExpenseForm/> */}
      <Expenses expenses={data} />
    </div>
  );
}

export default App;




// declarative
// Components
// 1.Noun/зат атооч
// 2.Capital with letter case
// 3.return JSX 
// 4.only one parent element

// --------------

// JSX
// SPA
// React DOM (VDOM)


// git vcs
// Github 
// git commands
// branch 
// pull request

