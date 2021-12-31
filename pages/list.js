import { xqc2021 } from "../data/xqc2021";
import { google } from "googleapis";
import { formatDistanceToNow } from "date-fns";

export async function getStaticProps({ query }) {
  // Auth
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  // Query

  const range = `Sheet2!A2:B2`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  // Result

  const [sum, date] = response.data.values[0];
  console.log(response.data.values);

  return {
    props: {
      sum,
      date,
    },
  };
}

export default function List({ sum, date }) {
  return (
    <div>
      <strong>you shouldn&apos;t be here 🙂</strong>
      <p>Votes: {sum}</p>
      <p>Updated {formatDistanceToNow(new Date(date), { addSuffix: true })}</p>
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
