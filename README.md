# ReactStates
Examples on managing local state and global context in React

## Prerequisites
- [ ] Access to this repo
- [ ] [VS code](https://code.visualstudio.com/Download) installed
- [ ] [Node.js](https://nodejs.org/en/) installed

## [Component state](https://reactjs.org/docs/hooks-state.html)

  NOTE: Example is in the [src/components/forms/ApplicationForm.js](https://github.com/BackToTech-Study/ReactStates/blob/main/src/components/forms/ApplicationForm.js)

- [x] [import `useState` hook](https://reactjs.org/docs/hooks-state.html#whats-a-hook)
- [x] [Declare a new state variable](https://reactjs.org/docs/hooks-state.html#declaring-a-state-variable)
- [x] [what is the state variable](https://github.com/BackToTech-Study/ReactStates/blob/main/src/components/layout/Welcome.js)
- [x] [what is the state update function](https://github.com/BackToTech-Study/ReactStates/blob/main/src/components/layout/Welcome.js)
- [x] [Reading State](https://reactjs.org/docs/hooks-state.html#reading-state)
- [x] [Updating State](https://reactjs.org/docs/hooks-state.html#updating-state)

## [React Context](https://reactjs.org/docs/context.html)

- [x] [Create the context](https://github.com/BackToTech-Study/ReactStates/blob/main/src/contexts/UserContext.js)
- [x] [Provide the context](https://github.com/BackToTech-Study/ReactStates/blob/main/src/App.js)
- [x] [Import the context](https://github.com/BackToTech-Study/ReactStates/blob/main/src/components/layout/Navbar.js)
- [x] [Use/read the context from a component](https://github.com/BackToTech-Study/ReactStates/blob/main/src/components/layout/Navbar.js)
- [x] [Change the context from another component](https://github.com/BackToTech-Study/ReactStates/blob/main/src/components/layout/Navbar.js)

## [SWR](https://swr.vercel.app/) - React Hooks for Data Fetching
- [x] SWR can be used for calling backend services. It implements a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
- [x] install SWR
- [x] Declare the SWR fetcher
- [x] Import SWR & Use SWR
- [x] The SWR key
- [x] Use [mutate](https://swr.vercel.app/docs/mutation) to trigger syncronised updates

## Extra topics
- [x] [Use Context sparingly because it makes component reuse more difficult](https://reactjs.org/docs/context.html#before-you-use-context)
- [x] [Component composition](https://krasimir.gitbooks.io/react-in-patterns/content/chapter-04/)
- [x] [Context is lost at page rerfesh or redirect](https://github.com/BackToTech-Study/ReactStates/blob/main/src/App.js)
- [ ] [Dependecy injection](https://krasimir.gitbooks.io/react-in-patterns/content/chapter-10/)
- [ ] [Inversion of control](https://kentcdodds.com/blog/inversion-of-control)
- [ ] [Using multiple contexts](https://reactjs.org/docs/context.html#updating-context-from-a-nested-component)
- [ ] [Multiple component states](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables)

## Definitii 

### State variable
* A state variable is a variable that holds that state of a component.
* Is declared by calling the hook useState const 
```
[stateVariable, stateUpdateFunction] = useState();
```
* You can give the state variable any name you want.

### State update function
* A state update function is a function that can be used to update the sate variable.
* Is declared by calling the hook useState const 
```
[stateVariable, stateUpdateFunction] = useState();
```
* You can give the state update function any name you want.
* When you want to change the state of the component use the state update function.
```
    console.log('stateVariable = ' + stateVariable);
    stateUpdateFunction(5);
    console.log('stateVariable = ' + stateVariable);
```

### Context
* Context provides a way to pass data through the component tree without having to pass props down manually at every level.
* Context is primarily used when some data needs to be accessible by many components at different nesting levels.
* `Apply context sparingly` because it makes component reuse more difficult.
* If you only want to avoid passing some props through many levels,`component composition is often a simpler solution than context`.
```
    function App() {
      return ("
        <Pane nestedComponent={<SomeComponent/>} />
      );
    }

    function Pane(props) {
      return ("
        {props.nestedComponent}
      );
    }
```
* You can think of React context as the equivalent of global variables for our React components.
* A context is created with createContext
```
    const MyContext = React.createContext(defaultValue);
```    
### Context providers
* Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
* The provider passes the context value to the consuming components that are descendants of the provider.
```
    <MyContext.Provider value={contextValueHere}>
      <DescendantComponent1 />
      <DescendantComponent2 />
    </MyContext.Provider>
```    
* Multiple providers can be nested.

### Consume a context
* To consume a context you can use the useContext hook.
```
    const conextValue=useContext(ContextName)
    <span>{conextValue}</span>
```    
### Change a context
* To change a context you can set the context value as an object with a value field and an update field.
```
    const UserContext = createContext({
      user: undefined,
      setUser: (newUser) => {}
    });
```
* The provider could look something like this.
```
    <UserContext.Provider value={{ user, setUser }}>
```
* Where "user" is the value field and "setUser" is the update function.
* The variable field "user" can be the state variable of the app.
```
    const [user, updateUser] = useState()
```
* Then the update function "setUser" would call the state update function.
```
    function setUser(userData) {
      updateUser(userData);
    }
```
* To read the context you would destructure the context value.
```
    const { user, setUser} = React.useContext(UserContext);
```    
* You can read the value field just like any other variable.
```
    <span>{user}</span>
```
* And you can use the update function to change the context.
```
    setUser(newUserHere)
```
* If you want context persitance you can setup context to be saved and loaded from local storage.
```
    const [user, updateUser] = useState(readUserFromStorage())
    ...

    function setUser(user) {
      saveToLocalStorage(user);
      updateUser(readUserFromStorage());
    }
```     
### SWR - React Hooks for Data Fetching
* SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
* Usually, we need to keep all the data fetching in the top level component and add props to every component deep down the tree. The code will become harder to maintain if we add more data dependency to the page.
* Although we can avoid passing props using Context, there's still the dynamic content problem: components inside the page content can be dynamic, and the top level component might not know what data will be needed by its child components.

### Install SWR
* SWR can be installed with `npm install swr`
Declare the SWR fetcher
* For normal RESTful APIs with JSON data, first you need to create a fetcher function, which is just a wrapper of the native fetch.
```
    const fetcher = (...args) => fetch(...args).then(res => res.json())
``` 

### Define a service that uses SWR
* To use SWR in a component just import it using `useSWR`.
```
    import useSWR from 'swr'
```
* Then you can import `useSWR` and start using it inside any function components.
```
    const { data, error } = useSWR('/api/user/123', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.name}!</div>
```    

### Trigger update with mutate
* The SWR object returned by useSWR also contains a mutate() function that is pre-bound to the SWR's key.
* You can get the mutate function from the useSWRConfig() hook, and broadcast a revalidation message globally to other SWR hooks* using the same key by calling mutate(key).
```
  const { data, error, isValidating, mutate } = useSWR(address, engineDataFetcher);
  ...
  mutate();
```

Data sources:
* https://reactjs.org/docs/hooks-reference.html#usestate
* https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
* https://swr.vercel.app/docs/getting-started
* https://swr.vercel.app/docs
