import React from 'react';

import {IconProps} from 'app/types/iconProps';
import theme from 'app/utils/theme';

export const IconQuestion = React.forwardRef(function IconQuestion(
  {color: providedColor = 'currentColor', size: providedSize = 'sm', ...props}: IconProps,
  ref: React.Ref<SVGSVGElement>
) {
  const color = theme[providedColor] ?? providedColor;
  const size = theme.iconSizes[providedSize] ?? providedSize;

  return (
    <svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...props} ref={ref}>
      <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z" />
      <path d="M5.33,6.19a1.93,1.93,0,0,1,.33-1,2.59,2.59,0,0,1,1-.87,3,3,0,0,1,1.47-.34,3.18,3.18,0,0,1,1.38.29,2.28,2.28,0,0,1,.92.78,2,2,0,0,1,.32,1.07,1.69,1.69,0,0,1-.18.8,2.74,2.74,0,0,1-.44.6l-.92.84a3.92,3.92,0,0,0-.29.29,1,1,0,0,0-.17.23,1.8,1.8,0,0,0-.08.21c0,.07,0,.19-.09.37a.6.6,0,0,1-.64.56.64.64,0,0,1-.47-.19.74.74,0,0,1-.19-.54,1.91,1.91,0,0,1,.51-1.36,7.83,7.83,0,0,1,.63-.59c.22-.2.39-.35.49-.46a1.46,1.46,0,0,0,.26-.34.8.8,0,0,0,.1-.41.93.93,0,0,0-.32-.72,1.13,1.13,0,0,0-.82-.3,1.15,1.15,0,0,0-.87.3,2.33,2.33,0,0,0-.47.88c-.12.4-.35.61-.7.61a.65.65,0,0,1-.5-.22A.63.63,0,0,1,5.33,6.19ZM8,12.07a.84.84,0,0,1-.57-.21.75.75,0,0,1-.24-.59.74.74,0,0,1,.23-.57A.78.78,0,0,1,8,10.47a.74.74,0,0,1,.57.23.78.78,0,0,1,.23.57.76.76,0,0,1-.24.59A.83.83,0,0,1,8,12.07Z" />
    </svg>
  );
});
