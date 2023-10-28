export const IntroPage = (props) => {
  const handleClick = () => {
    props.onButtonClick();
  }
  return (
    <div className="intro-page">
      <h1 className="first-page-header">Travel Planning Questionnaire</h1>
      <h2 className= "intro-text"> Want an unforgettable travel experience with a like-minded group of people? </h2>
      <button className="button-description" onClick={handleClick}>Count me in</button>
    </div>
  )
}

