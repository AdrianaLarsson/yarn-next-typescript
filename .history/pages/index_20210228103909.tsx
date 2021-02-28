// Functionality
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Accordion from './accordion';
interface serverSideProps {
  dummyPropsValue: string;
}

const Index = (props: serverSideProps): JSX.Element => {
  return (
    <div>
      <main>
        <div>SJ Waypoint Template, {props.dummyPropsValue}</div>
        <div>
          <a href="/allComponents">All components page</a>
        </div>
        <div>
          <a href="/accordion">Accordion page</a>
        </div>
        <div>
          <a href="/badge">Badge page</a>
        </div>
        <div>
          <a href="/breadcrumb">Breadcrumb page</a>
        </div>
        <div>
          <a href="/buttons">Buttons page</a>
        </div>
        <div>
          <a href="/card">Card page</a>
        </div>
        <div>
          <a href="/input">Input field page</a>
        </div>
        <div>
          <a href="/list">List field page</a>
        </div>
        <div>
          <a href="/modal">Modal page</a>
        </div>
        <div>
          <a href="/navbar">Navbar page</a>
        </div>
        <div>
          <a href="/overlay">Overlay page</a>
        </div>
        <div>
          <a href="/pagination">Pagination page</a>
        </div>
        <div>
          <a href="/progress">Progress bar page</a>
        </div>
        <div>
          <a href="/snackbar">Snackbar page</a>
        </div>
        <div>
          <a href="/table">Table page</a>
        </div>
        <div>
          <a href="/tabs">Tabs page</a>
        </div>
        <div>
          <Accordion />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      dummyPropsValue: context.resolvedUrl
    }
  };
};

export default Index;

