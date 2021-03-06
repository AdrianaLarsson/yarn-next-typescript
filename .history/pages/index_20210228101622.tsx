// Functionality
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
interface serverSideProps {
  dummyPropsValue: string;
}

const Index = (): JSX.Element => {
  return (
    <div>
      <main>
        <div>SJ Waypoint Template, {props.dummyPropsValue}</div>
      </main>
    </div>
  );
};


export default Index;
