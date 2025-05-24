import Wrapper from "@/wrappers/SearchForm";
import { FaSearch } from "react-icons/fa";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <h4 className="title">What are we making today?</h4>
      <Form className="input-wrapper">
        <input
          type="search"
          className="input"
          defaultValue={searchTerm}
          name="search"
          placeholder="rice"
        />
        <FaSearch disabled={isSubmitting} className="search-icon">
          {isSubmitting ? "searching..." : "search"}
        </FaSearch>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
