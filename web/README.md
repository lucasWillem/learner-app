
# Assignment

> [!IMPORTANT]
> Some of the codebase is boilerplate that I was provided with and that I wasn't expected to improve. Thus there are examples of the Ducks pattern not being used, and of numerous components in a single file which isn't best practice.

## Functional components and hooks are used throughout this application

These components are more sleak than class based components. Less code is required when manipulating state and employing lifecycle methods.

## The Ducks pattern is used for the Redux implementation on the screens that I worked on

- src/components/agnostic/HeaderBar
- src/components/agnostic/Loader
- src/components/agnostic/ModalComponent  
- src/components/app/LearnerPage
- src/components/app/LearnersPage  

## Automated testing

Various automated tests have been included.  This allows for regression testing to preserve the integrity of previously coded features. Due to time constraints there isn't a plethora of them, but all bases have been covered.

- Integration tests to mock Ajax requests and their expected effect on the Redux store.
- integration tests that simulate the dispatch of Redux actions and its effect on the Redux store.
- Tests that simulate user interaction, for example a click event that could fire a Redux
action.
- The testing of conditional rendering dependent on state / props values. In the test included with this assignment only props were supplied to the component that was being shallow rendered.
- Examples of these tests can be found in the HeaderBar, LearnerPage and LearnersPage directories, and the tests can be run from the web directory with npm test.

## Manipulating Reusable Components through Redux actions (in essence an API that the client can consume)

- An example would be the ModalComponent, which is only instantiated in one location (the App.js) and can then be made visible or invisible from anywhere in the application by dispatching the relevant Redux actions to set its visibility.
