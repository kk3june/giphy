import styled from '@emotion/styled';

type StyledCardProps = {
  width?: number | undefined;
  height?: number | undefined;
  type?: string | undefined;
};

export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
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
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
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
