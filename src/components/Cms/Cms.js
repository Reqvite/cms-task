import { useNavigate } from "react-router-dom";

const Cms = ({ tabs }) => {
  const navigate = useNavigate();

  const handleTabChange = (tabId) => {
    navigate(`/${tabId}`);
  };
  return (
    <section>
      <h1>CMS</h1>
      <ul className="cmsTabs">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button onClick={() => handleTabChange(tab.id)}>{tab.title}</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cms;
