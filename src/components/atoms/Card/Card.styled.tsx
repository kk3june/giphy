import styled from '@emotion/styled';

type StyledCardProps = {
  width?: string | undefined;
  height?: string | undefined;
  type?: string | undefined;
};

const WIDTH_TYPE = {
  TRENDING: '10rem', // 임시
  ARTISTS: '21.4375rem',
  RELATED_CLIPS: '15.5rem',
  RELATED_GIFS: '15.5rem',
  GIF: '31.25rem',
  LOGIN_PAGE: '100%',
};
const HEIGHT_TYPE = {
  TRENDING: '8.75rem',
  ARTISTS: '16.8125rem',
  RELATED_CLIPS: '8.71875rem',
  RELATED_GIFS: '10rem', // 임시
  GIF: '20rem', // 임시
  LOGIN_PAGE: '100%',
};

export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  width: ${({ type }) => WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]};
  height: ${({ type }) => HEIGHT_TYPE[type as keyof typeof HEIGHT_TYPE]};
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  border-radius: 0.3125rem;
  overflow: hidden;
  &:hover {
    .trending_hover > * {
      visibility: visible;
    }
    .artists_hover > * {
      visibility: visible;
    }
    .image {
      transform: translate(-44px, 50px);
      transition: transform 0.3s;
    }
  }
`;

export const StyledSkeleton = styled.div<{ isLoading: boolean; type: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
  z-index: ${({ isLoading }) => isLoading && -1};
`;

export const StyledImg = styled.div<StyledCardProps>`
  position: relative;
  display: inline-block;
  height: ${({ type }) => HEIGHT_TYPE[type as keyof typeof HEIGHT_TYPE]};
  width: ${({ type }) => WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]};
  object-fit: cover;
`;

export const TrendingHoverSvgs = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0.8rem;
  right: 1rem;
  width: 3.5rem;
  visibility: hidden;
`;

export const TrendingHoverBadge = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  bottom: 5px;
  left: 8px;
  visibility: hidden;
  text-decoration: none;
  span {
    padding-left: 5px;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const ArtistHoverWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.33;
  visibility: hidden;
`;
export const ArtistsHoverImg = styled.div`
  position: absolute;
  top: -50px;
  right: -50px;
  visibility: hidden;
`;

export const ArtistsBadge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 5px;
  left: 8px;
  span {
    display: block;
    padding-left: 10px;
    font-size: 1.125rem;
    line-height: 1.3rem;
    font-weight: bold;
  }
  span:nth-of-type(2) {
    color: rgb(0, 255, 153);
    font-size: 0.875rem;
  }
`;
