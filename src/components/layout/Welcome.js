import React from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  return (
    <div className="container">
      <div className="content">
        <div className="inner">
          <dl>
            <dt>State</dt>
            <dd>
              <p>
                <Link to="https://reactjs.org/docs/hooks-reference.html#usestate" target={'_blank'}>
                  Here is the useState Documentation
                </Link>
              </p>
            </dd>
            <dt>State variable</dt>
            <dd>
              <p>A state variable is a variable that holds that state of a component.</p>
              <p>Is declared by calling the hook <span class='code-line'>useState</span></p>
              <p className="code-section">
                const [stateVariable, stateUpdateFunction] = useState();
              </p>
              <p>You can give the state variable any name you want.</p>
            </dd>
            <dt>State update function</dt>
            <dd>
              <p>A state update function is a function that can be used to update the sate variable.</p>
              <p>Is declared by calling the hook <span className='code-line'>useState</span></p>
              <p className="code-section">
                const [stateVariable, stateUpdateFunction] = useState();
              </p>
              <p>You can give the state update function any name you want.</p>
              <p>When you want to change the state of the component use the state update function.</p>
              <p className="code-section">
                <p>console.log('stateVariable = ' + stateVariable);</p>
                <p>stateUpdateFunction(5);</p>
                <p>console.log('stateVariable = ' + stateVariable);</p>
              </p>            
            </dd>
            <dt>Context</dt>
            <dd>
              <p>
                <Link to="https://reactjs.org/docs/context.html#updating-context-from-a-nested-component" target={'_blank'}>
                  Here is the Context Documentation
                </Link>
              </p>
              <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
              <p>
                Context is primarily used when some data needs to be accessible by many components at different nesting levels. 
              </p>
              <p>              
                <span className='highlighted'>Apply context sparingly</span> because it makes component reuse more difficult.
              </p>
              <p>
                If you only want to avoid passing some props through many levels, 
                <span className='highlighted'>component composition is often a simpler solution than context.</span>
                <p className='code-section'>
                  <p>function App() {"{"}</p>
                  <p className='indent-1x'>return ("</p>
                  <p className='indent-2x'>{"<Pane nestedComponent={<SomeComponent/>} />"}</p>
                  <p className='indent-1x'>);</p>
                  <p>{"}"}</p>
                  <br></br>              
                  <p>function Pane(props) {"{"}</p>
                  <p className='indent-1x'>return ("</p>
                  <p className='indent-2x'>{"{props.nestedComponent}"}</p>
                  <p className='indent-1x'>);</p>
                  <p>{"}"}</p>  
                </p>
              </p>
              <p>You can think of React context as the equivalent of global variables for our React components.</p>
              <p>A context is created with <span className='code-line'>createContext</span></p>
              <p className='code-section'>
                <p>const MyContext = React.createContext(defaultValue);</p>
              </p>
            </dd>
            <dt>Context providers</dt>
            <dd>
              <p>Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.</p>
            </dd>
          </dl>
        </div>
        <Link to="/application">
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
