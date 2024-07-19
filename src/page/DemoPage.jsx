import React, { useEffect, useState } from "react";
import Table from "../components/ui/Table";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import SearchInput from "../components/formFields/Input";

const pageSize = 10;
const initialData = {
  total: 0,
  products: [],
};

const DemoPage = () => {
  const [productData, setProductData] = useState(initialData);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    search: "",
  });
  const currentPage = Number(searchParams.get("page")) ?? 1;
  const search = searchParams.get("search")

  const columns = [
    { key: "id", header: "ID" },
    { key: "title", header: "Title" },
    { key: "description", header: "Description" },
    { key: "category", header: "Category" },
    { key: "price", header: "Price" },
  ];

  const onPagination = (page) => {
    setSearchParams(
      (prev) => {
        prev.set("page", page);
        return prev;
      },
      { replace: true }
    );
  };

  const onSearchHandler = (e) => {
    setSearchParams(
      (prev) => {
        prev.set("search", e.target.value);
        return prev;
      },
      { replace: true }
    );
  };

  const fetchData = async (_currentPage, _search) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?limit=${pageSize}&skip=${
          (_currentPage - 1) * pageSize
        }&q=${search}`
      );
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage, search);
  }, [currentPage, search]);

  return (
    <div className="container">
      <SearchInput type={"text"} onChange={onSearchHandler} />
      <Table
        columns={columns}
        data={productData.products}
        pagination={{
          page: currentPage,
          noOfData: productData.total,
          pageSize,
          onPagination,
        }}
      />
    </div>
  );
};

export default DemoPage;
