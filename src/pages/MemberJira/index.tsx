import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Form, Input } from "antd";

const MemberJira: React.FC = () => {
  const [member, setMember] = React.useState<any>(null); // [state, setState
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    api.get(`/teams/1/members/${id}`).then((response: any) => {
      setMember(response.data);
    });
  }, [id]);

  return (
    <div>
      <h1>Relatório do JIRA!</h1>
      <Form>
        <Form.Item>
          <Input placeholder="JIRA" value={member?.jira} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default MemberJira;
