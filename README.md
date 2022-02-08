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
- [ ] SWR can be used for calling backend services. It implements a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
- [ ] install SWR
- [ ] Declare the SWR fetcher
- [ ] Define the service with SWR <=> (Import SWR & Use SWR)
- [ ] Use the service (based on swr) in a component

## Extra topics

- [x] [Use Context sparingly because it makes component reuse more difficult](https://reactjs.org/docs/context.html#before-you-use-context)
- [x] [Component composition](https://krasimir.gitbooks.io/react-in-patterns/content/chapter-04/)
- [x] [Context is lost at page rerfesh or redirect](https://github.com/BackToTech-Study/ReactStates/blob/main/src/App.js)
- [ ] [Dependecy injection](https://krasimir.gitbooks.io/react-in-patterns/content/chapter-10/)
- [ ] [Inversion of control](https://kentcdodds.com/blog/inversion-of-control)
- [ ] [Using multiple contexts](https://reactjs.org/docs/context.html#updating-context-from-a-nested-component)
- [ ] [Multiple component states](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables)

