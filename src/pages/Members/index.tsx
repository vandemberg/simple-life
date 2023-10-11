import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { ColumnsType } from "antd/es/table";
import { MemberI } from "../../interfaces/MemberI";

const columns: ColumnsType<MemberI> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Access JIRA",
    dataIndex: "jiraUrl",
    key: "jiraUrl",
    render: (url: string) => {
      return (
        <Link to={url}>
          <Button type="primary">JIRA</Button>
        </Link>
      );
    },
  },
];

const Team: React.FC = () => {
  const [members, setMembers] = React.useState([]);

  useEffect(() => {
    api.get("/api/v1/teams/1/members").then((response: any) => {
      setMembers(
        response.data.map((item: any) => {
          return {
            ...item,
            jiraUrl: `/teams/1/members/${item.id}/jira`,
          };
        })
      );
    });
  }, []);

  return (
    <div>
      <h1>Team members</h1>

      <Link to="/teams/1/members/new">
        <Button>Add a new member</Button>
      </Link>

      {members.length > 0 ? (
        <Table dataSource={members} columns={columns}></Table>
      ) : (
        <p>No members</p>
      )}
    </div>
  );
};

export default Team;
