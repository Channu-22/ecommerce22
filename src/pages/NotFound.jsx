

function NotFound() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center text-center bg-gray-100 rounded-2xl m-8 shadow-lg">
      <h2 className="text-3xl text-red-600 font-semibold mb-4">🚫 Product Not Found</h2>
      <p className="text-lg text-gray-600">The product you’re looking for doesn't exist or is currently unavailable.</p>
    </div>
  );
}

export default NotFound;
