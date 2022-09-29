export interface StateTypes {
  name: string | null;
  trendingGifsIsLoading: boolean | null;
  trendingGifs: any;
  trendingGifsError: string | null;
  trendingClipsIsLoading: boolean | null;
  trendingClips: any;
  trendingClipsError: string | null;
  relatedGifsIsLoading: boolean | null;
  relatedGifs: any;
  relatedGifsError: string | null;
  relatedClipsIsLoading: boolean | null;
  relatedClips: any;
  relatedClipsError: string | null;
  fetchContentByIdIsLoading: boolean | null;
  fetchContentById: any;
  fetchContentByIdError: string | null;
  artistsGifsIsLoading: boolean | null;
  artistsGifs: any;
  artistsGifsError: string | null;
}
