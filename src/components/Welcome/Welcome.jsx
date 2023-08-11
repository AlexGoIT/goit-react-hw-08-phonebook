import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/authSelectors';
import { Wrapper, InviteBox, ContentBox } from './Welcome.styled';

const Welcome = () => {
  const isRegistered = useSelector(selectIsAuthorized);

  return (
    <Wrapper>
      <InviteBox>Welcome to the</InviteBox>
      <ContentBox>
        <h2>Phonebook</h2>
        <h2>Phonebook</h2>
      </ContentBox>
      {!isRegistered && (
        <InviteBox>Please login or register to continue</InviteBox>
      )}
    </Wrapper>
  );
};

export default Welcome;
