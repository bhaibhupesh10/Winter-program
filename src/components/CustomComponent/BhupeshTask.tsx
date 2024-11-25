"use client"
import react from "react"
import { useState } from "react"
import { useRef } from "react"
const BhupeshTask = () => {
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("red");
    const myref = useRef<HTMLDivElement>()

    const changeColor = () => {
            
    }
    return (import { useState } from "react";
    import { Collapsible } from "@/components/ui/collapsible";
    
    const sections = [
      {
        title: "Section 1",
        topics: [
          { title: "Topic 1", isHandsOn: true },
          { title: "Topic 2", lectures: 4 },
        ],
      },
      {
        title: "Section 2",
        topics: [
          { title: "Topic 3", isHandsOn: true, lectures: 2 },
          { title: "Topic 4" },
        ],
      },
    ];
    
    const handleCollapsibleToggle = (index: number) => {
      // ...
    };
    
    const openSection = 0;
    
    const MyComponent = () => {
      return (
        <div>
          {sections.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              topics={section.topics.map((topic) => ({
                ...topic,
                lectures: topic.lectures || 0,
              }))}
              isOpen={openSection === index}
              onToggle={() => handleCollapsibleToggle(index)}
            />
          ))}
        </div>
      );
    };
        <div className="w-full h-12 mx-auto bg-green-500">
            <input onChange={(e) => setColor(e.target.value)} type="text"></input>
            <h1>{count}</h1>
            <div ref={myref} className={`h-8 w-8  bg-${color}-500`}>
                <h1>{color} Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id, eos rem iste ducimus accusantium tempore, adipisci assumenda cupiditate iusto suscipit eligendi fuga excepturi minima ex quidem. Voluptates, dolores facilis!</h1>
            </div>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
export default BhupeshTask;
