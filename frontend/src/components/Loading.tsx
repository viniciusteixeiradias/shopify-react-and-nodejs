import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';

const Loading: React.FC = () => {
  return (
    <LoadingContent><CircularProgress /></LoadingContent>
  );
}

const LoadingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default Loading;