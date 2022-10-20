/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtsitDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtsitDetails) {
    return <Loader title="Loading artist details" />;
  }

  if (error) return <Error />;
  // console.log(artistData);
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        activeSong={activeSong}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default ArtistDetails;
