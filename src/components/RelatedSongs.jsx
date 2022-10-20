/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-body-style */
import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-3xl text-white">Related Song:</h1>

      <div className="mt-6 w-full flex flex-col">
        {/* here data is not only going to be about song 
      but also about the artist  */}
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
