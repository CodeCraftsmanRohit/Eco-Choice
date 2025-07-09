import express from "express";
const router = express.Router();

router.get("/mock", (req, res) => {
  const forecasts = [
    {
      productId: "1",
      productName: "Reusable Water Bottle",
      predictedDemand: 120,
      currentStock: 90,
    },
    {
      productId: "2",
      productName: "Bamboo Toothbrush",
      predictedDemand: 60,
      currentStock: 80,
    },
    {
      productId: "3",
      productName: "Organic Cotton Tote Bag",
      predictedDemand: 95,
      currentStock: 50,
    },
    {
      productId: "4",
      productName: "Eco-Friendly Detergent",
      predictedDemand: 75,
      currentStock: 100,
    },
    {
      productId: "5",
      productName: "Compostable Trash Bags",
      predictedDemand: 110,
      currentStock: 70,
    },
  ];

  res.status(200).json({ success: true, forecasts });
});

export default router;
