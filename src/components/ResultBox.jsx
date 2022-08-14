function ResultBox({ tip, total }) {
  return (
    <section className="second">
      <div>
        <span>Tip</span>
        <span>${tip}</span>
      </div>
      <div>
        <span>Total</span>
        <span>
          <b>${total}</b>
        </span>
      </div>
    </section>
  );
}

export default ResultBox;
