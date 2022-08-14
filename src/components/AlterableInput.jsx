function AlterableInput({
  title,
  value,
  incrementHandle,
  decrementHandle,
  onChangeHandle,
}) {
  return (
    <div className="input-box">
      <label>{title}</label>
      <div>
        <button onClick={decrementHandle}>-</button>
        <input onChange={onChangeHandle} value={value} type="number" />
        <button onClick={incrementHandle}>+</button>
      </div>
    </div>
  );
}

export default AlterableInput;
