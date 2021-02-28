import Head from 'next/head'
import styles from '../styles/Home.module.css'
import VehicleOpreator from '../components/WorkOrderVehicleOperator/vehicleopreator'
import CreateGlobalStyle  from '../styles/Globals'

export default function MyApp() {
  return (
    <div>
    <CreateGlobalStyle />
    <VehicleOpreator/>
    </div>

 
  )
}
