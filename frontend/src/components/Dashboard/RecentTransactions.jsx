import React from 'react'
import { IoMdDocument } from 'react-icons/io';
import { LuArrowRight } from "react-icons/lu";
import moment from 'moment';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const RecentTransactions = ({transactions, onSeeMore}) => {
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Recent Transaction</h5>

            <button className='card-btn' onClick={onSeeMore}>
                See All <LuArrowRight className="text-base" aria-label="View all transactions"/>
            </button>
        </div>

        <div className='mt-6'>
          {transactions?.slice(0,5)?.map((item) => (
            <TransactionInfoCard
              key={item._id}
              title={item.type == 'expense' ? item.category : item.source}
              icon = {item.icon}
              date={moment(item.date).format("DD MMM YYYY")}
              amount={item.amount}
              type={item.type}
              hideDeleteBtn />
          ))}
        </div>
    </div>
  )
}

export default RecentTransactions
