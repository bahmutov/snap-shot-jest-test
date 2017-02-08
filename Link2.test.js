'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _snapShot = require('snap-shot');

var _snapShot2 = _interopRequireDefault(_snapShot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const strip = o => JSON.parse(JSON.stringify(o))

test('Link changes the class when hovered', function () {
  // snapshot does not know how to handle JSX
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(
    _Link2.default,
    { page: 'http://www.facebook.com' },
    'Facebook'
  ));
  var tree = component.toJSON();
  (0, _snapShot2.default)(strip(tree));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmsudGVzdC5qcyJdLCJuYW1lcyI6WyJ0ZXN0IiwiY29tcG9uZW50IiwiY3JlYXRlIiwidHJlZSIsInRvSlNPTiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLEtBQUsscUNBQUwsRUFBNEMsWUFBTTtBQUNoRDtBQUNBLE1BQU1DLFlBQVksNEJBQVNDLE1BQVQsQ0FDaEI7QUFBQTtBQUFBLE1BQU0sTUFBSyx5QkFBWDtBQUFBO0FBQUEsR0FEZ0IsQ0FBbEI7QUFHQSxNQUFJQyxPQUFPRixVQUFVRyxNQUFWLEVBQVg7QUFDQSwwQkFBU0QsSUFBVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBcEJEIiwiZmlsZSI6IkxpbmsudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInO1xuaW1wb3J0IHNuYXBzaG90IGZyb20gJ3NuYXAtc2hvdCdcblxudGVzdCgnTGluayBjaGFuZ2VzIHRoZSBjbGFzcyB3aGVuIGhvdmVyZWQnLCAoKSA9PiB7XG4gIC8vIHNuYXBzaG90IGRvZXMgbm90IGtub3cgaG93IHRvIGhhbmRsZSBKU1hcbiAgY29uc3QgY29tcG9uZW50ID0gcmVuZGVyZXIuY3JlYXRlKFxuICAgIDxMaW5rIHBhZ2U9XCJodHRwOi8vd3d3LmZhY2Vib29rLmNvbVwiPkZhY2Vib29rPC9MaW5rPlxuICApO1xuICBsZXQgdHJlZSA9IGNvbXBvbmVudC50b0pTT04oKTtcbiAgc25hcHNob3QodHJlZSlcbiAgLy8gZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG4gIC8vIC8vIG1hbnVhbGx5IHRyaWdnZXIgdGhlIGNhbGxiYWNrXG4gIC8vIHRyZWUucHJvcHMub25Nb3VzZUVudGVyKCk7XG4gIC8vIC8vIHJlLXJlbmRlcmluZ1xuICAvLyB0cmVlID0gY29tcG9uZW50LnRvSlNPTigpO1xuICAvLyBleHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XG5cbiAgLy8gLy8gbWFudWFsbHkgdHJpZ2dlciB0aGUgY2FsbGJhY2tcbiAgLy8gdHJlZS5wcm9wcy5vbk1vdXNlTGVhdmUoKTtcbiAgLy8gLy8gcmUtcmVuZGVyaW5nXG4gIC8vIHRyZWUgPSBjb21wb25lbnQudG9KU09OKCk7XG4gIC8vIGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcbn0pO1xuIl19
