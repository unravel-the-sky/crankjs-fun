/** @jsx createElement */
import { createElement } from '@bikeshaving/crank/cjs';
import { renderer } from '@bikeshaving/crank/cjs/dom';

renderer.render(<div id='hello'>Hello world</div>, document.body);
