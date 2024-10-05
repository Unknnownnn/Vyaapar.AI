import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Import your JSON data
import productsDataRaw from 'src/pages/producto/csvjson_updated.json'; // Adjust the path according to your project structure

interface Product {
  CompanyName: string;
  Headquarters: string;
  Employees: number | string; // Updated to allow string
  Industry: string;
  "Founded At": number;
  Status: number | string; // Updated to allow string
  "Total Funding": number | string; // Updated to allow string
  "Funding Rounds": number | string; // Updated to allow string
  "Number of Acquisitions": number | string; // Updated to allow string
  "FY 2022-23 Revenue": number | string; // Updated to allow string
  Profit_Loss: number | string; // Updated to allow string
  "Latest Funding Round": string;
  "FY 2022-23 Expenses": number | string; // Updated to allow string
  "Net Cash Flow From Operations": number | string; // Updated to allow string
  id: number; // Ensure the ID field is consistently a number
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        // Cast productsData to Product[]
        const productsData: Product[] = productsDataRaw; // Ensure this matches the structure of your JSON

        console.log('Fetched Products Data:', productsData);

        // Log the incoming ID to debug
        console.log('Incoming ID:', id);

        // Convert id from string to number for comparison
        const numericId = Number(id);

        // Find the product by ID
        const foundProduct = productsData.find((prod) => prod.id === numericId);

        console.log('Found Product:', foundProduct);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.log('Product not found for ID:', id);
        }
      } catch (error) {
        console.error('Error fetching products data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) { // Ensure id is defined
      fetchProductsData();
    } else {
      console.error('ID is undefined');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.CompanyName}</h1>
      <p>Headquarters: {product.Headquarters}</p>
      <p>Employees: {product.Employees}</p>
      <p>Industry: {product.Industry}</p>
      <p>Founded At: {product["Founded At"]}</p>
      <p>Status: {product.Status}</p>
      <p>Total Funding: ₹{product["Total Funding"]}Cr</p>
      <p>Funding Rounds: {product["Funding Rounds"]}</p>
      <p>Number of Acquisitions: {product["Number of Acquisitions"]}</p>
      <p>FY 2022-23 Revenue: ₹{product["FY 2022-23 Revenue"]}Cr</p>
      <p>Profit/Loss: ₹{product.Profit_Loss}Cr</p>
      <p>Latest Funding Round: {product["Latest Funding Round"]}</p>
      <p>FY 2022-23 Expenses: ₹{product["FY 2022-23 Expenses"]}Cr</p>
      <p>Net Cash Flow From Operations: ₹{product["Net Cash Flow From Operations"]}Cr</p>
    </div>
  );
};

export default ProductDetail;
