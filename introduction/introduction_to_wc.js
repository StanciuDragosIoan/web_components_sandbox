/*

    INTRODUCTION TO WEB COMPONENTS

    src: https://ultimatecourses.com/blog/the-ultimate-guide-to-web-components


    Web Components were officially introduced by Alex Russell at Fronteers
    Conference 2011 and Google began standardizing it in 2013.


    What are web components?

        Web Components are a set of different technologies that allow you to build reusable, encapsulated
        and interoperable HTML elements, that can be used in web applications. Features, built on the Web
        Component standards, can be used with (or without) any JavaScript library or framework (i.e. Angular,
        React and Vue) and will work across all modern browsers.

    Web Components are based on four core technologies:

        # Custom Elements;
        # HTML Templates;
        # Shadow DOM;
        # ES Modules.


        Custom Elements ->

                Custom Elements are a set of APIs that provide a way for developers to extend
                HTML elements, build new ones and define their behavior.Because Custom Elements
                are based on existing web standards, defined by the W3C consortium, they can be
                reused in very different contexts. This makes it easier to build applications in
                a modular way! It also leads to increased readability, maintainability and
                interoperability of code. Custom Elements are the building blocks of Web Components.



        HTML Template ->

                HTML Templates are a way to declare code fragments that aren’t rendered at page load,
                but can be cloned and inserted in the document during runtime using JavaScript. We’ve
                all written HTML before, so now you think componentize your HTML by dropping it into a
                template – we now have first-class browser support for this which is a fantastic addition
                to the web platform. It also doesn’t matter how many times we might use that element and
                template, it is cloned in the browser and only parsed once – giving us a nice performance boost.

                During rendering, a template doesn’t represent anything. As a matter of fact: The contents aren’t
                even children of the element! Instead, it’s stored in a DocumentFragment without browsing context
                (an environment where objects are presented to the user) to prevent it from interfering with the
                rest of the application. This means that your templates will only be rendered when requested.



        Shadow DOM ->

                First an award for the coolest sounding API, Shadow DOM is a web standard that allows you to
                encapsulate style and markup in a scoped DOM subtree that can be linked to any HTML element.
                A scoped DOM subtree encapsulated in a Web Component is called a Shadow Tree and a component
                to which this tree is linked is called the Shadow Host.

                Although HTML and CSS are encapsulated, it’s still possible for an element to emit events that
                can be captured by other parts of an application. Besides that, the Shadow DOM ensures that a
                component will work in any environment, even if other CSS or JavaScript is at play on the page.
                We’ll be exploring these in more detail as we continue through this post and the series! You can
                also adjust your Developer Tools settings to view Shadow DOM and more whilst inspecting elements.


        ES Modules ->

                Modules are a way to bundle a collection of small, independent functionalities into a library and
                import them into other JavaScript files. About every programming language has a standard implementation,
                except JavaScript (and that probably didn’t come as a surprise). There were solutions like CommonJS or AMD,
                but there was no standard solution available – until recent!

                This changed with the introduction of ES Modules in ES2015 (ES6), which finally made a standard available
                for working with modules. The API provides a syntax that makes it possible to export a class, function,
                or any variable binding or declaration. You just have to use the export prefix and you’re set!

         

*/

// e.g.code snippet module

//export a class
export class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    greet() {
        return `Hello, my name is ${this.name}!`;
    }
}

// export a function
export function greet(name) {
    return `Hello, my name is ${name}!`;
}

/*
    You can then import the exported functionality into your application with the import keyword and use it right away.

    Example:
*/

// import a class
import { Animal } from './lib-class-example.js';

const animal = new Animal('Mr. Mittens', 'cat');
const name = animal.greet();
// --> Hello, my name is Mr. Mittens!;

// import a function
import { greet } from './lib-function-example.js'

const greeting = greet('Mr. Mittens');
// --> Hello, my name is Mr. Mittens!;


