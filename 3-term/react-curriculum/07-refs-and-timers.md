#### [⇐ Previous](06-component-life-cycle.md) | [Table of Contents](README.md#table-of-contents) | [Next ⇒](08-immutable-models.md)

# Refs and Timers

## Objectives

- Understand what Refs are
- Build React Applications with multiple components
- Connect components to each other using Refs

## Introduction

While building applications there are many times we want to gain access to nodes inside of our components. While we can sometimes use built in JavaScript DOM traversal methods (nextSibling, previousSibling etc.), those methods are quite clunky and do not make use of anything with React! So how do we do this? `refs` to the rescue! Refs can be values or even callbacks, you can read more about them [here](https://facebook.github.io/react/docs/more-about-refs.html).

Let's revisit our typing assignment and refactor to use refs!

```js
    var App = React.createClass({
      getInitialState: function(){
        return {
          text: ""
        }
      },
      changeText: function(e){
        this.setState({
          text: e.target.value
        })
      },
      clearText: function(e){
        this.setState({
          text: ""
        })
        // USING REFS!
        React.findDOMNode(this.refs.textInput).value = "";
        React.findDOMNode(this.refs.textInput).focus();
      },
      render: function() {
        return (
          <div>
            <h1>{this.props.children}</h1>
            <h1>{this.state.text}</h1>
            <input ref="textInput" id="typing" type="text" onKeyUp={this.changeText} autoFocus/>
            <button onClick={this.clearText}>Clear Text</button>

          </div>
        );
      }
    });

    React.render(<App>Type in here!</App>, document.body)
```

Notice what we have done here. Our input now has a `ref="textInput"` and we are using a method called React.findDOMNode and passing in `this.refs` and the name of our ref to access the underlying node.

### Quick Note

In your exploration of React you may see a method called getDOMNode. This method is **Deprecated**. You can read more about .findDOMNode [here](https://facebook.github.io/react/docs/component-api.html).

### Summary from the React Docs

Refs are a great way to send a message to a particular child instance in a way that would be inconvenient to do via props and state. They should, however, not be your go-to abstraction for flowing data through your application. By default, use the Reactive data flow and save refs for use cases that are inherently non-reactive.

## Exercise

Since we're going to be building larger applications, let's build an example step by step. Try to complete the tasks before looking at the solution.

1. Create three components, Header, App and Form and render the App to the document.body

    ```js
      var App = React.createClass({
        render: function() {
          return (

            )
        }
      });

      var Header = React.createClass({
        render: function() {
          return (
            <h1> </h1>
          );
        }
      });

      var Form = React.createClass({
        render: function() {
          return (
            <div>

            </div>
          );
        }
      });

      React.render(<App/>,document.body)
    ```

2. The Header component should render an `<h1>` with the text of whatever its childrens props are (use `this.props.children`)

    ```js
      var Header = React.createClass({
        render: function() {
          return (
            <h1>{this.props.children}</h1>
          );
        }
      });
    ```

    2. Our App Component should have an initialState with the keys and values of:
      ```js
      {
        val: "",
        checkboxVal: false,
        radioVal: false
      }
      ```

    Answer:

    ```js
      var App = React.createClass({
        getInitialState: function(){
          return {
            val: "",
            checkboxVal: false,
            radioVal: false
          }
        },
        render: function() {
         return (
            <h1>Some things will go here....</h1>
          )
        }
      });  
    ```


3. Our app should have a method called `update` that takes in three parameters (text, checkboxVal and radioVal) and sets the state to be equal to the three parameters).

    ```js
     var App = React.createClass({
      getInitialState: function(){
        return {
          val: "",
          checkboxVal: false,
          radioVal: false
        }
      },
      update: function(text,checkboxVal,radioVal){
        this.setState({
          val: text,
          checkboxVal: checkboxVal,
          radioVal: radioVal
        })
      },
      render: function() {
        return (
          <h1>Some things will go here....</h1>
        )
      }
    });
    ```

3. Your App component should render the Header with the text "Yeah!" as well an `<h1>` with the text "Form Values" and then a `<ul>` with the following `<li>`s
  - One that has the text "Input:" and then whatever the state of val is.
  - One that has the text "Checkbox:" and then whatever the state of checkboxVal is.
  - One that has the text "Radio:" and then whatever the state of radioVal is.

    ```js
      var App = React.createClass({
        getInitialState: function(){
          return {
            val: "",
            checkboxVal: false,
            radioVal: false
          }
        },
        update: function(text,checkboxVal,radioVal){
          this.setState({
            val: text,
            checkboxVal: checkboxVal,
            radioVal: radioVal
          })
        },
        render: function() {
          return (
            <div>
              <Header>Yeah!</Header>
              <h1>Form Values</h1>
              <ul>
                <li>Input: {this.state.val}</li>
                <li>Checkbox: {this.state.checkboxVal.toString()}</li>
                <li>Radio: {this.state.radioVal.toString()}</li>
              </ul>
            </div>
          )
        }
      });
    ```

4. In our `render` method for our App component, after the `</ul>`, let's add the Form component and give it a prop of onCustomSubmit with a value of the result of the update method we defined above.

    ```js
      var App = React.createClass({
        getInitialState: function(){
          return {
            val: "",
            checkboxVal: false,
            radioVal: false
          }
        },
        update: function(text,checkboxVal,radioVal){
          this.setState({
            val: text,
            checkboxVal: checkboxVal,
            radioVal: radioVal
          })
        },
        render: function() {
          return (
            <div>
              <Header>Yeah!</Header>
              <h1>Form Values</h1>
              <ul>
                <li>Input: {this.state.val}</li>
                <li>Checkbox: {this.state.checkboxVal.toString()}</li>
                <li>Radio: {this.state.radioVal.toString()}</li>
              </ul>
              <Form onCustomSubmit={this.update}/>
            </div>
          )
        }
      });
    ```

5. Let's move onto our `Form` component. Our Form component should render a `<div>` with a `<form>` inside. The form should have an onSubmit event that runs a method called captureValue. This means we will also have to define a method called captureValue.

    ```js
      var Form = React.createClass({
        captureValue: function(){

        },
        render: function() {
          return (
            <div>
              <form onSubmit={this.captureValue}>

              </form>
            </div>
          );
        }
      });
    ```

6. Inside our form, let's add four inputs
  - A text input with a ref of "text"
  - A checkbox with a ref of "checkbox"
  - A radio button with a ref of "radio"
  - An input with a type of submit and a value of "change things!"

    ```js
      var Form = React.createClass({
        captureValue: function(){
        },
        render: function() {
          return (
            <div>
              <form onSubmit={this.captureValue}>
                <input type="text" ref="text"/>
                <input type="checkbox" ref="checkbox" />
                <input type="radio" ref="radio" />
                <input type="submit" value="Change things!" />
              </form>
            </div>
          );
        }
      });
    ```

7. Our captureValue method should first prevent the default, and then let's define a few variables, `inputText`, `checkboxValue` and `radioValue`.
  - `inputText` is equal to the value of the text input (use React.findDOMNode) and (this.refs.text) to access this element
  - `checkboxValue` is equal to `true` or `false` and is determined by whether the checkbox is checked
  - `radioValue` is equal to `true` or `false` and is determined by whether the radio button is clicked

  Finally, let's call our onCustomSubmit method (that was passed to us as props from the App component) and pass in `inputText`, `checkboxValue` and `radioValue`.

    ```js
      var Form = React.createClass({
        captureValue: function(e){
          e.preventDefault();
          var inputText = React.findDOMNode(this.refs.text).value
          var checkboxValue = React.findDOMNode(this.refs.checkbox).checked
          var radioValue = React.findDOMNode(this.refs.radio).checked
          this.props.onCustomSubmit(inputText,checkboxValue,radioValue)
        },
        render: function() {
          return (
            <div>
              <form onSubmit={this.captureValue}>
                <input type="text" ref="text"/>
                <input type="checkbox" ref="checkbox" />
                <input type="radio" ref="radio" />
                <input type="submit" value="Change things!" />
              </form>
            </div>
          );
        }
      });
    ```

8. We should now see our text changing when we submit the form depending on what we have checked! It would be really cool if we could change the header depending on whether the box is checked. Lets write two methods in our App component, one called renderMeanHeader and renderNiceHeader and then inside our render method, if the checkbox is checked `return` the `renderNiceHeader` otherwise return the `renderMeanHeader`

    ```js
      var App = React.createClass({
        getInitialState: function(){
          return {
            val: "",
            checkboxVal: false,
            radioVal: false
          }
        },
        update: function(text,checkboxVal,radioVal){
          this.setState({
            val: text,
            checkboxVal: checkboxVal,
            radioVal: radioVal
          })
        },
        renderNiceHeader: function(){
          return (
            <div>
              <Header>Yeah!</Header>
              <h1>Form Values</h1>
              <ul>
                <li>Input: {this.state.val}</li>
                <li>Checkbox: {this.state.checkboxVal.toString()}</li>
                <li>Radio: {this.state.radioVal.toString()}</li>
              </ul>
              <Form onCustomSubmit={this.update}/>
            </div>
            )
        },
        renderMeanHeader: function(){
          return (
            <div>
              <Header>Boo!</Header>
              <h1>Form Values</h1>
              <ul>
                <li>Input: {this.state.val}</li>
                <li>Checkbox: {this.state.checkboxVal}</li>
                <li>Radio: {this.state.radioVal}</li>
              </ul>
              <Form onCustomSubmit={this.update}/>
            </div>
            )
        },
        render: function() {
          if(this.state.checkboxVal){
            return this.renderNiceHeader()
          } else {
            return this.renderMeanHeader()
          }
        }
      });
    ```

9. Your script.js should look like this now.

    ```js
      var App = React.createClass({
        getInitialState: function(){
          return {
            val: "",
            checkboxVal: false,
            radioVal: false
          }
        },
        update: function(text,checkboxVal,radioVal){
          this.setState({
            val: text,
            checkboxVal: checkboxVal,
            radioVal: radioVal
          })
        },
        renderNiceHeader: function(){
          return (
            <div>
              <Header>Yeah!</Header>
              <h1>Form Values</h1>
              <ul>
                <li>Input: {this.state.val}</li>
                <li>Checkbox: {this.state.checkboxVal.toString()}</li>
                <li>Radio: {this.state.radioVal.toString()}</li>
              </ul>
              <Form onCustomSubmit={this.update}/>
            </div>
            )
        },
        renderMeanHeader: function(){
          return (
            <div>
              <Header>Boo!</Header>
              <h1>Form Values</h1>
              <ul>
                <li>Input: {this.state.val}</li>
                <li>Checkbox: {this.state.checkboxVal.toString()}</li>
                <li>Radio: {this.state.radioVal.toString()}</li>
              </ul>
              <Form onCustomSubmit={this.update}/>
            </div>
            )
        },
        render: function() {
          if(this.state.checkboxVal){
            return this.renderNiceHeader()
          } else {
            return this.renderMeanHeader()
          }
        }
      });

      var Header = React.createClass({
        render: function() {
          return (
            <h1>{this.props.children}</h1>
          );
        }
      });

      var Form = React.createClass({
        captureValue: function(e){
          e.preventDefault();
          var inputText = React.findDOMNode(this.refs.text).value
          var checkboxValue = React.findDOMNode(this.refs.checkbox).checked
          var radioValue = React.findDOMNode(this.refs.radio).checked
          this.props.onCustomSubmit(inputText,checkboxValue,radioValue)
        },
        render: function() {
          return (
            <div>
              <form onSubmit={this.captureValue}>
                <input type="text" ref="text"/>
                <input type="checkbox" ref="checkbox" />
                <input type="radio" ref="radio" />
                <input type="submit" value="Change things!" />
              </form>
            </div>
          );
        }
      });

      React.render(<App/>,document.body)
    ```

DEMO:

[![Gyazo](https://i.gyazo.com/3e831d2a66076f23288883c7e60e8e60.gif)](https://gyazo.com/3e831d2a66076f23288883c7e60e8e60)

## Bonuses

- We are repeating ourselves a bunch with the renderFormWithNiceHeader and renderFormWithMeanHeader, how could we clean this up?
- What happens if the checkbox is checked when the component is mounted? This will break our view - how can we fix it?

## Questions

* What are refs? Why do we use them?
* How do we access information from refs? What method do we use?
* What are some of the benefits of refs? What are some drawbacks or anti-patterns to watch out for? (Check out the summary from the react docs for some hints)

## Assignment

* Create an RGB color slider!

    [![Gyazo](https://i.gyazo.com/b13bf019ecb65aebfc9c786ac329d657.gif)](https://gyazo.com/b13bf019ecb65aebfc9c786ac329d657)

  Suggestions:

  1. Make two components for your app: `App` and `Slider`.
  2. Your `App` component should display the current RGB values to the user (both numerically and with the actual color), along with sliders to change each value.
  3. Your `App` should set the initial state of each slider, and should have an `update` method to update the state whenever the user moves a slider.
  4. Each `Slider` should contain an `input` with a `type` attribute of `range`, a `min` attribute of 0 and a `max` attribute of 255.
  5. Use `refs` to properly identify the sliders when you need to update!

* Read [this](https://facebook.github.io/react/docs/working-with-the-browser.html) for a better understanding of working with React's virtual DOM.
* Read [this](https://facebook.github.io/react/docs/more-about-refs.html#summary) summary on refs - it is essential to understand when and when not to use them.
* Read [this](http://stackoverflow.com/questions/25941585/react-refs-with-components) post on when to NOT use refs
* Watch [this](https://egghead.io/lessons/react-using-refs-to-access-components) video and build the application. Refactor this app to use the React.findDOMNode method.

#### [⇐ Previous](06-component-life-cycle.md) | [Table of Contents](README.md#table-of-contents) | [Next ⇒](08-immutable-models.md)
