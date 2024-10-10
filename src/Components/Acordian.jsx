
import { useState } from 'react';
import { AcordianItem } from './AcordianItem';
const Data = [
    {
        title: "Understanding React State",
        body: "React state is a powerful feature that allows components to store and manage dynamic data.React state is a powerful feature that allows components to store and manage dynamic data.React state is a powerful feature that allows components to store and manage dynamic data."
    },
    {
        title: "The Importance of JavaScript",
        body: "JavaScript is essential for building interactive web applications, providing the behavior layer of the web.JavaScript is essential for building interactive web applications, providing the behavior layer of the web.JavaScript is essential for building interactive web applications, providing the behavior layer of the web."
    },
    {
        title: "What is Node.js?",
        body: "Node.js is a runtime that allows developers to execute JavaScript code outside of the browser, typically on a server.Node.js is a runtime that allows developers to execute JavaScript code outside of the browser, typically on a server.Node.js is a runtime that allows developers to execute JavaScript code outside of the browser, typically on a server."
    },
    {
        title: "Introduction to CSS Grid",
        body: "CSS Grid is a two-dimensional layout system that makes it easier to design web pages without using floats or positioning.CSS Grid is a two-dimensional layout system that makes it easier to design web pages without using floats or positioning."
    },
    {
        title: "Why Learn MongoDB?",
        body: "MongoDB is a NoSQL database that provides high performance, flexibility, and scalability for modern applications.MongoDB is a NoSQL database that provides high performance, flexibility, and scalability for modern applications.MongoDB is a NoSQL database that provides high performance, flexibility, and scalability for modern applications."
    }
];

const Acordian = () => {
    // const [isOpen,setIsOpen] = useState(false)
    const [openIndex, setOpenIndex] = useState(0)


    return (
        <div className='w-[50%] m-auto mt-12 '>
            {
                Data.map((item, index) => {
                    return <AcordianItem key={index} data={item} isOpen={index === openIndex ? true : false}
                        setIsOpen={() => {
                            index === openIndex ? setOpenIndex(null) : setOpenIndex(index)
                        }} />

                })
            }

        </div>
    )
}
export default Acordian