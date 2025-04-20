import React from 'react';
import { useModal } from '../context/ModalContext';

const PriceSection = () => {
  const {openModal} =useModal();
  return (
    <div id="price" className="bg-white p-6 md:p-10 max-w-6xl mx-auto">
      {/* Tab */}
      <div className="mb-6">
        <button className="border-2 border-cyan-600 text-cyan-600 px-5 py-1.5 rounded-full font-medium sm:text-base text-sm">
          Price
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Table */}
        <div className="md:col-span-2 overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border-b">Type</th>
                <th className="text-left p-3 border-b">SBA</th>
                <th className="text-left p-3 border-b">Price</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: '3 BHK',
                  sba: '2482 - 2511 Sq.ft',
                  price: '₹ 2.8 Cr* Onwards',
                },
                {
                  type: '4 BHK',
                  sba: '2928 - 3707 Sq.ft',
                  price: '₹ 3.8 Cr* Onwards',
                },
              ].map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-gray-100' : ''}
                >
                  <td className="p-3">{item.type}</td>
                  <td className="p-3">{item.sba}</td>
                  <td className="p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <span>{item.price}</span>
                    <button  onClick={openModal} className="bg-cyan-600 cursor-pointer text-white px-4 py-2 rounded-md text-sm transform transition-all duration-300 ease-in-out hover:scale-105">
  Request For Price Breakup
</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Enquiry Box */}
        <div className="w-full">
          <div className="bg-cyan-600 text-white text-center py-2 font-medium">
            Complete Costing Details
          </div>
          <div className="relative">
  {/* Image */}
  <img 
    src="https://www.researchgate.net/publication/259659030/figure/tbl1/AS:667781674590230@1536222966944/WBIB-Lending-Process-Cost-Table-WBIB-Lending-Process.png" 
    alt="Costing Details" 
    className="w-full h-48 object-cover"
  />
  
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black opacity-60"></div>
  
  {/* Button container (no background) */}
  <div className="absolute inset-0 flex items-center justify-center">
    <button  onClick={openModal}className="bg-black text-white border border-white px-6 py-2 text-sm rounded-md transform transition-transform hover:scale-105">
      ENQUIRE NOW
    </button>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
