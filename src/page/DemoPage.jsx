import React, { useEffect, useState } from "react";
import Table from '../components/ui/Table'
import axios from 'axios'

const initialData = {
  page: 1,
  per_page: 6,
  total: 0,
  total_pages: 0,
  data: [],
};

const DemoPage = () => {
  const [userData, setUserData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    { key: "id", header: "ID" },
    { key: "email", header: "Title" },
    { key: "first_name", header: "Body" },
    { key: "last_name", header: "Body" },
  ];

  const onPagination = (page) => {
    setCurrentPage(page);
  };

  const fetchData = async (_currentPage) => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${_currentPage}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <div>
      <h1>Posts</h1>
      <Table
        columns={columns}
        data={userData.data}
        pagination={{
          page: currentPage,
          noOfData: userData.total,
          pageSize: 6,
          onPagination,
        }}
      />
    </div>
  );
};

export default DemoPage;
