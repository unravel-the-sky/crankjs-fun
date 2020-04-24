/** @jsx createElement */
import { createElement } from '@bikeshaving/crank/cjs';
import { renderer } from '@bikeshaving/crank/cjs/dom';

function Greeting({ name = 'World' }) {
  return (
    <div>
      <div> Yello {name}</div>
      yield (<GetQuote></GetQuote>)
    </div>
  );
}

async function GetQuote() {
  const res = await fetch('https://favqs.com/api/qotd');
  const { quote } = await res.json();

  return (
    // <p>lol</p>
    <p>lol "{quote.body}"</p>
  );
}

renderer.render(<GetQuote></GetQuote>, document.body);

// renderer.render(<div id='wee'>yellooo</div>, document.body);
