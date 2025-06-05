import React from 'react';
// import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import { LuTrendingUpDown } from 'react-icons/lu';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex">
            {/* Left Section */}
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-11 relative overflow-hidden">
                {/* Stylized Logo */}
                <div className="">
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400 tracking-wide drop-shadow-md">
                        Expense <span className="text-purple-700">Tracker</span>
                    </h1>
                    <p className="text-sm text-gray-500 font-medium">Your Personal Finance companion</p>
                </div>

                {children}
            </div>

            {/* Right Section */}
            <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
                <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5" />
                <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10" />
                <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5" />

                <div className="grid grid-cols-1 z-20">
                    <StatsInfoCard
                        icon={<LuTrendingUpDown />}
                        label="Track Your Income & Expenses"
                        value="430,000"
                        color="bg-primary"
                    />
                </div>

                <img
                    src={card3}
                    alt="Card Example"
                    className="left-20 w-64 h-120 lg:w-[75%] absolute bottom-10 shadow-lg shadow-blue-400/15"
                />
            </div>
        </div>
    );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
    return (
        <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
            <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
                {icon}
            </div>
            <div>
                <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
                <span className="text-[20px]">{`$${value}`}</span>
            </div>
        </div>
    );
};
