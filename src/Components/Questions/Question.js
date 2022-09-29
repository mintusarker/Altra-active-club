import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-section'>
            <h2>Questions :</h2>
            <div className='question'>
                <p className='section'>Question : How does react work ?</p>
                <p>Answer :It defines the logical structure of documents and the way a document is accessed and manipulated. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation. Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>

            </div>
            <br />

            <div className='question'>
                <p className='section'>Question : What are the difference between Props and State ?</p>
                <p>Answer : Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>

            </div>
            <br />

            <div className='question'>
                <p className='section'>Question : What is the function of useEffect except loading data with Api?</p>
                <p>Answer : The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. UseEffect accepts two arguments. The second argument is optional. UseEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.There are several ways to control when side effects run.Some effects require cleanup to reduce memory leaks.Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.We do this by including a return function at the end of the useEffect Hook.the useEffect is used for causing side effects in functional components and it is also capable for handling componentDidMount, componentDidUpdate and componentWillUnmount life-cycle methods of class based components into functional component</p>

            </div>
        </div>
    );
};

export default Question;