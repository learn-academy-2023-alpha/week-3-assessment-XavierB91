# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:JSX is a javascript extension that allows you to use HTML elements directly into javascript. JSX is a basically a mixture of both HTML and Javascript. One syntax difference between HTML and JSX is that JSX requires you to return a parent element or it won't compiile,whereas HTML does not require an parent element.  JSX converts HTML tags into react elements. 


Researched answer: JSX is an HTML-like syntax used by React. JSX allows HTML-like text to co-exist with Javascript/ React code. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML into React. The major difference between JSX and HTML is that JSX requires that an nested JSX must return a single element, which is called an parent element. Just like an parent, the parent compenent passes down data to it's child compenents to enact upon.  If there is no parent element wrapping up the other elements, the JSX will not compile. Within JSX the user can add Javascript(logic, functions, variables etc) as well as using {curly braces} inside the HTML. sources : https://soshace.com/jsx-vs-html-overview-answers-to-faqs/
https://medium.com/@sjarancio/what-is-jsx-e3dda0af3490  https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/#:~:text=One%20of%20the%20major%20differences,makes%20the%20code%20more%20readable.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?


Your answer:Yarn is a command that starts the server on your react app file. Running the command on the Create React App will bring your project from code to the web browser. Basically it will take your project's code and compile everthing together. 

Researched answer: Yarn is an open source Javascript package manager developed by Facebook. Package managers are a way to automate the processs of installing, updating, and removing pieces of software (i.e. packages). Yarn installs packages from a global registry into the computer engineer's local laptop. most projects have tens and hundreds of packages within it's dependecies. Yarn in particular is a package manger for Node.js that has a focus on security, speed and consistency with the code. sources: https://engineering.fb.com/2016/10/11/web/yarn-a-new-package-manager-for-javascript/
https://www.keycdn.com/blog/npm-vs-yarn
https://www.geeksforgeeks.org/what-are-the-differences-between-jsx-and-html/


3. What is a React component? 


Your answer:  A React component is one of the core building blocks of the React program.  A react component is a basically a piece of reusable code used in React, allowing the user to passdown information from a parent component to a child component that is nested within it. Components are the building block of any application created with React.

Researched answer: Components make the task of building user interfaces easier. Components in react allow you to see a User interface broken down into multiple individual pieces and work on them independently and merge them all in a parent component which will be the final user interface. A react component takes an optional input and returns a react element which is displayed on the users screen. Everything witihin React is a component. Each component returns some HTML but we can return only a single HTML element; inside each component  we can write many child elements. Instead of writing all the code in a single file we can split our user interface into multiple components.  We can then extract the code which is used for some unique purpose into a separate component and use that component wherever we want in our app, instead of rewriting and duplicating the code.  sources : https://www.educative.io/answers/what-is-a-react-component, https://www.geeksforgeeks.org/reactjs-components/, https://reactjs.org/docs/components-and-props.html
 

4. What is the difference between state values and props in React? 

Your answer: Both state values and props in react act as components that hold information which determines how the output what will be rendered on screen. However, states are managed within the component whereas, props can be  passed down from outside of the component via it's parent component.  

Researched answer:  We can pass the data between the compoenets in react using props and state values. 
Props(properties) can be used to pass data from one component to another. Props cannot be modified, read-only, and immutable (cannot be changed).  The state is a local data storage unit that is local to the parent component only cannot be passed down to other components. State vaules are similar to props, however data is only passed from within the component, states are can be both read and wrote on, lastly states are multable (can be changed). Sources : 
https://reactjs.org/docs/faq-state.html#:~:text=While%20both%20hold%20information%20that,variables%20declared%20within%20a%20function). https://lucybain.com/blog/2016/react-state-vs-pros/
https://medium.com/@itIsMadhavan/reactjs-props-vs-state-ff3a7680930d

5. What is the DOM? the Dom represent the UI of our application created within react. A DOM is model (usually portrayed as a tree view) of the web page's source. 

Your answer: DOM stands for "Document Object Model" . the Dom represent the UI of our application created within react. A DOM is model (usually portrayed with tree layout) of the web page's source. 

