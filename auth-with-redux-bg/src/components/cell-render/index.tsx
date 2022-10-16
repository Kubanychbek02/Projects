import {Typography} from '@mui/material';

import {colorType, fontWeightType, Tag} from '../tag'

type cellType = 'tag' | 'custom'

type Props = {
  type: cellType
  color?: colorType
  text?: string | number
  mainHelperText?: string | number
  helperText?: string
  fontWeight?: fontWeightType
}

export const CellRender = ({text, color, fontWeight, type, helperText, mainHelperText}: Props) => {
  if (type === 'tag') {
    if (fontWeight) {
      return <Typography sx={{fontWeight}}>{text}</Typography>;
    }
    if (text === 0) {
      return <>{text}</>;
    }
    return <Tag label={text} color={color} />;
  } else {
    return (
      <div>
        {mainHelperText && (<Typography color='gray' fontWeight='bold' variant='caption'>{mainHelperText}</Typography>)}
        {text && (
          <Typography color='primary'>{text}</Typography>
        )}
        {helperText && (<Typography textAlign='center' color='gray' fontWeight='bold' variant='caption'>{helperText}</Typography>)}
      </div>
    )
  }
}
