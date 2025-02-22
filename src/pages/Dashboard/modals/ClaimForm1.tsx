

const ClaimForm1Modal = ({isClaimForm1ModalOpen, closeClaimForm1Modal, openClaimForm2Modal}) => {



    return (
      <>

            {/* Second Modal (Form Modal) */}
            {isClaimForm1ModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeClaimForm1Modal} // Close the form modal when clicking outside
        >
          <div
            className="bg-white p-8 rounded-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form modal
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-5">
            🌟  Premium Gold Claim Processing
                        </h3>


            <p className="mb-5">We understand that claiming your gold can seem complicated. <br/>
            Let us break it down into a simple, transparent process that puts you first.</p>
      

      <h4 className="font-semibold mb-3">Total Gold Value: $ 1,500,000</h4>

      <div className="grid grid-cols-2">

        <div className="col-span-1">
          <p className="font-semibold">Fee Breakdown:</p>
          <ul className="list-disc p-2 mb-3">
            <li>Fixed Authentication Fee: $ 100</li>
            <li>Outstanding Storage Fees: $ 30,000</li>
            <li>Tax (2%): $ 30,000</li>
            <li>Processing Fee (2%): $ 30,000</li>
            <li>Total Claim Fee: $ 30,100</li>
          </ul>


          <p className="font-semibold">Premium Services Included:</p>
          <ul className="list-disc p-2 mb-3">
            <li>Dedicated Account Manager</li>
            <li>Priority Verification Process</li>
            <li>Enhanced Security Protocols</li>
            <li>Complimentary Insurance Coverage</li>
     
          </ul>

          <p className="font-semibold mb-3">Payment Options:</p>
          <ul className="list-disc">
            <li>Bitcoin payment.</li>
  
     
          </ul>


        </div>

        <div className="cols-span-1">

          <p className="font-bold text-xl">Total Claim Fee: </p>
          <p className="text-3xl mt-4 text-green-600">$ 30,100 </p>

        </div>



      </div>




            <div className="mt-4 flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-primary w-[200px] text-white rounded-md"
                onClick={openClaimForm2Modal} // Close the form modal
              >
                Proceed with claim
              </button>
              <button
                className="px-4 py-2 bg-red-500 w-[200px] text-white rounded-md"
                onClick={closeClaimForm1Modal} // Close the form modal
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
  
      </>
    );
  };
  
  export default ClaimForm1Modal;
  