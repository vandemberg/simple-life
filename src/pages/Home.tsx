// create a component react typescrpit
import { FC } from 'react';
import {Button} from 'antd';

interface HomeProps {
  buttonName: string;
}

const Home: FC<HomeProps> = ({ buttonName }) => {
  function handleClick() {
    alert("Hello F**** world!");
  }

  return (
    <Button onClick={handleClick}>{buttonName}</Button>
  );
}

export default Home;