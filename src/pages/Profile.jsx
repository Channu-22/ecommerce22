import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "../Contexts/AuthProvider";
// import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const { user } = useAuth();
  const [details, setDetails] = useState({
    name: "",
    bio: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    phone: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const db = getFirestore();
        const userDoc = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          setDetails(userSnapshot.data());
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    const db = getFirestore();
    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          ...details,
          email: user.email,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      console.log("Profile updated successfully");
      setSuccessMessage("Profile updated successfully!"); // Set success message
      setTimeout(() => setSuccessMessage(""), 5000); // Clear message after 3 seconds
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="max-w-4xl mx-auto p-6 lg:p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome back, {details.name || user?.email}
          </h1>
          <p className="text-gray-600">Update your profile information below</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h2 className="text-2xl font-semibold text-white">Profile Details</h2>
            <p className="text-blue-100 mt-1">Keep your information up to date</p>
          </div>

          <div
            className={`p-8 space-y-6 ${isUpdating ? "opacity-50 pointer-events-none" : ""}`}
          >
            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
                {successMessage}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={details.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
                />
              </div>

              {/* Gender Field */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Gender
                </label>
                <div className="flex flex-wrap gap-4">
                  {["Male", "Female", "Other"].map((gender) => (
                    <label
                      key={gender}
                      className="flex items-center cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={details.gender === gender}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="ml-2 text-gray-700 group-hover:text-blue-600 transition-colors">
                        {gender}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Address Field */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Postal Address
                </label>
                <textarea
                  name="address"
                  placeholder="Enter your complete postal address"
                  value={details.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100 resize-none"
                />
              </div>

              {/* City Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={details.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
                />
              </div>

              {/* State Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  value={details.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
                />
              </div>

              {/* Phone Field */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={details.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
                />
              </div>
            </div>

            {/* Bio Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                placeholder="Tell us a bit about yourself..."
                value={details.bio}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isUpdating}
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
              >
                {isUpdating ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Updating Profile...
                  </span>
                ) : (
                  "Update Profile"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Your information is secure and will only be used to improve your
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;