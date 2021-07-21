

##### removeCar

* Go to `redux/actions.js` and create a new function called `removeCar`. You can copy paste directly from the `addCar` function however we want to change the parameter from "car" to "index" in both places. Also, (this may seem like a given) change the type to "REMOVE_CAR".
    * Why are we changing "car" to "index"? Because that's an easy way to remove an item from an array. If I know its index, I can `splice` it. So this time we are going to pass an "index" value to the "removeCar" prop instead of a car object.

* Once that's done it's time to update our reducer again. Go to `redux/reducers.js` and make another case statement for `REMOVE_CAR`. In this one, create a copy of the state and then splice the index out of it. Finally, return the copy variable you created. If you forget, the "splice" function takes a starting index and a number of items to delete as its parameters so it will look like this: `splice(action.value, 1)` where action.value is the index we are passing.

* Ok so since the button we want to tie this to is in the Dashboard component and it already has a container.. we don't need to create a new one. We do need to go to `containers/Dashboard.js` and add the `mapDispatchToProps` function though. Do that right below that `mapStateToprops` one. This function should return an object with a key of "removeCar" and a value of `(index) => dispatch(removeCar(index))`. Also, don't forget to import that `{ removeCar }` action at the top of the file. We also need to ensure that we pass the `mapDispatchToProps` function to `connect`.

* Now that everything is hooked up we need to use our new action. In the Dashboard.js COMPONENT, create an "onClick" method on the Icon (the last TableCell) that is a function. It should call `props.removeCar` with the index. The current index can be found in the beginning of the map function. Its value is "idx".

* When you click the trash can icon the corresponding row should be removed. Is it working? If not, ask the instructor for direction.

##### Pie Chart & Total

* Now that we have that working we are going to practice what we learned last class and add containers and mapStateToProps function for the `Chart` and `Total` components. Why? Because we want these to always have the current "cars" information. We'll see how this is useful in a second.

* Create a file called `Total.js` underneath the "containers" folder and create a `mapStateToProps` function. You can use the `Car.js` file as an example and simply change the component from "Car" to "Total".

* Next, go to the Dashboard COMPONENT and change the import for "Total" to reference the container instead of the component. Ex. `import Total from './Total'`

* Finally, go to the `Total.js` file under the components folder and change the number "4" to `{props.cars.length}`. The total should now display "20".

* Go ahead and add and remove items from the table. Notice the total update in real time. This is something that wouldn't have been possible with normal React state because the information for "Total" lives in a different component. Components are meant to be re-usable so if we ever wanted to put this "Total" somewhere else in our application we could just import it and use it like in dashboard and it will always have the correct cars data.

* Now we need to do the same thing for the `Chart` component. Create a file called `Chart.js` under containers and hook up the `mapStateToProps` function so that it has access to the "cars" prop. You can copy from `Total` and change the component names.

* Once again in Dashboard COMPONENT, change the Chart import so that it points to the container.

* Finally, in `components/Chart.js` above the return statement, create two variables called "over" and "under". Use the "filter" method to filter the "props.cars" for cars whose horsepower match the criteria. Then use those values in the corresponding Pie Chart. They will be "over.length" and "under.length"

* You should see 4 (red) over 200 and 16 (orange) under 200. But wait.. since this data is connected to Redux it will change according to our actions. So go ahead and delete 3 cars whose horsepower is under 200. Did you see the chart change? Again, since Dashboard, Chart and Total are all referencing the same data... they will always be in sync. The addition of the Pie Chart will always equal the total.

* One more thing, when you remove a user from the list you can also go to the homepage and notice that its card has also been removed. Pretty cool, huh? It's all tied together.
