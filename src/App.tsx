import Select, { SingleValue } from "react-select";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface IOptions {
  value: string;
  label: string;
}

const App = () => {
  const options: IOptions[] = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

  const [selected, setSelected] = useState<IOptions | null>(null);
  const [rating, setRating] = useState<number>(0);

  const handleSelected = (selectedOption: SingleValue<IOptions>) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selected);
  };

  return (
    <div className="container">
      <h2 className="card">What category of music do you like?</h2>
      <div className="mt-5 m-auto w-50">
        <Select options={options} onChange={handleSelected} autoFocus={true} />

        <div className="mt-4">
          {selected && <>You've selected {selected.value}</>}
        </div>
      </div>
      {/* select={setRating} selected={rating} */}
      <h2 className="card">How would you rate your service with us?</h2>
      <ul className="rating">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type="radio"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={(e) => setRating(Number(e.target.value))}
              checked={rating === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
