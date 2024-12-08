import React from 'react';

export const ViewStudent = ({ students }) => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Student List</h1>
      
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Course</th>
          </tr>
        </thead>
        <tbody>
          {students && students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b text-center">{student.id}</td>
                <td className="py-2 px-4 border-b text-center">{student.name}</td>
                <td className="py-2 px-4 border-b text-center">{student.email}</td>
                <td className="py-2 px-4 border-b text-center">{student.age}</td>
                <td className="py-2 px-4 border-b text-center">{student.phone}</td>
                <td className="py-2 px-4 border-b text-center">{student.course}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-4 px-4 text-center">
                No students available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudent;
