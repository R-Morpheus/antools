import React, {useState} from 'react';
import './tools.css'
import Tool from "./tool/Tool";
import {tools} from '../../store/data'
import MyButton from "../../UI/button/button";
const Tools = () => {
  const [numberOfTool,setNumberOfTool] = useState(6)
  const loadMore = () => {
    setNumberOfTool(numberOfTool + numberOfTool)
  }
  const slice = tools.tool.slice(0, numberOfTool)

  return (
      <div className='tools__container' style={{}}>
        <div className='tools__header__container'>
          <h2 className='tools__header'>Most Popular Tools</h2>
          <p className='tools__description'>Tools for the best Designers and Developers most popularly used in the world</p>
        </div>
          <div className='tool__list'>
            {slice.map((tool, index) => {
              return (
                  <Tool icon={tool.icon}
                        name={tool.name}
                        description={tool.description}
                        price={tool.price}
                        key={index}/>
              )})}
        </div>
        <div className='load__more'>
          <MyButton children={'Load more'} load={true} onClick={loadMore}/>
        </div>
      </div>
  );
};

export default Tools;



