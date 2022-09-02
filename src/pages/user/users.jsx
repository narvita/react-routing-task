import React from "react";
import { useState, useEffect } from "react";
import { Table } from "antd";
import { getUsers } from "../../services/userService";
import "antd/dist/antd.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Number",
      dataIndex: "number",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Due",
      dataIndex: "due",
    },
  ];

  return <Table dataSource={users} columns={columns} />;
}

export default Users;
