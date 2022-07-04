import { useEffect, useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";

function App() {

  const [taskCount, setTaskCount] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function load() {
      const web3 = new Web3("http://127.0.0.1:8545");
      // web3.eth.getAccounts(console.log);
      var toDoListContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
      // const taskCount = toDoListContract.taskCount()
      console.log(toDoListContract);
      // toDoListContract.methods.taskCount.call(function(error, result) {
      //   console.log(result);
      // });
      toDoListContract.methods.taskCount().call().then(function(result) {
        setTaskCount(result);
      });

      //toDoListContract.methods.add(2,3).send({from: '0x882154367d45BFEf16dfb4ECd0db41287f0A6AFa'});

    }
    load();
  }, []);

  return <><div>当前值： {taskCount}</div> <div>返回值： {value}</div></>;

}


export default App;
