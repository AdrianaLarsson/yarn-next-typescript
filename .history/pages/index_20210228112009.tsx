// Functionality
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import VehicleOpreator from '../components/WorkOrderVehicleOperator/vehicleopreator';
import GlobalStyle from '../styles/Globals'
interface serverSideProps {
  dummyPropsValue: string;
}

const Index = (props: serverSideProps): JSX.Element => {
  return (
    <div>
      <main>
        <div>SJ Waypoint-Mobile Template</div>
        <VehicleOpreator/>
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

