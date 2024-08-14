import { useState } from "react";
import { IoAdd } from "react-icons/io5";


export const FAQBox=({data})=>{
  const [openItemId, setOpenItemId] = useState(data[0].id);

  const toggleOpen = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

    return(
      <div className="container mt-10">
      {data.map((item)=>{
        return(
          <div className="faq-item" key={item.id}>
          <div className="faq-question" onClick={() => toggleOpen(item.id)}>
           <h6 className={openItemId === item.id ? 'text-purple' : 'text-black'}><IoAdd className="mx-1"/>{item.q}</h6>
          </div>
          {openItemId === item.id && (
            <div className="faq-answer" dangerouslySetInnerHTML={{__html:item.ans}}/>
          )}
        </div>
        )
      })}
      </div>
    )
}
