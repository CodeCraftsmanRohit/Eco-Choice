import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [imagePreview, setImagePreview] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const [formData, setFormData] = useState({
    barcode: "",
    name: "",
    ecoScore: "",
    materials: "",
    recyclable: false,
    carbonFootprint: "",
    recyclingTips: "",
    category: "",
    price: "",
    currentStock: "",
    salesHistory: "",
    seasonalTrend: "",
    weather: "",
    demandSpike: "",
    unitCost: "",
    supplierId: "",
    leadTime: "",
    availability: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!coverImage) return toast.error("Please upload a cover image");

    try {
      const imgForm = new FormData();
      imgForm.append("coverImage", coverImage);

      const imgUpload = await axios.post(
        `${backendUrl}/api/products/upload-image`,
        imgForm,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const payload = {
        ...formData,
        materials: formData.materials.split(",").map((m) => m.trim()),
        salesHistory: formData.salesHistory
          .split(",")
          .map((n) => Number(n.trim())),
        externalFactors: {
          weather: formData.weather,
          demandSpike: formData.demandSpike,
        },
        suppliers: [
          {
            id: formData.supplierId,
            leadTime: Number(formData.leadTime),
            availability: formData.availability,
          },
        ],
        price: Number(formData.price),
        carbonFootprint: Number(formData.carbonFootprint),
        currentStock: Number(formData.currentStock),
        unitCost: Number(formData.unitCost),
        coverImage: imgUpload.data.url,
      };

      const res = await axios.post(`${backendUrl}/api/products/add`, payload);

      if (res.data.success) {
        toast.success("✅ Product added!");
        setFormData({});
        setCoverImage(null);
        setImagePreview(null);
      } else {
        toast.error(res.data.message || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };


return (
  <div className="max-w-5xl mx-auto p-6">
    <div className="card p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b pb-2 border-indigo-100">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Barcode</label>
            <input name="barcode" onChange={handleChange} placeholder="Scan or enter barcode" required className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input name="name" onChange={handleChange} placeholder="Enter product name" required className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Eco Score</label>
            <input name="ecoScore" onChange={handleChange} placeholder="A, B, C, etc." className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Materials</label>
            <input name="materials" onChange={handleChange} placeholder="Comma separated materials" className="input" />
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <input type="checkbox" name="recyclable" onChange={handleChange} className="h-5 w-5 text-indigo-600" />
            <span className="text-gray-700">Recyclable Product</span>
          </div>
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Carbon Footprint</label>
            <input name="carbonFootprint" onChange={handleChange} placeholder="In kg CO2" className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input name="category" onChange={handleChange} placeholder="Product category" className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input name="price" onChange={handleChange} placeholder="Retail price" className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Stock</label>
            <input name="currentStock" onChange={handleChange} placeholder="Current inventory" className="input" />
          </div>
        </div>

        {/* Full width fields */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Recycling Tips</label>
          <textarea name="recyclingTips" onChange={handleChange} rows={2} className="input" placeholder="How to recycle this product"></textarea>
        </div>

        <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sales History</label>
            <input name="salesHistory" onChange={handleChange} placeholder="Comma separated numbers" className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Supplier ID</label>
            <input name="supplierId" onChange={handleChange} placeholder="Supplier identifier" className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Lead Time (days)</label>
            <input name="leadTime" onChange={handleChange} placeholder="Delivery time" className="input" />
          </div>
        </div>

        {/* Image Upload */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
          <div className="flex items-center gap-4">
            <label className="flex-1 cursor-pointer">
              <div className="flex flex-col items-center justify-center px-6 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="mt-2 text-sm text-gray-600">Click to upload image</span>
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </div>
            </label>
            {imagePreview && (
              <div className="relative">
                <img src={imagePreview} alt="preview" className="w-32 h-32 object-cover rounded-lg shadow" />
                <button
                  type="button"
                  onClick={() => setImagePreview(null)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="col-span-2 btn-primary py-3 px-6 text-lg font-semibold"
        >
          Add Product
        </button>
      </form>
    </div>
  </div>
);
};

export default AddProduct;
