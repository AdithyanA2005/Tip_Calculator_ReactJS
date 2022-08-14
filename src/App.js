import './App.css';

function App() {
  return (
    <main>
      <div class="calculator">
        <section class="first">
          <div class="input-box">
            <label>Bill</label>
            <input class="bill-input" type="text" id="billAmount" />
          </div>

          <div class="input-box">
            <label>Tip %</label>
            <div>
              <button>-</button>
              <input type="text" id="tipPercent" />
              <button>+</button>
            </div>
          </div>

          <div class="input-box">
            <label>Number of people</label>
            <div>
              <button>-</button>
              <input type="text" id="tipPercent" />
              <button>+</button>
            </div>
          </div>
        </section>

        <section class="second">
          <div>
            <span>Tip</span>
            <span>$10</span>
          </div>
          <div>
            <span>Total</span>
            <span><b>$110</b></span>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
