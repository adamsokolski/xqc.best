import { xqc2021 } from "../data/xqc2021";

export default function List() {
  return (
    <div>
      <strong>you shouldn't be here 🙂</strong>
      {xqc2021.categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          {category.options.map((option) => (
            <span key={category.id + option.id}>
              {option.name} {option.link}
              <br />
            </span>
          ))}
          <br />
        </div>
      ))}
    </div>
  );
}
