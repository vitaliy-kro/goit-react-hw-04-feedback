import React from 'react';

export const Notification: React.FC<{ message: string }> = ({ message }) => {
  return <p>{message}</p>;
};
