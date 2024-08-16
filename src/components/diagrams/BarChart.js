import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, LabelList } from 'recharts';

const CustomBarChart = ({ data, courseA, courseB }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Bar name={`Purchased only ${courseA}`} dataKey="BoughtProductA" fill="#ff90e8" stroke="#000000" >
                    <LabelList dataKey="BoughtProductA" position="top" />
                </Bar>
                <Bar name={`Purchased both products`} dataKey="CustomerBoth" fill="#000000" stroke="#000000">
                    <LabelList dataKey="CustomerBoth" position="top" />
                </Bar>
                <Bar name={`Purchased only ${courseB}`} dataKey="BoughtProductB" fill="#ffc900" stroke="#000000">
                    <LabelList dataKey="BoughtProductB" position="top" />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;
