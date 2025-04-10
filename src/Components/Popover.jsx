import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

export function PopoverCustomAnimation({
  trigger,
  content,
  placement = "bottom",
  className = "",
  triggerClassName = "",
  contentClassName = "",
  offset = 5,
  animate = {
    mount: { scale: 1, y: 0 },
    unmount: { scale: 0, y: 10 },
  },
}) {
  return (
    <Popover
      placement={placement}
      offset={offset}
      animate={animate}
      className={className}
    >
      <PopoverHandler className={triggerClassName}>
        {trigger}
      </PopoverHandler>
      <PopoverContent className={contentClassName}>
        {content}
      </PopoverContent>
    </Popover>
  );
} 