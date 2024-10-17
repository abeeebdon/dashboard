import MainDashboard from '@/features/dashboard/Index'
import { Navigate } from 'react-router-dom'

interface Props {
  token: boolean
}
const Dashboard = ({ token }: Props) => {
  return token ? (
    <div>
      <MainDashboard />
    </div>
  ) : (
    <Navigate to="/login" />
  )
}

export default Dashboard
