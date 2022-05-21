import React from 'react';

const Blogs = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center mb-4'>This is my blogs</h2>
            <p>Q-1.
                <small>Difference between "javascript" and "Node.js"</small>
            </p>
            <p className='border rounded p-3'>
                <p>A scripting language is Javascript. Javascript is only available in browsers. It is mostly utilized by the client. In frontend development, Javascript is utilized. It is mostly utilized by the client. Javascript has the ability to add HTML and manipulate the DOM. Javascript can run in any browser engine, including Safari's JS core and Firefox's Spidermonkey.</p>

                NodeJS is a cross-platform, open-source Javascript runtime environment that enables server-side javascript execution. Javascript code may now execute outside of the browser thanks to Nodejs. Nodejs is a web development framework with a large number of modules. V8 is the node.js Javascript engine that parses and executes Javascript.
            </p>
            
            <p>Q-2.
                <small>When should uou use "Node.js" and when should you use "mongodb"</small>
            </p>
            <p className='border rounded p-3'>
                Any project requires a programming environment and a runtime library that can build and understand your code and provides basic programming tools and assistance.Nodejs is a Javascript programming language tool.

                If your application requires the capacity to save data so that it can be effectively queried or updated later, you'll almost certainly need to utilize MongoDB.        
            </p>

            <p>Q-3.
                <small>Differences between sql and nosql databases</small>
            </p>
            <p className='border rounded p-3'>
                On the other hand, SQL databases are table-based. Key-value pairs, document-based, graph databases, and wide-column stores are all types of NoSQL databases. As a result, relational SQL databases are a preferable choice for applications that need multi-row transactions, such as accounting systems, or for legacy systems that were designed with a relational structure in mind.
            </p>

            <p>Q-4.
                <small>What is the purpose of jwt and how does it work</small>
            </p>
            <p className='border rounded p-3'>
                <p>JWT "JSON Web Token" is an open standard that allows two parties a client and a server to communicate security information. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.</p>

                JWTs are unique among web tokens in that they include a set of claims. Claims are a type of communication between two parties. What these assertions are will vary based on the use case. A claim might specify who issued the token, how long it is valid, or what permissions the client has been given.

                A JWT is a three-part string separated by dots (.) that is serialized using base64. The JWT looks like this in the most common serialization format, compact serialization: xxxxx.yyyyy.zzzzz.
            </p>
        </div>
    );
};

export default Blogs;