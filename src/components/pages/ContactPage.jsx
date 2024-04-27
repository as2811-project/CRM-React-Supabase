import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";

export const ContactDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div className="text-white">UserId - {id}</div>;
};
