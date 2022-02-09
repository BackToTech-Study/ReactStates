import React from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

const Welcome = (props) => {
  // read the context
  const { user, } = React.useContext(UserContext);

  //context field value is read here
  let linkToJoinForm = user !== undefined ? "" : 
    <Link to="/application">  
      <Button text="Join us" ></Button> 
    </Link>;

  return (
    <div className="container">
      <div className="content">
        <div className="inner">
          <dl>
            <dt>State</dt>

            <dt>State variable</dt>
            <dd>
              <p>A state variable is a variable that holds that state of a component.</p>
              <p>Is declared by calling the hook <span className='code-line'>useState</span></p>
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
              <div className="code-section">
                <p>console.log('stateVariable = ' + stateVariable);</p>
                <p>stateUpdateFunction(5);</p>
                <p>console.log('stateVariable = ' + stateVariable);</p>
              </div>            
            </dd>

            <dt>Context</dt>
            <dd>
              <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
              <p>
                Context is primarily used when some data needs to be accessible by many components at different nesting levels. 
              </p>
              <p>              
                <span className='highlighted'>Apply context sparingly</span> because it makes component reuse more difficult.
              </p>
              <div>
                <p>
                  If you only want to avoid passing some props through many levels, 
                  <span className='highlighted'>component composition is often a simpler solution than context.</span>
                </p>
                <div className='code-section'>
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
                </div>
              </div>
              <p>You can think of React context as the equivalent of global variables for our React components.</p>
              <p>A context is created with <span className='code-line'>createContext</span></p>
              <div className='code-section'>
                <p>const MyContext = React.createContext(defaultValue);</p>
              </div>
            </dd>

            <dt>Context providers</dt>
            <dd>
              <p>Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.</p>
              <p>The provider passes the context value to the consuming components that are descendants of the provider.</p>
              <div className='code-section'>
                <p>{"<MyContext.Provider value={contextValueHere}>"}</p>
                <p className='indent-1x'>{"<DescendantComponent1 />"}</p>
                <p className='indent-1x'>{"<DescendantComponent2 />"}</p>
                <p>{"</MyContext.Provider>"}</p>
              </div>
              <p>Multiple providers can be nested.</p>
            </dd>

            <dt>Consume a context</dt>
            <dd>
              <p>To consume a context you can use the <span className='code-line'>useContext</span> hook.</p>
              <div className='code-section'>
                <p>{"const conextValue=useContext(ContextName)"}</p>
                <p>{"<span>{conextValue}</span>"}</p>
              </div>
            </dd>      

            <dt>Change a context</dt>
            <dd>
              <p>To change a context you can set the context value as an object with a value field and an update field.</p>
              <div className='code-section'>
                <p>{"const UserContext = createContext({"}</p>
                <p className='indent-1x'>{"user: undefined,"}</p>
                <p className='indent-1x'>{"setUser: (newUser) => {}"}</p>
                <p>{"});"}</p>
              </div>
              
              <p>The provider could look something like this.</p>
              <div className='code-section'>
                <p>{"<UserContext.Provider value={{ user, setUser }}>"}</p>
              </div>
              <p>Where "user" is the value field and "setUser" is the update function.</p>

              <p>The variable field "user" can be the state variable of the app.</p>
              <div className='code-section'>
                <p>{"const [user, updateUser] = useState()"}</p>
              </div>

              <p>Then the update function "setUser" would call the state update function.</p>
              <div className='code-section'>
                <p>{"function setUser(userData) {"}</p>
                <p className='indent-1x'>{"updateUser(userData);"}</p>
                <p>{"}"}</p>
              </div>       

              <p>To read the context you would destructure the context value.</p>
              <div className='code-section'>
                <p>{"const { user, setUser} = React.useContext(UserContext);"}</p>
              </div>       

              <p>You can read the value field just like any other variable.</p>
              <div className='code-section'>
                <p>{"<span>{user}</span>"}</p>
              </div>   

              <p>And you can use the update function to change the context.</p>                               
              <div className='code-section'>
                <p>{"setUser(newUserHere)"}</p>
              </div>

              <p className='highlighted'>Routing or page refresh will reinitalze the context.</p>
              <p>If you want context persitance you can setup context to be saved and loaded from local storage.</p>
              <div className='code-section'>
                <p>{"const [user, updateUser] = useState(readUserFromStorage())"}</p>
                <p>{"..."}</p>
                <p>{"function setUser(user) {"}</p>
                <p className='indent-1x'>{"saveToLocalStorage(user);"}</p>
                <p className='indent-1x'>{"updateUser(readUserFromStorage());"}</p>
                <p>{"}"}</p>                
              </div>   

            </dd>   

            <dt>SWR - React Hooks for Data Fetching</dt>
            <dd>
              <p>SWR is a strategy to first return the data from cache (stale), 
                then send the fetch request (revalidate), and finally come with the up-to-date data.
              </p>
              <p>
                Usually, we need to keep all the data fetching in the top level component and add props 
                to every component deep down the tree. 
                The code will become harder to maintain if we add more data dependency to the page.
              </p>
              <p>
                Although we can avoid passing props using Context, 
                there's still the dynamic content problem: 
                components inside the page content can be dynamic, 
                and the top level component might not know what data will be needed by its child components.
              </p>
            </dd>   

            <dt>Install SWR</dt>
            <dd>
              <p>
                SWR can be installed with <span className='code-line'>npm install swr</span>
              </p>               
            </dd> 

            <dt>Declare the SWR fetcher</dt>
            <dd>
              <p>
                For normal RESTful APIs with JSON data, first you need to create a fetcher function, 
                which is just a wrapper of the native fetch.
              </p>
              <div className='code-section'>
                <p>{"const fetcher = (...args) => fetch(...args).then(res => res.json())"}</p>              
              </div>                 
            </dd>   

            <dt>Define a service that uses SWR</dt>
            <dd>
              <p>
                To use SWR in a component just import it using <span className='code-line'>useSWR</span>.
              </p>
              <div className='code-section'>
                <p>{"import useSWR from 'swr'"}</p>              
              </div>          
              <p>
                Then you can import <span className='code-line'>useSWR</span> and start using it inside any function components.
              </p>
              <div className='code-section'>
                <p>{"const { data, error } = useSWR('/api/user/123', fetcher)"}</p>              
                <p>{"if (error) return <div>failed to load</div>"}</p>    
                <p>{"if (!data) return <div>loading...</div>"}</p>    
                <p>{"return <div>hello {data.name}!</div>"}</p>    
              </div>                        
            </dd>   

          </dl>
        </div>
        {linkToJoinForm}
      </div>
    </div>
  );
};

export default Welcome;