Researched answer:DOM stands for "Document Object Model" . The DOM in simple words represents the UI of your application. The DOM is a structured representation of the HTML elements that are present within a webpage or app. Everytime there is a change in the state of your application UI, the DOM gets updated to represent that change. The DOM is represented as a tree data structure. Because of that, the changes and updates to the DOM are fast. This tree structure contains a node for each UI element present in the document. The DOM is useful to developers because it's structured format helps to choose specfic targets in the code and it subquentially becomes easier to work and manipulate with.  Additonally, the DOM allows developers to modify the content of thier UI with javascript. Sources : https://www.geeksforgeeks.org/reactjs-virtual-dom/, https://www.geeksforgeeks.org/reactjs-virtual-dom/

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: To be honest I don't know the difference between a div and span from memory. I will do further research and come back with an appropriate answers !

Researched answer: In HTML there are tags that add structure and semantics to the content displated on a webpage.   Div and span are both elements used within HTML. The div and span tage are both used as content wrappers. The div tag is a block element and is used to wrap  large sections of a document. The div tag is most often used to divide page content into readable blocks. You'll often see divs used to group related images, heading, links and paragraphs on a page.
 whereas spans is an inline element used to wraps around small portions of text and images.  The span tag is used to appply styling to a portion of inline content on the page. Span tags are used on small segements of text, links and other HTML elements that appear inline with surrounding content. the major difference between the two is div is a block element and span is an inline element. This means that the div tag takes up the entire width of the screen whereas span confirms to the boundaries of whatever element it contains. https://www.scaler.com/topics/div-and-span-in-html/, https://blog.hubspot.com/website/span-vs-div#:~:text=Span%20and%20div%20are%20both,for%20inline%20organization%20and%20styling.


## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming (OOP) is a programming language model organized around class and objects rather than "actions" and data rather than logic. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.  sources : https://www.educative.io/blog/object-oriented-programming

2. Ruby:Ruby is a popular general-purpose object-oriented programming (OOP) language that focuses on simplicity and productivity. When compared to other programming languages, like C or Java, Ruby is more user-friendly and easier to learn because Ruby has intuitive and English-like syntax. Ruby is a very flexible programming language that allows developers to alter how the language itself works. You can add functionality to core language features or even remove them if you need. Ruby is also a highly portable, cross-platform language. 
sources : https://www.codecademy.com/resources/blog/what-is-ruby-used-for/, https://builtin.com/software-engineering-perspectives/ruby-programming-language

3. Implicit return: When a function is returned values without using the return keyword, it is called an implicit return.All functions will return on their own, even if you don’t write it. It’s how they jump out of the current execution context and move onto the next step of our code. If we don’t return anything, there’s no need to use return, unless we want to exit the function early. sources : https://waylonwalker.com/explicit-vs-implicit-returns-in-javascript/, https://jsfunctions.io/implicit-and-explicit-return-statements

4. Ruby blocks: Ruby blocks are little  functions that can be passed into methods. Blocks are anonymous pieces of code that accept input from arguments and return a value. Blocks are enclosed in a do / end statement or between brackets {} , and they can have multiple arguments. A block looks similar to a method in Ruby. Methods consist of a name, but with blocks we don’t need to write a name, and always pass to a method call.
locks are a handy and powerful feature in Ruby, and we can use them anywhere.
Sources: https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/#:~:text=Ruby%20blocks%20are%20little%20anonymous,they%20can%20have%20multiple%20arguments., https://www.educative.io/answers/what-is-a-block-in-ruby https://www.tutorialspoint.com/ruby/ruby_blocks.htm


5. Ruby hashes:  A hash is a data structure used to store data in the form of UNIQUE key-value pairs, it is a dictonary-like collection of unique keys and thier values. Hashes are very similiar to arrays however unlike arrays, there are no numerical indexes, so the user can access the hash values with keys and allows you to use any object type as it's index.  sources : https://www.rubyguides.com/2020/05/ruby-hash-methods/#:~:text=What%20is%20a%20Ruby%20hash,codes%20(like%20ES%20%E2%87%BE%20Spain),https://ruby-doc.org/core-2.7.0/Hash.html
