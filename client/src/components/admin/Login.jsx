import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {

  const { axios,navigate, setToken } = useAppContext()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    toast.success('Logging in ...')
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/admin/login', { email, password });
      if (data.success) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        axios.defaults.headers.common['Authorization'] = data.token;
        toast.success('Login successful!');
        navigate('/admin');

      }
      else {
        toast.error(data.message)

      }
    } catch (error) {
      toast.error(error.message)

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center **:bg200">
      <div className="bg-white shadow shadow-gray-300 rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-pink-700">Login</h1>
          <p className="text-gray-600 mt-2">Enter credentials to access admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Enter email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-full cursor-pointer transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
