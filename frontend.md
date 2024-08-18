## React Assignment

1. How can you implement shared functionality across a component tree?

a. we can implement shared functionality across a component tree using multiple ways such as :-
* lifting state up.
* context api.
* redux

In the give assignment I stuck with lifting state up as the application is not a huge. By lifting the state up and using props I could achieve sharing the functionality across mulitple components

2. Why is the `useState` hook appropriate for handling state in a complex component?

a. useState provides a straightforward way to manage state that is local to a specific component. This makes it particularly useful in complex components where certain state values do not need to be shared with other components. Each call to useState creates an isolated piece of state that can be updated independently.

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
