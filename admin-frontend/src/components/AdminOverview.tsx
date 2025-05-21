import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MapPin, Users, ShoppingBag, Truck } from "react-feather";
import { fetchStats } from "../store/slices/adminSlice";
import { RootState, useAppDispatch } from "../store";

// Sample data for the income graph
const monthlyIncomeData = [
  { month: "Jan", income: 2500 },
  { month: "Feb", income: 15000 },
  { month: "Mar", income: 38000 },
  { month: "Apr", income: 38000 },
  { month: "May", income: 35000 },
  { month: "Jun", income: 40000 },
];

// Sample locations data
const locations = [
  "Bangalore Urban",
  "Bangalore Rural",
  "Mysore",
  "Hassan",
  "Tumkur",
  "Mandya",
];

type StatCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: "blue" | "green" | "yellow" | "purple";
};

function StatCard({ title, value, icon, color }: StatCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    yellow: 'bg-yellow-50',
    purple: 'bg-purple-50'
  };

  return (
    <div className={`p-6 rounded-lg shadow ${colorClasses[color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        {icon}
      </div>
    </div>
  );
}

export default function AdminOverview() {
  const dispatch = useAppDispatch();

  const { 
    orders, 
    customers, 
    farmers, 
    deliveryAgents, 
    loading, 
    error 
  } = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
          <button 
            onClick={() => dispatch(fetchStats())}
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Total Orders" 
          value={orders} 
          icon={<ShoppingBag className="text-blue-500 w-8 h-8" />}
          color="blue"
        />
        <StatCard 
          title="Customers" 
          value={customers} 
          icon={<Users className="text-green-500 w-8 h-8" />}
          color="green"
        />
        <StatCard 
          title="Farmers" 
          value={farmers} 
          icon={<Users className="text-yellow-500 w-8 h-8" />}
          color="yellow"
        />
        <StatCard 
          title="Delivery Agents" 
          value={deliveryAgents} 
          icon={<Truck className="text-purple-500 w-8 h-8" />}
          color="purple"
        />
      </div>
      
      {/* <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Monthly Income</h2>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyIncomeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 50000]} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="income" 
                stroke="#4F46E5" 
                strokeWidth={2} 
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div> */}



      {/* <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Locations We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded"
            >
              <MapPin className="text-red-500 w-5 h-5" />
              <span className="text-gray-700">{location}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}