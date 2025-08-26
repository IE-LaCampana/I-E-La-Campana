import React from "react";
import "../styles/StaffTable.css";

const StaffTable = ({ data }) => {
  return (
    <div className="staff-table__container">
      <div className="staff-table__content">
        <table className="staff-table">
          <thead>
            <tr>
              <th className="staff-table__header">NOMBRE</th>
              <th className="staff-table__header">SEDE</th>
              <th className="staff-table__header">JORNA</th>
              <th className="staff-table__header">AREA</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="staff-table__row">
                <td className="staff-table__cell">{item.nombre}</td>
                <td className="staff-table__cell">{item.sede}</td>
                <td className="staff-table__cell">{item.jorna}</td>
                <td className="staff-table__cell">{item.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffTable;
