import{ useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const data = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
  ]
  
  return (
    <div className="h-[80vh] bg-white content-center px-1  rounded-md ">
      <div className="h-[79vh] bg-sky-400 rounded-md pt-4 py-1 text-black p-6">
      <header className="flex justify-between items-center pb-6">
        <h1 className="text-2xl font-bold">Home</h1>
        <div className="flex gap-4 items-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="bg-white border  text-black p-2 rounded"
            />
          <span className="text-black">to</span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            className="bg-white border  text-black p-2 rounded"
            />
        </div>
        <div className="h-max flex items-center gap-5 ">
          <div>Shubham </div>
          <div className="rounded-[50%] w-10 h-10 bg-red-500"></div>
        </div>
      </header>

      {/* Metrics */}
      <div className="grid grid-cols-4  gap-4 mb-6">
        <div className=" bg-gray-100 border p-2 rounded-xl">
          <div className="bg-white h-[12vh] shadow-xl  p-4 rounded-xl">
          <h2 className="text-sm font-bold ">Total Revenue</h2>
          <p className="text-xl">$45,231.89</p>
          <span className="text-green-500 text-xs">+20.1% from last month</span>
          </div>
        </div>
        <div className="bg-gray-100 border p-2 rounded-xl">
          <div className="bg-white h-[12vh] shadow-xl  p-3 rounded-xl">
          <h2 className="text-sm font-bold">Subscriptions</h2>
          <p className="text-xl">+2,350</p>
          <span className="text-green-500 text-xs">+180.1% from last month</span>
          </div>
        </div>
        <div className="bg-gray-100 border  p-2 rounded-xl">
          <div className="bg-white h-[12vh] shadow-xl  p-3 rounded-xl">
          <h2 className="text-sm font-bold">Sales</h2>
          <p className="text-xl">+12,234</p>
          <span className="text-green-500 text-xs">+19% from last month</span>
          </div>
        </div>
        <div className="bg-gray-100 border  p-2 rounded-xl">
          <div className="bg-white h-[12vh] shadow-xl  p-3 rounded-xl">
          <h2 className="text-sm font-bold">Active Now</h2>
          <p className="text-xl">+573</p>
          <span className="text-green-500 text-xs">+201 since last hour</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-3 h-[50vh] gap-4">
        <div className="bg-gray-100 border  p-4 col-span-2 rounded-xl">
          <div className="bg-white p-6 h-[44vh] rounded-lg  shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Inventory Sales</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#4CAF50" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
        </div>
        <div className=" bg-gray-100 border  p-4 rounded-xl">
          <div className="bg-white shadow-lg h-[44vh] rounded-xl p-4">
          <h2 className="text-sm font-bold mb-4">Recent Sales</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Olivia Martin</span>
              <span className="text-green-500">+$1,999.00</span>
            </li>
            <li className="flex justify-between">
              <span>Jackson Lee</span>
              <span className="text-green-500">+$39.00</span>
            </li>
            <li className="flex justify-between">
              <span>Isabella Nguyen</span>
              <span className="text-green-500">+$299.00</span>
            </li>
          </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