/*
    WHY WEB COMPONENTS

        With the introduction of web components the HTML standard is being raised to a higher level. They offer many
        benefits, like reusability, readability, maintainability, consistency and interoperability and thus form an
        indispensable toolset for developers.


        Reusability ->

            Writing code with the DRY principle in mind ensures that an application stays easy to understand, reusable
            and maintainable and with Web Components this becomes easier than ever. In the past this was a tedious task,
            because encapsulating code with minimal dependencies and a clear API was very hard to accomplish. JavaScript frameworks like Angular, React and Vue all tried to solve this by providing their own engines, but there is
            no easy way to bring them together.

            Web Components are, by definition, encapsulated with minimal dependencies and provide a clear API. This makes them extremely reusable and, as developers this boosts our productivity.


        Readability ->

            As we stated above, writing code with the DRY principle in mind ensures that an application stays easy to
            understand and code readability is key to that.

            Consider the following example of a card component:

            <div class="card">
                <div class="card-header">
                    <h3 class="card-header__title">Header title</h3>
                    <h4 class="card-header__subtitle">Header subtitle</h4>
                </div>
                <div class="card-body">
                    <h3 class="card-body__title">Body title</h3>
                    <div class="card-body__content">Lorem ipsum...</div>
                </div>
                <div class="card-footer">
                    <div class="card-footer__content">...dolor sit amet</div>
                    <button class="card-footer__confirm-button">confirm</button>
                    <button class="card-footer__cancel-button">cancel</button>
                </div>
            </div>


            It can become quite complex and unclear pretty fast. Especially if the body contains large amounts of text or
            an HTML structure of its own. Let’s take a look at the same example, but envision how we might build it out with
            Web Components:


            <card-component is-confirmable is-cancelable>
                <card-header title="Header title" subtitle="Header subtitle"></card header>
                <card-body title="Body title">Lorum ipsum...</card-body>
                <card-footer>...dolor sit amet</card-footer>
            </card-component>


            It’s far cleaner and much easier for humans to read and understand, because the semantics have improved enormously and all the HTML is encapsulated in the component.




        Maintainability ->

            Thanks to the encapsulating nature of Web Components, applications become more readable and features become reusable, which results into less application code that’s easier to debug and to maintain. Things are compartmentalized and can be individually tested, written and then brought together as a whole to compose an application. No more 1000 line files of code.



        Interoperability ->

            JavaScript frameworks like Angular, React and Vue are great! They take huge amounts of work out of developers hands by providing scaffolding, best practices and guidelines, but aren’t very interoperable (they don’t really communicate to each other very well). This is because they all use their own component models and solutions to solve web development challenges.


            Web Components are based on natively supported web standards and therefore should work in every JavaScript application,thus making it extremely interoperable and this is great news for developers. It means that you never have to build the same functionality for different frameworks anymore. You Only Have To Build It Once (YOHTBIO)  and you’re able to reuse it in any JavaScript application, which becomes more readable, maintainable and usable.




        Consistency ->

            Thanks to the reusable and interoperable nature of Web Components teams don’t have to build the same components in different frameworks anymore. YOHTBIO. This not only improves the consistency of components, it also reduces application size and improves maintainability.




    HOW TO CREATE A WEB COMPONENT

        Rules to follow when creating a web component:

            You can’t register the same Custom Element tag more than once.

            Web Components cannot be self closing, because the HTML standard only allows this for certain elements. The elements for which this is permitted are: area, base, br, col, embed, hr, img, input, link, meta, param, source, track, wbr.

            The name of a Web Component needs to contain a dash (-). This naming convention is put into place to enable the HTML parser to distinguish custom from regular elements and also avoid creating your own components that could be added as part of future HTML standards. <mycard></mycard>, <card></card> or <CardComponent></CardComponent> are all invalid names, while <my-card></my-card> is allowed.



        There are 2 ways of creating web components:


            Autonomous custom elements: a completely new and unique HTML tag where all behaviour needs to be defined by the creator.


            Defining customized built-in elements: extends an existing HTML element (i.e. <button> or <a>) and inherits all of the element’s features.


            ### Creating an autonomous custom element ->

                Creating Web Components requires the power of JavaScript and the basic approach looks a bit like this:

                    Create an ES6 Class that extends HTMLElement to define the component’s API.

                    Register the component to the browsers Custom Elements Registry. This interface provides methods for querying existing and registering new components. We can register it by calling the CustomElementRegistry.define() method.

                    [optional] Attach an instance of the Shadow DOM to the component.

                    [optional] Define a HTML template using <template> and attach a clone of it to the component or the component’s Shadow DOM.

                    Example: Build an awesome card component <awesome-card> – Create and Register (see awesome_card_demo_basic.html)

                            ### sample code snippet:

                                // Create an ES6 class which extends HTMLElement
                                    class AwesomeCardComponent extends HTMLElement {
                                    // This is where the component's API lives
                                    }

                                    // Register our awesome card component to the Custom Elements Registry
                                    customElements.define('awesome-card', AwesomeCardComponent);

                                    // Example usage in your app:
                                    <awesome-card></awesome-card>



                    Example2:

                        We now have our basic Web Component in place, but it doesn’t do anything special. Let’s expand our API to detect a greeting attribute and attach its contents to the component’s innerHTML (see awesome_card_demo_extended_api.html).




            ### Customizing built-in elements:

                    NOTE: Only Chrome v67 and up supports customized built-in elements!

                    The second method of creating Web Components is to extend existing HTML elements. Let’s create an <awesome-button> component that extends the HTML native <button> element.

                    Example: Build an awesome button component <awesome-button> – Extend and Register (see awesome_button.html)


                    Example 2:  Build an awesome button component <awesome-button> – Extend the component’s API

                        see awesome_button_component_extends_component_api.html



    WEB COMPONENTS BROWSER SUPPORT

            Evergreen browsers (Chrome, Firefox and Safari) are currently supporting Custom Elements V1 and Shadow DOM
            V1 and Edge is currently working on support. HTML Elements and ES Modules are natively supported by them
            already. In the meantime there’s a set of polyfills available that simulate the missing browser functionalities
            and which allow you to use Web Components in all evergreen browsers and even Internet Explorer 11


    CLOSING THOUGHTS

            Web Components are a set of different technologies that allow you to build reusable, encapsulated and interoperable HTML elements that can be used in any JavaScript application. They offer great benefits by improving the reusability, readability, maintainability, interoperability and consistency of applications and save developers enormous amounts of time and frustration.
*/
