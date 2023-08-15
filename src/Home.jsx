import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  console.log(openSidebar);

  return <h2>home</h2>;
};

export default Home;
