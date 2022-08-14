import { useEffect, useState } from "react";
import "./App.css";
import AlterableInput from "./components/AlterableInput";
import Heading from "./components/Heading";
import ResultBox from "./components/ResultBox";

function App() {
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(10);
  const [noOfPeople, setNoOfPeople] = useState(1);


  const handleNoOfPeopleIncrease = () => {
    setNoOfPeople((prev) => prev + 1);
  }
  const handleTipPercentIncrease = () => {
    setTipPercent((prev) => prev + 1);
  }

  const handleNoOfPeopleDecrease = () => {
    setNoOfPeople((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const handleTipPercentDecrease = () => {
    setTipPercent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleBillOnChange = (e) => {
    setBill(
      e.target.value.includes(".")
        ? parseFloat(e.target.value).toFixed(2)
        : parseInt(e.target.value)
    );
  };
  const handleNoOfPeopleOnChange = (e) => {
    setNoOfPeople(
      e.target.value.includes(".")
        ? parseFloat(e.target.value).toFixed(2)
        : parseInt(e.target.value)
    );
  };
  const handleTipPercentOnChange = (e) => {
    setTipPercent(
      e.target.value.includes(".")
        ? parseFloat(e.target.value).toFixed(2)
        : parseInt(e.target.value)
    );
  };

  useEffect(() => {
    const tempTip = (tipPercent * bill) / (100 * noOfPeople);
    const tempTotal = (bill + tempTip) / noOfPeople;

    setTip(tempTip.toFixed(2).toString());
    setTotal(tempTotal.toFixed(2).toString());
  }, [bill, tipPercent, noOfPeople]);

  return (
    <>
      <main>
        <Heading />
        <div className="calculator">
          {/* FORM SECTION */}
          <section className="first">
            {/* Bill Input */}
            <div className="input-box">
              <label>Bill</label>
              <input
                onChange={handleBillOnChange}
                value={bill}
                className="bill-input"
                type="number"
              />
            </div>

            {/* Tip Percent Input */}
            <AlterableInput
              title="Tip %"
              value={tipPercent}
              incrementHandle={handleTipPercentIncrease}
              decrementHandle={handleTipPercentDecrease}
              onChangeHandle={handleTipPercentOnChange}
            />

            {/* No Of People Input */}
            <AlterableInput
              title="Number of people"
              value={noOfPeople}
              incrementHandle={handleNoOfPeopleIncrease}
              decrementHandle={handleNoOfPeopleDecrease}
              onChangeHandle={handleNoOfPeopleOnChange}
            />
          </section>

          {/* RESULT SECTION */}
          <ResultBox tip={tip} total={total} />
        </div>
      </main>
    </>
  );
}

export default App;
