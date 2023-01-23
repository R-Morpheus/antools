import React from 'react';
import './newComerTools.css'
import MyButton from "../../UI/button/button";
import Tool from "../tools/tool/Tool";
import {tools} from "../../store/data";


const NewComerTools = () => {
  const tool = tools.tool
  return (
      <div className='newcomer__container'>
        <div className='newcomer__block'>
          <h3 className='newcomer__header'>Newcomer Tools</h3>
          <p className='newcomer__description'>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
          <MyButton children={'Explore more'}/>
        </div>
        <div className='newcomer__tools'>
          {tool.filter((tool) => tool.new).map((tool, index) => {
            return (<Tool style={{width: '300px', height: '300px'}}
                          icon={tool.icon}
                          name={tool.name}
                          description={tool.description}
                          price={tool.price}
                          key={index}
            />
          )})}
        </div>
      </div>
  );
};

export default NewComerTools;