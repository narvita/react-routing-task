import React from "react";
import { useState, useEffect } from "react";
import { getAdmins } from "../../services/userService";
import { Table } from "antd";
import "antd/dist/antd.css";

function Admins() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    getAdmins().then((admins) => {
      setAdmins(admins);
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
    {
      title: "Role",
      dataIndex: "role",
    },
  ];
  return <Table dataSource={admins} columns={columns} />;
}

export default Admins;
