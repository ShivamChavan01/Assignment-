import React, { useState } from 'react';
import UserDetails from '../UserDetails/userDetails';
import index from '@/app/page';

import {
  Button,
  DatePicker,
  Form,
  Input,
  Card
} from 'antd';

interface IState {
  user: {
    AssingmentName: string;
    AssingmentLink: string;
    AssingmentHour: string;
    AssingmentDate: Date | null; // or another appropriate initial value
  };
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const FormComponent: React.FC = () => {
  const [state, setState] = useState<IState>({
    user: {
      AssingmentName: '',
      AssingmentLink: '',
      AssingmentHour: '',
      AssingmentDate: null,
    }
  });
  const [formData, setFormData] = useState<IState['user'] | null>(null); // Define formData state

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | any): void => {
    // Update user state
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  }

  const handleDateChange = (date: any, dateString: string| any): void => {
    // Update user state
    setState({
      user: {
        ...state.user,
        AssingmentDate: date,
      },
    });
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>): void => {
    // Prevent default form submission
    event.preventDefault();

    // Set formData state with entered data
    setFormData(state.user);
  }


  return (
    <div>
        <Card  style={{width:'100%'}}
          title=' Enter the Assingments '       >
      <Form {...formItemLayout} onSubmitCapture={handleSubmit} style={{ maxWidth: 600 }}>
        <Form.Item label="Assignment Name" name="AssingmentName" rules={[{ required: true, message: 'Please input!' }]}>
          <Input name="AssingmentName" value={state.user.AssingmentName} onChange={handleChange} />
        </Form.Item>

        <Form.Item label="Assignment Link" name="AssingmentLink" rules={[{ required: true, message: 'Please input!' }]}>
          <Input name="AssingmentLink" value={state.user.AssingmentLink} onChange={handleChange} />
        </Form.Item>

        <Form.Item label="Assignment Hour" name="AssignmentHour" rules={[{ required: true, message: 'Please input!' }]}>
          <Input name="AssingmentHour" value={state.user.AssingmentHour} onChange={handleChange} />
        </Form.Item>

        <Form.Item label="DatePicker" name="DatePicker" rules={[{ required: true, message: 'Please input!' }]}>
          <DatePicker value={state.user.AssingmentDate} onChange={handleDateChange} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Card>
      {/* Pass formData to UserDetails component */}
      {formData && <UserDetails formData={formData} />}
    </div>
  );
};

export default FormComponent;
