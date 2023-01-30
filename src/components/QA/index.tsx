import { useState } from "react";
import { Accordion, Collapse } from "./styles";

import { ReactComponent as Plus } from "../../assets/mais.svg";
import { ReactComponent as Minus } from "../../assets/menos.svg";

interface IQAProps {
  title: string;
  content: string;
  list: string[];
}

export const QA = ({ title, content, list }: IQAProps) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const toggleCollapse = () => {
    setCollapse((value) => !value);
  };
  return (
    <Accordion className="p-2">
      <button
        className="w-100 d-flex align-items-center justify-content-between bg-transparent border-0"
        onClick={toggleCollapse}
      >
        {title}{" "}
        <span>
          {!collapse ? (
            <Plus width={"20px"} height={"20px"} />
          ) : (
            <Minus width={"20px"} height={"20px"} />
          )}
        </span>
      </button>
      {collapse && (
        <Collapse className="mt-4">
          <div>{content}</div>
          <div className="mt-3">
            {list?.map((item, index) => {
              const formattedItem = item?.slice(2, item?.length);
              return (
                <div key={index} className="mt-2">
                  <strong>{index + 1}.</strong>
                  {formattedItem}
                </div>
              );
            })}
          </div>
        </Collapse>
      )}
    </Accordion>
  );
};
