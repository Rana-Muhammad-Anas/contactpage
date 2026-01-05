import { useState } from "react";
const InfoCard = () => {
  const [payment, setPayment] = useState("credit");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-4xl rounded-xl bg-white shadow-lg">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-green-600 text-3x">
            Add a New Customer
          </h2>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600">
            ✕
          </button>
        </div>

        <div className="px-6 py-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="form-label">
                Customer Name <span className="text-red-600">*</span>
              </label>
              <input className="form-input" />
            </div>

            <div>
              <label className="form-label">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input className="form-input" placeholder="+1-213-555-9876" />
            </div>

            <div>
              <label className="form-label">
                Mobile Number <span className="text-red-600">*</span>
              </label>
              <input className="form-input" placeholder="03005678901" />
            </div>

            <div>
              <label className="form-label">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input className="form-input" type="email" />
            </div>

            <div>
              <label className="form-label">
                Contact Person <span className="text-red-600">*</span>
              </label>
              <input className="form-input" />
            </div>
            <div>
              <label className="form-label">
                Designation <span className="text-red-600">*</span>
              </label>
              <input className="form-input" placeholder="Purchasing Manager" />
            </div>
            <div className="md:col-span-2">
              <label className="form-label">
                Address <span className="text-red-600">*</span>
              </label>
              <input className="form-input" />
            </div>
            <div>
              <label className="form-label">
                NTN <span className="text-red-600">*</span>
              </label>
              <input className="form-input" placeholder="NTN456789123" />
            </div>
            <div>
              <label className="form-label">
                GST <span className="text-red-600">*</span>
              </label>
              <input className="form-input" placeholder="27DEFGH5678J2K4" />
            </div>
          </div>
          <div className="mt-5">
            <label className="form-label">
              Payment Terms <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-6 mt-1">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="credit"
                  onChange={(e) => setPayment(e.target.value)}
                />
                Credit
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  onChange={(e) => setPayment(e.target.value)}
                />
                Cash
              </label>
            </div>
          </div>
          {payment === "credit" && (
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="form-label">
                  Credit Time Limit <span className="text-red-600">*</span>
                </label>
                <input
                  className="form-input"
                  placeholder="Enter time limit (days)"
                />
              </div>
              <div>
                <label className="form-label">
                  Credit Cash Limit <span className="text-red-600">*</span>
                </label>
                <input className="form-input" placeholder="Enter cash limit" />
              </div>
            </div>
          )}

          <div className="mt-5 flex items-center gap-3">
            <span className="text-sm font-medium">Status</span>

            <label className="switch ">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
            <span className="text-sm">Active</span>
          </div>
        </div>
        <div className="px-6 pb-6">
          <button className="w-full rounded-lg bg-lime-500 py-3 font-semibold text-white hover:bg-lime-600">
            Save Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
