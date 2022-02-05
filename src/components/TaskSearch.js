const TaskSearch = ({ setSearch }) => {
  return (
    <input
      className="search-container"
      type="text"
      placeholder="Search task"
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
};

export default TaskSearch;
