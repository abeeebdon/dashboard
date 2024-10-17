import { Navigate } from 'react-router-dom'

interface Props {
  token: boolean
}
const Dashboard = ({ token }: Props) => {
  return token ? <div>Dashboard</div> : <Navigate to="/login" />
}

export default Dashboard
