import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function FAQ({ items }) {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  return (
    <div className="space-y-4 mb-3 w-fit">
      {items.map((item, index) => (
        <Accordion 
          key={index} 
          open={open === index} 
          icon={<Icon id={index} open={open} />}
          className="border border-gray-300 rounded-lg shadow-md"
        >
          <AccordionHeader 
            onClick={() => handleOpen(index)} 
            className=" px-4 py-3 text-[1rem] font-semibold text-black bg-gray-200 hover:bg-gray-100 transition-all rounded-t-lg"
          >
            {item.question}
          </AccordionHeader>
          <AccordionBody className="px-4 py-3 bg-white text-gray-600 text-[0.9rem] font-medium">
            {item.answer}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
