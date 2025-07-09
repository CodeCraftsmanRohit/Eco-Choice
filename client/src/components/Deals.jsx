import Card from "../components/Card";

const Deals = () => {
  const cards = [
    {
      coverImage: "https://picsum.photos/600/400?random=1",
      name: "Organic Cotton Costume",
      price: 39.99,
      originalPrice: 49.99,
      materials: ["Organic Cotton", "Bamboo Fiber"],
      carbonFootprint: 2.1,
      ecoScore: "A+",
      rating: 4.8,
    },
    {
      coverImage: "https://picsum.photos/600/400?random=2",
      name: "Reusable Grocery Bag Set",
      price: 24.95,
      originalPrice: 34.95,
      materials: ["Recycled PET", "Hemp"],
      carbonFootprint: 0.5,
      ecoScore: "A",
      rating: 4.6,
    },
    {
      coverImage: "https://picsum.photos/600/400?random=3",
      name: "Bamboo Straw Set",
      price: 12.99,
      originalPrice: 16.99,
      materials: ["Natural Bamboo", "Organic Cotton Pouch"],
      carbonFootprint: 0.2,
      ecoScore: "A+",
      rating: 4.9,
    },
    {
      coverImage: "https://picsum.photos/600/400?random=4",
      name: "Solar Phone Charger",
      price: 59.99,
      originalPrice: 79.99,
      materials: ["Recycled Aluminum", "Solar Panels"],
      carbonFootprint: 1.2,
      ecoScore: "A",
      rating: 4.7,
    },
    {
      coverImage: "https://picsum.photos/600/400?random=5",
      name: "Organic Soap Collection",
      price: 18.50,
      originalPrice: 22.00,
      materials: ["Organic Oils", "Essential Oils"],
      carbonFootprint: 0.3,
      ecoScore: "A+",
      rating: 4.8,
    },
    {
      coverImage: "https://picsum.photos/600/400?random=6",
      name: "Kitchen Compost Bin",
      price: 29.95,
      originalPrice: 39.95,
      materials: ["Stainless Steel", "Bamboo Lid"],
      carbonFootprint: 1.8,
      ecoScore: "A",
      rating: 4.5,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Today's Eco Deals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover sustainable products that are good for you and the planet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((product, idx) => (
            <Card key={idx} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-xl">
            View All Eco Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Deals;