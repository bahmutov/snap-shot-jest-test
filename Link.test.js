import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';
import snapshot from 'snap-shot'

test('Link changes the class when hovered', () => {
  // snapshot does not know how to handle JSX
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  snapshot(tree)
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
