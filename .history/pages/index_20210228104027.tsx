// Functionality
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
interface serverSideProps {
  dummyPropsValue: string;
}

const Index = (props: serverSideProps): JSX.Element => {
  return (
    <div>
      <main>
        <div>SJ Mobiint Template, {props.dummyPropsValue}</div>

        <div>
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

