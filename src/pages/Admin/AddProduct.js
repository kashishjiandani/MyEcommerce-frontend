import React, { useContext, useState } from "react";
import Select from "react-select";
import MainContext from "../../Context/MainContext";
// import {baseUrl} from "../../Utils/Constants"

const AddProduct = () => {
  const authToken = localStorage.getItem("token");

  const [productImages, setProductImages] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    category: [],
    subCategory: "",
    color: "",
    size: "",
    stock: "",
    images: [],
  });

  const handleAddProd = async (e) => {
    e.preventDefault();
    const uuid = new Date().getUTCMilliseconds();

    // console.log(productImages)
    let arr = [];
    for (const key of productImages) {
      console.log(key);

      var formData = new FormData();
      formData.append("public_id", `${uuid}`);
      const url = "https://api.cloudinary.com/v1_1/dx6zhrun8/image/upload";
      let file = key;
      formData.append("file", file);
      formData.append("upload_preset", "tempImg");
      let response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      let data = await response.json();
      arr.push(data.url);
      console.log("hello", data);
    }

    // console.log(productDetails);
    let res = await fetch(`http://localhost:8080/api/v1/product/admin/new`, {
      method: "POST",
      headers: {
        token: authToken,
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...productDetails, images: arr }),
    });
    let resData = await res.json();
    console.log(resData);
    if (resData.success) alert("Product added!");
  };

  const categoryOptions = [
    { value: "Bedroom", label: "Bedroom" },
    { value: "Bathroom", label: "Bathroom" },
    { value: "DiningRoom", label: "Dining Room" },
    { value: "Kitchen", label: "Kitchen" },
    { value: "LivingRoom", label: "Living Room" },
    { value: "Office", label: "Office" },
  ];

  const handleCategoryChange = (selectedOptions) => {
    // Extract an array of selected values from react-select options
    const selectedCategories = selectedOptions.map((option) => option.value);

    setProductDetails({
      ...productDetails,
      category: selectedCategories,
    });
  };

  return (
    <div>
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form onSubmit={(e) => handleAddProd(e)}>
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={productDetails?.name}
                onChange={(e) =>
                  setProductDetails({ ...productDetails, name: e.target.value })
                }
              />
            </div>

            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Description
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Enter Details of product"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={productDetails?.description}
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>

            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Price
              </label>
              <input
                type="number"
                name="subject"
                id="subject"
                placeholder="Price"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={productDetails?.price}
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    price: e.target.value,
                  })
                }
              />
            </div>

            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Brand
              </label>
              <select
                className="px-4 py-2 border"
                name="size"
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    brand: e.target.value,
                  })
                }
              >
                <option value="">Select Brand</option>
                <option value="LuxoLiving">LuxoLiving</option>
                <option value="CozyCraze">CozyCraze</option>
                <option value="ZenZones">ZenZones</option>
                <option value="Viva">Viva</option>
                <option value="Elega">Elega</option>
                <option value="Plushify">Plushify</option>
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Select category
              </label>
              <Select
                className="px-4 py-2 border"
                isMulti
                options={categoryOptions}
                value={categoryOptions.filter((option) =>
                  productDetails.category.includes(option.value)
                )}
                onChange={handleCategoryChange}
              />
            </div>

            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Select Sub-category
              </label>
              <select
                className="px-4 py-2 border"
                name="size"
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    subCategory: e.target.value,
                  })
                }
              >
                <option value="">Select a Sub-category</option>
                <option value="Bed">Bed</option>
                <option value="Table">Table</option>
                <option value="Chair">Chair</option>
                <option value="Sofa">Sofa</option>
                <option value="Cabinet">Cabinet</option>
                <option value="DiningTable">Dining Table</option>
              </select>
            </div>

            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Select Color
              </label>
              <select
                className="px-4 py-2 border"
                name="size"
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    color: e.target.value,
                  })
                }
              >
                <option value="">Select a color</option>
                <option value="Brown">Brown</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </div>

            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Select Size
              </label>
              <select
                className="px-4 py-2 border"
                name="size"
                onChange={(e) =>
                  setProductDetails({ ...productDetails, size: e.target.value })
                }
              >
                <option value="">Select a size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Number of Items in Stock
              </label>
              <input
                type="number"
                name="subject"
                id="subject"
                placeholder="Price"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={productDetails?.stock}
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    stock: e.target.value,
                  })
                }
              />
            </div>

            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Images
              </label>
              <input
                type="file"
                accept="image/*"
                multiple="multiple"
                name="subject"
                id="subject"
                placeholder="Price"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => {
                  setProductImages(Object.values(e.target.files));
                }}
              />
            </div>

            <button
              type="submit"
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
