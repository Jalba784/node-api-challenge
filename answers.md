## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

- [ ] Mention two parts of Express that you learned about this week.

        This week I learned about routing and and how to use build a basic server
        using express. Routing is very beneficial in response to a client's request
        because it allows the client to access specific data that pertains to the
        endpoint and not all of the data at once. Express also makes it easier 
        for a developer to establish a server with fewer lines of code than the
        contrary of using http with node and writing many more lines of code 
        plus having to handle all the response methods individually. 

- [ ] Describe Middleware?

        Middleware can be cataloged as small functions that handle a certain
        aspect of the application, the most common being loggers. Middleware
        can come right out of the box in express or from a third party or
        it could even be created by the developer. 

- [ ] Describe a Resource?

        It is the key abstraction of information in a REST API. 

- [ ] What can the API return to help clients know if a request was successful?

        An http status code that depicts an error or success code and/or a json
        objecct with an appropriate message.

- [ ] How can we partition our application into sub-applications?

        Routers can be used to partition the application into sub-applications.