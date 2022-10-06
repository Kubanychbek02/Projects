import React from 'react';
import {Cards} from '../components/cards';
import Container from '@mui/material/Container/Container';
import Cookies from 'js-cookie'

const Home = () => {
  Cookies.set('foo', 'bar')
  console.log(Cookies.get('foo'));

    return (
        <Container sx={{display: 'flex', paddingTop: '100px', gap: '20px', justifyContent: 'space-between'}} maxWidth='lg' >
          <Cards
            path='/check-by-pin'
            title='Правонарушения по ПИН гражданина/ИНН юридического лица'
            desc='Проверка правонарушений ,выписанных вручную, а также нарушений, зафиксированных камерами Безопасного города по ПИН гражданина'
          />
          <Cards 
            path='/check-by-plate'
            title='Правонарушения по госномеру'
            desc='Проверка правонарушений, выписанных вручную, а также нарушения, зафиксированные камерами Безопасного города по госномеру транспортного средства            '
          />
        </Container>
    );
};

export default Home;