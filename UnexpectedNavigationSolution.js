import {useNavigate, useParams} from "react-router-dom";
import {useSearchParams} from "react-router-dom";

function MyComponent() {
  let navigate = useNavigate();
  let params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNavigate = (id) => {
    //Sanitize the ID to prevent unexpected behavior.
    const sanitizedId = encodeURIComponent(id);
    navigate(`/items/${sanitizedId}`);
  };

  //Example using optional dynamic segment
  const handleNavigateOptional = (id) => {
    const path = id ? `/optional/${id}` : `/optional`;
    navigate(path);
  }

  return (
    <div>
      <p>Current Item ID: {params.itemId}</p>

      <button onClick={() => handleNavigate(123)}>Navigate to Item 123</button>
      <button onClick={() => handleNavigate('item with spaces')}>Navigate to Item with Spaces</button>
      <button onClick={() => handleNavigateOptional(456)}>Navigate to Optional Item 456</button>
      <button onClick={() => handleNavigateOptional()}>Navigate to Optional Item (without ID)</button>
    </div>
  );
}

export default MyComponent;