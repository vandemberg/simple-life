import React from "react";
import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const TeamNew: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    api.post("/api/v1/teams/1/members", values).then(() => {
      navigate("/teams/1/members");
    });
  };

  return (
    <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: "Please select your role!" }]}
      >
        <Select id="role">
          <Select.Option key="junior I" value="junior I">
            Junior I
          </Select.Option>
          <Select.Option key="junior II" value="junior II">
            Junior II
          </Select.Option>
          <Select.Option key="junior III" value="junior III">
            Junior III
          </Select.Option>

          <Select.Option key="pleno I" value="pleno I">
            Pleno I
          </Select.Option>
          <Select.Option key="pleno II" value="pleno II">
            Pleno II
          </Select.Option>
          <Select.Option key="pleno III" value="pleno III">
            Pleno III
          </Select.Option>

          <Select.Option key="senior I" value="senior I">
            Senior I
          </Select.Option>
          <Select.Option key="senior II" value="senior II">
            Senior II
          </Select.Option>
          <Select.Option key="senior III" value="senior III">
            Senior III
          </Select.Option>
          <Select.Option key="senior IV" value="senior IV">
            Senior IV
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TeamNew;
