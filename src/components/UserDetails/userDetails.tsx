import React from 'react';
import { Card } from 'antd';

interface UserDetailsProps {
  formData: {
    AssingmentName: string;
    AssingmentLink: string;
    AssingmentHour: string;
    AssingmentDate: Date | null;
  };
}

const UserDetails: React.FC<UserDetailsProps> = ({ formData }) => {
  const { AssingmentName, AssingmentLink, AssingmentHour, AssingmentDate } = formData;

  return (
    <div>
      <Card title="User Details">
        <p><strong>Assignment Name:</strong> {AssingmentName}</p>
        <p><strong>Assignment Link:</strong> {AssingmentLink}</p>
        <p><strong>Assignment Hour:</strong> {AssingmentHour}</p>
        <p><strong>Assignment Date:</strong> {AssingmentDate ? AssingmentDate.toString(): 'No date'}</p>

      </Card>
    </div>
  );
};

export default UserDetails;
