/*
    INTRODUCTION TO LIFECYCLE HOOKS IN WEB COMPONENTS

    src: https://ultimatecourses.com/blog/lifecycle-hooks-in-web-components

    What’s a lifecycle hook?

        From the moment a custom element is created to the moment it is destroyed, many "things" can happen in the middle:

            The element is inserted into the DOM

            It gets updated when a UI Event is being triggered

            An element can be deleted from the DOM


        All of the above are called the element’s lifecycle, and we can hook into key events of its life with a number of callback functions, called ‘Custom Element Reactions’.


        Custom Element Reactions are called with special care in order to prevent user’s code from being executed in the middle of a delicate process. They’re delayed to the point that all necessary steps are being executed and therefore look to be executed synchronously. To ensure that the hooks are invoked in the same order as their triggers, every custom element has a dedicated ‘custom element reaction queue’.


        Lifecycle hooks are great, because you don’t have to invent a completely new system for constructing and deconstructing elements yourself. Most of the modern JavaScript Frameworks out there are providing similar functionality, but the big difference with web components is that you have native browser support. So you don’t need to load extra code into your application to be able to use them.




    Which lifecycle hooks are available?

        The following lifecycle hooks are available:

            constructor()

            connectedCallback()

            disconnectedCallback()

            attributeChangedCallback(name, oldValue, newValue)

            adoptedCallback()


    The following example shows an element that has all lifecycle hooks implemented:

        class MyCustomElement extends HTMLElement {
            constructor() {
                super();
            }

            connectedCallback() {
                ...
            }

            disconnectedCallback() {
                ...
            }

            attributeChangedCallback(name, oldValue, newValue) {
                ...
            }

                adoptedCallback() {
                    ...
                }
            }

        see basic.html in basic_lifecycle_implementation for more details



    LIFECYCLE METHODS IN DEPTH:

            constructor() ->

                JavaScript is a functional programming language where everything is a function and the constructor is no exception, but its a bit different from other functions, because its used for creating and intializing ES6 classes and is called when an instance of an element is upgraded (when it’s created or a previously-created one becomes defined by calling the customElements.define() method).

                A constructor can be used for creating an instance of the Shadow Dom, setting up event listeners and for intializing a component’s state, but it’s not recommended to execute tasks like rendering or fetching resources here. That should be deferred to the connectedCallback hook.

                Defining a constructor when creating ES6 classes is actually optional. When undefined, the JavaScript engine will just initiate an empty constructor, but its actually mandatory when creating Custom Elements. This is because a Custom Element is custom and the prototype and constructor are defined by the user.

                While defining a constructor, there are a few rules we need to follow:

                    the first statement in a constructor needs to be a parameterless call to super()
                    to make sure that the component inherits the correct prototype chain and all properties
                    and methods of the class it extends.

                    We can’t use document.write() or document.open().
                        !document.open() opens a document for writing

                    The element’s attributes and children should not be inspected, because they aren’t inserted into the DOM yet and therefore attributes aren’t available to inspect yet.

                    In order to match user’s expectations when using createElement() or createElementNS(), it’s forbidden to gain attributes or children in the constructor method.



            connectedCallback() ->

                When an element is added to the DOM, the connectedCallback method is triggered. From that moment we can be sure that its available in the DOM and we’re able to safely set attributes, fetch resources, run setup code or render templates. Therefore you should try to defer as much as work as possible to this point.

*/