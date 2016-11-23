var React = require('react');
var {Link} = require('react-router');

var Examples = ()=>(
  <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Here are a few locations to try out:</p>
    <ul>
      <li>
        <Link to='/?location=Pittsburgh'>Pittsburgh, PA</Link>
      </li>
      <li>
        <Link to='/?location=Beijing'>Beijing, China</Link>
      </li>
      <li>
        <Link to='/?location=Boston'>Boston, MA</Link>
      </li>
    </ul>
  </div>
);

module.exports = Examples;
