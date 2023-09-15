// CompanyList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies, deleteCompany   } from "../redux/actions/companyActions";
import { Link } from "react-router-dom"; // Import Link from React Router


const CompanyList = () => {
  const companies = useSelector((state) => state.company.companies);
  // the company keyword is root reducer object.
  const dispatch = useDispatch();

  // Neche wale code se pehle wo api ke throughfetch karega phir jake hum usko opar jo code lika 
  // ha us se usko access karke yahan par display kar skte hain. 1 bar wo fetch hoga to phir 
  // hum usko store se jis component ke andar acess karna chahye to direct access karskte hain.
  useEffect(() => {
    dispatch(fetchCompanies());     
  }, [dispatch]);

  const handleDelete = (companyId) => {
    dispatch(deleteCompany(companyId));
  };

  return (
    <div>
      <h2>Company List</h2>
      <ul>
        {companies.map((company) => (   
          // company variable that represents each individual element inside the companies array
          // jis trah foreach loop me hota ha.
          <li key={company.id}>
            <strong>{company.name}</strong>
            <p>Location: {company.location}</p>
            <p>Phone Number: {company.phoneNumber}</p>
            <div>
                <Link to={`/edit/${company.id}`}>Edit</Link> {/* Link to editing route */}
                <button onClick={() => handleDelete(company.id)}>Delete</button>
              </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
