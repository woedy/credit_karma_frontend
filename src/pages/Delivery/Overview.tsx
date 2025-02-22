import React, { useCallback, useEffect, useState } from 'react';
import CardDataStats from '../../components/CardDataStats';

import { Link } from 'react-router-dom';
import {
  baseUrl,
  baseUrlMedia,
  truncateText,
  userToken,
} from '../../constants';
import ShippingPaymentModal from './modals/shipping_payment';

const Overview: React.FC = () => {
  const [usersCount, setUsersCount] = useState('');

  const [loading, setLoading] = useState(false);

  // State for alerts
  const [alert, setAlert] = useState({ message: '', type: '' });

  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);  // First Modal (confirmation modal)


  // Function to handle opening the first modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the first modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const portfolio = [
    {
      title: 'Gold',
      image:
        'https://png.pngtree.com/png-vector/20231026/ourmid/pngtree-realistic-gold-bars-png-image_10370401.png', // Example image path
      content: [
        {
          type: 'Gold Coins',
          value: '$ 1,900/oz',
          quantity: '12',
          total: '$ 3,452',
          image: 'https://www.example.com/gold-coins-image.png',
        },
        {
          type: 'Gold Bars',
          value: '$ 1,850/oz',
          quantity: '12',
          total: '$ 3,452',
          image: 'https://www.example.com/gold-bars-image.png',
        },
        {
          type: 'Jewelry',
          value: '$ 2,000/oz',
          quantity: '12',
          total: '$ 3,452',
          image: 'https://www.example.com/jewelry-image.png',
        },
      ],
    },
  ];

  const balanceInfo = {
    gp_balance: '$ 20,000',
    asset_value: '$ 12,056,343',
    assets_total: '$ 18,681,500',
  };

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="grid grid-cols-2 mb-5">
        <p className="text-2xl text-xl font-semibold text-black">
          Deliver stored products
        </p>
      </div>

      <div className="grid grid-cols-5 gap-1">
        <div className="flex justify-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">Selection</p>
        </div>
        <div className="flex justify-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">Delivery</p>
        </div>
        <div className="flex justify-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">Billing Address</p>
        </div>
        <div className="flex justify-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">Payment Method</p>
        </div>
        <div className="flex justify-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">Order Overview</p>
        </div>
 
      </div>

      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="mt-3 grid grid-cols-1 gap-4 md:mt-3 md:gap-6 2xl:mt3-3 2xl:gap-7.5">
            <div className="mt-3 grid grid-cols-1 gap-4 md:mt-3 md:gap-6 2xl:mt3-3 2xl:gap-7.5">
              <div className="dark:border-strokedark dark:bg-boxdark">
                <div className="px-0 md:px-0">
              
                  <div className="w-full rounded-xl border border-stroke bg-white shadow-default">


                    <div className='grid grid-cols-2 m-10'>

                      <div className=''>
                      <h4 className="font-semibold mb-4">Shipping Address<span className='ml-2 font-normal text-graytrans'>change</span></h4>
                      <h4 className="font-normal mb-2">Standard Shipping<span className='ml-2 font-semibold'>$100.00</span></h4>
                      <h4 className="font-normal mb-3">10 -  15 business days</h4>
                      <h4 className="font-normal">Geoffrey Fisher</h4>
                      <h4 className="font-normal mb-4">LES VERGERS D ALIX</h4>
                      <h4 className="font-normal">13 RUE GEORGES MARIE, ISSY-LES</h4>
                      <h4 className="font-normal">MOULINEAUX 92130, France</h4>



                      <h4 className="font-semibold mt-10">Total products to deliver<span className='ml-2 font-semibold text-graytrans'>change</span></h4>
                      <h4 className="font-normal">5</h4>

                      </div>

                      <div>
                      <h4 className="font-semibold mb-4">Billing Address<span className='ml-2 font-normal text-graytrans'>change</span></h4>
                      <h4 className="font-normal">Geoffrey Fisher</h4>
                      <h4 className="font-normal mb-4">LES VERGERS D ALIX</h4>
                      <h4 className="font-normal">13 RUE GEORGES MARIE, ISSY-LES</h4>
                      <h4 className="font-normal">MOULINEAUX 92130, France</h4>
                      <h4 className="font-normal mt-5">+423123432321</h4>



                      <h4 className="font-semibold mt-10">Payment Method<span className='ml-2 font-semibold text-graytrans'>change</span></h4>
                      <h4 className="font-normal">Bitcoin</h4>

                      </div>


                    </div>





                    {portfolio.map((item, index) => (
                      <div key={index} className="border-b border-graytrans">
                        <button
                          onClick={() => toggle(index)}
                          className="w-full shadow-default flex justify-between items-center py-4 px-6 text-left font-semibold text-gray-800 focus:outline-none"
                        >
                          <div className="flex items-center">
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-8 h-8 mr-2 rounded-full object-cover"
                              />
                            )}
                            <span>{item.title}</span>
                          </div>
                          <span
                            className={`transform transition-transform ${
                              activeIndex === index ? 'rotate-180' : 'rotate-0'
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        {activeIndex === index && (
                          <div className="px-6 py-4 bg-gray-50">
                            <table className="w-full table-auto border-collapse">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="px-4 py-2 text-left">Asset</th>
                                  <th className="px-4 py-2 text-left">Value</th>
                                  <th className="px-4 py-2 text-left">
                                    Quantity
                                  </th>
                                  <th className="px-4 py-2 text-left">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.content.map((asset, idx) => (
                                  <tr key={idx}>
                                    <td className="px-4 py-2 flex items-center space-x-2">
                                     
                                      {asset.image && (
                                        <img
                                          src={asset.image}
                                          alt={asset.type}
                                          className="w-8 h-8 object-cover"
                                        />
                                      )}
                                      <span>{asset.type}</span>
                                    </td>

                                    <td className="px-4 py-2">{asset.value}</td>
                                    <td className="px-4 py-2">
                                      {asset.quantity}
                                    </td>
                                    <td className="px-4 py-2">{asset.total}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white shadow-default m-5 p-4 rounded-md text-center">

        <div className='grid grid-cols-2  gap-4 text-start'>
        <h3 className="mt-4">Shipping Price</h3>
        <h3 className="mt-4">$ 50,000</h3>

          </div>

          <div className='grid grid-cols-2 gap-4 text-start'>
          <h3 className="mt-4">VAT</h3>
            <h3 className="mt-4">$ 1,500</h3>

            </div>
            <div className='grid grid-cols-2 gap-4 text-start'>
            <h3 className="mt-4">Total Value</h3>

            <p className="text-3xl mt-2 font-bold text-green-600 mb-8">
            $ 130,100,345 
            </p>
            </div>
            <div>


            <button
              className="flex justify-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white"
              type="submit"
              onClick={openModal} // Trigger the first modal on click
              >
              Place Order
            </button>

          </div>
        </div>


        <ShippingPaymentModal isShippingForm3ModalOpen={isModalOpen} closeShippingForm3Modal={closeModal}  />

      </div>
    </>
  );
};

export default Overview;
