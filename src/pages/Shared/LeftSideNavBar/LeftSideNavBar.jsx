import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3 className="text-xl font-semibold">All Category</h3>
      {categories.map((category) => (
        <div key={category.id}>
          <NavLink
            href={`/category/${category.id}`}
            className="text-xl font-medium block px-7 py-3"
          >
            {category.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNavBar;
