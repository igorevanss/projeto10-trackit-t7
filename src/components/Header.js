import styled from 'styled-components'
import LogoHeader from '../assets/images/TrackIt.png'

export default function Header() {
  return (
    <HeaderTop>
      <img src={LogoHeader} />

      <ProfileImage src="http://" />
    </HeaderTop>
  )
}

const HeaderTop = styled.div`
  width: 375px;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 0px 18px;

  img {
    width: 97px;
  }
`
const ProfileImage = styled.img`
  width: 51px;
  height: 51px;
  background: url(image.png);
  border-radius: 99px;
`
