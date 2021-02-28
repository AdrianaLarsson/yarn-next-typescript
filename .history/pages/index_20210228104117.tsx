// Functionality
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import vehicleOpreator from '../components/WorkOrderVehicleOperator/vehicleopreator';
interface serverSideProps {
  dummyPropsValue: string;
}

const Index = (props: serverSideProps): JSX.Element => {
  return (
    <div>
      <main>
        <div>SJ Waypoint-Mobile Template</div>
        <vehicleOpreator></vehicleOpreator>

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

