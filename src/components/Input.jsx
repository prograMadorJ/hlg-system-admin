import React, { forwardRef } from 'react';

import { InputSimple, InputLeftIcon, InputRightIcon } from './styles/Input.style';

export const Input = forwardRef((props, ref) => (
  <InputSimple {...props} ref={ref} />
));

export const InputIcon = forwardRef(
  (props, ref) =>
    (props?.positionIcon === 'left' && (
      <InputLeftIcon isError={props?.isError} className={props?.className}>
        <div className="icon">
          {props?.icon}
        </div>
        <div className="field">
          <Input {...props} ref={ref} />
        </div>
      </InputLeftIcon>
    )) ||
    (props?.positionIcon === 'right' && (
      <InputRightIcon isError={props?.isError} className={props?.className}>
        <div className="icon">
          {props?.icon}
        </div>
        <div className="field">
          <Input {...props} ref={ref} />
        </div>
      </InputRightIcon>
    )) ||
    'input config error'
);
