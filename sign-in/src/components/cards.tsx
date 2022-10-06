import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import doc from '../asets/doc.png'
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send'

interface Props {
  path: string
  title: string
  desc: string
}

export const Cards = ({path, title, desc}: Props) => {
  return (
    <Card sx={{ maxWidth: 450, marginBottom: '50px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={doc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={path}>
          <Button
              variant="outlined"
              sx={{marginTop: "30px", textDecoration: 'none'}}
              type="submit"
              endIcon={<SendIcon/>}
          >
              Проверить
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
