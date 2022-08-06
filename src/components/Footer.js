import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function Footer() {
  const percentage = 65
  const today = 'Hoje'
  return (
    <FooterPage>
      <p>Hábitos</p>

      <div>
        <CircularProgressbar
          value={percentage}
          text={`${today}`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: '#52b6ff',
            textColor: '#fff',
            pathColor: '#fff',
            trailColor: 'transparent'
          })}
        />
      </div>

      <p>Histórico</p>
    </FooterPage>
  )
}

const FooterPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 36px;
  width: 100%;
  height: 70px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;

  p {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #52b6ff;
  }

  div {
    width: 91px;
    height: 91px;
    position: absolute;
    left: 140px;
    bottom: 10px;
  }
`
{
  /* <Example label="Background">
<CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  background
  backgroundPadding={6}
  styles={buildStyles({
    backgroundColor: "#3e98c7",
    textColor: "#fff",
    pathColor: "#fff",
    trailColor: "transparent"
  })}
/>
</Example> */
}
