import StyledButton from "./components/StyledButton";

const App = () => {
  const handleClick = () => {
    alert("확인!");
  };

  return (
    <>
     <StyledButton onClick={handleClick}>확인</StyledButton>
    </>
  );
};

export default App;
